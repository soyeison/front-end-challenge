import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import Bookings from "./routes/Bookings ";
import { BookingsProvider } from "./context/BookingsContext";
import Booking from "./routes/Booking";
import { Box, Heading, Center } from "@chakra-ui/react";

const AppState = ({ children }) => {
  return <BookingsProvider>{children}</BookingsProvider>;
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <ChakraProvider>
      <AppState>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/bookings" element={<Bookings />}>
            <Route
              index
              element={
                <Box>
                  <Center>
                    <Heading>Seleccione un detalle</Heading>
                  </Center>
                </Box>
              }
            />
            <Route path=":bookingId" element={<Booking />} />
          </Route>
          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>Creo que te equivocaste de ruta</p>
              </main>
            }
          />
        </Routes>
      </AppState>
    </ChakraProvider>
  </BrowserRouter>
);
