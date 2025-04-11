import React from "react";

const BenefitCard = ({ src, alt, heading, details }) => {
  return (
    <div>
      <div>
        <img src={src} alt={alt} /> <h3>{heading}</h3>
      </div>
      <p>{details}</p>
    </div>
  );
};

export default BenefitCard;
