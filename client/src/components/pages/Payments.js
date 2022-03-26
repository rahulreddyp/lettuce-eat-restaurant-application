import { useState } from 'react'
import React from 'react';
import ReactDOM from 'react-dom';
import { Form } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { savePaymentData } from '../paymentscomponents/PaymentCalls';
import PaymentForm from '../paymentscomponents/PaymentForm';
import AddCard from '../paymentscomponents/AddCard';
import ApplyCoupon from '../paymentscomponents/ApplyCoupon';

const Payments = () => {

    const [totalAmount, setTotalAmount] = useState(35)
    const [mainForm, setMainForm] = useState({
        "cardType": "",
        "cardNumber": "",
        "cardName": "",
        "cardValidity": "",
        "cvv": "",
        "paymentAmount": totalAmount
    })

    return (
       <Container className='p-1'>
           <Row className='p-3'>
               <Col className='md-4'><AddCard/></Col>
               <Col className='md-4'>Total Payment Amount - {totalAmount}</Col>
               <Col className='md-4'><ApplyCoupon totalAmount={totalAmount} setTotalAmount={setTotalAmount}/></Col>
           </Row>
           <Row className='p-3'>
               <PaymentForm totalAmount={totalAmount}/>
           </Row>
       </Container>
    )

}

export default Payments