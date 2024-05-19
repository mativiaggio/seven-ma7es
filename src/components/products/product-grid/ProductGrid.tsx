import React from "react";
import { MongoDBProduct, Product } from "@/interfaces";
import ProductGridItem from "./ProductGridItem";

interface Props {
  products: MongoDBProduct[];
}

function ProductGrid({ products }: Props) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 2xl:grid-cols-3 gap-10 mb-10">
      {products.map((product) => (
        <ProductGridItem key={product.slug} product={product} />
      ))}
    </div>
  );
}

export default ProductGrid;
