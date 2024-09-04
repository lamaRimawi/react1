import React, {useContext} from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import '../../index.css'
import {useState} from "react";
import {NavLink} from "react-router-dom";
import {StoreContext} from "../../context/StoreContext.jsx";


function Navbar() {
    const [menu,setMenu]=useState("Home")


  return (

          <nav className="navbar navbar-expand-lg navbar bg shadow ">
              <div className="container-fluid">
                  <NavLink to={'/'} className="navbar-brand" >
                      <img src={assets.logo} alt="logo" className={'logoo'} />
                  </NavLink>
                  <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                          data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                          aria-expanded="false" aria-label="Toggle navigation">
                      <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="collapse navbar-collapse" id="navbarSupportedContent">
                      <ul className="navbar-nav ms-auto me-auto mb-2 mb-lg-0">
                          <li onClick={()=>setMenu("Home")} className={`nav-item ${menu === "Home" ? 'active' : ''}`}>
                              <NavLink className="nav-link " aria-current="page" to={'/'} >Home</NavLink>
                          </li>
                          <li className={`nav-item ${menu === "menu" ? 'active' : ''}`} onClick={()=>setMenu("menu")}>
                              <a className="nav-link" href={'#ExploreMenu'} >menu</a>
                          </li>

                          <li className={`nav-item ${menu === "mobile-app" ? 'active' : ''}`} onClick={()=>setMenu("mobile-app")}>
                              <a className="nav-link"  href={'#app_download'}>mobile-app</a>
                          </li>
                          <li
                              className={`nav-item ${menu === "contact us" ? 'active' : ''}`}
                              onClick={() => setMenu("contact us")}>
                              <a className="nav-link"  href={'#footer'}>Contact Us</a>
                          </li>

                      </ul>
                      <div className="d-flex ">
                          <img src={assets.search_icon} className={'me-4'}/>
                          <div className={'me-4 nav-right'} >
                              <NavLink to={'/LoginForm'}>
                          <img src={assets.basket_icon}/>
                              <div className={"dot" }></div></NavLink>
                              </div>
                          <button className="btn btn-outline-success me-3 text-capitalize" type="submit">sign in</button>

                      </div>
                  </div>
              </div>

          </nav>


  )
}

export default Navbar
