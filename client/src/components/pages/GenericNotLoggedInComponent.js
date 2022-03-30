import { Image } from "react-bootstrap";


const GenericNotLoggedInComponent = () => {
    return (
        <div className="py-3 text-center">
            <Image className="mb-4 mx-auto d-block"
                src="https://i.pinimg.com/originals/c6/0f/ea/c60fea3ac3aab2e82c2f7ea901ef55f6.jpg" alt="" height="35%" width="35%" />
            <h4>Oops! You are not logged into the website</h4>
            <h5>Kindly login to avail freshly cooked meals right at your doorplace.</h5>
            <p>Proceed to <a href="/login">login</a></p>
        </div>
    )
}

export default GenericNotLoggedInComponent