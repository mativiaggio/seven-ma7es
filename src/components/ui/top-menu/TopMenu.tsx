import React from "react";
import Link from "next/link";
import { main_font } from "@/config/fonts";
import { IoCartOutline, IoSearchOutline, IoMenu } from "react-icons/io5";

import { Button } from "@/components/ui/button";
import CategoriesDropdown from "./CategoriesDropdown";

function TopMenu() {
  return (
    <nav className="flex px-5 justify-between items-center w-full">
      <div>
        <Link href={"/"}>
          <span className={`${main_font.className} antialised font-bold`}>
            SEVENMATES
          </span>
          <span> | Shop</span>
        </Link>
      </div>

      <div className="hidden sm:block">
        <Link
          className="p-2 m-2 rounded-md transition-all hover:bg-gray-200"
          href={"/"}
        >
          Inicio
        </Link>
        {/* <Link
          className="p-2 m-2 rounded-md transition-all hover:bg-gray-200"
          href={"/category/mates"}
        >
          Mates
        </Link> */}
        <Link
          className="p-2 m-2 rounded-md transition-all hover:bg-gray-200"
          href={""}
        >
          <CategoriesDropdown />
        </Link>
      </div>
      <div className="flex items-center">
        <Link className="mx-2" href={"/search"}>
          <IoSearchOutline className="w-5 h-5" />
        </Link>

        <Link className="mx-2" href={"/cart"}>
          <div className="relative">
            <span className="absolute text-xs rounded-full px-1 font-bold -top-2 -right-2 bg-black text-white">
              3
            </span>
            <IoCartOutline className="w-5 h-5" />
          </div>
        </Link>

        <Button className="rounded-md transition-all bg-transparent hover:bg-gray-200 text-black">
          <IoMenu className="w-5 h-5" />
        </Button>
      </div>
    </nav>
  );
}

export default TopMenu;
