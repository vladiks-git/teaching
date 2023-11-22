import React, { FC, useEffect, useState } from "react";
import { Card } from "antd";
import Meta from "antd/es/card/Meta";
import { HeartFilled, HeartOutlined } from "@ant-design/icons";

import "./style.scss";

interface ICountryCardProps {
  img: string;
  title: string;
  link: string;
}

const CountryCard: FC<ICountryCardProps> = ({ img, title, link }) => {
  const [isLiked, setIsLiked] = useState(false);

  useEffect(() => {
    const likedCountries = JSON.parse(sessionStorage.getItem("likes") || "[]");

    if (Array.isArray(likedCountries) && likedCountries.includes(title)) {
      setIsLiked(true);
    }
  }, []);

  const handleLike = () => {
    const likedCountries = JSON.parse(sessionStorage.getItem("likes") || "[]");

    if (Array.isArray(likedCountries) && !likedCountries.includes(title)) {
      setIsLiked(true);
      const newLikedCounties = [...likedCountries, title];
      sessionStorage.setItem("likes", JSON.stringify(newLikedCounties));
    }

    if (Array.isArray(likedCountries) && likedCountries.includes(title)) {
      setIsLiked(false);
      const newLikedCounties = likedCountries.filter(
        (country: string) => country !== title,
      );
      console.log(newLikedCounties);
      sessionStorage.setItem("likes", JSON.stringify(newLikedCounties));
    }
    // const liked = [...likedCountries, title];
    // sessionStorage.setItem("likes", JSON.stringify(liked));
  };

  return (
    <Card
      className={"country-card"}
      hoverable
      cover={<img alt="example" src={img} />}
    >
      <Meta title={title} description={link} />
      <div className={"country-card__like"}>
        <HeartFilled
          className={isLiked ? "country-card__like-icon" : ""}
          onClick={handleLike}
        />
      </div>
    </Card>
  );
};

export default CountryCard;
