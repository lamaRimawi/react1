import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext.jsx';
import { Col, Container, Row } from 'react-bootstrap';
import LoginForm from '../../component/LoginForm/LoginForm.jsx';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { loginSchema, registerSchema } from '../../assets/assets.js';
import RegisterForm from '../../component/RegisterForm/RegisterForm.jsx';
import './LoginRegisterForm.css';

function LoginRegisterForm() {
  const navigate = useNavigate();
  const { loginUser, registerUser } = useContext(StoreContext);
  const [regSuccess, setRegSuccess] = useState('');
  const [loginSuccess, setLoginSuccess] = useState('');

  const [regErrorMsg, setRegErrorMsg] = useState('');

  const {
    register: loginRegister,
    handleSubmit: handleLogin,
    formState: { errors: loginError },
    setError: setLoginError,
    clearErrors: clearErrorsLogin,
      reset:resetLoginLogin,
  } = useForm({
    resolver: zodResolver(loginSchema),
    mode: 'onBlur',
  });

  const {
    register: regRegister,
    handleSubmit: handleReg,
    formState: { errors: regError },
    clearErrors: clearRegError,
    reset: resetRegForm,
  } = useForm({
    resolver: zodResolver(registerSchema),
    mode: 'onBlur',
  });

  const handleRegSubmit = async (data) => {
    clearRegError();
    setRegErrorMsg('');
    setRegSuccess('');

    const newUser = {
      username: data.username,
      email: data.email,
      password: data.password,
    };

    try {
      const isRegistered = await registerUser(newUser);

      if (isRegistered) {
        setRegSuccess('Registration successful!');
        resetRegForm();
      } else {
        setRegErrorMsg('Registration failed. Please try again.');
      }
    } catch (error) {
      setRegErrorMsg('An error occurred. Please try again.');
    }
  };

  const handleLoginSubmit = (data) => {
    clearErrorsLogin();
    setLoginSuccess('');


    const isSuccess = loginUser(data.email, data.password);
    if (isSuccess) {
      setLoginSuccess('Login successful!');
      resetLoginLogin();

      setTimeout(() => {
        navigate('/');
      }, 1500);
    } else {
      setLoginError('general', {
        type: 'manual',
        message: 'Invalid email or password',
      });
    }
  };

  return (
    <Container className={'mt-5 login-container'}>
      <Row>
        <Col md={6}>
          <LoginForm
              success={loginSuccess}
            onSubmit={handleLogin(handleLoginSubmit)}
            registerProps={loginRegister}
            errors={loginError}
            generalError={loginError.general}
          />
        </Col>
        <Col md={6}>
          <RegisterForm
            onSubmit={handleReg(handleRegSubmit)}
            errors={regError}
            registerProps={regRegister}
            successMessage={regSuccess}
            errorMessage={regErrorMsg}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default LoginRegisterForm;
