import React from "react";
import UseContextProvider from "./Context/UseContextProvider";
import Login from "./components/Login";
import Profile from "./components/Profile";
import Cart from "./components/Cart";

const App = () => {
  return (
    <UseContextProvider>
      <Login />
      <Profile />
      <Cart />
    </UseContextProvider>
  );
};

export default App;
