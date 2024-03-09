import React from "react";
import { shoelist } from "../ShoesHolder/ShoeList";
import { ShoeDisp } from "./ShopDisp";

export const Shop = () => {
  return (
    <div>
      {shoelist.map((shoe) => (
        <ShoeDisp shoedata={shoe} />
      ))}
    </div>
  );
};
