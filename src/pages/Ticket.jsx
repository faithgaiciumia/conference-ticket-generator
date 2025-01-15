/* eslint-disable react/prop-types */
import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { BiSmile } from "react-icons/bi";

export default function Ticket({ name, ticketNo }) {
  return (
    <Flex justify={"center"} p={4} align={"center"}>
      <Box bg={"white"} w={"70%"} h={"100%"} boxShadow={"lg"}>
        <Flex>
          <Box w={"25%"}>
            <Box
              backgroundImage={"url('https://picsum.photos/id/111/1000')"}
              backgroundColor={"pink.300"}
              backgroundSize={"cover"}
              backgroundPosition={"center"}
              h={"100%"}
            >
              {/* <Flex
                direction={"column"}
                justify={"end"}
                align={"end"}
                h={"100%"}
                backgroundColor={"rgba(255, 255, 255, 0.2)"}
              >
                <Text
                  fontWeight={600}
                  fontSize={"md"}
                  align={"end"}
                  color={"pink.300"}
                  mx={4}
                  fontFamily={"Poppins, serif"}
                >
                  #{ticketNo}
                </Text>
              </Flex> */}
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
              <Text
                fontSize={"sm"}
                fontFamily={"Poppins, serif"}
                fontWeight={600}
              >
                Tuesday
              </Text>
              <Text
                fontSize={"sm"}
                fontFamily={"Poppins, serif"}
                fontWeight={600}
              >
                June 29th
              </Text>
              <Text
                fontSize={"sm"}
                fontFamily={"Poppins, serif"}
                fontWeight={600}
              >
                2021
              </Text>
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
                <Heading fontFamily={"'Playwrite VN', serif"}>
                  Sunset GT
                </Heading>
                <Heading
                  fontSize={"md"}
                  fontFamily={"Poppins, serif"}
                  my={2}
                  align={"center"}
                >
                  3rd Edition
                </Heading>
              </Box>
              <Box my={2}>
                <Text
                  align={"center"}
                  fontFamily={"Poppins, serif"}
                  fontSize={"sm"}
                  color={"pink.600"}
                >
                  Ticket Holder: {name}
                </Text>
                <Text
                  align={"center"}
                  fontFamily={"Poppins, serif"}
                  fontSize={"sm"}
                  color={"pink.600"}
                >
                  Ticket No: #{ticketNo}
                </Text>
              </Box>
            </Flex>
            <Flex align={"center"} justify={"center"} gap={6} p={4}>
              <Text fontFamily={"Poppins, serif"} fontSize={"sm"}>
                Carnivore Grounds
              </Text>
              <Text>
                <BiSmile />
              </Text>
              <Text>Langata, Nairobi</Text>
            </Flex>
          </Box>
          <Box
            w={"30%"}
            borderLeftWidth={"2px"}
            borderLeftStyle={"dashed"}
            borderLeftColor={"gray.600"}
          >
            <Box m={4}>
              <Heading
                fontFamily={"'Playwrite VN', serif"}
                fontSize={"md"}
                align={"center"}
              >
                Sunset GT
              </Heading>
            </Box>
            <Box m={4}>
              <Text
                fontWeight={"600"}
                fontFamily={"Poppins, serif"}
                fontSize={"sm"}
                align={"center"}
              >
                {name}
              </Text>
              <Text
                fontWeight={"600"}
                fontFamily={"Poppins, serif"}
                fontSize={"sm"}
                align={"center"}
              >
                #{ticketNo}
              </Text>
            </Box>
            <Box m={4}>
              <Image src="/src/assets/qrcode.png" alt="QR-Code" />
            </Box>
            <Box m={4}>
              <Text
                fontSize={"sm"}
                fontFamily={"Poppins, serif"}
                color={"gray.500"}
                align={"center"}
              >
                * Terms and Conditions Apply
              </Text>
            </Box>
          </Box>
        </Flex>
      </Box>
    </Flex>
  );
}
