/*
Author - rahulmoje
*/
import { Button, Image } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const NoPayments = () => {

    const navigate = useNavigate();

    const redirectToNewCard = () => {
        navigate('/addCard')
    }

    return (
        <div className="py-3 text-center">
            <Image className="mb-4 mx-auto d-block"
                src="https://i.pinimg.com/originals/c6/0f/ea/c60fea3ac3aab2e82c2f7ea901ef55f6.jpg" alt="" height="35%" width="35%" />
            <h4>Oops! There is nothing to pay.</h4>
            <h5>Add items from the menu to your cart to finish the payment process.</h5>
            <p className="lead">You can view the menu within the menu tab.</p>
            <p className="lead">Meanwhile, you can also add a new card for faster checkout process</p>
            <Button as="input" type="submit" value="Add new card" size="lg" onClick={redirectToNewCard} />
        </div>
    )
}


export default NoPayments