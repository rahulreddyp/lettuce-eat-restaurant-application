import { Button, Row, Col, Container } from "react-bootstrap"

const ApplyCoupon = (props) => {

    const handleCoupon = () => {
        props.setTotalAmount(props.totalAmount-1)
    }

    return(
        <Button variant="primary" onClick={handleCoupon}>Apply coupon</Button>
    )
}

export default ApplyCoupon