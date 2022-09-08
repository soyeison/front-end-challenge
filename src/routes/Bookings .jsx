import React, { useContext, useEffect } from "react";
import { Box, Heading, HStack, Text, VStack, Center } from "@chakra-ui/react";
import { BookingsContext } from "../context/BookingsContext";
import { Link, Outlet } from "react-router-dom";

export default function Bookings() {
  const { bookings, loadBookings } = useContext(BookingsContext);

  useEffect(() => {
    loadBookings();
  }, []);

  return (
    <Box>
      <Box bg="#0077b6" h="100px">
        <HStack h="100%" justifyContent="space-around">
          <Heading color="white">Transportes ADA</Heading>
          <Link to="/">
            <Text as="b" color="white">
              Reservar
            </Text>
          </Link>
        </HStack>
        {/* Reservas */}
        <Box display="flex" flexDirection="row">
          <Box w={500} marginLeft={5}>
            <VStack p={5}>
              {bookings.map((b) => (
                <Box
                  p={5}
                  shadow="md"
                  borderWidth="1px"
                  w={500}
                  key={b.fechaHora}
                >
                  <Center>
                    <Heading fontSize="xl">Reserva</Heading>
                  </Center>
                  <VStack>
                    <Text mt={4} as="b">
                      Origen: {b.origen} - Destino: {b.destino}
                    </Text>
                    <Link to={`/bookings/${b.fechaHora}`} key={b.fechaHora}>
                      <Text>Detalles</Text> {/* Este debe ser el Link */}
                    </Link>
                  </VStack>
                </Box>
              ))}
            </VStack>
          </Box>
          {/* Aqui se muestran los detalles */}
          <Box w={800} p={5}>
            <Outlet />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
