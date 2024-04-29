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

  return (
    <div id={product.id} className="col-md-4  featured-product-card">
      <div className="img-container">
        {product.image && (
          <Image
            src={require(`/sevenmates/products/${
              JSON.parse(product.image)[0]["1"]
            }`)}
            className="card-img-top"
            alt={product.name}
            width={100}
            height={100}
          />
        )}
      </div>
      <div className="header-container container-fluid">
        <div className="row">
          <div className="col-6 gx-0 product-name">{product.name}</div>
          <div className="col-6 gx-0 product-buttons">
            <button onClick={toggleFavorite} className="heart-button">
              {isFavorite ? (
                <BsHeartFill className="heart-icon" />
              ) : (
                <BsHeart className="heart-icon" />
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
