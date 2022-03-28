import { Badge, CloseButton, ListGroup } from "react-bootstrap"
import ApplyCoupon from "../paymentscomponents/ApplyCoupon"


const CartSummary = (props) => {

    const cancelCouponChange = () => {
        props.setTotalAmount(props.totalAmount / ((100 - props.couponData.discountPercentage)/100))
        props.setCouponData({
            'couponCode': '',
            'couponApplied': false,
            'discountPercentage': '',
            'couponErrors': ''
        })
    }

    return(
        <div>
            <h4 className="d-flex justify-content-between align-items-center mb-3">
                        <span className="text-muted">Cart summary</span>
                        <Badge pill bg="secondary">{props.currentOrder.length}</Badge>
                    </h4>
                    <ListGroup as="ul" className="mb-3">
                        {
                            props.currentOrder.map((orderItem) => (
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
                            props.couponData.couponApplied ?
                            <ListGroup.Item as="li" className="d-flex justify-content-between align-items-start bg-light">
                                    <div className="ms-2 me-auto text-success">
                                        <div className="fw-bold">Coupon code</div>
                                        {props.couponData.couponCode}
                                        <CloseButton onClick = {cancelCouponChange} />
                                    </div>
                                    <Badge bg="success" pill>{props.couponData.discountPercentage}% off</Badge>
                            </ListGroup.Item>
                           : <div></div>
                        }                    
                        <ListGroup.Item as="li" className="d-flex justify-content-between align-items-start">
                            <div className="ms-2 me-auto">
                                <div className="fw-bold">Total Amount</div>
                            </div>
                            <Badge bg="primary" pill>${props.totalAmount}</Badge>
                        </ListGroup.Item>   
                    </ListGroup>
                    <ApplyCoupon couponData={props.couponData} setCouponData = {props.setCouponData} 
                        totalAmount = {props.totalAmount} setTotalAmount = {props.setTotalAmount}/>
        </div>
    )
}

export default CartSummary