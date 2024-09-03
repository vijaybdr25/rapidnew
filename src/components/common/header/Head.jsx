import React from "react";
import logo from "./logo.png";

const Head = () => {
  return (
    <>
      <section className="head">
        <div className="container flexSB">
          <div className="logo">
            <h1>Rapid Consulting</h1>
            {/* <span>Advancing Businesses with Precision</span> */}
            <img
              src={logo}
              alt="Company Logo"
              style={{ width: "350px", height: "auto" }}
            />
          </div>

          <div className="social">
            <i className="fab fa-facebook-f icon"></i>
            <i className="fab fa-instagram icon"></i>
            <i className="fab fa-twitter icon"></i>
            <i className="fab fa-youtube icon"></i>
          </div>
        </div>
      </section>
    </>
  );
};

export default Head;
