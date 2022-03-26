import React, { useState } from 'react';
import { useRef } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { savePaymentData } from '../paymentscomponents/PaymentCalls';



const PaymentForm = (props) => {
    //Regex for validations
    const onlyNumbersRegex = /^[0-9]*$/
    const nameRegex = /^[a-zA-Z\s]*$/
    const dateExpiryRegex = /^(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})$/

    //Main payment form
    const [mainForm, setMainForm] = useState({
        "cardType": "",
        "cardNumber": "",
        "cardName": "",
        "cardValidity": "",
        "cvv": ""
    })

    const scrollRef = useRef(null)

    const [paySuccess, setPaySuccess] = useState(false)
    const [paymentId, setPaymentId] = useState('')

    mainForm.totalAmount = props.totalAmount
    mainForm.couponCode = props.couponCode
    mainForm.userId = '1'
    mainForm.userEmail = 'example@gmail.com'
    mainForm.orderId = '1'

    const [validated, setValidated] = useState(false)

    //Form errors
    const [formErrors, setFormErrors] = useState({})

    //Common method to update form fields
    const updateFormFields = (formFieldName, formFieldValue) => {
        setMainForm({
            ...mainForm,
            [formFieldName]: formFieldValue
        })
        setFormErrors({})
    }


    //On submitting form
    const handleSubmit = (event) => {
        event.preventDefault();
        event.stopPropagation();
        const currentErrors = validateForm()
        if (Object.keys(currentErrors).length > 0) {
            setFormErrors(currentErrors)
            setValidated(false)
            setPaySuccess(false)
            scrollRef.current.scrollIntoView()
        } else {
            savePaymentData(mainForm)
                .then(response => {
                    if (response.success) {
                        setValidated(true)
                        setPaySuccess(true)
                        setPaymentId(response.id)
                    } else {
                        setValidated(false)
                        setPaySuccess(false)
                        setFormErrors({message:'Failed to authorise a payment. Please try again'})
                        scrollRef.current.scrollIntoView()
                    }
                })
        }
    };


    //Form validations
    const validateForm = () => {
        const errors = {};
        if (mainForm.cardType === '' || mainForm.cardType === 'Choose card type') {
            errors.cardType = 'Choose either debit or credit for card type'
        }
        if (!onlyNumbersRegex.test(mainForm.cardNumber)) {
            errors.cardNumber = 'Card number should consist of only digits'
        }
        if (mainForm.cardNumber.length !== 16) {
            errors.cardNumber = 'Card number should be of 16 digits'
        }
        if (!nameRegex.test(mainForm.cardName)) {
            errors.cardName = 'Card name should consist of only alphabets and spaces'
        }
        if (!dateExpiryRegex.test(mainForm.cardValidity)) {
            errors.cardValidity = 'Validity date should only consist of digits in the format MM/YYYY with appropriate month and year'
        }
        if (!onlyNumbersRegex.test(mainForm.cvv)) {
            errors.cvv = 'CVV should only consist of digits'
        }
        if (mainForm.cvv.length !== 3) {
            errors.cvv = 'CVV should be of 3 digits'
        }
        return errors

    }


    return (
        <div ref={scrollRef}>
            {
                paySuccess === false
                    ? <div>
                        <Container className='col-md-6 block-example border border-dark'>
                            <Form validated={validated} onSubmit={handleSubmit}>
                                <Row className='mb-3 justify-content-md-center'>
                                    <Form.Group as={Col} md='6'>
                                        <Form.Label> {formErrors.message}</Form.Label>
                                    </Form.Group>
                                </Row>
                                <Row className='mb-3 justify-content-md-center'>
                                    <Form.Group as={Col} md='6'>
                                        <Form.Label>Card type</Form.Label>
                                        <Form.Select onChange={e => updateFormFields('cardType', e.target.value)} isInvalid={!!formErrors.cardType}>
                                            <option value=''>Choose card type</option>
                                            <option value='Debit'>Debit</option>
                                            <option value='Credit'>Credit</option>
                                        </Form.Select>
                                        <Form.Control.Feedback type='invalid'>
                                            {formErrors.cardType}
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                </Row>
                                <Row className='mb-3 justify-content-md-center'>
                                    <Form.Group as={Col} md='6'>
                                        <Form.Label>Card Number</Form.Label>
                                        <Form.Control required type='number' id='cardNumber' value={mainForm.cardNumber} placeholder='Enter card number' onChange={e => updateFormFields('cardNumber', e.target.value)} isInvalid={!!formErrors.cardNumber}></Form.Control>
                                        <Form.Control.Feedback type='invalid'>
                                            {formErrors.cardNumber}
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                </Row>
                                <Row className='mb-3 justify-content-md-center'>
                                    <Form.Group as={Col} md='6'>
                                        <Form.Label>Cardholder's name</Form.Label>
                                        <Form.Control required type='text' id='cardHolderName' value={mainForm.cardName} placeholder='Enter cardholders name' onChange={e => updateFormFields('cardName', e.target.value)} isInvalid={!!formErrors.cardName}></Form.Control>
                                        <Form.Control.Feedback type='invalid'>
                                            {formErrors.cardName}
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                </Row>
                                <Row className='mb-3 justify-content-md-center'>
                                    <Form.Group as={Col} md='6'>
                                        <Form.Label>Card validity</Form.Label>
                                        <Form.Control required type='text' id='cardValidity' value={mainForm.cardValidity} placeholder='Enter card expiry - mm/yyyy' onChange={e => updateFormFields('cardValidity', e.target.value)} isInvalid={!!formErrors.cardValidity}></Form.Control>
                                        <Form.Control.Feedback type='invalid'>
                                            {formErrors.cardValidity}
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                </Row>
                                <Row className='mb-3 justify-content-md-center'>
                                    <Form.Group as={Col} md='6'>
                                        <Form.Label>CVV</Form.Label>
                                        <Form.Control required type='password' id='cardCvv' value={mainForm.cvv} placeholder='Enter CVV' onChange={e => updateFormFields('cvv', e.target.value)} isInvalid={!!formErrors.cvv}></Form.Control>
                                        <Form.Control.Feedback type='invalid'>
                                            {formErrors.cvv}
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                </Row>
                                <Row className='mb-3 justify-content-md-center'>
                                    <Form.Group as={Col} md='6'>
                                        <Button as="input" type="submit" value="Submit" />
                                    </Form.Group>
                                </Row>
                            </Form>
                        </Container>
                    </div>
                    : <div>
                        <Container className='col-md-6'>
                            <Row className='mb-3 justify-content-md-center'>
                                <Col>{paymentId}</Col>
                            </Row>
                        </Container>
                    </div>
            }
        </div>


    )

}
export default PaymentForm