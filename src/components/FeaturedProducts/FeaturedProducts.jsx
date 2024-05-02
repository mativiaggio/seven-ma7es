import React from "react";
import "./FeaturedProducts.scss";
import Image from "next/image";

// Components
import ProductCard from "./ProductCard/ProductCard";

import { prisma } from "@/libs/prisma";
async function featured_products() {
  return await prisma.products.findMany({
    where: {
      featured: true,
    },
  });
}

async function FeaturedProducts() {
  const products = await featured_products();
  // console.log(products);
  return (
    <>
      <section id="featured-products">
        <div className="filter">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12 gx-0 title-container">
                <div className="title">
                  <h2>NUESTROS PRODUCTOS SELECCIONADOS</h2>
                  <div id="title-underline"></div>
                </div>
              </div>
              <div className="row products-row">
                {products.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default FeaturedProducts;
