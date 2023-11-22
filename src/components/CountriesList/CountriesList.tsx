import React from "react";

import "./style.scss";
import CountryCard from "../CountryCard/CountryCard";

const CountriesList = () => {
  const countries = [
    {
      img: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
      title: "Russia",
      link: "www.instagram.com",
    },
    {
      img: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
      title: "USA",
      link: "www.facebook.com",
    },
    {
      img: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
      title: "China",
      link: "www.youtube.com",
    },
  ];

  return (
    <div>
      <div className="country-list">
        {countries.map((item, index) => (
          <CountryCard
            key={index}
            link={item.link}
            title={item.title}
            img={item.img}
          />
        ))}
      </div>
    </div>
  );
};

export default CountriesList;
