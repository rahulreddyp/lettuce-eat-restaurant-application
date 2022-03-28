import { useState } from "react"
import { Form } from "react-bootstrap"
import { Button, Row, Col, Container } from "react-bootstrap"
import { validateCouponCode } from "../../apicalls/CouponCalls"

const ApplyCouponNew = (props) => {

    const [inputCouponCode, setInputCouponCode] = useState('')

    const handleCoupon = (event) => {
        event.preventDefault()
        event.stopPropagation()
        const response = validateCouponCode(inputCouponCode)
        console.log('Coupon apply response', response)
        //props.setTotalAmount(props.totalAmount - 1)
    }

    return (
            <Form onSubmit={handleCoupon}>
                <Row>
                    <Form.Group as={Col} md='9'>
                        <Form.Label>Coupon</Form.Label>
                        <Form.Control required type="text" placeholder="Enter coupon code" value={inputCouponCode} onChange={e => setInputCouponCode(e.target.value)} />
                    </Form.Group>
                    <Form.Group as={Col} md='3'>
                        <Button type="submit">Apply coupon</Button>
                    </Form.Group>
                    
                </Row>
            </Form>
        
    )
}

export default ApplyCouponNew
