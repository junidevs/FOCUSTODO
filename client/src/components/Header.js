import React from 'react'
import logoutIcon from '../styles/logoutIcon.svg';
import {Link} from 'react-router-dom';

const Header = ({username , signOutGoogleHandler})=> {
    return (
        <div className="header_Container">
         <h1><Link className="__title_Info" to="/">FOCUSTODO</Link></h1>
            <div className="info_Container">
                <h3 className="__usernameInfo">Hello {username} 🏴</h3>
                <button onClick={signOutGoogleHandler} className="__signOutButton">Sign Out<img src={logoutIcon} alt="logout icon"/></button>
            </div>
        </div>
    )
}
export default Header;
