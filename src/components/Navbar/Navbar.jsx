"use client";
import React, { useState, useEffect } from "react";
import "./Navbar.scss";
import Link from "next/link";
import { BsSearch, BsCart } from "react-icons/bs";
import Image from "next/image";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav
        className={`navbar navbar-expand-xl navbar-dark ${
          scrolled ? "scrolled" : ""
        }`}
      >
        <div className="container-fluid">
          <Link className="navbar-brand" href="/">
            <Image
              className="navbar-brand-img"
              src="/sevenmates/navbar-banner-white-COPY.png"
              width={160}
              height={42}
              alt="Logo"
            />
          </Link>
          <button
            className="navbar-toggler collapsed d-flex d-xl-none flex-column justify-content-around"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="toggler-icon top-bar"></span>
            <span className="toggler-icon middle-bar"></span>
            <span className="toggler-icon bottom-bar"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" href="/">
                  INICIO
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link active dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  PRODUCTOS
                </Link>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <Link className="dropdown-item" href="/productos">
                      Todos
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="/productos/mates">
                      Mates
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="/productos/termos">
                      Termos
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="/productos/materas">
                      Materas
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      href="/productos/combos-materos"
                    >
                      Combos Materos
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  href="/como-curar-tu-mate"
                >
                  COMO CURAR TU MATE
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  href="/about"
                >
                  SOBRE NOSOTROS
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  href="/faq"
                >
                  FAQ
                </Link>
              </li>
            </ul>
            <form id="search-container" className="d-flex">
              {/* <input
                id="search-input"
                className="form-control me-2"
                type="search"
                placeholder="Buscar"
                aria-label="Search"
              />
              <button
                id="search-button"
                className="btn btn-outline-light"
                type="submit"
              >
                <BsSearch />
              </button> */}
              <div className="search-box">
                <button type="submit">
                  <BsSearch />
                </button>

                <input type="text" placeholder="Buscar" />
              </div>
              <li
                id="cart-button"
                className="btn btn-outline-light"
                type="submit"
              >
                <Link
                  className="nav-link active"
                  aria-current="page"
                  href="/cart"
                >
                  <BsCart />
                </Link>
              </li>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}
