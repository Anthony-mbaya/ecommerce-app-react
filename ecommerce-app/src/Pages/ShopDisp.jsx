import React from 'react';

export const ShoeDisp =(props)=> {
    const {shoeName, price, image} = props.shoedata;
    return(
        <div>
            <img src={image} width={300} />
            <h2>{shoeName}</h2>
            <h4>Price: ${price}</h4>
        </div>
    )
}