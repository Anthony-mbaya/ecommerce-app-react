import React from 'react';

export const CartItem =(props)=> {
    const {shoeName,price,image} = props.cartData;

    return(
        <div>
            <img src={image} />
            <h2>{shoeName}</h2>
            <p>Price: ${price.toFixed(2)}</p>
        </div>
    )
}