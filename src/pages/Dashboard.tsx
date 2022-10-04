<<<<<<< HEAD
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
=======
import React from 'react'
import EarningList from '../components/EarningList'
import dashLocals from '../data/Dashboard/Dashboard_item_money'
import '../scss/Dashboard.scss'

import arrow_overview_menu from '../assets/svg/vector.svg'


const Main = () => {


  return (
    <div style={{flex:'2 0 50%'}} className="main_container">
      <div className="container_dashboard">
        <div className="header_dashboard">Hello Your_name 👋🏼,</div>
        
        <EarningList dashLocals={dashLocals}></EarningList>
        
        
        
        {/* second block */}
        <div className="second_block_container">
          <div className="overview_container">
            <div className="overview_top">

              <div className="overview_top_text">
                <h1>Overview</h1>
                Mouthly Earning
              </div>
              
              <div className="overview_top_button">
                <span>Quarterly</span>  <img src={arrow_overview_menu} alt="arrow_overview_menu" />
              </div>
            </div>

            <div className="overview_grafic">
              <div className="stats_div">
                <div className="stats_mouth">Jan</div>
                <div className="stats_stolb"></div>
              </div>
              <div className="stats_div">
                <div className="stats_mouth">Feb</div>
                <div className="stats_stolb"></div>
              </div>
              <div className="stats_div">
                <div className="stats_mouth">Mar</div>
                <div className="stats_stolb"></div>
              </div>
              <div className="stats_div">
                <div className="stats_mouth">Apr</div>
                <div className="stats_stolb"></div>
              </div>
              <div className="stats_div">
                <div className="stats_mouth">May</div>
                <div className="stats_stolb"></div>
              </div>
              <div className="stats_div">
                <div className="stats_mouth">Jun</div>
                <div className="stats_stolb"></div>
              </div>
              <div className="stats_div">
                <div className="stats_mouth">Jul</div>
                <div className="stats_stolb"></div>
              </div>
              <div className="stats_div">
                <div className="stats_mouth">Aug</div>
                <div className="stats_stolb"></div>
              </div>
              <div className="stats_div">
                <div className="stats_mouth">Sep</div>
                <div className="stats_stolb"></div>
              </div>
              <div className="stats_div">
                <div className="stats_mouth">Oct</div>
                <div className="stats_stolb"></div>
              </div>
              <div className="stats_div">
                <div className="stats_mouth">Nov</div>
                <div className="stats_stolb"></div>
              </div>
              <div className="stats_div">
                <div className="stats_mouth">Dec</div>
                <div className="stats_stolb"></div>
              </div>

            </div>

          </div>
        </div>
>>>>>>> 6035692d2e3cd274539b7875ff85a64173b068ac


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

<<<<<<< HEAD
      <div></div>
    </div>
  );
};

export default Main;
=======
    <div  >
    </div>
    </div>
  )
}

export default Main
>>>>>>> 6035692d2e3cd274539b7875ff85a64173b068ac
