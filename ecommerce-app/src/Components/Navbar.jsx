import React from "react";
import { Link } from "react-router-dom";
import { ShoppingBag } from "phosphor-react";

export const Navbar = () => {
  return (
    <div>
      <Link to={"/login"}>Login</Link>
      <Link to={"/"}>Shop</Link>
      <Link to={"/cart"}>
        <ShoppingBag size={32} />
      </Link>
    </div>
  );
};
