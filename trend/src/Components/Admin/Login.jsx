import React, { useState } from 'react'
import { AiOutlineLogin } from 'react-icons/ai';
import { BsArrowReturnLeft } from 'react-icons/bs';
import styled from 'styled-components';
import { useToast } from '@chakra-ui/react'
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch, useSelector } from 'react-redux';
import { LoginProcess } from '../../Redux/AdminAuthReducer/action';
// import { store } from '../../Redux/store';
import { useNavigate } from 'react-router';








const Login = () => {
    // Toast or alert code
    const toast = useToast()
    const successToast = () => {
        toast({
            title: "Login Successully",

            Duration: "5000",
            isClosable: "true",
            status: "success",
            position: "top"
        })

    }
    // Login Logic
    const [email, setEmail] = useState("eve.holt@reqres.in");
    const [password, setPassword] = useState("")
    // console.log(email,password)
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const handleLogin = () => {
        let userData = { email, password };
        dispatch(LoginProcess(userData))
        successToast()
    }

    const loginStatus = useSelector((store) => {
        // {console.log(store.adminauth.isAuth,store.adminauth.token)}
        // if(store.adminauth.isAuth){
        //     navigate("/Admin")
        //     // successToast()
        // }
        return store.adminauth.isAuth
    })
    if(loginStatus){
        navigate("/Admin")
        // successToast()
    }
    // {loginStatus? navigate("/Admin") : navigate("/")}

    return (

        <MainDiv>


            <br />


            <InputDiv>
                <WelcomeBack>Welcome Back!</WelcomeBack>
                <p>Please Login To Your Account</p>
                <br />
                <input type="email" placeholder='Email Address' value={email} onChange={(e) => setEmail(e.target.value)} />
                <br />
                <br />
                <input type="password" placeholder='Enter Password' value={password} onChange={(e) => setPassword(e.target.value)} />
                <ForgetPass>Forgot Password ?</ForgetPass>
                <br />
                <br />
                <div>
                    <button style={{ marginTop: "-1rem" }} onClick={handleLogin}>Login <AiOutlineLogin /></button>

                </div>
                <button style={{ marginTop: "1rem" }} onClick={() => navigate(-1)}> <BsArrowReturnLeft /> Back To Main Website </button>

            </InputDiv>

        </MainDiv>
    )
}

export default Login

const ForgetPass = styled.p`
    text-align: end;
    color: #687584;
    cursor: pointer;
`

const WelcomeBack = styled.h1`
    font-size:30px;
`


const InputDiv = styled.div`
    width: 30%;
    margin: auto;
    height: 33rem;
    background-color: #ffffff;
    padding: 3rem;
    border-radius:2rem;
    box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;
    & button {
        width: 100%;
        padding: 1rem;
        margin-top:rem;
        display: flex;
        border-radius: 2rem;
        border: 0ch;
        color: white;
        background-color: #37a279;
        font-size:20px;
        justify-content:center;
        gap: 0.5rem;
        text-align: center;
        align-items: center;
        
        
    }& button:hover {
        width: 100%;
        padding: 1rem;
        border-radius: 2rem;
        border: 0ch;
        color: white;
        background-color: #11724d;
        cursor: pointer;
    }
`

const MainDiv = styled.div`
    width: 99.8%;
    margin: auto;
    margin-top:-1rem;
    padding-top:3rem;
    height: 45rem;
    /* background-color: #8ff03b; */
    background-image: url("https://img.freepik.com/premium-vector/clothes-items-white-background-seamless-pattern-thin-line_48369-13298.jpg?w=740");
    & input {
        
        border: 1px solid #6ee78d;
        border-radius: 0.5rem;
        width: 90%;
        padding: 1rem;
        margin: auto;
        font-size:20px;
        color: grey;
    }input::placeholder{
        font-family: 'Comfortaa', cursive;
        font-size:16px;
        justify-content:center;
        align-items: center;
        font-weight:bold;
    }& textarea:focus, input:focus{
    outline: 2px solid #37a279 ;
}
`