/*
Author - Deeksha Sareen
*/
import React from 'react';
import { Container } from 'react-bootstrap';
import Wishlist from '../../components/pages/Wishlist';
import GenericNotLoggedInComponent from './GenericNotLoggedInComponent';

const WishlistRender = () => {

    const user = JSON.parse(localStorage.getItem("user"));
    console.log(user)
    return (
        <div>
            {
                user == null 
                ? <GenericNotLoggedInComponent/>
                :
                <Container className='p-3'>
                    <Wishlist />
                </Container>
            }
        </div>
    )

}

export default WishlistRender