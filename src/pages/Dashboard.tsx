import React, { useState } from "react";
import EarningList from "../components/EarningList";
import dashLocals from "../data/Dashboard/Dashboard_item_money";
import GraphBarQuart from "../components/GraphBarQuart";
import { Dropdown } from "react-dropdown-now";
import DonutChart from "react-donut-chart";
import GraphDonData from "../assets/GraphDonData";
import "react-dropdown-now/style.css";
import "../scss/Dashboard.scss";
import "../scss/Graphs.scss";
import "@progress/kendo-theme-default/dist/all.scss";
import '../scss/Shop.scss'

import svgShop from '../assets/svg/menu_search.svg'

// import arrow_overview_menu from "../assets/svg/vector.svg";
// import GraphData from "../assets/GraphData";
// import GraphDon from "../components/GraphDon";
// import NavGraphData from "../assets/NavGraphData";

const Main = () => {

  const [menuSearch, setMenuSeatch] = useState('Search');

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
        <header className="header_dashboard">Hello Your_name 👋🏼,</header>
        <main>
          <EarningList dashLocals={dashLocals}></EarningList>
          <div className="graphs_container">
            <div className="graph_bar">
              <div className="text__graph_bar">
                <div>
                  <h2>Overview</h2>
                  <p>Monthly Earning</p>
                </div>
                
                <Dropdown
                  className="btn_dropdown"
                  placeholder="Quartals"
                  options={["Quartals", "3 Month", "Years"]}
                  value="one"
                  // onChange={(value) => console.log("change!", value)}
                  // onSelect={(value) => console.log("selected!", value)}
                  // onClose={(closedBySelection) =>
                  //   console.log("closedBySelection?:", closedBySelection)
                  // }
                  // onOpen={() => console.log("open!")}
                />
              </div>
              <GraphBarQuart />
            </div>
            <div className="graph_don">
              <div className="graph_don_text">
                <h2>Customers</h2>
                <p>Customers that buy products</p>
              </div>
              <DonutChart
                className="graph_don_item"
                legend={false}
                width={350}
                height={350}
                innerRadius={0.55}
                data={GraphDonData}
                colors={colors}
                // style={{border:}}
              />
              
            </div>
          </div>
          <div className="shop_container">
            
            <div className="shop_menu">
              <h2>Product Sell</h2>
              <div className="shop_search">
                <div>
                  <img src={svgShop} alt="svgShop" />
                  <input type="text" value={menuSearch} onChange={e => setMenuSeatch('' + e.target.value)}/>
                </div>
                
                
                <select name="days_select" id="days_select">
                  <option value="">Last 30 days</option>
                </select>
              </div>
              
              
            </div>
          </div>
        </main>
      </div>

      <div></div>
    </div>
  );
};

export default Main;