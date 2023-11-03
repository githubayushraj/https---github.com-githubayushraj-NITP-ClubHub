import React from "react";
import nitp from "./image/nitp.jpg"
import  "./Navbarcss.css"

const Navbar = () =>{
    return(
        <>
        <nav className="main-nav">
            <div className="menu-link">
                <ul>
                    <li>
                        <a href="#">About us</a>
                    </li>
                    <li>
                    <a href="#">Event</a>
                    </li>
                    <li>
                    <a href="#">Sponser</a>
                    </li>
                </ul>
            </div>
            <div className="heading">
            <h2>
                <img src={nitp} alt="logo" className="logo-image"/>
            </h2>
            </div> 
        </nav>
        <di>
            <h1 className="body">H!!...</h1>
        </di>
        </>
    )
}
export default Navbar;