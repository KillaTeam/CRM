import React from 'react'

const EarningItem = (props) => {

    return (
        <div className="earning_item">
            <div className="svg_div">
                <img src={props.dashLocal.svgElement} alt="earnig_svg" className={'earnig_item_logo ' + props.dashLocal.color}/>
            </div>
            <div className="earning_content">
                <span className='earning_title'>{props.dashLocal.name}</span>
                <span className='earning_number'>${props.dashLocal.money / 1000}k</span>
                <div className='earning_mount'><img src={props.dashLocal.up || props.dashLocal.down} alt="" /><span className={props.dashLocal.procents_color}>{props.dashLocal.procents}%</span>&nbsp;is this mouth</div>
            </div>
        </div>
    )
}

export default EarningItem