import React from "react";
import { Link } from "react-router-dom";

const AuthPage = () => {
  return (
    <div>
      My first auth page
      <br />
      <Link to={"/"}>Link to main page</Link>
    </div>
  );
};

export default AuthPage;
