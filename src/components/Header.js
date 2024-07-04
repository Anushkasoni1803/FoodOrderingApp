import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header=()=>{
    const[loginBtn, setloginBtn]=useState("Login")

    return(
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL}></img>
            </div>
            <div className="nav-items">
            <ul>
                <li> <Link className="head" to="/"  >Home </Link> </li>
                <li> <Link className="head" to="/about">About Us </Link> </li>
                <li> <Link className="head" to="/ContactUs">Contact Us </Link> </li>
                <li> <Link className="head" to="/Cart">Cart </Link> </li>

                <button className="login-btn" onClick={ ()=>{
                    loginBtn === "Login" ? setloginBtn("Logout") : setloginBtn("Login");
                }                    
                }> {loginBtn}
                </button>
            </ul>
            </div>
        </div>
    )
}
export default Header;