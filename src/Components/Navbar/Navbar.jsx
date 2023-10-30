import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
  render() {
    return <>
<nav className="navbar navbar-expand-lg py-4">
  <div className="container">
    <Link className="navbar-brand  text-white fs-1 fw-bolder" to="">START FRAMEWORK</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0" >
        <li className="nav-item">
          <Link className="nav-link fs-5 p-2 active text-white text-uppercase  fw-bolder" aria-current="page"  activeClassName="active" to="/About" >about</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link fs-5 p-2 text-white text-uppercase fw-bolder"to="/portfolio">Portfolio</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link fs-5 p-2  text-white text-uppercase fw-bolder" to="/Contacts">Contact</Link>
        </li>
        
      </ul>
    </div>
  </div>
</nav>    
    
    
    
    </>
  }
}


// import { Link } from 'react-router-dom';
// import React from 'react';

// export default function Navbar () {
//   return <>
//   <div >
//       <nav className="navbar navbar-expand-lg">
//       <div className="container fs-5 mb-lg-0 fw-bolder">
//      <Link className="navbar-brand fw-bolder" to="">Start Framework</Link>
//      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
//        <span className="navbar-toggler-icon"></span>
//      </button>
//      <div className="collapse navbar-collapse " id="navbarNavDropdown">
//        <ul className="navbar-nav mb-2 mb-lg-0 fs-5 fw-bold p-3 m-3 ms-auto">
//          <li className="nav-item">
//            <Link className="nav-link active text-uppercase fw-bolder" aria-current="page" to="about">About</Link>
//          </li>
//          <li className="nav-item">
//            <Link className="nav-link active text-uppercase fw-bolder" to="portfolio">Portfolio</Link>
//          </li>
//          <li className="nav-item">
//            <Link className="nav-link active text-uppercase fw-bolder" to="contacts">Contact</Link>
//          </li>
        
//        </ul>
//      </div>
//      </div>
//  </nav>
//  </div>
//     </>

// }