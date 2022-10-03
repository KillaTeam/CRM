import React from "react";
import { Link, Outlet } from "react-router-dom";
import ButtonNav from "./ButtonNav";
import logo from "../assets/svg/logo.svg";
import "../scss/ButtonNav.scss";

const Layout = () => {
  return (
    <div>
      <div className="main-frame">
        <div>
          <div className="img__container">
            <img src={logo} alt="" /> <span>v1</span>
          </div>
          <ButtonNav />
        </div>
        <Outlet />
      </div>
      <footer>DEV MODE KILLAHTEAM V1</footer>
    </div>
  );
};

export default Layout;
