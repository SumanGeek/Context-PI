import React, { useState } from "react";
import UserContext from "./UseContext";

const UseContextProvider = ({ children }) => {
  const [name, setName] = useState(null);
  const [cart, setCart] = useState(0)
  return (
    <UserContext.Provider
      value={{
        name,
        setName,
        cart,
        setCart
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
export default UseContextProvider;
