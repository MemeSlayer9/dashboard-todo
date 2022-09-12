import React from 'react'
import './Topbar.css';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import LanguageIcon from '@material-ui/icons/Language';
import SettingsIcon from '@material-ui/icons/Settings';

function Topbar() {
    return (
        <div className="topbar">
             <div className ="topbarWrapper">
                 <div className="topLeft"> 
                 <span className="logo">Logo</span>
                 </div>
                     <div className="topRight">
                         <div className="topIconContainer">
            <NotificationsNoneIcon/>
            <span className="topIconBadge">3</span>
                                </div>
                                <div className="topIconContainer">
                                <LanguageIcon/>
            <span className="topIconBadge">3</span>
                                </div>
                                <div className="topIconContainer">
                                      <SettingsIcon/>
                                      </div>
                                      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-pgsZURnQNns7xQMmDUd3pD6ctxN1FlvSzcw7bNt4919rWlsPPGqm-6x74R2Q3j-Z1BA&usqp=CAU" alt="" className="topAvatar"/>
             </div>
                    

             </div>
        </div>
    )
}

export default Topbar
