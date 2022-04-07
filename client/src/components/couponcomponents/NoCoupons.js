/*
Author - rahulmoje
*/
import { Image } from "react-bootstrap";

const NoCoupons = () => {

    return (
        <div className="py-3 text-center">
            <Image className="mb-4 mx-auto d-block"
                src="https://i.pinimg.com/originals/c6/0f/ea/c60fea3ac3aab2e82c2f7ea901ef55f6.jpg" alt="" height="35%" width="35%" />
            <h4>Oops! There are no coupons. Watch out this page later for exciting discounts!</h4>
        </div>
    )
}


export default NoCoupons