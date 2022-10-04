import React from "react";
import EarningList from "../components/EarningList";
import dashLocals from "../data/Dashboard/Dashboard_item_money";
import "../scss/Dashboard.scss";
import "../scss/Graphs.scss";
import arrow_overview_menu from "../assets/svg/vector.svg";
import GraphData from "../assets/GraphData";
import GraphBarQuart from "../components/GraphBarQuart";
import GraphDon from "../components/GraphDon";
import "@progress/kendo-theme-default/dist/all.css";
import { Dropdown, Selection } from 'react-dropdown-now';
import 'react-dropdown-now/style.css';
import NavGraphData from '../assets/NavGraphData'
const Main = () => {


  console.log();


  return (
    <div style={{ flex: "2 0 50%" }} className="main_container">
      <div className="container_dashboard">
        <header className="header_dashboard">Hello Your_name 👋🏼,</header>
        <main>
          <EarningList dashLocals={dashLocals}></EarningList>
          <div className="graphs_container">
            <div className="graph_bar">
              <div className="text__graph_bar">
                <h2>Overview</h2>
                <Dropdown
                  placeholder="Quartals"
                  options={["Quartals",'3 Month','Years']}
                  value="one"
                  onChange={(value) => console.log("change!", value)}
                  onSelect={(value) => console.log("selected!", value)} 
                  onClose={(closedBySelection) =>
                    console.log("closedBySelection?:", closedBySelection)
                  }
                  onOpen={() => console.log("open!")}
                />
              </div>
              <GraphBarQuart />
            </div>
            <div className="graph_don"><GraphDon/></div>
          </div>
        </main>
      </div>

      <div></div>
    </div>
  );
};

export default Main;
