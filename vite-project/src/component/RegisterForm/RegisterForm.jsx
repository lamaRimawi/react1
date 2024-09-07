import React from 'react';
import { Button, Card, Alert, Form, CardHeader } from 'react-bootstrap';
import FormInput from '../FormInput/FormInput.jsx';

const RegisterForm = ({ onSubmit, errors, registerProps, successMessage, errorMessage }) => (
  <Card className="shadow card">
    <CardHeader className="text-primary">
      <h2 className="card-title text-center mb-4 fw-bold ">Sign up</h2>
      {errorMessage && (
        <Alert variant="danger" dismissible>
          {errorMessage}
        </Alert>
      )}
      {successMessage && (
        <Alert variant="success" dismissible>
          {successMessage}
        </Alert>
      )}
    </CardHeader>
    <Card.Body>
      <Form onSubmit={onSubmit} noValidate>
        <FormInput
          id="regUsername"
          label="Username"
          type="text"
          placeholder="User name"
          error={errors.username}
          registerProps={registerProps('username')}
        />
        <FormInput
          id="regEmail"
          label="Email address"
          type="email"
          placeholder="email@example.com"
          error={errors.email}
          registerProps={registerProps('email')}
        />
        <FormInput
          id="regPassword"
          label="Password"
          type="password"
          placeholder="Password"
          error={errors.password}
          registerProps={registerProps('password')}
        />
        <Button type="submit" variant="primary" className="w-100">
          Sign up
        </Button>
      </Form>
    </Card.Body>
  </Card>
);

export default RegisterForm;
