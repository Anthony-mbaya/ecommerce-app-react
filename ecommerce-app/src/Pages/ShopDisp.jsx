import React from "react";
import { useContext } from "react";
import { AppContext } from "../Logic/Logic";

export const ShoeDisp = (props) => {
  const { id, shoeName, price, image } = props.shoedata;
  const { addToCart, cart } = useContext(AppContext);
  const counter = cart[id];
  return (
    <div>
      <img src={image} width={300} />
      <h2>{shoeName}</h2>
      <h4>Price: ${price}</h4>
      <button
        onClick={() => {
          addToCart(id);
        }}
      >
        Add to Cart {counter > 0 && <span>[ {counter} ]</span>}{" "}
      </button>
    </div>
  );
};
