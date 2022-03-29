/*
Author - rahulmoje
*/
import { useState } from "react"
import { Button, Form, InputGroup } from "react-bootstrap"
import { validateCouponCode } from "../../apicalls/CouponCalls"

const ApplyCoupon = (props) => {

    const [validated, setValidated] = useState(false)
    const [enteredCouponCode, setEnteredCouponCode] = useState('')

    const handleCoupon = (event) => {
        event.preventDefault()
        event.stopPropagation()
        validateCouponCode(enteredCouponCode)
            .then(response => {
                if (response.success) {
                    const successCoupon = {
                        'couponCode': enteredCouponCode,
                        'couponApplied': true,
                        'discountPercentage': response.discountPercentage,
                        'couponErrors': ''
                    }
                    props.setCouponData(successCoupon)
                    setValidated(true)
                    props.setTotalAmount(props.totalAmount * ((100 - response.discountPercentage) / 100))
                } else {
                    const failureCoupon = {
                        'couponCode': '',
                        'couponApplied': false,
                        'discountPercentage': '',
                        'couponErrors': response.message
                    }
                    props.setCouponData(failureCoupon)
                    setValidated(false)
                }
            })


    }

    const handleCouponCodeChange = (event) => {
        setEnteredCouponCode(event.target.value)
        props.setCouponData({})
    }

    return (
        <Form className="card p-3" onSubmit={handleCoupon} validated={validated}>
            <fieldset disabled={props.couponData.couponApplied}>
                <Form.Group>
                    <InputGroup hasValidation>
                        <Form.Control required type="text" placeholder="Enter Coupon Code" id="couponCodeInput"
                            value={props.couponCode} onChange={handleCouponCodeChange}
                            isInvalid={!!props.couponData.couponErrors}>
                        </Form.Control>
                        <Button variant="secondary" as="input" type="submit" value="Submit" />
                        <Form.Control.Feedback type='invalid'>{props.couponData.couponErrors}</Form.Control.Feedback>
                    </InputGroup>
                </Form.Group>
            </fieldset>
        </Form>

    )
}

export default ApplyCoupon