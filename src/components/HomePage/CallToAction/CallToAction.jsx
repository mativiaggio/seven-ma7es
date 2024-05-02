import React from "react";
import "./CallToAction.scss";

function CallToAction({ param }) {
  return (
    <>
      <a href="#featured-products" className="button type--A">
        <div className="button__line"></div>
        <div className="button__line"></div>
        <span className="button__text">{param.title}</span>
        <div className="button__drow1"></div>
        <div className="button__drow2"></div>
      </a>
    </>
  );
}

export default CallToAction;
