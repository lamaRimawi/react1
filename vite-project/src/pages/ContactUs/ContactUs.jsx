import React from 'react';
import './ContactUs.css';
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Col,
  Container,
  Form,
  Row
} from 'react-bootstrap';
import FormInput from '../../component/FormInput/FormInput.jsx';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { contactUsSchema } from '../../assets/assets.js';
import { faUser, faEnvelope, faPhone, faLocation, faEarth } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ContactUs() {
  const { register, formState: { errors }, handleSubmit } = useForm({
    resolver: zodResolver(contactUsSchema),
    mode: 'onBlur',
  });

  const handleSub = (data) => {

  };

  return (

    <Container fluid className="mt-5 cc">
      <Row>
        <Col md={7} className="cont ">
          <div className="border-0 brd">
            <div className="border-0 text-light fw-bolder text-center mb-2">
              <h1>Contact Us</h1>
              <p>Reach out to our team for any inquiries, assistance, or information you need.</p>
            </div>
            <div>
              <ul>
                <li className={'q'}>
                  <a href="">
                    employee@example.com <FontAwesomeIcon icon={faEnvelope} />
                  </a>
                </li>
                <li className={'q'}>
                  <a href="">
                    123 Anywhere St., Any City <FontAwesomeIcon icon={faLocation} />
                  </a>
                </li>
                <li className={'q'}>
                  <a href="">
                    www.globalgreat.com <FontAwesomeIcon icon={faEarth} />
                  </a>
                </li>
                <li className={'q'}>
                  <a href="">
                    +123-456-799 <FontAwesomeIcon icon={faPhone} />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </Col>
        <Col md={5}>
          <Card className="shadow card bg-secondary bg-opacity-75 mt-5 mb-4 v">
            <CardHeader className="text-primary">
              <h2 className="card-title text-center mb-4 fw-bold text-light">Contact Us</h2>
              <p className="text-center text-light">We will get back to you asap!</p>
            </CardHeader>
            <Card.Body>
              <Form onSubmit={handleSubmit(handleSub)} noValidate>
                <FormInput
                  id="regUsername"
                  label="Username"
                  type="text"
                  placeholder="User name"
                  error={errors.name}
                  registerProps={register('name')}
                  icon={faUser}
                />
                <FormInput
                  id="regEmail"
                  label="Email address"
                  type="email"
                  placeholder="email@example.com"
                  error={errors.email}
                  registerProps={register('email')}
                  icon={faEnvelope}
                />
                <FormInput
                  id="phone"
                  label="Phone"
                  type="tel"
                  placeholder="phone"
                  error={errors.phone}
                  registerProps={register('phone')}
                  icon={faPhone}
                />
                <Button type="submit" variant="primary" className="w-100">
                  Send
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default ContactUs;
