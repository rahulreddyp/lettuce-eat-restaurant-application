import { Image } from "react-bootstrap"

const PaymentIntroduction = () => {
    return (
        <div className="py-3 text-center">
            <Image className="mb-4 mx-auto d-block" src="https://www.nicepng.com/png/full/14-143923_payment-card-icon-png-edwin-m-sarmiento-credit.png" alt="" height="15%" width="15%" />
            <h2>Checkout order</h2>
            <p className="lead">Hurray! You are just one step away from finishing up your order. Complete all the payment details required below. Once done, sit back and relax! We will deliver freshly cooked food to you as soon as possible.</p>
        </div>
    )
}

export default PaymentIntroduction