import React from 'react';
import { Container } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import PaymentsNew from './PaymentsNew';

const Payments = () => {
    const navigate = useNavigate();

    const redirectToNewCard = () => {
        navigate("/addCard")
    }

    return (
        <div>
            <Container className='p-3'>
                <PaymentsNew />
            </Container>

        </div>
    )

}

export default Payments