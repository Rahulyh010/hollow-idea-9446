import React, { useState } from 'react'
import { AiOutlineLogin } from 'react-icons/ai';
import styled from 'styled-components';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch, useSelector } from 'react-redux';
import { LoginProcess } from '../../Redux/AdminAuthReducer/action';
import { store } from '../../Redux/store';
import { useNavigate } from 'react-router';





const Login = () => {
    // Toast or alert code
    const successToast = () => {
        toast("Login Successfull");

    }
    // Login Logic
    const [email,setEmail] = useState("eve.holt@reqres.in");
    const [password,setPassword] = useState("")
    // console.log(email,password)
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const handleLogin = () => {
        let userData = {email,password};
        dispatch(LoginProcess(userData))
        successToast()
    }

    const loginData = useSelector((store)=>{
        // {console.log(store.adminauth.isAuth,store.adminauth.token)}
        if(store.adminauth.isAuth){
            navigate("/Admin")
            // successToast()
        }
    })

    return (
        <MainDiv>
            <ToastContainer
                position="top-center"
                autoClose={7000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover={false}
                theme="dark"
            />
            <br />


            <InputDiv>
                <h1>Welcome Back!</h1>
                <p>Please Login To Your Account</p>

                <input type="email" placeholder='Email Address' value={email} onChange={(e)=>setEmail(e.target.value)}/>
                <br />
                <br />
                <input type="password" placeholder='Enter Password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
                <ForgetPass>Forgot Password ?</ForgetPass>
                <br />
                <br />
                <div>
                    <button onClick={handleLogin}>Login <AiOutlineLogin /></button>

                </div>

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


const InputDiv = styled.div`
    width: 23%;
    margin: auto;
    height: 30rem;
    background-color: #ffffff;
    padding: 3rem;
    border-radius:2rem;
    & button {
        width: 100%;
        padding: 1rem;
        display: flex;
        border-radius: 1rem;
        border: 0ch;
        color: white;
        background-color: #37a279;
        font-size:20px;
        justify-content:center;
        text-align: center;
        align-items: center;
        
        
    }& button:hover {
        width: 100%;
        padding: 1rem;
        border-radius: 1rem;
        border: 0ch;
        color: white;
        background-color: #11724d;
        cursor: pointer;
    }
`

const MainDiv = styled.div`
    width: 99.8%;
    margin: auto;
    margin-top:0rem;
    height: 40rem;
    /* background-color: #8ff03b; */
    background-image: url("https://img.freepik.com/free-photo/shirt-mockup-concept-with-plain-clothing_23-2149448749.jpg?w=996&t=st=1677236919~exp=1677237519~hmac=0a547041f316047105d9b140f319c4d355f943062ea6a9cc452e8474b371cfa3");
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