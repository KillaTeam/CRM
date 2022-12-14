import React, { useState, useEffect } from "react";
import EarningList from "../components/EarningList";
import ShopList from "../components/ShopList";
import shopLocals from "../data/Dashboard/Shop_data";
import GraphBarQuart from "../components/GraphBarQuart";
// import { Dropdown } from "react-dropdown-now";
import DonutChart from "react-donut-chart";
import GraphDonData from "../assets/GraphDonData";
import "react-dropdown-now/style.css";
import "../scss/Dashboard.scss";
import "../scss/Graphs.scss";
import "@progress/kendo-theme-default/dist/all.scss";
import "../scss/Shop.scss";
import "../scss/Shop.scss";

import { IDash } from "../types/IDash";
import axios from "axios";

const Main = () => {

  var DashData:IDash = {
    id: 0,
    name: '',
    statsDashBoard:[
      {
        stat_name: '',
        svgElement: '',
        money: 0,
        color: '',
      }]
  }

  const AxiosPostRequest = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/dashboard", {
        method: 'GET',
        headers: {}
      });
    
      if (response.ok) {
        const result = await response.json();
        DashData = result
      }
    } catch (err) {
      console.error(err);
    }
    // const options = {method: 'GET', url: 'http://localhost:5000/api/dashboard'};

    // axios.request(options).then(function (response) {
    //   return (DashData = response.data);
    // }).catch(function (error) {
    //   console.error(error);
    // });
  }
    useEffect(()=>{
    AxiosPostRequest();
  }, [])

  console.log(DashData)
    

  const colors = [
    "#e91e63",
    "#9c27b0",
    "#673ab7",
    "#3f51b5",
    "#2196f3",
    "#03a9f4",
    "#00bcd4",
    "#009688",
    "#4caf50",
    "#8bc34a",
    "#cddc39",
    "#ffeb3b",
    "#ffc107",
    "#ff9800",
    "#ff5722",
    "#795548",
    "#607d8b",
  ];
  return (
    <div style={{ flex: "2 0 50%" }} className="main_container">
      <div className="container_dashboard">
        <header className="header_dashboard">Hello {DashData?.name} ????????,</header>
        <main>
          <EarningList dashLocals={DashData?.statsDashBoard}></EarningList>
          <div className="graphs_container">
            <div className="graph_bar">
              <div className="text__graph_bar">
                <div>
                  <h2>Overview</h2>
                  <p>Monthly Earning</p>
                </div>
              </div>
              <GraphBarQuart />
            </div>
            <div className="graph_don">
              <div className="graph_don_text">
                <h2>Customers</h2>
                <p>Customers that buy products</p>
              </div>
              <DonutChart
                selectedOffset={0.04}
                clickToggle={false}
                strokeColor="#F8FAFE"
                toggledOffset={0.05}
                className="graph_don_item "
                legend={false}
                width={350}
                height={350}
                innerRadius={0.45}
                data={GraphDonData}
                colors={colors}
                // style={{border:}}
              />
            </div>
          </div>
          <ShopList shopLocals={shopLocals} />
        </main>
      </div>

      <div></div>
    </div>
  );
};

export default Main;
