/*
Author - rahulmoje
*/
import { Image } from "react-bootstrap"

const PostPayments = (props) => {
    return (
        <div className="py-3 text-center">
            <Image className="mb-4 mx-auto d-block"
                src="https://openjournalsystems.com/file/2017/07/payment-success.png" alt="" height="15%" width="15%" />
            <h2>Yay! Payment completed successfully.</h2>
            <h4>Here is your payment id for further communication - {props.paymentStatus.paymentId}.</h4>
            <p className="lead">You can view your orders within the orders tab.</p>
        </div>
    )
}

export default PostPayments