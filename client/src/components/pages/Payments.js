import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import AddCard from '../paymentscomponents/AddCard';
import ApplyCoupon from '../paymentscomponents/ApplyCoupon';
import PaymentForm from '../paymentscomponents/PaymentForm';

const Payments = () => {

    const [totalAmount, setTotalAmount] = useState(35)
    const[couponCode, setCouponCode] = useState('')

    return (
       <Container className='p-1'>
           
           <Row className='p-3'>
               <Col className='md-4'><AddCard/></Col>
               <Col className='md-4'><div className='jumbotron'>Total Payment Amount - {totalAmount}</div></Col>
               <Col className='md-4'><ApplyCoupon totalAmount={totalAmount} setTotalAmount={setTotalAmount} couponCode={couponCode} setCouponCode = {setCouponCode}/></Col>
           </Row>
           <Row className='p-3'>
               <PaymentForm totalAmount={totalAmount} couponCode = {couponCode}/>
           </Row>
           
       </Container>
    )

}

export default Payments