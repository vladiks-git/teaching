import React from "react";
import { UserOutlined } from "@ant-design/icons";

import "./style.scss";
import { Button } from "antd";
import { useNavigate } from "react-router";
import { NavLink } from "react-router-dom";
import { routes } from "../../consts/routes";

const links = [
  {
    href: routes.MAIN,
    title: "Главная",
  },
  {
    href: `/${routes.FAVOURITE}`,
    title: "Избранное",
  },
];

const Header = () => {
  const navigate = useNavigate();

  const username = sessionStorage.getItem("username");

  const handleLogout = () => {
    navigate("/auth");
    sessionStorage.removeItem("username");
  };

  return (
    <div className={"header"}>
      <div className="header__inner container">
        <div className="header__logo">
          <img
            src="https://insureline.com/wp-content/uploads/2016/08/Logo-Horizontal-BW-1.jpg"
            alt="logo"
            className="header__img"
          />
        </div>
        <div className="header__actions">
          <ul className="header__navigation">
            {links.map((link) => (
              <li key={Math.random()}>
                <NavLink to={link.href}>{link.title}</NavLink>
              </li>
            ))}
          </ul>
          <div className="header__user-info">
            <UserOutlined />
            Ваш логин - {username}
          </div>
          <div className="header__exit">
            <Button type="primary" danger onClick={handleLogout}>
              Выход
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
