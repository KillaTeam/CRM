import React from 'react'
import EarningItem from './EarningItem';


const EarningList = ({dashLocals}) => {
    return(
        <div className='earnig_dashboard'>
            {dashLocals.map(dashLocal => <EarningItem dashLocal={dashLocal} key={dashLocal.id}/>)}
        </div>
 )
}

export default EarningList;