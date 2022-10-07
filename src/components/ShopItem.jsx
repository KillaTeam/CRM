import React from 'react'

const ShopItem = (props) => {
    return(
        <tr>
            <td className="PName">
            <img src={props.shoplocal.svgProduct} alt="img1" />
            <div className="title_desc"><h1>{props.shoplocal.name}</h1> <p>{props.shoplocal.desc}</p> </div>
            </td>
            <td className="SPT SPT_item">{props.shoplocal.stock} in stock</td>
            <td className="SPT SPT_item">$ {props.shoplocal.money}</td>
            <td className="SPT SPT_item">{props.shoplocal.total_sales}</td>          
        </tr>
    )
}

export default ShopItem;