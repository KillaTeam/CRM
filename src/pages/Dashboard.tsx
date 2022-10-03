import React from 'react'
import EarningList from '../components/EarningList'
import dashLocals from '../data/Dashboard/Dashboard_item_money'
import '../scss/Dashboard.scss'


const Main = () => {


  return (
    <div style={{flex:'2'}}>
      <div className="container_dashboard">
        <div className="header_dashboard">Hello Your_name 👋🏼,</div>
        
        <EarningList dashLocals={dashLocals}></EarningList>
        
        
        
        {/* second block */}
        {/* <div className="second_block_container">
          <div className="overview_content">
            <div className="overview_top">
              <div className="overview_title">
                Overview
                <span className='earning_title'>Monthly Earning</span>
              </div>

              <div className="overview_menu">
                <span className='overview_menu_text'>Quarterly</span> <img src={arrow_overview_menu} alt="arrow_overview_menu" />
              </div>
            </div>      
            <DashboardItemMoney></DashboardItemMoney>
          </div>

          <div className="customers_content">
            <div className="overview_title">
              Customers
              <span className='earning_title'>Customers that buy products</span>
            </div>
          </div>
        </div> */}

      </div>

    <div  >
    </div>
    </div>
  )
}

export default Main