import React from "react";
import { MongoDBProduct } from "@/interfaces";
import ProductGridItem from "./ProductGridItem";

interface Props {
  products: MongoDBProduct[];
}

function ProductGrid({ products }: Props) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-10 mb-10">
      {products.map((product) => (
        <ProductGridItem key={product._id} product={product} />
      ))}
    </div>
  );
}

export default ProductGrid;
