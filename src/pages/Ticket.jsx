/* eslint-disable react/prop-types */
import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { BiSmile } from "react-icons/bi";

export default function Ticket({ name, date, ticketNo }) {
  return (
    <Flex justify={"center"} p={4} align={"center"}>
      <Box bg={"white"} w={"70%"} h={"100%"} boxShadow={"lg"}>
        <Flex>
          <Box w={"25%"}>
            <Box
              backgroundImage={"url('https://picsum.photos/600/300')"}
              backgroundColor={"pink.300"}
              backgroundSize={"contain"}
              h={"60vh"}
            >
              <Flex h={"100%"} justify={"end"} align={"end"}>
                <Text mx={4} fontWeight={600}>
                  #{ticketNo}
                </Text>
              </Flex>
            </Box>
          </Box>
          <Box m={4} w={"50%"}>
            <Flex
              justifyContent={"space-between"}
              w={"100%"}
              borderTopColor={"gray.600"}
              borderTopWidth={"1px"}
              borderBottomColor={"gray.600"}
              borderBottomWidth={"1px"}
              p={2}
            >
              <Text>Tuesday</Text>
              <Text>June 29th</Text>
              <Text>2021</Text>
            </Flex>
            <Flex
              w={"100%"}
              justify={"center"}
              align={"center"}
              direction={"column"}
              h={"40vh"}
              borderBottomColor={"gray.600"}
              borderBottomWidth={"1px"}
            >
              <Box>
                <Heading>Sour Prom</Heading>
                <Heading>Olivia Rodrigo</Heading>
              </Box>
              <Box>
                <Text>8:00 PM to 11:00 PM</Text>
                <Text>Doors @ 7:00 PM</Text>
              </Box>
            </Flex>
            <Flex align={"center"} justify={"center"} gap={6} p={4}>
              <Text>East High School</Text>
              <Text>
                <BiSmile />
              </Text>
              <Text>Salt Lake, Utah</Text>
            </Flex>
          </Box>
          <Box
            w={"25%"}
            borderLeftWidth={"1px"}
            borderLeftStyle={"dashed"}
            borderLeftColor={"gray.400"}
            m={4}
          >
            <Box mx={4}>
              <Heading fontSize={"sm"}>Sour Prom</Heading>
            </Box>
            <Box mx={4}>
              <Text>8:00PM to 11:00PM</Text>
              <Text>Doors @ 7:00PM</Text>
            </Box>
            <Box mx={4}>
              <Image src="" alt="QR-Code" />
            </Box>
            <Box mx={4}>
              <Text># {ticketNo}</Text>
            </Box>
          </Box>
        </Flex>
      </Box>
    </Flex>
  );
}
