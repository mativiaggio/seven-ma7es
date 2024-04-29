/* eslint-disable @next/next/no-img-element */
import React from "react";
import "./HomePage.scss";

// Components
import CallToAction from "./CallToAction/CallToAction";

function HomePage() {
  return (
    <>
      <header>
        <div className="container-fluid">
          <div className="row">
            <div className="col-6">
              <h1 className="homepage-title">
                Encontra los <span>mejores mates</span>, al
                <span> mejor precio</span>.
              </h1>
              <CallToAction />
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default HomePage;
