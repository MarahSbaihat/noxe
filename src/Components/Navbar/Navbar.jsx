import React from 'react';
import style from './Navbar.module.css';
import { Outlet, Link } from "react-router-dom";

function Navbar({logInData , logout}) {
  console.log('navbar',logInData)
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-transparent fixed-top">
        <div className="container-fluid">
          <Link className="navbar-brand fw-bolder" to="#">Noxe</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {logInData? 
                <>
                  <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="Home">Home</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="#movie">Movies</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="#tv">TV Shows</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="#person">People</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="About">About</Link>
                  </li>
                </>
              :''}
            </ul>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              {!logInData?
                <>
                  <li className="nav-item">
                    <Link className="nav-link" to="Login">Login</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="Register">Register</Link>
                  </li>
                </>
              :
                <>
                  <li className="nav-item">
                    <Link className="nav-link">{logInData.name}</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" onClick={logout}>Logout</Link>
                  </li>
                </>
              }
            </ul>
          </div>
        </div>
      </nav>

    </>
  )
}

export default Navbar