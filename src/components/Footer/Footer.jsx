import React from "react";
import Link from "next/link";
import "./Footer.scss";

// Icons
import { BsTwitter, BsInstagram, BsFacebook, BsGithub } from "react-icons/bs";

export default function Footer() {
  return (
    <footer className="footer-14398">
      <div className="container">
        <div className="row mb-5 d-flex justify-content-between">
          <div className="col-md-3">
            <Link href="/" className="footer-site-logo">
              SEVENMA7ES
            </Link>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit officiis
              corporis optio natus.{" "}
            </p>
          </div>
          <div className="col-md-2 ml-auto">
            <h3>Shop</h3>
            <ul className="list-unstyled links">
              <li>
                <Link href="/">Sell online</Link>
              </li>
              <li>
                <Link href="/">Features</Link>
              </li>
              <li>
                <Link href="/">Examples</Link>
              </li>
              <li>
                <Link href="/">Website editors</Link>
              </li>
              <li>
                <Link href="/">Online retail</Link>
              </li>
            </ul>
          </div>
          <div className="col-md-2 ml-auto">
            <h3>Press</h3>
            <ul className="list-unstyled links">
              <li>
                <Link href="/">Events</Link>
              </li>
              <li>
                <Link href="/">News</Link>
              </li>
              <li>
                <Link href="/">Awards</Link>
              </li>
              <li>
                <Link href="/">Testimonials</Link>
              </li>
              <li>
                <Link href="/">Online retail</Link>
              </li>
            </ul>
          </div>
          <div className="col-md-2 ml-auto">
            <h3>About</h3>
            <ul className="list-unstyled links">
              <li>
                <Link href="/">Contact</Link>
              </li>
              <li>
                <Link href="/">Services</Link>
              </li>
              <li>
                <Link href="/">Team</Link>
              </li>
              <li>
                <Link href="/">Career</Link>
              </li>
              <li>
                <Link href="/">Contacts</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="row mb-4">
          <div className="col-12 pb-4">
            <div className="line"></div>
          </div>
          <div className="col-md-6 text-md-left">
            <ul className="list-unstyled link-menu nav-left">
              <li>
                <Link href="/">Privacy Policy</Link>
              </li>
              <li>
                <Link href="/">Terms &amp; Conditions</Link>
              </li>
              <li>
                <Link href="/">Code of Conduct</Link>
              </li>
            </ul>
          </div>
          <div className="col-md-6 text-md-right">
            <ul className="list-unstyled social nav-right">
              <li>
                <Link href="/">
                  <BsTwitter />
                </Link>
              </li>
              <li>
                <Link href="/">
                  <BsInstagram />
                </Link>
              </li>
              <li>
                <Link href="/">
                  <BsFacebook />
                </Link>
              </li>
              <li>
                <Link href="/">
                  <BsGithub />
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col-md-7">
            <p>
              <small>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptate, fuga. Ex at maxime eum odio quibusdam pariatur
                expedita explicabo harum! Consectetur ducimus delectus nemo,
                totam odit!
              </small>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
