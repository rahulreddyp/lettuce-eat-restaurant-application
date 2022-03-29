import React from 'react';
import { Container } from 'react-bootstrap';
import PaymentsBlock from '../paymentscomponents/PaymentsBlock';

const Payments = () => {

    return (
        <div>
            <Container className='p-3'>
                <PaymentsBlock />
            </Container>

        </div>
    )

}

export default Payments