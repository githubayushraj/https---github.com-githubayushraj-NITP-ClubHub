import React from "react";
import {NavLink} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import nitp from "./image/nitp.jpg";
import "./Navbarcss.css";



const Navbar = () =>{
    return(
        <>
    <div className="main-nav">
        <div className="container-fluid nav_bg">
          <div className="row">
            <div className="col-10 mx-auto">

    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink activeClassName="menu-link" exact className="nav-link active" aria-current="page" to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink activeClassName="menu-link" className="nav-link" to="Aboutus">About us</NavLink>
        </li>
        <li className="nav-item">
          <NavLink activeClassName="menu-link" className="nav-link" to="Event">Event</NavLink>
        </li>
        <li className="nav-item">
          <NavLink activeClassName="menu-link" className="nav-link" to="Sponsor">Sponsor</NavLink>
        </li>
      </ul>
    </div>
             <div className="heading">
           <h2>
             <img src={nitp} alt="logo" className="logo-image" />
           </h2>
         </div>
  </div>
</nav>

            
</div>
</div>
</div>
</div>

         
</>
);
};

export default Navbar;