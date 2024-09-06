import React, {useContext} from 'react'
import {useNavigate} from "react-router-dom";
import {StoreContext} from "../../context/StoreContext.jsx";
import {Col, Container, Row} from "react-bootstrap";
import LoginForm from "../../component/LoginForm/LoginForm.jsx";
import { zodResolver } from '@hookform/resolvers/zod';
import {useForm} from "react-hook-form";
import {loginSchema, registerSchema} from "../../assets/assets.js";
import RegisterForm from "../../component/RegisterForm/RegisterForm.jsx";
import './LoginRegisterForm.css'


function LoginRegisterForm  () {
    const navigate = useNavigate();
    const {loginUser,registerUser} =useContext(StoreContext);
   const {
       register:loginRegister,
           handleSubmit:handleLogin,
           formState:{errors:loginError},
           setError:setLoginError,
          clearErrors:clearErrorsLogin,

   }=useForm({
       resolver:zodResolver(loginSchema),
       mode:'onBlur'
   });
   const {register:regRegister,
    handleSubmit:handleReg,
   formState:{errors:regError},
   clearErrors:clearRegError,}=useForm({
       resolver:zodResolver(registerSchema),
       mode:'onBlur'
   })
    const handleRegSubmit=(data)=>{
       clearRegError();
       const newUser={
           username: data.username,
           email: data.email,
           password:data.password,
       };
       registerUser(newUser);


    }

   const handleLoginSubmit = (data) => {
       clearErrorsLogin();
       const suc= loginUser(data.email,data.password);
       if(suc){
           setTimeout(()=>{
               navigate('/');
           },1500)
       }
       else {
setLoginError('general', {
        type: 'manual',
        message: 'Invalid email or password',
      });       }
   }
  return (
    <Container className={'mt-5 login-container '}>
        <Row>
            <Col md={6} >
                <LoginForm onSubmit={handleLogin(handleLoginSubmit)} registerProps={loginRegister} errors={loginError} generalError={loginError.general} />
            </Col>
            <Col md={6}>
                <RegisterForm onSubmit={handleReg(handleRegSubmit)} errors={regError} registerProps={regRegister}>

                </RegisterForm>
            </Col>
        </Row>
    </Container>
  )
}

export default LoginRegisterForm
