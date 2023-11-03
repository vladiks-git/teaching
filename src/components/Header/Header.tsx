import React from "react";
import { UserOutlined } from "@ant-design/icons";

import "./style.scss";
import { Button } from "antd";

const Header = () => {
  const username = sessionStorage.getItem("username");

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
          <div className="header__user-info">
            <UserOutlined />
            Ваш логин - {username}
          </div>
          <div className="header__exit">
            <Button type="primary" danger>
              Выход
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
