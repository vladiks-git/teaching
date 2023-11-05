import React from "react";
import { Card } from "antd";
import Meta from "antd/es/card/Meta";

import "./style.scss";

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
        {countries.map((item, index) => {
          return (
            <Card
              hoverable
              key={index}
              cover={<img alt="example" src={item.img} />}
            >
              <Meta title={item.title} description={item.link} />
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default CountriesList;
