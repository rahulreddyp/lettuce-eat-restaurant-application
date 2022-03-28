import React from 'react';
import { Container } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import PaymentsBlock from '../paymentscomponents/PaymentsBlock'

const Payments = () => {
    const navigate = useNavigate();

    const redirectToNewCard = () => {
        navigate("/addCard")
    }

    return (
        <div>
            <Container className='p-3'>
                <PaymentsBlock />
            </Container>

        </div>
    )

}

export default Payments