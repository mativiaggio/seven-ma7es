/* eslint-disable @next/next/no-img-element */
import React from "react";
import "./HomePage.scss";

// Components
import ProductCard from "./ProductCard/ProductCard";
import CallToAction from "./CallToAction/CallToAction";

// function HomePage() {
//   return (
//     <>
//       <section>
//         <div className="container-fluid">
//           <div className="row">
//             <div className="col-12 gx-0">
//               <img
//                 src="https://dummyimage.com/1920X768/cfcfcf/000000.png&text=Banner"
//                 className="img-fluid"
//                 alt="Banner principal de la home"
//               />
//             </div>
//           </div>
//         </div>
//       </section>
//       <section>
//         <div className="container-fluid">
//           <div className="container">
//             <div className="row">
//               <div className="col-12">
//                 <h3>Busca por Categoria</h3>
//               </div>
//             </div>
//           </div>

//           {/* <div className="row">
//             <div className="col-12 text-center">
//               <h2>NUESTROS PRODUCTOS SELECCIONADOS</h2>
//             </div>
//           </div> */}

//           {/* <div className="row">
//             <ProductCard />
//             <ProductCard />
//             <ProductCard />
//           </div> */}
//         </div>
//       </section>
//     </>
//   );
// }

function HomePage() {
  return (
    <>
      <header>
        <div className="container-fluid">
          <div className="row">
            <div className="col-6">
              <h1 className="homepage-title">
                Encontra los mejores mates, al mejor precio.
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
