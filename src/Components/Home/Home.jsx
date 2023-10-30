import React from "react";
import ava from "../Assets/Images/avataaars.svg";

export default function Home() {
  return (
    <>
      
        <div className="home text-center text-white py-3">
          <div className="p-2">
            <img src={ava} alt="person" className="w-25 mb-4" />
          </div>
          <h1 className=" fw-bolder mb-3">START FRAMEWORK</h1>
          <div className=" d-flex align-items-center justify-content-center mb-3">
            <div className=" line bg-white me-3"></div>
            <i class="fa-solid fa-star"></i>
            <div className=" line bg-white ms-3"></div>
          </div>
          <p>Graphic Artist - Web Designer - Illustrator</p>
        </div>
      
    </>
  );
}

// import React, { Component } from 'react';
// import { NavLink } from 'react-router-dom';
// import Navbar from './Components/Navbar/Navbar';
// import Footer from '../Footer/Footer';

// export default class Home extends Component {
//     render() {
//         return (
//             <>
//                 <Navbar/>
//                 <div className="home text-center text-white py-3">
// <img src={src/Components/Images/avataaars.svg} alt="person" className=' mb-4' />
// <h1 className=' fw-bolder mb-3'>START FRAMEWORK</h1>
// <div className=' d-flex align-items-center justify-content-center mb-3'>
// <div className=' line bg-white me-3'></div>
// <i class="fa-solid fa-star"></i>
// <div className=' line bg-white ms-3'></div>
// </div>
// <p>Graphic Artist - Web Designer - Illustrator</p>
// </div>

//       <Footer/>
//             </>
//         );
//     }
// }
