import React from 'react'
import './Sidebar.css'
import LineStyleIcon from '@material-ui/icons/LineStyle';
import TimelineIcon from '@material-ui/icons/Timeline';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import StorefrontIcon from '@material-ui/icons/Storefront';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import BarChartIcon from '@material-ui/icons/BarChart';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import DynamicFeedIcon from '@material-ui/icons/DynamicFeed';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import { Link } from 'react-router-dom';

function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Dashboard</h3>
                            <ul className="sidebarList">
                                     <li className="sidebarListItem active">
                                        <LineStyleIcon className="sidebarIcon"/>Home
                                    </li>
                                      <li className="sidebarListItem">
                                        <TimelineIcon className="sidebarIcon"/>Analytics
                                    </li>
                                     <li className="sidebarListItem">
                                        <TrendingUpIcon className="sidebarIcon"/>Sales
                                    </li>
                            </ul>
                            <h3 className="sidebarTitle">Quick Menu</h3>
                            <ul className="sidebarList">
                            <Link to="/users" className="link">
                                    <li className="sidebarListItem active">
                                        <PermIdentityIcon  className="sidebarIcon"/>Users
                                    </li>
                                    </Link>
                                    <Link to="/products" className="link">
                                    <li className="sidebarListItem">
                                        <StorefrontIcon className="sidebarIcon"/>Products
                                    </li>
                                    </Link>
                                    <li className="sidebarListItem">
                                        <AttachMoneyIcon className="sidebarIcon"/>Sales
                                    </li>
                                    <li className="sidebarListItem">
                                             <BarChartIcon className="sidebarIcon" />
                                            Reports
                                        </li>
                            </ul>
                            <h3 className="sidebarTitle">Notification</h3>
                            <ul className="sidebarList">
                                    <li className="sidebarListItem active">
                                        <MailOutlineIcon className="sidebarIcon"/>Home
                                    </li>
                                    <li className="sidebarListItem">
                                        <DynamicFeedIcon className="sidebarIcon"/>Analytics
                                    </li>
                                    <li className="sidebarListItem">
                                        <ChatBubbleOutlineIcon className="sidebarIcon"/>Sales
                                    </li>
                            </ul>
                            <h3 className="sidebarTitle">Staff</h3>
                            <ul className="sidebarList">
                                    <li className="sidebarListItem active">
                                        <LineStyleIcon className="sidebarIcon"/>Home
                                    </li>
                                    <li className="sidebarListItem">
                                        <TimelineIcon className="sidebarIcon"/>Analytics
                                    </li>
                                    <li className="sidebarListItem">
                                        <TrendingUpIcon className="sidebarIcon"/>Sales
                                    </li>
                            </ul>
                           
                 </div>
            </div>
        </div>
    )
}

export default Sidebar
