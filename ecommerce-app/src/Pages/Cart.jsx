import React from 'react';
import { CartItem } from './CartItem';
import { Shoelist } from '../ShoesHolder/ShoeList';
import { useNavigate } from 'react-router-dom';

export const Cart =()=> {
    const navigate = useNavigate()
    return(
        <div>
            {Shoelist.map((shoeInCart) => ( <CartItem cartData = {shoeInCart} /> ))}

            <button onClick={() => navigate('/')}>Continue Shop</button>
        </div>
    )
}