import { AiOutlineCheck, AiOutlineWarning } from "react-icons/ai";
import {
  Box,
  Divider,
  Flex,
  Grid,
  GridItem,
  Heading,
  HStack,
  Stack,
  Text,
  useDisclosure,
  Button,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useToast,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios"

let obj = {
  name: "",
  cvv: "",
  Expiry: "",
  cardN: "",
};
const Payment = () => {
  const finalRef = React.useRef(null);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = React.useRef(null);
  const toast = useToast();
  const [data, setData] = useState([]);

  const [paymentValid, setPaymentValid] = useState(obj);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPaymentValid({ ...paymentValid, [name]: value });
  };
  console.log(paymentValid);
  const navigate = useNavigate();

  let address = JSON.parse(localStorage.getItem("address"));
  const getCartProducts = async () => {
    try {
      let r = await fetch("https://json-servermock3-pearl.vercel.app/cart");
      let d = await r.json();
      setData(d);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCartProducts();
  }, []);

  let totalPrice = localStorage.getItem("price");

//     data.map((el) => {
//       return (totalPrice += el.mrpRange.min);
//     });

//   console.log(totalPrice);

  return (
    <Box w={{ base: "full", lg: "75%" }} m={"auto"} mt={"5%"} borderRadius={10}>
      <Heading borderRadius={10} bg="blue.500" p={2} color={"white"} mb={10}>
        Payment
      </Heading>
      <Grid
        templateRows={{ base: "1fr 2fr 1fr 1fr", lg: "repeat(3,1fr)" }}
        templateColumns={{ base: "100%", md: "100%", lg: "repeat(3, 1fr)" }}
        gap={2}
      >
        <GridItem
          colSpan={{ base: 1, lg: 1 }}
          rowSpan={{ base: 1, lg: 3 }}
          boxShadow="rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset"
          borderRadius={10}
        >
          <Stack>
            <Heading p={2} color={"blue.500"} fontWeight={"bold"}>
              Your Order
            </Heading>
            <Text p={2} color={"blue.500"} fontWeight={"bold"}>
              TotalPrice : {totalPrice}
            </Text>
            <Divider />
          </Stack>
        </GridItem>
        <GridItem
          colSpan={{ base: 1, lg: 2 }}
          rowSpan={1}
          boxShadow="rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset"
          borderRadius={10}
        >
          <Flex color={"gray.500"} justifyContent={"space-between"} p={5}>
            <Stack>
              <Box>
                <HStack
                  fontWeight={"bold"}
                  color={data.length > 0 ? "blue.500" : "red.500"}
                  textAlign="left"
                >
                  <Text> Shipping Address</Text>{" "}
                </HStack>
                <Box w={"70%"} textAlign="left">
                  {`${address?.full_name} , ${address.street} , ${address.city} , ${address.state} , ${address.postal_code} ,
                    \n ${address.contact}`}
                </Box>
              </Box>
            </Stack>
            <Link to={"/checkout"}>
              <Button colorScheme={"blue"} isDisabled>
                Change Address
              </Button>
            </Link>
          </Flex>
        </GridItem>
        <GridItem
          colSpan={{ base: 1, lg: 2 }}
          rowSpan={1}
          boxShadow="rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset"
          borderRadius={10}
        >
          <Box h={10} p={2}>
            <Text color={"blue.500"} fontWeight={"bold"} textAlign="left">
              Payment Method
            </Text>
          </Box>
          <Divider orientation="horizontal" />
          <Stack padding={"50px"} direction={{ sm: "column", md: "row" }}>
            <Button onClick={onOpen} bg={"blue.500"}>
              Debit card
            </Button>
            <Button bg={"blue.500"}>UPI</Button>
            <Button bg={"blue.500"}>Net Banking</Button>

            <Modal
              initialFocusRef={initialRef}
              finalFocusRef={finalRef}
              isOpen={isOpen}
              onClose={onClose}
            >
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>Payment Gateway</ModalHeader>
                <ModalCloseButton />
                <ModalBody pb={6}>
                  <FormControl>
                    <FormLabel>Card Holder Name</FormLabel>
                    <Input
                      ref={initialRef}
                      placeholder="Card Holder Name"
                      name="name"
                      onChange={handleChange}
                    />
                  </FormControl>

                  <FormControl mt={4}>
                    <FormLabel>Card Number</FormLabel>
                    <Input
                      type={"number"}
                      placeholder="Card Number"
                      name="cardN"
                      onChange={handleChange}
                    />
                  </FormControl>
                  <FormControl mt={4}>
                    <FormLabel>CVV</FormLabel>
                    <Input
                      type={"password"}
                      name="cvv"
                      onChange={handleChange}
                      placeholder="CVV"
                    />
                  </FormControl>
                  <FormControl mt={4}>
                    <FormLabel>Expiry Date</FormLabel>
                    <Input
                      type={"number"}
                      placeholder="MM/YEAR"
                      name="Expiry"
                      onChange={handleChange}
                    />
                  </FormControl>
                </ModalBody>

                <ModalFooter>
                  <Button
                    colorScheme="blue"
                    mr={3}
                    onClick={async () => {
                      if (
                        paymentValid.name !== "" &&
                        paymentValid.cvv !== "" &&
                        paymentValid.Expiry !== "" &&
                        paymentValid.cardN !== ""
                      ) {
                        toast({
                          title: "payment successfull",
                          status: "success",
                          isClosable: true,
                        });
                        navigate("/");
                      } else {
                        toast({
                          title: "Please filled All  Details",
                          status: "error",
                          isClosable: true,
                        });
                      }

                     await axios.delete(`https://json-servermock3-pearl.vercel.app/cart`);
                    }}
                  >
                    {`pay $${totalPrice}`}
                  </Button>
                  <Button onClick={onClose}>Cancel</Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
            
          </Stack>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default Payment;
