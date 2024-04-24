import React from "react";
import "./Navbar.scss";
import Link from "next/link";
import { BsSearch, BsCart } from "react-icons/bs";

export default function Navbar() {
  return (
    <>
      <nav
        className="navbar navbar-expand-xl navbar-dark bg-dark fixed-top"
        style={{ padding: "15px" }}
      >
        <div className="container-fluid">
          <Link className="navbar-brand" href="/">
            SEVENMA7ES
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
              <input
                id="search-input"
                className="form-control me-2"
                type="search"
                placeholder="Que andas buscando?"
                aria-label="Search"
              />
              <button
                id="search-button"
                className="btn btn-outline-light"
                type="submit"
              >
                <BsSearch />
              </button>
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
