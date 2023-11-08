import React from "react";
import Header from "../../components/Header/Header";
import CountriesList from "../../components/CountriesList/CountriesList";

const MainPage = () => {
  return (
    <div>
      1
      <Header />
      <div className={"container"}>
        <CountriesList />
      </div>
    </div>
  );
};

export default MainPage;
