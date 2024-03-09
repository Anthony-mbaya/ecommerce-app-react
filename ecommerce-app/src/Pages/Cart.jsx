import React from "react";
import { shoelist } from "../ShoesHolder/ShoeList";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../Logic/Logic";
import CartItem from "./CartItem";

export const Cart = () => {
  const { cart, totalAmount } = useContext(AppContext);
  const navigate = useNavigate();
  const cost = totalAmount();

  return (
    <div>
      {shoelist.map((shoeInCart) => {
        if (cart[shoeInCart.id] !== 0) {
          return <CartItem cartData={shoeInCart} />;
        }
      })}
      <h1>Cart</h1>
      <div>
        <p>cart items</p>
      </div>
      <hr />
      {cost > 0 ? (
        <div>
          <span>Total Cost: {cost}</span>
          <button onClick={() => navigate("/")}>Continue Shop</button>
          <button>Checkout</button>
        </div>
      ) : (
        <p>Err!! cart not found</p>
      )}
    </div>
  );
};
