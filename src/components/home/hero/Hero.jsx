import React from "react";
import Heading from "../../common/heading/Heading";
import "./Hero.css";

const Hero = () => {
  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="row">
            <Heading
              subtitle="WELCOME TO RAPID CONSULTING"
              title="Premier Business Consulting Expertise"
            />
            <p>
              We provide tailored consulting solutions that empower businesses
              to achieve sustainable growth and operational excellence.
            </p>
            <div className="button">
              <button className="primary-btn">
                GET STARTED NOW <i className="fa fa-long-arrow-alt-right"></i>
              </button>
              <button>
                Services <i className="fa fa-long-arrow-alt-right"></i>
              </button>
            </div>
          </div>
        </div>
      </section>

      <div className="margin"></div>
    </>
  );
};

export default Hero;
