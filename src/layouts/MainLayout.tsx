import React, { FC, PropsWithChildren } from "react";
import Header from "../components/Header/Header";
import { Outlet } from "react-router";

interface IMainLayoutProps extends PropsWithChildren {}

const MainLayout: FC<IMainLayoutProps> = ({ children }) => {
  return (
    <div>
      <Header />
      <div className={"container"}>
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
