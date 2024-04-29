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
  console.log(products);
  return (
    <>
      <section id="featured-products">
        <div className="container">
          <div className="row">
            <div className="col-12 gx-0 title">
              <h2>NUESTROS PRODUCTOS SELECCIONADOS</h2>
            </div>
            <div className="row">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default FeaturedProducts;
