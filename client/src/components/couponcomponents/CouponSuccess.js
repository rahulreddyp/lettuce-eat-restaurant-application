/*
Author - rahulmoje
*/
import { Image } from "react-bootstrap"

const CouponSuccess = (props) => {
    return (
        <div className="py-3 text-center">
            <Image className="mb-4 mx-auto d-block"
                src="https://openjournalsystems.com/file/2017/07/payment-success.png" alt="" height="15%" width="15%" />
            <h2>Yay! Coupon added successfully.</h2>
            <h4>Here is your unique coupon id - {props.couponId}.</h4>
            <p className="lead">You can view all coupons within the coupons page.</p>
        </div>
    )
}


export default CouponSuccess