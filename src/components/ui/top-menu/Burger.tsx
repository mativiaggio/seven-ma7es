import React from "react";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  IoBag,
  IoChatbox,
  IoHome,
  IoInformation,
  IoInformationCircle,
  IoList,
  IoListCircle,
  IoLogInOutline,
  IoLogOutOutline,
  IoMenu,
  IoPeopleOutline,
  IoPersonOutline,
  IoSearchOutline,
  IoShirtOutline,
  IoTicketOutline,
} from "react-icons/io5";
import Link from "next/link";
import { Button } from "../button";
import CategoriesDropdown from "./CategoriesDropdown";

function Burger() {
  return (
    <>
      <Sheet>
        <SheetTrigger
          aria-label="Abrir menú"
          className="rounded-md transition-all bg-transparent"
        >
          <div className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-xl font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input hover:text-accent-foreground h-10 w-10 hover:bg-gray-200 text-white hover:text-black bg-transparent border-none">
            <IoMenu className="w-5 h-5" />
          </div>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle></SheetTitle>
            <SheetDescription>
              <nav>
                {/* Input */}
                {/* <div className="relative mt-14">
                  <IoSearchOutline
                    size={20}
                    className="absolute top-2 left-2"
                  />
                  <input
                    type="text"
                    placeholder="Buscar"
                    className="w-full bg-gray-50 rounded pl-10 py-1 pr-10 border-b-2 text-xl border-gray-200 focus:outline-none focus:border-black"
                  />
                </div> */}
                {/* Menú */}
                <Link
                  href="/"
                  className="flex items-center mt-5 p-2 hover:bg-gray-100 rounded transition-all"
                >
                  <IoHome size={30} />
                  <span className="ml-3 text-xl">Inicio</span>
                </Link>
                <Link
                  href="/productos"
                  className="flex items-center mt-5 p-2 hover:bg-gray-100 rounded transition-all"
                >
                  <IoBag size={30} />
                  <span className="ml-3 text-xl">Productos</span>
                </Link>
                <Link
                  href=""
                  className="flex items-center mt-5 p-2 hover:bg-gray-100 rounded transition-all"
                >
                  <IoListCircle size={30} />
                  {/* <span className="ml-3 text-xl">Categorías</span> */}
                  <CategoriesDropdown className="ml-3 text-xl" />
                </Link>
                <Link
                  href="/sobre-nosotros"
                  className="flex items-center mt-5 p-2 hover:bg-gray-100 rounded transition-all"
                >
                  <IoInformationCircle size={30} />
                  <span className="ml-3 text-xl">Sobre Nosotros</span>
                </Link>
                <Link
                  href="/sobre-nosotros"
                  className="flex items-center mt-5 p-2 hover:bg-gray-100 rounded transition-all"
                >
                  <IoChatbox size={30} />
                  <span className="ml-3 text-xl">Contáctanos</span>
                </Link>
              </nav>
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </>
  );
}

export default Burger;
