import Link from "next/link";
import React from "react";
import Logo from "../top-menu/Logo";
import { SearchIcon } from "lucide-react";
import { Input } from "../input";
import { Button } from "../button";

function Footer() {
  return (
    <div className="h-[50vh] bg-[#121212] p-5 flex justify-between">
      <div className="w-1/3">
        <Link href={"/"}>
          <Logo />
        </Link>
      </div>
      <div className="flex flex-col sm:flex-row justify-center text-3xl px-0 py-3 w-1/3 sm:w-1/2">
        <div className="flex rounded-md shadow-sm ring-1 ring-offset ring-gray-300 dark:ring-gray-950 focus-within:ring-2 focus-within:ring-offset focus-within:ring-black  overflow-hidden bg-white dark:bg-[#282828] w-full mb-2 mr-2 h-fit">
          <span className="flex select-none items-center pl-3 text-gray-500 sm:text-sm">
            <SearchIcon />
          </span>
          <Input
            type="text"
            name="searchbar"
            id="main-searchbar"
            autoComplete="main-searchbar"
            className="block flex-1 border-0 bg-transparent py-1.5 pl-1  placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 focus-visible:ring-0 focus-visible:ring-offset-0 dark:text-white"
            placeholder="Decinos lo que estás buscando."
          />
        </div>
        <Button className="bg-white text-[#121212] hover:bg-gray-200">
          Buscar
        </Button>
      </div>
      <div className="w-1/3"></div>
    </div>
  );
}

export default Footer;
