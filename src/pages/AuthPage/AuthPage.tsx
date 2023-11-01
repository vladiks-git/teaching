import React, { ChangeEvent, useState } from "react";

import "./style.scss";
import { Button, Input } from "antd";

const accessUser = {
  login: "Vlad",
  password: "qwerty123",
};

const AuthPage = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState(false);

  const handleChangeLogin = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setLogin(value);
  };

  const handleChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setPassword(value);
  };

  const handleEnter = () => {
    // проверить введеный лог и пароль пользоваетля с верной учеткой
    if (login === accessUser.login && password === accessUser.password) {
      console.log("Успешно");
    } else {
      setError(true);
    }
  };

  return (
    <div className={"auth"}>
      <div className="auth__inner">
        <p className="auth__title">Вход</p>
        <div className="auth__controls">
          <Input
            placeholder="Лоигн"
            value={login}
            onChange={handleChangeLogin}
          />
          <Input.Password
            placeholder="Пароль"
            value={password}
            onChange={handleChangePassword}
          />
        </div>
        <Button onClick={handleEnter} className={"auth__submit"} type="primary">
          Вход
        </Button>
        {error && <p>Введен неверный логин или пароль</p>}
      </div>
    </div>
  );
};

export default AuthPage;
