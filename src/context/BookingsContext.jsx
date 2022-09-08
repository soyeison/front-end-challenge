import { createContext, useEffect, useState } from "react";

export const BookingsContext = createContext({});

export const BookingsProvider = ({ children }) => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    loadBookings();
  }, []);

  const addBooking = (booking) => {
    localStorage.setItem(`${booking.fechaHora}`, JSON.stringify(booking));
  };

  const loadBookings = () => {
    let data = [];
    for (let i = 0; i < localStorage.length; i++) {
      if (
        localStorage.getItem(localStorage.key(i)) === "light" ||
        JSON.parse(localStorage.getItem(localStorage.key(i))).hasOwnProperty(
          "null"
        ) ||
        localStorage.getItem(localStorage.key(i)) === "{}"
      ) {
        continue;
      }

      data.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
    }
    setBookings(data);
  };

  const searchBooking = (id) => {
    const booking = bookings.find((element) => element.fechaHora === id);
    return booking;
  };

  return (
    <BookingsContext.Provider
      value={{
        bookings,
        addBooking,
        loadBookings,
        searchBooking,
      }}
    >
      {children}
    </BookingsContext.Provider>
  );
};
