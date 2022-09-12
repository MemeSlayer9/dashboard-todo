import React from 'react'
import './featuresInfo.css'
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';


function FeaturesInfo() {
    return (
        <div className="featured">
            <div className="featuredItem">
                 <span className="featuredTitle">Revanue</span>
                 <div className="featuredMoneyContainer">
                     <span className="featuredMoney">$2,415</span>
                     <span className="featuredMoneyRate">
                         -11.5<ArrowDownwardIcon className="featuredIcon negative"/></span>
                 </div>
             <span className="featuredSub">Compare to Last Month</span>
        </div>
        <div className="featuredItem">
                 <span className="featuredTitle">Sales</span>
                 <div className="featuredMoneyContainer">
                     <span className="featuredMoney">$2,115</span>
                     <span className="featuredMoneyRate">
                         -1.5<ArrowDownwardIcon className="featuredIcon negative"/></span>
                 </div>
             <span className="featuredSub">Compare to Last Month</span>
        </div>
        <div className="featuredItem">
                 <span className="featuredTitle">Cost</span>
                 <div className="featuredMoneyContainer">
                     <span className="featuredMoney">$2,225</span>
                     <span className="featuredMoneyRate">
                         +121.5<ArrowUpwardIcon className="featuredIcon"/></span>
                 </div>
             <span className="featuredSub">Compare to Last Month</span>
        </div>
        </div>
    )
}

export default FeaturesInfo
