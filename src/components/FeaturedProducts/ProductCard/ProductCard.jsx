"use client";
import React, { useState } from "react";
import Image from "next/image";
import { BsHeartFill, BsHeart } from "react-icons/bs";
import "./ProductCard.scss";

function ProductCard({ product }) {
  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  const truncatedDescription =
    product.description.length > 200
      ? product.description.slice(0, 200) + "..."
      : product.description;

  return (
    <div id={product.id} className="col-6 gx-0  featured-product-card">
      <div className="img-container">
        {product.image && (
          <Image
            src={`/sevenmates/productos/${JSON.parse(product.image)[0]["1"]}`}
            className="card-img-top"
            alt={product.name}
            width={200}
            height={299}
          />
        )}
      </div>
      <div className="header-container">
        <div className="container">
          <div className="row">
            <div className="col-10 gx-0 product-name">{product.name}</div>
            <div className="col-2 gx-0 product-buttons">
              <button onClick={toggleFavorite} className="heart-button">
                {isFavorite ? (
                  <BsHeartFill className="heart-icon" />
                ) : (
                  <BsHeart className="heart-icon" />
                )}
              </button>
            </div>
          </div>
          <div className="row">
            <div className="col-12 gx-0">
              <p>{truncatedDescription}</p>
            </div>
          </div>
        </div>
        <div className="container price-container">price</div>
      </div>
    </div>
  );
}

export default ProductCard;
