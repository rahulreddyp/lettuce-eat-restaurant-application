import { useState } from 'react'
import React from 'react';
import ReactDOM from 'react-dom';
import { Form } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { savePaymentData } from '../paymentscomponents/PaymentCalls';

const Payments = () => {

    const [totalAmount, setTotalAmount] = useState(35)
    const [useDebit, setUseDebit] = useState(false)
    const [useCredit, setUseCredit] = useState(false)
    const [cardNumber, setCardNumber] = useState("")
    const [cardName, setCardName] = useState("")
    const [cardValidity, setCardValidity] = useState("")
    const [cvv, setCvv] = useState("")
    const [paySuccess, setPaySuccess] = useState("")
    const [errorMessage, setErrorMessage] = useState("")

    const onlyNumbersRegex = /^[0-9]*$/
    const nameRegex = /^[a-zA-Z\s]*$/
    const dateExpiryRegex = /^(0[1-9]|1[0-2])\/?([0-9]{2})$/

    const handleCardTypeChange = (event) => {
        console.log(event.target.value)
        setUseCredit(false)
        setUseDebit(false)
        if (event.target.value === 'Debit') {
            setUseDebit(true)
        } 
        if (event.target.value === 'Credit') {
            setUseCredit(true)
        }
    }

    const handleCardNumberChange = (event) => {
        setErrorMessage("")
        logEvent(event.target.value)
        setCardNumber(event.target.value)
        if (event.target.value !== "" && (!onlyNumbersRegex.test(event.target.value) || event.target.value.length !== 16)) {
            setErrorMessage("Invalid card number!")
        }

    }

    const handleCardNameChange = (event) => {
        setErrorMessage("")
        setCardName(event.target.value)
        logEvent(event.target.value)
        if (event.target.value !== "" && !nameRegex.test(event.target.value)) {
            setErrorMessage("Invalid cardholder name")
        }
    }

    const handleCardValidityChange = (event) => {
        setErrorMessage("")
        setCardValidity(event.target.value)
        logEvent(event.target.value)
        if (event.target.value !== "" && !dateExpiryRegex.test(event.target.value)) {
            setErrorMessage("Invalid expiry date")
        }
    }

    const handleCvvChange = (event) => {
        setErrorMessage("")
        setCvv(event.target.value)
        logEvent(event.target.value)
        if (event.target.value !== "" && (!onlyNumbersRegex.test(cvv) || event.target.value.length !== 3)) {
            setErrorMessage("Invalid CVV")
        }
    }

    const logEvent = (value) => {
        console.log(value)
    }

    const validateForm = () => {
        setErrorMessage("")
        if (cardNumber === "") {
            setErrorMessage("Card number cannot be empty")
            return false
        } else if (cardName === "") {
            setErrorMessage("Card name cannot be empty")
            return false
        } else if (cvv === "") {
            setErrorMessage("Cvv cannot be empty")
            return false
        } else if (cardNumber !== "" && (!onlyNumbersRegex.test(cardNumber) || cardNumber.length !== 16)) {
            setErrorMessage("Invalid card number!")
            return false
        } else if (cardName !== "" && !nameRegex.test(cardName)) {
            setErrorMessage("Invalid cardholder name")
            return false
        } else if (cvv !== "" && (!onlyNumbersRegex.test(cvv) || cvv.length !== 3)) {
            setErrorMessage("Invalid CVV")
            return false
        }
        // } else if(useDebit !== true || useCredit !== true) {
        //     setErrorMessage("Choose corresponding card type")
        //     return false
        // }
        return true
    }

    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        event.preventDefault();
        event.stopPropagation();
        if (validateForm() === true) {
            setPaySuccess("true")
            savePaymentData(JSON.stringify({cardName:cardName}))
        }
        setValidated(true);
    };

    return (

        <Container>
            <Container>
                <Row className='mb-3'>
                    <Col>Total Payment Amount : {totalAmount}</Col>
                    <Col>{errorMessage}</Col>
                </Row>
            </Container>
            <Form onSubmit={handleSubmit}>
                <Row className='mb-3'>
                    <Form.Group as={Col} md='6'>
                        <Form.Label>Card type</Form.Label>
                        <Form.Select onChange={handleCardTypeChange}>
                            <option>Choose card type</option>
                            <option value='Debit'>Debit</option>
                            <option value='Credit'>Credit</option>
                        </Form.Select>
                    </Form.Group>
                </Row>
                <Row className='mb-3'>
                    <Form.Group as={Col} md='6'>
                        <Form.Label>Card number</Form.Label>
                        <Form.Control required type='number' id='cardNumber' value={cardNumber} placeholder='Enter card number' onChange={handleCardNumberChange}></Form.Control>
                    </Form.Group>
                </Row>
                <Row className='mb-3'>
                    <Form.Group as={Col} md='6'>
                        <Form.Label>Cardholder's name</Form.Label>
                        <Form.Control required type='text' id='cardHolderName' value={cardName} placeholder='Enter cardholders name' onChange={handleCardNameChange}></Form.Control>
                    </Form.Group>
                </Row>
                <Row className='mb-3'>
                    <Form.Group as={Col} md='6'>
                        <Form.Label>Card validity</Form.Label>
                        <Form.Control required type='text' id='cardValidity' value={cardValidity} placeholder='Enter card expiry - mm/yyyy' onChange={handleCardValidityChange}></Form.Control>
                    </Form.Group>
                </Row>
                <Row className='mb-3'>
                    <Form.Group as={Col} md='6'>
                        <Form.Label>CVV</Form.Label>
                        <Form.Control required type='password' id='cardCvv' value={cvv} placeholder='Enter CVV' onChange={handleCvvChange}></Form.Control>
                    </Form.Group>
                </Row>
                <Row className='mb-3'>
                    <Form.Group as={Col} md='6'>
                        <Button as="input" type="submit" value="Submit" />
                    </Form.Group>
                </Row>
            </Form>
        </Container>


    )

}

export default Payments