/*
Author - rahulmoje
*/
import { useState, useEffect } from "react"
import { Container, Row } from "react-bootstrap"
import CartSummary from "./CartSummary"
import NoPayments from "./NoPayments"
import PaymentForm from "./PaymentForm"
import PaymentIntroduction from "./PaymentIntroduction"
import PostPayments from "./PostPayments"

const PaymentsBlock = () => {

    
    const cartParams = localStorage.getItem("orderParams") != null ? JSON.parse(localStorage.getItem("orderParams")) : []
    const cartItem = localStorage.getItem("cartItem") != null ? JSON.parse(localStorage.getItem("cartItem")) : []
    var orders = []

    const [currentOrder, setCurrentOrder] = useState([])
    const [totalAmount, setTotalAmount] = useState(0)
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

    useEffect(() => {
        if(cartParams.length != 0) {
            var runningAmount = 0
            for(var i=0;i<cartParams.items.length;i++) {
                var itemId = cartParams.items[i]
                var itemName = findItemNameById(itemId)
                var itemQuantity = cartParams.quantity[i]
                var itemAmount = findItemAmountById(itemId)
                itemAmount = itemAmount*itemQuantity
                var item = {
                    'itemId': itemId,
                    'itemName': itemName,
                    'itemQuantity': itemQuantity,
                    'itemAmount': itemAmount
    
                }
                runningAmount += itemAmount
                orders.push(item)
            }
            runningAmount *= 1.15
            runningAmount = runningAmount.toFixed(2)
            setCurrentOrder(orders)
            setTotalAmount(runningAmount)
        } 
      }, []);

      const findItemNameById = (itemId) => {
          for(var i=0;i<cartItem.length;i++) {
              if(cartItem[i].id === itemId) {
                  return cartItem[i].name
              }
          }
      }

      const findItemAmountById = (itemId) => {
        for(var i=0;i<cartItem.length;i++) {
            if(cartItem[i].id === itemId) {
                return cartItem[i].price
            }
        }
    }


    return (
        <Container>
            {
                currentOrder.length > 0
                    ?
                    (
                        paymentStatus.isPaymentComplete
                            ?
                            <PostPayments paymentStatus={paymentStatus} />
                            :
                            <div>
                                <PaymentIntroduction />
                                <Row>
                                    <div className="col-md-8">
                                        <PaymentForm totalAmount={totalAmount} couponCode={couponData.couponCode}
                                            paymentStatus={paymentStatus} setPaymentStatus={setPaymentStatus} />
                                    </div>
                                    <div className="mb-4 col-md-4">
                                        <CartSummary currentOrder={currentOrder} couponData={couponData}
                                            setCouponData={setCouponData} totalAmount={totalAmount} setTotalAmount={setTotalAmount} />
                                    </div>
                                </Row>
                            </div>
                    )
                    : <NoPayments />
            }

        </Container>
    )
}

export default PaymentsBlock