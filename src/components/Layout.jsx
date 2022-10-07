import React from "react";
import { Link, Outlet } from "react-router-dom";
import ButtonNav from "./ButtonNav";
import logo from "../assets/svg/logo.svg";
import "../scss/ButtonNav.scss";

const Layout = () => {
  return (
    <div>
      <div className="main-frame">
        <div className="layout_container">
          <div className="img__container">
            <img src={logo} alt="" /> <span>v1</span>
          </div>
          <ButtonNav />
          <button className="account_block">
            <div className="account_left_side">
              <img src={123} alt="avatar" />
              <div className="account_text">
                <h4>Evano</h4>
                <p>Project Manager</p>
              </div>
            </div>
            <img src={123} alt="arrow" />
          </button>
        </div>
        <Outlet />
      </div>
      {/* <footer>DEV MODE KILLAHTEAM V1</footer> */}
    </div>
  );
};

export default Layout;