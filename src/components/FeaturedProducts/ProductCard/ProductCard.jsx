"use client";
import React, { useState } from "react";
import Image from "next/image";
import {
  BsHeartFill,
  BsHeart,
  BsDashSquare,
  BsPlusSquare,
} from "react-icons/bs";
import "./ProductCard.scss";

function ProductCard({ product }) {
  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  const truncatedDescription =
    product.description.length > 80
      ? product.description.slice(0, 80) + "... "
      : product.description;

  return (
    <div id={product.id} className="col-4 gx-0  featured-product-card">
      <div className="card">
        {product.image && (
          <Image
            src={`/sevenmates/productos/${JSON.parse(product.image)[0]["1"]}`}
            className="card-img-top"
            alt={product.name}
            width={400}
            height={300}
          />
        )}

        <div className="card-body">
          <h5 className="card-title">{product.name}</h5>
          <p className="card-text">
            {truncatedDescription}
            <a href="#" className="">
              Ver mas
            </a>
          </p>
          <div className="buttons-container">
            <button className="btn btn-primary">Agregar al carrito</button>

            <div className="quantity-container"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
