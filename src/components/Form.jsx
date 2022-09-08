import React, { useContext } from "react";
import {
  Heading,
  Box,
  Input,
  VStack,
  Button,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "@chakra-ui/react";
import useForm from "../hooks/useForm";
import { BookingsContext } from "../context/BookingsContext";

export default function Form() {
  const { onChangeText, origen, destino, fechaHora, nPasajeros, form } =
    useForm({
      //Todos son strings
      origen: "",
      destino: "",
      fechaHora: "",
      nPasajeros: "",
    });
  const { addBooking } = useContext(BookingsContext);
  /* console.log(form); */ //Aquí esta la info de todo el formulario

  const onSubmit = () => {
    if (
      origen.length === 0 ||
      destino.length === 0 ||
      fechaHora.length === 0 ||
      nPasajeros.length === 0
    ) {
      alert("Debe rellenar todos los campos");
      return;
    }
    addBooking(form);
    alert("Reserva exitosa");
  };
  return (
    <Box
      display="flex"
      bg="#90e0ef"
      h="500px"
      justifyContent="center"
      alignItems="center"
    >
      <Box h="430px" w="450px" bg="#d1495b" opacity="0.9" borderRadius="8px">
        <VStack m="10px" spacing={5}>
          <Heading color="white" size="lg" p="10px">
            Viajamos con tus sueños
          </Heading>
          <Input
            placeholder="Origen"
            backgroundColor="white"
            size="lg"
            value={origen}
            onChange={(event) => onChangeText(event.target.value, "origen")}
          />
          <Input
            placeholder="Destino"
            backgroundColor="white"
            size="lg"
            value={destino}
            onChange={(event) => onChangeText(event.target.value, "destino")}
          />
          <Input
            placeholder="Seleccione fecha y hora"
            type="datetime-local"
            backgroundColor="white"
            size="lg"
            value={fechaHora}
            onChange={(event) => onChangeText(event.target.value, "fechaHora")}
          />
          <NumberInput
            defaultValue={1}
            min={1}
            max={25}
            backgroundColor="white"
            w="100%"
            borderRadius="base"
            size="lg"
            value={nPasajeros}
            onChange={(value) => onChangeText(value, "nPasajeros")}
          >
            <NumberInputField />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>

          {/* Boton para enviar el form */}
          <Button bg="#fdc500" color="black" size="lg" onClick={onSubmit}>
            Reservar
          </Button>
        </VStack>
      </Box>
    </Box>
  );
}
