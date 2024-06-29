import React from "react";

const CarasolSqueltee = ({ img }) => {
  return (
    <div>
      <div className="carousel-item w-auto">
        <img src={img} className="rounded-box w-full h-auto" />
      </div>
    </div>
  );
};

export default CarasolSqueltee;
