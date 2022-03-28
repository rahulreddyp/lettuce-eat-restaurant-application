import React, { useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import ApplyCoupon from '../paymentscomponents/ApplyCoupon';
import PaymentForm from '../paymentscomponents/PaymentForm';
import PaymentsNew from './PaymentsNew';

const Payments = () => {
    const navigate = useNavigate();

    const [totalAmount, setTotalAmount] = useState(35)
    const[couponCode, setCouponCode] = useState('')

    const redirectToNewCard = () => {
        navigate("/addCard")
    }

    return (
    //    <Container className='p-1'>
           
    //        <Row className='p-3'>
    //            <Col className='md-4'><Button onClick = {redirectToNewCard}>Add new card</Button></Col>
    //            <Col className='md-4'><div className='jumbotron'>Total Payment Amount - {totalAmount}</div></Col>
    //            <Col className='md-4'><ApplyCoupon totalAmount={totalAmount} setTotalAmount={setTotalAmount} couponCode={couponCode} setCouponCode = {setCouponCode}/></Col>
    //        </Row>
    //        <Row className='p-3'>
    //            <PaymentForm totalAmount={totalAmount} couponCode = {couponCode}/>
    //        </Row>
           
    //    </Container>
    <PaymentsNew/>
    )

}

export default Payments