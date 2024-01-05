import React, { useContext } from "react";
import UseContext from "../Context/UseContext";

const Cart = () => {
  const { cart } = useContext(UseContext);
  return <div>Item purchase {cart}</div>;
};

export default Cart;
