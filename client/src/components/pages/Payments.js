/*
Author - rahulmoje
*/
import React from 'react';
import { Container } from 'react-bootstrap';
import PaymentsBlock from '../paymentscomponents/PaymentsBlock';
import GenericNotLoggedInComponent from './GenericNotLoggedInComponent';

const Payments = () => {

    const user = JSON.parse(localStorage.getItem("user"));

    return (
        <div>
            {
                user == null 
                ? <GenericNotLoggedInComponent/>
                :
                <Container className='p-3'>
                    <PaymentsBlock />
                </Container>
            }
        </div>
    )

}

export default Payments