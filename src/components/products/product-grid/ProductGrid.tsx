import React from "react";
import { MongoDBProduct, Product } from "@/interfaces";
import ProductGridItem from "./ProductGridItem";

interface Props {
  products: MongoDBProduct[];
}

// interface Props {
//   products: Product[];
// }

function ProductGrid({ products }: Props) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-10 mb-10">
      {products.map((product) => (
        <ProductGridItem key={product.slug} product={product} />
      ))}
    </div>
  );
}

export default ProductGrid;
