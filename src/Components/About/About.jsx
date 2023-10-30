import React from "react";

export default function About() {
  return (
    <>
      <div className="aboutContainer text-white d-felx flex-column justify-contnet align-items-center">
        <div className="container  py-5 mx-5">
          <div className="text-center mb-4 pt-5">
            <h2 className="text-center fs-1 fw-bolder">ABOUT COMPONENT</h2>
            <div className=" d-flex align-items-center justify-content-center mb-3">
              <div className=" line bg-white me-3"></div>
              <i class="fa-solid fa-star"></i>
              <div className=" line bg-white ms-3"></div>
            </div>
          </div>
          <div className="row pb-5">
            <div className="col-md-6">
              <div className="par">
              <p>
                Freelancer is a free bootstrap theme created by Route. The
                download includes the complete source files including HTML, CSS,
                and JavaScript as well as optional SASS stylesheets for easy
                customization.
              </p>
              </div>
              </div>
            
            <div className="col-md-6">
            <div className="par">
              <p>
                Freelancer is a free bootstrap theme created by Route. The
                download includes the complete source files including HTML, CSS,
                and JavaScript as well as optional SASS stylesheets for easy
                customization.
              </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
