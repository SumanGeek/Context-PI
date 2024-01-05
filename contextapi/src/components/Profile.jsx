import React, { useContext } from "react";
import UseContext from "../Context/UseContext";

const Profile = () => {
  const { name } = useContext(UseContext);

  if (!name) return <div>Please Login</div>;
  return <div>Welcome {name.username}</div>;
};

export default Profile;
