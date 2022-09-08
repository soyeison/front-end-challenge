import * as React from "react";
import { Box, Heading, HStack, Text } from "@chakra-ui/react";
import Form from "./components/Form";
import { Link } from "react-router-dom";

function App() {
  return (
    <Box>
      <Box bg="#0077b6" h="100px">
        <HStack h="100%" justifyContent="space-around">
          <Heading color="white">Transportes ADA</Heading>
          <Link to="/bookings">
            <Text as="b" color="white">
              Ver reservas
            </Text>
          </Link>
        </HStack>
      </Box>
      <Form />
    </Box>
  );
}

export default App;
