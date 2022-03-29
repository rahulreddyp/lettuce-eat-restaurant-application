/*
Author - rahulmoje
*/
import { Image } from "react-bootstrap"

const CardSuccess = (props) => {
    return (
        <div className="py-3 text-center">
            <Image className="mb-4 mx-auto d-block"
                src="https://openjournalsystems.com/file/2017/07/payment-success.png" alt="" height="15%" width="15%" />
            <h2>Yay! Card added successfully.</h2>
            <h4>Here is your unique card id - {props.cardId}.</h4>
            <p className="lead">You can view your saved cards within the payments page.</p>
        </div>
    )
}


export default CardSuccess