/*
Author - rahulmoje
*/
import { useEffect,useState} from "react"
import { Image } from "react-bootstrap"
import { deleteCartAll } from "../../apicalls/CartCalls";

const PostPayments = (props) => {

const [error, setError] = useState("");
const removefromcart = () => {
        console.log("Step1");
        deleteCartAll().then((data) => {
          if (data.error) {
            setError(data.error);
          } else {
            console.log(data);
          }
        });
      };
    useEffect(() => {
        removefromcart();
      }, []);

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