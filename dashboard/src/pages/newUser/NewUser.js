import React from 'react'
import './NewUser.css'

function NewUser() {
    return (
        <div className="newUser">
          <h1 className="newUserTitle">New User</h1>
          <form className="newUserForm"> 
            <div className="newUserItem">
                <label>Username</label>
                <input type="text" placeholder="john"></input>
            </div>
            <div className="newUserItem">
                <label>Full Name</label>
                <input type="text" placeholder="john smith"></input>
            </div>
            <div className="newUserItem">
                <label>Email</label>
                <input type="email" placeholder="john@gmail.com"></input>
            </div>
            <div className="newUserItem">
                <label>Password</label>
                <input type="password" placeholder="password"></input>
            </div>
            <div className="newUserItem">
                <label>Phone</label>
                <input type="text" placeholder="+639123456"></input>
            </div>
            <div className="newUserItem">
                <label>Address</label>
                <input type="text" placeholder="Calinan | Davao"></input>
            </div>
            <div className="newUserItem">
                <label>Gender</label>
                <div className="newUserGender">
                <input type="radio" name="gender" id="male" value="male"></input>
                <label for="male">Male</label>
                <input type="radio" name="gender" id="female" value="female"></input>
                <label for="female">Female</label>
                <input type="radio" name="gender" id="others" value="other"></input>
                <label for="other">Other</label>
            </div>
            </div>
            <div className="newUserItem">
                <label>Active</label>
                <select className="newUserSelect" name="active" id="active">
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                </select>
            </div>
            <button className="newUserButton">Create</button>
          </form>
        </div>
    )
}

export default NewUser
