import React from "react";
import Heading from "../common/heading/Heading";
import l1 from "./Meet/1.png";
import l2 from "./Meet/2.png";
import l3 from "./Meet/3.png";
import l4 from "./Meet/4.png";
import l5 from "./Meet/5.png";
import l6 from "./Meet/6.png";

const Hprice = () => {
  return (
    <>
      <section className="hprice padding">
        <Heading subtitle="" title="Meet Our Clients" />
        <div>
          <section className="marquee">
            <div className="container">
              <div className="marquee-images">
                <img src="./PNB.png" alt="Partner 1" />
                <img src="./HDFC.png" alt="Partner 2" />
                <img src="./AXIS.png" alt="Partner 3" />
                <img src="./Kotak.png" alt="Partner 4" />
                <img src="./BOI.png" alt="Partner 5" />
                <img src={l1} alt="Partner 6" />
                <img src={l2} alt="Partner 7" />
                <img src={l3} alt="Partner 8" />
                <img src={l4} alt="Partner 9" />
                <img src={l5} alt="Partner 10" />
                <img src={l6} alt="Partner 11" />
              </div>
            </div>
          </section>
        </div>
      </section>
    </>
  );
};

export default Hprice;
