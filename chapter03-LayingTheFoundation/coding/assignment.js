import React from  "react";
import ReactDOM from "react-dom/client";
import logo from "../images/logo.png";
import userIcon from "../images/user-icon.png";

const root = ReactDOM.createRoot(document.querySelector("#root"));

const Header = (props)=>{
    return (
        <header className="header-section">
            <div className = "left">
                <img src={logo} alt="logo"></img>
            </div>
            <div className = "center">
                <input type="text" className="input" placeholder="search anything"></input>
                <button type="submit" className="btn">Submit</button>
            </div>
            <div className = "right">
                <img src={userIcon} alt="userIcon"></img>
            </div>
        </header>
    );
};
root.render(<Header/>);