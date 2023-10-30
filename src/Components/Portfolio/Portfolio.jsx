import React, { useEffect, useState } from "react";
import img1 from "../Assets/Images/poert1.png";
import img2 from "../Assets/Images/port2.png";
import img3 from "../Assets/Images/port3.png";
import style from "./Portfolio.module.css";
export default function Portfolio() {
  let [popupStyle, setPopupStyle] = useState("d-none");

  function show(e) {
    // console.log("show");
    let div = e.target;
    if (div.classList.contains("one")) {
      setPopupStyle("d-flex");
      document.getElementById("myimg").src = img1;

    } else if (div.classList.contains("two")) {
      setPopupStyle("d-flex");
      document.getElementById("myimg").src = img2;
      
    } else if (div.classList.contains("three")) {
      setPopupStyle("d-flex");
      document.getElementById("myimg").src = img3;
    }
  }

  useEffect(() => {
    document.body.addEventListener("click", function (e) {
      // let x = document.getElementById("root").id;
      console.log(e.target.id);
      if ( e.target.id == "parent") {
        setPopupStyle("d-none");
        console.log(e.target.id);
      }
    });
  }, []);
  return (
    <>
    <div className="porto">
    <h1 className="text-center text-upperCase py-3 fw-bolder ">
    PORTFOLIO COMPONENT
        </h1>
        <div className=" contactIcons d-flex justify-content-center align-items-center mb-3">
          <div className=" line  me-3" ></div>
          <i class="fa-solid fa-star"></i>
          <div className=" line  ms-3" ></div>
        </div>
    </div>
      <div className="container my-5">
        <div className="row gy-5 gx-5">
          <div className="col-md-4" onClick={(e) => show(e)}>
            <div className={`${style.item} position-relative`}>
              <div
                className={`${style.layer} one position-absolute top-0 start-0 bottom-0 end-0 rounded-3`}
              >
                <i className="one fa-solid fa-plus fa-5x  fs-1 text-white"></i>
              </div>
              <img src={img1} alt="person" className="rounded-3 w-100" />
            </div>
          </div>
          <div className="col-md-4" onClick={(e) => show(e)}>
            <div className={`${style.item} position-relative`}>
              <div
                className={`${style.layer} two position-absolute top-0 start-0 bottom-0 end-0 rounded-3`}
              >
                <i className="fa-solid fa-plus two fs-1 text-white"></i>
              </div>
              <img src={img2} alt="person" className="rounded-3 w-100" />
            </div>
          </div>
          <div className="col-md-4" onClick={(e) => show(e)}>
            <div className={`${style.item} position-relative`}>
              <div
                className={`${style.layer} three position-absolute top-0 start-0 bottom-0 end-0 rounded-3`}
              >
                <i className="fa-solid fa-plus three fs-1 text-white"></i>
              </div>
              <img src={img3} alt="person" className="rounded-3 w-100" />
            </div>
          </div>
          <div className="col-md-4" onClick={(e) => show(e)}>
            <div className={`${style.item} position-relative`}>
              <div
                className={`${style.layer} one position-absolute top-0 start-0 bottom-0 end-0 rounded-3`}
              >
                <i className="fa-solid  fa-plus one fs-1 text-white"></i>
              </div>
              <img src={img1} alt="person" className="rounded-3 w-100" />
            </div>
          </div>
          <div className="col-md-4" onClick={(e) => show(e)}>
            <div className={`${style.item} position-relative`}>
              <div
                className={`${style.layer} two position-absolute top-0 start-0 bottom-0 end-0 rounded-3`}
              >
                <i className="fa-solid fa-plus two fs-1 text-white"></i>
              </div>
              <img src={img2} alt="person" className="rounded-3 w-100" />
            </div>
          </div>
          <div className="col-md-4" onClick={(e) => show(e)}>
            <div className={`${style.item} position-relative`}>
              <div
                className={`${style.layer} three position-absolute top-0 start-0 bottom-0 end-0 rounded-3`}
              >
                <i className="fa-solid fa-plus three fs-1 text-white"></i>
              </div>
              <img src={img3} alt="person" className="rounded-3 w-100" />
            </div>
          </div>
        </div>
        <div
          id="parent"
          className={`${style.popup} ${popupStyle} justify-content-center align-items-center`}
        >
          <img id="myimg" src={img3} className="w-50 mx-auto " alt="" />
        </div>
      </div>
    </>
  );
}
