import React from 'react'
import {Form} from "react-bootstrap";

const FormInput = ({id,type,label,placeholder,error,registerProps}) => {
  return (
   <Form.Group controlId={id} className={'mb-3'}>
       <Form.Label>{label}</Form.Label>
       <Form.Control type={type}  placeholder={placeholder} isInvalid={!!error} {...registerProps}></Form.Control>
       <Form.Control.Feedback type={'invalid'}>{error?.message}</Form.Control.Feedback>
   </Form.Group>
  )
}

export default FormInput
