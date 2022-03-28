import { useState } from "react"
import { Container, Row } from "react-bootstrap"
import CartSummary from "../paymentscomponents/CartSummary"
import NoPayments from "../paymentscomponents/NoPayments"
import PaymentFormNew from "../paymentscomponents/PaymentFormNew"
import PaymentIntroduction from "../paymentscomponents/PaymentIntroduction"
import PostPayments from "../paymentscomponents/PostPayments"

const PaymentsNew = () => {

    const [totalAmount, setTotalAmount] = useState(100)
    const [couponData, setCouponData] = useState({
        'couponCode': '',
        'couponApplied': false,
        'discountPercentage': '',
        'couponErrors': ''
    })
    const [paymentStatus, setPaymentStatus] = useState({
        'isPaymentComplete': false,
        'paymentId': ''
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


    return (
        <Container> 
            {
                currentOrder.length > 0
                ?
                (
                    paymentStatus.isPaymentComplete
                        ?
                        <PostPayments paymentStatus = {paymentStatus}/>
                        :
                        <div>
                            <PaymentIntroduction />
                            <Row>
                                <div className="col-md-8">
                                    <PaymentFormNew totalAmount={totalAmount} couponCode={couponData.couponCode}
                                    paymentStatus = {paymentStatus} setPaymentStatus = {setPaymentStatus} />
                                </div>
                                <div className="mb-4 col-md-4">
                                    <CartSummary currentOrder={currentOrder} couponData={couponData}
                                        setCouponData={setCouponData} totalAmount={totalAmount} setTotalAmount={setTotalAmount} />
                                </div>
                            </Row>
                        </div>
                )
                : <NoPayments/>
            }
            
        </Container>
    )
}

export default PaymentsNew