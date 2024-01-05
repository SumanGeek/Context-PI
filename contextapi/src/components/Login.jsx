import React, { useState, useContext } from "react";
import UseContext from "../Context/UseContext";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { setName } = useContext(UseContext);
  const { setCart, cart } = useContext(UseContext);

  const handleSubmit = () => {
    setName({ username, password });
  };
  const addCart = () => {
    setCart(cart + 1);
  };
  return (
    <div>
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Enter Username"
        value={username}
        onChange={(e) => {
          setUsername(e.target.value);
        }}
      />
      <input
        type="text"
        placeholder="Enter Password"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <button onClick={handleSubmit}>Submit</button>
      <button onClick={addCart}>ADD to cart</button>
    </div>
  );
};

export default Login;
