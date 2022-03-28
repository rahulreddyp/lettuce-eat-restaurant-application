import { Image } from "react-bootstrap"

const NoPayments = () => {
    return (
        <div className="py-3 text-center">
            <Image className="mb-4 mx-auto d-block"
             src="https://i.pinimg.com/originals/c6/0f/ea/c60fea3ac3aab2e82c2f7ea901ef55f6.jpg" alt="" height="35%" width="35%" />
            <h4>Oops! There is nothing to pay.</h4>
            <h5>Add items from the menu to your cart to finish the payment process.</h5>
            <p className="lead">You can view the menu within the menu tab.</p>
        </div>
    )
}


export default NoPayments