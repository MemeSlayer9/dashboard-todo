import React from 'react'
import './Home.css'
import FeaturesInfo from '../../components/FeaturesInfo/featuresInfo'
import Chart from '../../components/Chart/Chart'
import { userData} from '../../dummyData';
import WidgetLg from '../../components/widgetLg/WidgetLg';
import WidgetSm from '../../components/widgetSm/WidgetSm';

function Home() {
    return (
        <div className="home">
            <FeaturesInfo/>
            <Chart data={userData} title="Us" grid dataKey="Active User"/>
            <div className="homeWidgets"> 
            <WidgetSm/>

            <WidgetLg/>
         </div>
         </div>
         
    )
}

export default Home
