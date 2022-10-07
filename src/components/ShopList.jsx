import React from 'react'
import svgShop from '../assets/svg/menu_search.svg'
import ShopItem from './ShopItem'


const ShopList = ({shopLocals}) => {
    return(
        <div className="shop_container">
            <div className="shop_menu">
                <h2>Product Sell</h2>
                <div className="shop_search">
                <div className="nav_shop">
                    <img src={svgShop} alt="svgShop" />
                    <input type="text" value="Search"/>
                </div>
                <select name="days_select" id="days_select">
                    <option value="">Last 30 days</option>
                </select>
                </div>
            </div>
            <table className="shop_store_names">
                <tr>
                    <th className="PName">Product Name</th>
                    <th className="SPT">Stock</th>
                    <th className="SPT">Price</th>
                    <th className="SPT">Total Sales</th>
                </tr>
                {shopLocals.map(shoplocal => <ShopItem shoplocal={shoplocal} key={shoplocal.id}/>)}
            </table>
        </div>
    )
}

export default ShopList;