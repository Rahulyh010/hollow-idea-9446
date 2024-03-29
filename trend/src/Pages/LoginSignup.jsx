import { ChakraProvider } from "@chakra-ui/provider";
import { Box, Image, Heading, Text, Input, Button } from "@chakra-ui/react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from "@chakra-ui/react";
import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import {
  postNewUserLoginDetails,
  getUserLoginDetails,
  updateUserAuthStatus,
} from "../Redux/AuthReducer/action";

export const initialState = {
  firstName: "",
  lastName: "",
  mobile: "",
  email: "",
  password: "",
  confirmPassword: "",
  otp: "",
  isLoading: false,
  isError: false,
  isAuth: false,
  // users:[]
};
const existingUser = {
  existingEmail: "",
  existingPassword: "",
};
let userExist;
export function LoginSignup() {
  //-------------------------------HOOKS-------------------------------------------------------------
  const [userData, setUserData] = useState(initialState);
  const [existingUserData, setExistingUserData] = useState(existingUser);
  const [checkMsg, setCheckMsg] = useState("Incorrect OTP");
  const [color, setColor] = useState("red");
  const [otp] = useState("1234");
  const [visible, setVisible] = useState(false);
  const btnRef = useRef();
  const otpRef = useRef();
  const navigate = useNavigate();
  const [showMatchStatus, setShowMatchStatus] = useState(false);
  const [matchStatus, setMatchStatus] = useState("passwords dont match");


  const dispatch = useDispatch();
  const reduxStore = useSelector((store) => store.users);

  const [showForm1, setShowForm1] = useState(true);
  const [showForm2, setShowForm2] = useState(false);
  const [showForm3, setShowForm3] = useState(false);

  //------------------------FUNCTIONS----------------------------------------------------------
  const getInput = (e) => {
    let name = e.target.name;

    if (name === "existingEmail" || name === "existingPassword") {
      setExistingUserData(
        (prev) => (prev = { ...prev, [name]: e.target.value })
      );
      console.log(name);
    } else {
      setUserData((prev) => (prev = { ...prev, [name]: e.target.value }));
      if (e.target.name === "mobile") {
        btnRef.current.disabled = false;
      }
      if (e.target.name === "confirmPassword") {
        setShowMatchStatus(true);
        if (e.target.value === userData.password) {
          otpRef.current.disabled = false;
          setMatchStatus("passwords match");
          setColor("green");
        } else {
          otpRef.current.disabled = true;
          setMatchStatus("passwords dont match");
          setColor("red");
        }
        
      }
      if (e.target.name === "otp") {
        setShowMatchStatus(false);
        setVisible(true);
        if (e.target.value === otp) {
          setCheckMsg("OTP Matched");
          setColor("green");
          setUserData((prev) => (prev = { ...prev, isAuth: true }));
        } else {
          setCheckMsg("Incorrect OTP");
          setColor("red");
        }
        if (e.target.value.length === 0) {
          
          setVisible(false);
        }
      }
    }
  };

 

  const toggleForms = async (e) => {
   
    if (e.target.innerText === "Proceed") {
      await dispatch(getUserLoginDetails(userData.mobile));
      userExist = JSON.parse(localStorage.getItem("currentUser"));

      console.log(userExist, "current which tried to login");
      if (userExist) {
        updateUserAuthStatus(userExist.id, { isAuth: true });
        userExist.isAuth = true;
        localStorage.setItem("currentUser", JSON.stringify(userExist));
        setShowForm3(true);
        setShowForm1(false);
        setShowForm2(false);
        console.log("yo");
      } else {
        setShowForm3(false);
        setVisible(false);
        setShowForm1((prev) => !prev);
        setShowForm2((prev) => !prev);
      }
    } else if (e.target.innerText === "Cancel") {
      setUserData(initialState);
    }
   
  };
  const addUser = async () => {
    console.log(userData, "from addUser function in login signup");
    let res = await dispatch(postNewUserLoginDetails(userData));

    navigate("/");
  };
  const checkCredentials = () => {
    console.log(userExist,"userExit from localt storage");
    console.log(existingUserData,"existing user data");
    userExist = JSON.parse(localStorage.getItem("currentUser"));
    if (
      existingUserData.existingEmail === userExist.email &&
      existingUserData.existingPassword === userExist.password
    ) {
      navigate("/");
    } else {
      alert("email or password is wrong");
    }
  };
  //------------------------------------RETURN---------------------------------------------------------
  return (
    // <>

    <Box
      // id={styles.mainContainer}
      display="flex"
      borderRadius="10px"
      boxShadow="rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;"
      width="80%"
      height="auto"
      margin="auto"
      marginTop="70px"
      padding={"4%"}
      //   bg="pink.100"
    >
      <Box w="50%">
        <Image
          w="100%"
          h={"90%"}
          // id={styles.img}
          src="https://tse3.mm.bing.net/th?id=OIP.6OBmveAznkWN5AgS5NZw4AHaDt&pid=Api&P=0"
          alt="loginImage"
          borderRadius="10px 0px 0px 10px"
        />
      </Box>

      <Box w="50%">
        {/* ---------------------------------------------1st form conditional rendering-------------------------------------------------------------- */}
        {showForm1 && (
          <>
            <Box
              align="left"
              margin="auto"
              w="50%"
              mt="20px"
            >
              <Heading>Sign In</Heading>
              <Text>Sign in to access your Orders, Offers and Wishlist.</Text>
            </Box>
            <FormControl width="50%" margin="auto">
              <FormLabel mt="100px">Mobile Number</FormLabel>
              <Input
                border="2px solid gray"
                type="number"
                name="mobile"
                value={userData.mobile}
                onChange={getInput}
              />

              <Button
                mt="20px"
                isDisabled={userData.mobile.length === 0}
                ref={btnRef}
                onClick={toggleForms}
                bg="orange"
              >
                Proceed
              </Button>
            </FormControl>
          </>
        )}
        {/*-----------------------------------2nd form conditional rendering------------------------------------------------------  */}
        {showForm2 && (
          <>
            <Heading>Sign Up</Heading>
            <FormControl width="50%" margin="auto" mt="30px">
              <FormLabel>Start by entering your First Name</FormLabel>
              <Input
                name="firstName"
                placeholder="First Name"
                border="2px solid gray"
                type="text"
                onChange={getInput}
              />
              <Input
                name="lastName"
                placeholder="Last Name"
                border="2px solid gray"
                type="text"
                value={userData.lastName}
                onChange={getInput}
                isDisabled={userData.firstName.length === 0}
              />
              <Input
                name="email"
                placeholder="Enter Email"
                border="2px solid gray"
                type="text"
                value={userData.email}
                onChange={getInput}
                isDisabled={userData.lastName.length === 0}
              />
              <Input
                name="password"
                placeholder="Password"
                border="2px solid gray"
                type="password"
                value={userData.password}
                onChange={getInput}
                isDisabled={userData.email.length === 0}
              />
              <Input
                name="confirmPassword"
                placeholder="Confirm Password"
                border="2px solid gray"
                type="password"
                value={userData.confirmPassword}
                onChange={getInput}
                isDisabled={userData.password.length === 0}
              />
              {showMatchStatus && (
                <Text align="left" fontSize="15px" color={color}>
                  {matchStatus}
                </Text>
              )}
              <FormLabel fontWeight="bold" mt="30px">
                Provide OTP sent on your mobile number +91 {userData.mobile}
              </FormLabel>
              <Input
                name="otp"
                placeholder="Enter OTP"
                border="2px solid gray"
                type="password"
                value={userData.otp}
                onChange={getInput}
                ref={otpRef}
                isDisabled
              />
              {visible && (
                <Text fontSize="15px" color={color} align="left">
                  {checkMsg}
                </Text>
              )}
              <Button onClick={(e) => toggleForms(e)} mt="20px" bg="red.500">
                Cancel
              </Button>
              <Button
                mt="20px"
                isDisabled={userData.otp !== otp}
                bg="orange"
                ml={"5px"}
                onClick={addUser}
              >
                Verify
              </Button>
            </FormControl>
          </>
        )}
        {/* ---------------------------------------3rd form---------------------------------------------------------------------------- */}
        {showForm3 && (
          <FormControl width="50%" margin="auto">
            <FormLabel mt="100px">Enter your Details to login</FormLabel>
            <Input
              mt="30px"
              border="2px solid gray"
              type="email"
              placeholder="Enter Email"
              name="existingEmail"
              value={existingUser.email}
              onChange={getInput}
            />

            <Input
              mt="30px"
              border="2px solid gray"
              type="password"
              placeholder="Enter Password"
              name="existingPassword"
              value={existingUser.password}
              onChange={getInput}
            />

            <Button
              mt="30px"
              onClick={checkCredentials}
              bg="orange"
            >
              login
            </Button>
          </FormControl>
        )}
      </Box>
    </Box>
  

  );
}
