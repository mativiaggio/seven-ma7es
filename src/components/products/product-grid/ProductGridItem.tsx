"use client";
import React, { useState } from "react";
import { MongoDBProduct, Product } from "@/interfaces";
import Image from "next/image";
import Link from "next/link";
import { IoLogoUsd } from "react-icons/io5";

interface Props {
  product: MongoDBProduct;
}

function ProductGridItem({ product }: Props) {
  const [productImage, setProductImage] = useState(product.images[0]);

  return (
    <div className="overflow-hidden fade-in flex bg-gray-200 dark:bg-gray-900">
      <Link href={`/product/${product.slug}`}>
        <Image
          src={productImage}
          alt={product.name}
          // onMouseEnter={() => setProductImage("/sevenmates/product-mock2.jpg")}
          // onMouseLeave={() => setProductImage("/sevenmates/product-mock.jpg")}
          onMouseEnter={() => setProductImage(`${product.images[1]}`)}
          onMouseLeave={() => setProductImage(`${product.images[0]}`)}
          className="w-full object-cover max-h-[500px] max-w-[500px]"
          width={500}
          height={500}
        />
      </Link>

      <div className="p-4 flex flex-col w-full justify-between">
        <div id="product-info">
          <Link className="text-xl font-bold" href={`/product/${product.slug}`}>
            {product.name}
          </Link>

          <p className="text-sm text-gray-800 dark:text-gray-200">
            {product.description}
          </p>
        </div>
        <div className="w-full">
          <span className="text-xl font-bold flex items-center">
            <IoLogoUsd className="mr-1 h-6 w-6" />
            {product.price}
          </span>
        </div>
      </div>
    </div>
  );
}

export default ProductGridItem;
