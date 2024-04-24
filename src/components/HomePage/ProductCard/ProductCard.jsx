import React from "react";
import Image from "next/image";

function ProductCard() {
  return (
    <div className="col-xl-4 d-flex justify-content-center align-items-center pb-4">
      <Image
        src="https://dummyimage.com/500X500/cfcfcf/000000.png&text=Prod"
        className="img-fluid"
        alt="Banner principal de la home"
        width={500}
        height={500}
      />
    </div>
  );
}

export default ProductCard;
