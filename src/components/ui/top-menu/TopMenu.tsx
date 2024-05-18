// "use client";

import React from "react";
import Link from "next/link";
import { IoCartOutline, IoSearchOutline, IoMenu } from "react-icons/io5";
import CategoriesDropdown from "./CategoriesDropdown";
import Aside from "./Aside";
import Image from "next/image";
import { ModeToggle } from "../mode-toggle";
import Logo from "./Logo";

function TopMenu() {
  return (
    <nav className="flex px-5 py-1 justify-between items-center w-full bg-black">
      <div>
        <Link href={"/"}>
          <Logo />
        </Link>
      </div>

      <div className="hidden sm:block">
        {/* <Link
          className="m-2 rounded-md transition-all hover:bg-gray-200 dark:hover:bg-black dark:text-white px-2 py-1.5"
          href={"/"}
        > */}
        <Link
          className="m-2 rounded-md transition-all hover:bg-gray-200 text-white hover:text-black px-2 py-1.5"
          href={"/"}
        >
          Inicio
        </Link>
        <Link
          className="m-2 rounded-md transition-all hover:bg-gray-200 text-white hover:text-black px-2 py-1.5"
          href={"/productos"}
        >
          Productos
        </Link>
        {/* <Link
          className="m-2 rounded-md transition-all hover:bg-gray-200 dark:hover:bg-black dark:text-white px-2 py-1.5"
          href={""}
        > */}
        <Link
          className="m-2 rounded-md transition-all hover:bg-gray-200 text-white hover:text-black px-2 py-1.5"
          href={""}
        >
          <CategoriesDropdown />
        </Link>
        <Link
          className="m-2 rounded-md transition-all hover:bg-gray-200 text-white hover:text-black px-2 py-1.5"
          href={"/sobre-nosotros"}
        >
          Sobre Nosotros
        </Link>
        <Link
          className="m-2 rounded-md transition-all hover:bg-gray-200 text-white hover:text-black px-2 py-1.5"
          href={"/contactanos"}
        >
          Contáctanos
        </Link>
      </div>
      <div className="flex items-center gap-4">
        <Link className="mx-2" href={"/search"}>
          <IoSearchOutline className="w-5 h-5 text-white" />
        </Link>

        <Link className="mx-2" href={"/cart"}>
          <div className="relative">
            {/* <span className="absolute text-xs rounded-full px-1 font-bold -top-2 -right-2 bg-black text-white dark:bg-white dark:text-black"> */}
            <span className="absolute text-xs rounded-full px-1 font-bold -top-2 -right-2  bg-white text-black">
              3
            </span>
            <IoCartOutline className="w-5 h-5 text-white" />
          </div>
        </Link>

        {/* <Button className="rounded-md transition-all bg-transparent hover:bg-gray-200 text-black"> */}
        <ModeToggle />
        <Aside />
        {/* </Button> */}
      </div>
    </nav>
  );
}

export default TopMenu;
