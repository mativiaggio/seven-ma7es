import React from "react";
import Link from "next/link";
import { IoCartOutline, IoSearchOutline, IoMenu } from "react-icons/io5";
import CategoriesDropdown from "./CategoriesDropdown";
import Aside from "./Aside";
import { ModeToggle } from "../mode-toggle";
import Logo from "./Logo";
import Burger from "./Burger";

function TopMenu() {
  return (
    <nav className=" bg-[#121212] h-fit min-h-[15vh]">
      <div className="flex px-5 py-1 justify-center items-center w-full">
        <Link href={"/"}>
          <Logo />
        </Link>
      </div>
      <div className="flex py-1 justify-center sm:justify-between items-center w-full">
        <div className="hidden sm:block">
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
        <div className="flex items-center gap-4 mx-2">
          {/* <Link className="mx-2 flex text-white" href={"/search"}>
            <IoSearchOutline className="w-5 h-5 text-white" />
            Buscar
          </Link> */}

          <ModeToggle />
          <Link className="mx-2" href={"/cart"}>
            <div className="relative">
              <span className="absolute text-xs rounded-full px-1 font-bold -top-2 -right-2  bg-white text-black">
                3
              </span>
              <IoCartOutline className="w-5 h-5 text-white" />
            </div>
          </Link>
          <Aside />
          <div className="block sm:hidden">
            <Burger />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default TopMenu;
