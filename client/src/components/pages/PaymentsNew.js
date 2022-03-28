import { Container, Image, Row, ListGroup, Badge, Card, Form, Button } from "react-bootstrap"
import { useState } from "react"
import ApplyCoupon from "../paymentscomponents/ApplyCoupon"

const PaymentsNew = () => {

    const [totalAmount, setTotalAmount] = useState(35)
    const [couponData, setCouponData] = useState({
        'couponCode': '',
        'couponApplied': false,
        'discountPercentage': '',
        'couponErrors': ''
    })

    const currentOrder = [
        {
            'itemId': '1',
            'itemName': 'Item1',
            'itemQuantity': '1',
            'itemAmount': '$10'
        },
        {
            'itemId': '2',
            'itemName': 'Item2',
            'itemQuantity': '2',
            'itemAmount': '$20'
        },
        {
            'itemId': '3',
            'itemName': 'Item3',
            'itemQuantity': '3',
            'itemAmount': '$30'
        }

    ]


    return (
        <Container>
            <div className="py-5 text-center">
            <Image className="mb-4 mx-auto d-block" src="https://www.nicepng.com/png/full/14-143923_payment-card-icon-png-edwin-m-sarmiento-credit.png" alt="" height="15%" width="15%"/>
            <h2>Checkout order</h2>
            <p className="lead">Hurray! You are just one step away from finishing up your order. Complete all the payment details required below. Once done, sit back and relax! We will deliver freshly cooked food to you as soon as possible.</p>
            </div>
            <Row>
                <div className="mb-4 order-md-2 col-md-4">
                    <h4 className="d-flex justify-content-between align-items-center mb-3">
                        <span className="text-muted">Cart summary</span>
                        <Badge pill bg="secondary">3</Badge>
                    </h4>
                    <ListGroup as="ul" className="mb-3">
                        {
                            currentOrder.map((orderItem) => (
                            <ListGroup.Item as="li" className="d-flex justify-content-between align-items-start" key={orderItem.itemId}>
                                <div className="ms-2 me-auto">
                                    <div className="fw-bold">{orderItem.itemName}</div>
                                Quantity:{orderItem.itemQuantity}
                                </div>
                                <Badge bg="secondary" pill>{orderItem.itemAmount}</Badge>
                            </ListGroup.Item>
                            ))
                        }
                        <ListGroup.Item as="li" className="d-flex justify-content-between align-items-start bg-light">
                                <div className="ms-2 me-auto text-success">
                                    <div className="fw-bold">Coupon code</div>
                                EXAMPLECOUPON
                                </div>
                                <Badge bg="success" pill>-$5</Badge>
                            </ListGroup.Item>
                            <ListGroup.Item as="li" className="d-flex justify-content-between align-items-start">
                                <div className="ms-2 me-auto">
                                    <div className="fw-bold">Total Amount</div>
                                </div>
                                <Badge bg="primary" pill>${totalAmount}</Badge>
                            </ListGroup.Item>
                    </ListGroup>
                    <ApplyCoupon couponData={couponData} setCouponData = {setCouponData}/>
                </div>
            </Row>
        </Container>
    )
}

export default PaymentsNew