import React, { useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import ApplyCoupon from '../paymentscomponents/ApplyCoupon';
import ApplyCouponNew from '../paymentscomponents/ApplyCouponNew';
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
        <div>
       <Container className='p-3'>
           
           {/* <Row className='p-3'>
               <Col className='md-4'><Button onClick = {redirectToNewCard}>Add new card</Button></Col>
               <Col className='md-4'><div className='jumbotron'>Total Payment Amount - {totalAmount}</div></Col>
               <Col className='md-4'><ApplyCouponNew totalAmount={totalAmount} setTotalAmount={setTotalAmount} couponCode={couponCode} setCouponCode = {setCouponCode}/></Col>
           </Row>
           <Row className='p-3'>
               <PaymentForm totalAmount={totalAmount} couponCode = {couponCode}/>
           </Row> */}
    <PaymentsNew/>       
       </Container>
    
    </div>
    )

}

export default Payments