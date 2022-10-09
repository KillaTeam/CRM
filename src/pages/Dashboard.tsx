import React, { useState, useEffect } from "react";
import EarningList from "../components/EarningList";
import ShopList from "../components/ShopList";
import dashLocals from "../data/Dashboard/Dashboard_item_money";
import shopLocals from '../data/Dashboard/Shop_data'
import GraphBarQuart from "../components/GraphBarQuart";
import { Dropdown } from "react-dropdown-now";
import DonutChart from "react-donut-chart";
import GraphDonData from "../assets/GraphDonData";
import "react-dropdown-now/style.css";
import "../scss/Dashboard.scss";
import "../scss/Graphs.scss";
import "@progress/kendo-theme-default/dist/all.scss";
import '../scss/Shop.scss'
import axios from "axios";



// import arrow_overview_menu from "../assets/svg/vector.svg";
// import GraphData from "../assets/GraphData";
// import GraphDon from "../components/GraphDon";
// import NavGraphData from "../assets/NavGraphData";



const Main = () => {

  const username = "Evano"

  const AxiosPostRequest = async() => {
    const options = {
      method: 'POST',
      url: 'http://localhost:5000/api/dashboard',
      data: {name: username}
    };
    
    axios.request(options).then(function (response: { data: any; }) {
      console.log(response.data);
    }).catch(function (error) {
      console.error(error);
    });
  }
  useEffect(() => {
    AxiosPostRequest()
  })

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
          <ShopList shopLocals={shopLocals}/>

        </main>
      </div>

      <div></div>
    </div>
  );
};

export default Main;