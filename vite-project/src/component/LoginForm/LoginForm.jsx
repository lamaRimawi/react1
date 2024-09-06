import React from 'react'
import {Button, Card, Alert, Form, CardHeader} from "react-bootstrap";
import './LoginForm.css'
import FormInput from "../FormInput/FormInput.jsx";


const LoginForm = ({ onSubmit, errors, registerProps, generalError }) => (
  <Card className="shadow card">
   <CardHeader>
      <h3 className="card-title text-center mb-4">Sign In</h3>
      {generalError && (
        <Alert variant="danger" dismissible>
          {generalError.message}
        </Alert>
      )}
       </CardHeader>
       <Card.Body>
      <Form onSubmit={onSubmit} noValidate>
        <FormInput
          id="loginEmail"
          label="Email address"
          type="email"
          placeholder="email@example.com"
          error={errors.email}
          registerProps={registerProps('email')}
        />
        <FormInput
          id="loginPassword"
          label="Password"
          type="password"
          placeholder="Password"
          error={errors.password}
          registerProps={registerProps('password')}
        />
        <Button type="submit" variant="primary" className="w-100">
          Sign in
        </Button>
      </Form>
    </Card.Body>
  </Card>
);

export default LoginForm;
