"use client";
import React, { useState } from "react";
import { MongoDBProduct, Product } from "@/interfaces";
import Image from "next/image";
import Link from "next/link";

interface Props {
  product: MongoDBProduct;
}

function ProductGridItem({ product }: Props) {
  const [productImage, setProductImage] = useState(
    "/sevenmates/product-mock.jpg"
  );

  return (
    <div className="rounded-sm overflow-hidden fade-in flex">
      {/* <Image
        src={product.images[0]}
        alt={product.name}
        className="w-full object-cover"
        width={500}
        height={500}
      /> */}
      <Link href={`/product/${product.slug}`}>
        <Image
          src={productImage}
          alt={product.name}
          onMouseEnter={() => setProductImage("/sevenmates/product-mock2.jpg")}
          onMouseLeave={() => setProductImage("/sevenmates/product-mock.jpg")}
          className="w-full object-cover rounded-sm max-h-[500px] max-w-[500px]"
          width={500}
          height={500}
        />
      </Link>

      <div className="p-4 flex flex-col w-full">
        <Link href={`/product/${product.slug}`}>{product.name}</Link>
        <span className="font-bold">${product.price}</span>
      </div>
    </div>
  );
}

export default ProductGridItem;
