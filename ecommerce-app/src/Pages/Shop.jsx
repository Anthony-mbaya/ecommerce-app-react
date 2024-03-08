import React from 'react';
import { Shoelist } from '../ShoesHolder/ShoeList';
import { ShoeDisp } from './ShopDisp';

export const Shop =()=> {  
    return(
        <div>
            {Shoelist.map((shoe) => ( <ShoeDisp shoedata = {shoe} /> ))}
        </div>
    )
}