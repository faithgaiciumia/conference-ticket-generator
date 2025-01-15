import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import Ticket from "./Ticket";
import { useState } from "react";

export default function Home() {
  const { register, handleSubmit } = useForm();
  const [dataReceived, setDataReceived] = useState(false);
  const [formData, setFormData] = useState(null);

  const onSubmit = (data) => {
    console.log(data);
    setFormData(data);
    setDataReceived(true);
  };
  return (
    <Box bg={"pink.100"} h={"100vh"}>
      <Flex justify={"center"} align={"center"} p={8}>
        <Heading fontSize={"md"}>Blankets & Wine</Heading>
      </Flex>
      {dataReceived ? (
        <Ticket
          name={formData.name}
          date={formData.date}
          ticketNo={formData.ticketNo}
        />
      ) : (
        <Flex justify={"center"} align={"center"} my={4}>
          <Box w={"50%"} p={4} bg={"white"} boxShadow={"lg"} borderRadius={"lg"}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <FormControl my={2}>
                <FormLabel fontSize={"sm"}>Name: </FormLabel>
                <Input
                  id="name"
                  type="text"
                  {...register("name", { required: true })}
                />
              </FormControl>
              <FormControl my={2}>
                <FormLabel fontSize={"sm"}>Date: </FormLabel>
                <Input
                  id="date"
                  type="date"
                  {...register("date", { required: true })}
                />
              </FormControl>
              <FormControl my={2}>
                <FormLabel fontSize={"sm"}>Ticket Number: </FormLabel>
                <Input
                  id="ticketNo"
                  type="text"
                  {...register("ticketNo", { required: true })}
                />
              </FormControl>
              <Flex justify={"center"} align={"center"}>
                <Button colorScheme="pink" w={"50%"} type="submit">
                  Generate
                </Button>
              </Flex>
            </form>
          </Box>
        </Flex>
      )}
    </Box>
  );
}
