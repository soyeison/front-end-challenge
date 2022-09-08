import React, { useContext } from "react";
import { BookingsContext } from "../context/BookingsContext";
import { useParams } from "react-router-dom";
import { Box, Text, Heading, HStack } from "@chakra-ui/react";

export default function Booking() {
  const { searchBooking } = useContext(BookingsContext);
  let params = useParams();
  let { origen, destino, fechaHora, nPasajeros } = searchBooking(
    params.bookingId
  );

  return (
    <Box>
      <Heading>Detalles de la reserva</Heading>
      <Box pt={5}>
        <HStack>
          <Heading size="md">Origen: </Heading>
          <Text>{origen}</Text>
        </HStack>
        <HStack>
          <Heading size="md">Destino: </Heading>
          <Text>{destino}</Text>
        </HStack>
        <HStack>
          <Heading size="md">Fecha: </Heading>
          <Text>{fechaHora.slice(0, 10)}</Text>
        </HStack>
        <HStack>
          <Heading size="md">Hora: </Heading>
          <Text>{fechaHora.slice(11)}</Text>
        </HStack>
        <HStack>
          <Heading size="md">Numero de pasajeros: </Heading>
          <Text>{nPasajeros}</Text>
        </HStack>
      </Box>
    </Box>
  );
}
