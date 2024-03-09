import React from "react";
import { useContext } from "react";
import { AppContext } from "../Logic/Logic";

export default function CartItem(props) {
  const { id, shoeName, price, image } = props.cartData;
  const { cart, addToCart, removeFromCart, updateCart } =
    useContext(AppContext);
  return (
    <div>
      <img src={image} width={300} />
      <h2>{shoeName}</h2>
      <p>Price: ${price}</p>
      <button onClick={() => addToCart(id)}> + </button>
      <input
        value={cart[id]}
        onChange={(e) => updateCart(Number(e.target.value), id)}
      />
      <button onClick={() => removeFromCart(id)}> - </button>
    </div>
  );
}
