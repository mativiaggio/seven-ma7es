import React from "react";
import Image from "next/image";

import "./LandingPage.scss";
import CallToAction from "../HomePage/CallToAction/CallToAction";

function LandingPage() {
  return (
    <div id="landing-page-container" className="container-fluid">
      <div className="row">
        <div className="col-12 gx-0 main-content">
          <h1 id="landing-title">sevenma7es</h1>
          <p>
            Prepárate para una experiencia única con nuestra variedad de mates y
            accesorios. Desde los clásicos hasta los más originales, cada mate
            cuenta una historia de tradición y sabor. Encuentra el tuyo y dale
            vida a tus momentos de relax con un toque de autenticidad.
          </p>

          <div className="button-container">
            <CallToAction param={{ title: "PRODUCTOS" }} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
