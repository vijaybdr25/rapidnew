// App.jsx
import React from "react";
import "./Case.css";
import l1 from "./1.png";
import l2 from "./5.png";
import l3 from "./6.png";

const cardData = [
  {
    image: l1,
    title: "STATUTORY APPROVALS SERVICES ",
    description: "CLU Services for Haryana AgroTech.",
  },
  {
    image: l2,
    title: "STATUTORY APPROVALS SERVICES",
    description:
      "Enabling Incentives from Government of India for Bright Future Solar Solutions",
  },
  {
    image: l3,
    title: "STATUTORY APPROVALS SERVICES",
    description: "CLU Services for Haryana AgroTech",
  },
];

// const Card = ({ image, title, description }) => (
//   <div className="box">
//     <img src={image} alt={title} />
//     <div className="overlay">
//       <h3>{title}</h3>
//       <p>{description}</p>
//       <a href="#">Book Now</a>
//     </div>
//   </div>
// );
const Card = ({ image, title, description }) => (
  <div className="boxc">
    <img src={image} alt={title} />
    {/* <div className="transparent-text">
      <h3>{title}</h3> 
    </div> */}
    <div className="overlay">
      <h3>{title}</h3>
      <p>{description}</p>
      <a href="#">Services</a>
    </div>
  </div>
);

const Case = () => {
  return (
    <div id="card-area">
      <div className="wrapper">
        <div className="box-area">
          {cardData.map((card, index) => (
            <Card
              key={index}
              image={card.image}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Case;
