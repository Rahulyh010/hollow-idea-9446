import { Box, Heading, Input, Stack, Text, VStack } from "@chakra-ui/react";
import React, { useState } from "react";

import "./Search.module.css";

import axios from "axios";
import { Link } from "react-router-dom";

const Search = () => {
  const [query, setQuery] = useState("");
  const [show, setShow] = useState(false);
  const [data, setData] = useState([]);

  const handleChange = async (e) => {
    if (e.target.value === "") {
      return setShow(false);
    }
    setQuery(e.target.value);
    setShow(true);
    let res = await axios.get(
      `https://product-api-q2uk.onrender.com/${e.target.value}`
    );
    //   console.log("serch data",res.data.name);
    setData(res.data);
  };

  const element = document.querySelector("#box");
  // console.log(element);

  
  return (
    <div>
      <div>
        <Stack
          margin="auto"
          marginLeft={"10 px"}
          w={[100, 300, 400]}
          
        >

          <Input
            boxShadow="rgba(149, 157, 165, 0.2) 0px 3px 20px"
            border="1px solid black"
            fontSize="17px"
            h={[8, 10]}
            backgroundColor={"white"}
            type="search"
            placeholder="Search for products & brands"
            onChange={handleChange}
            focusBorderColor="#EEF4FF"
          />
        </Stack>
      </div>
      {show ? (
        <div
          style={{
            position: "relative",
            width: "100%",
            zIndex: "1000",
            backgroundColor: "white",
            
          }}
        >
          <Box
            position={"absolute"}
            height={"425px"}
            border="1px solid #EEF4FF"
            width={"90%"}
            margin="auto"
            bg={"white"}
            marginRight="290px"
            overflowY="scroll"
            borderTop={"none"}
            id="#box"
          >
            <VStack>
              <Box
                paddingLeft={"10px"}
                width={"100%"}
                backgroundColor="#EEF4FF"
                textAlign={"left"}
                fontSize="12px"
                height={"40px"}
                display="flex"
                alignItems="center"
                color="#4F585E"
              >
                Showing results for {query}
              </Box>
              {data.map((el) => (
                <div
                  key={el.id}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    width: "100%",
                    textAlign: "left",
                    paddingLeft: "10px",
                  }}
                >
                  <Link to={`/productpage/${el.id}`}>
                    <Heading
                      noOfLines={"1"}
                      color="#30363C"
                      fontSize="14px"
                      fontWeight={"500"}
                      height="20px"
                    >
                      {el.name}
                    </Heading>
                  </Link>
                </div>
              ))}
            </VStack>
          </Box>
        </div>
      ) : null}
     
    </div>
  );
};

export default Search;
