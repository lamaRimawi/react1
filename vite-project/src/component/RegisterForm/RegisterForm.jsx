import React from 'react';
import { Button, Card, Alert, Form, CardHeader } from 'react-bootstrap';
import FormInput from '../FormInput/FormInput.jsx';
import { faUser, faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';

const RegisterForm = ({ onSubmit, errors, registerProps, successMessage, errorMessage }) => (
  <Card className="shadow card">
    <CardHeader className="text-primary">
      <h2 className="card-title text-center mb-4 fw-bold">Sign Up</h2>
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
          icon={faUser}
        />
        <FormInput
          id="regEmail"
          label="Email address"
          type="email"
          placeholder="email@example.com"
          error={errors.email}
          registerProps={registerProps('email')}
          icon={faEnvelope}
        />
        <FormInput
          id="regPassword"
          label="Password"
          type="password"
          placeholder="Password"
          error={errors.password}
          registerProps={registerProps('password')}
          icon={faLock}
        />
        <Button type="submit" variant="primary" className="w-100">
          Sign Up
        </Button>
      </Form>
    </Card.Body>
  </Card>
);

export default RegisterForm;
