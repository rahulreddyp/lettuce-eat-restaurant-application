import { Container, Image, Row, ListGroup, Badge, Card, Form, Button, CloseButton } from "react-bootstrap"
import { useState } from "react"
import ApplyCoupon from "../paymentscomponents/ApplyCoupon"
import PaymentIntroduction from "../paymentscomponents/PaymentIntroduction"
import PaymentFormNew from "../paymentscomponents/PaymentFormNew"

const PaymentsNew = () => {

    const [totalAmount, setTotalAmount] = useState(100)
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
        },
        {
            'itemId': '4',
            'itemName': 'Item4',
            'itemQuantity': '4',
            'itemAmount': '$40'
        }

    ]

    const cancelCouponChange = () => {
        setTotalAmount(totalAmount / ((100 - couponData.discountPercentage)/100))
        setCouponData({
            'couponCode': '',
            'couponApplied': false,
            'discountPercentage': '',
            'couponErrors': ''
        })
    }


    return (
        <Container>
            <PaymentIntroduction/>
            <Row>
                <div className="col-md-8">
                    <PaymentFormNew totalAmount = {totalAmount} couponCode = {couponData.couponCode}/>
                </div>
                <div className="mb-4 col-md-4">
                    <h4 className="d-flex justify-content-between align-items-center mb-3">
                        <span className="text-muted">Cart summary</span>
                        <Badge pill bg="secondary">{currentOrder.length}</Badge>
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
                        {
                            couponData.couponApplied ?
                            <ListGroup.Item as="li" className="d-flex justify-content-between align-items-start bg-light">
                                    <div className="ms-2 me-auto text-success">
                                        <div className="fw-bold">Coupon code</div>
                                        {couponData.couponCode}
                                        <CloseButton onClick = {cancelCouponChange} />
                                    </div>
                                    <Badge bg="success" pill>{couponData.discountPercentage}% off</Badge>
                            </ListGroup.Item>
                           : <div></div>
                        }                    
                        <ListGroup.Item as="li" className="d-flex justify-content-between align-items-start">
                            <div className="ms-2 me-auto">
                                <div className="fw-bold">Total Amount</div>
                            </div>
                            <Badge bg="primary" pill>${totalAmount}</Badge>
                        </ListGroup.Item>   
                    </ListGroup>
                    <ApplyCoupon couponData={couponData} setCouponData = {setCouponData} 
                        totalAmount = {totalAmount} setTotalAmount = {setTotalAmount}/>
                </div>
            </Row>
        </Container>
    )
}

export default PaymentsNew