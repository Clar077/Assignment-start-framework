import React from "react";

export default function Contacts() {
  return (
    <>
      <div className="contact">
        <h1 className="text-center text-upperCase py-3 fw-bolder ">
          CONATCT SECTION
        </h1>
        <div className=" contactIcons d-flex justify-content-center align-items-center mb-3">
          <div className=" line  me-3" ></div>
          <i class="fa-solid fa-star"></i>
          <div className=" line  ms-3" ></div>
        </div>
        <div className="container">
            <form action="" className="mx-auto w-50 p-3 mt-3">
                <input className="form-control mt-4 py-3" type="text" placeholder="UserName"/>
                <input className="form-control mt-4 py-3" type="text" placeholder="UserAge"/>
                <input className="form-control mt-4 py-3" type="text" placeholder="UserEmail"/>
                <input className="form-control mt-4 py-3" type="text" placeholder="UserPassword"/>
                <buttton className="btn my-4 text-white ">send Message</buttton>
            </form>
        </div>
      </div>
    </>
  );
}
