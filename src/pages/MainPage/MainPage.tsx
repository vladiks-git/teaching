import React from "react";
import { Link } from "react-router-dom";

const MainPage = () => {
  return (
    <div>
      This is my main page
      <br />
      <Link to={"/auth"}>Link to auth page</Link>
    </div>
  );
};

export default MainPage;
