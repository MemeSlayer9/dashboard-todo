import React from 'react'
import './User.css'
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import LocationSearchingIcon from '@material-ui/icons/LocationSearching';
import PublishIcon from '@material-ui/icons/Publish';
import { Link } from 'react-router-dom';



function User() {
    return (
        <div className="user">
                <div className="userTitleContainer">
                    <h1 className="userTitle">Edit User</h1>
                    <Link to="/newUser">
                    <button className="userAddButton">Create</button>
                    </Link>
                  
                </div>
                <div className="userContainer">
                    <div className="userShow">
                        <div className="userShowTop">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBWYW1wo4eELCHlJVw-iiAvgiMxUVe3hdE4yvRN2l8cuBwWxwABjoMG4eR5r7xCao_k20&usqp=CAU"
                             alt="" className="userShowImg"/>
                             <div className="userShowTopTitle">
                                 <span className="userShowUsername">Anna Becker</span>
                                 <span className="userShowUserTitle">Software Engineer</span>
                             </div>
                             </div>
                        <div className="userShowBottom">
                            <span className="userShowTitle">Account Details</span>
                            <div className="userShowInfo">
                            <PermIdentityIcon className="userShowIcon"/>
                            <span className="userShowInfoTitle">annabeck99</span>
                        </div>
                    </div>
                    <div className="userShowInfo">
                            <CalendarTodayIcon className="userShowIcon"/>
                            <span className="userShowInfoTitle">10.12.1999</span>
                        </div>
                        <span className="userShowTitle">Contact Details</span>
                        <div className="userShowInfo">
                            <PhoneAndroidIcon className="userShowIcon"/>
                            <span className="userShowInfoTitle">+6391234567</span>
                        </div>
                        <div className="userShowInfo">
                            <MailOutlineIcon className="userShowIcon"/>
                            <span className="userShowInfoTitle">annabeck@gmail.com</span>
                        </div>
                        <div className="userShowInfo">
                            <LocationSearchingIcon className="userShowIcon"/>
                            <span className="userShowInfoTitle">Calinan Davao | Philipines</span>
                        </div>
                    </div>
                    <div className="userUpdate">
                        <span className="userUpdateTitle">Edit</span>
                        <form className="userUpdateForm">
                                <div className="userUpdateLeft">
                                    <div className="userUpdateItem">
                                        <label>User</label>
                                        <input
                                            type="text"
                                            placeholder="anna"
                                            className="userUpdateInput"
                                        />
                                    </div>
                                    <div className="userUpdateItem">
                <label>Email</label>
                <input
                  type="text"
                  placeholder="annabeck99@gmail.com"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Phone</label>
                <input
                  type="text"
                  placeholder="+1 123 456 67"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Address</label>
                <input
                  type="text"
                  placeholder="New York | USA"
                  className="userUpdateInput"
                />
              </div>
                                </div>
                                <div className="userUpdateRight">
              <div className="userUpdateUpload">
                <img
                  className="userUpdateImg"
                  src="https://i.pinimg.com/736x/97/1b/25/971b2579ec61f5d960da493005f3aa0f.jpg"
                  alt=""
                />
                <label htmlFor="file">
                  <PublishIcon className="userUpdateIcon" />
                </label>
                <input type="file" id="file" style={{ display: "none" }} />
              </div>
              <button className="userUpdateButton">Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
    )
}

export default User
