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
  IoLogInOutline,
  IoLogOutOutline,
  IoMenu,
  IoPeopleOutline,
  IoPerson,
  IoPersonOutline,
  IoSearchOutline,
  IoShirtOutline,
  IoTicketOutline,
} from "react-icons/io5";
import Link from "next/link";
import { Button } from "../button";

function Aside() {
  return (
    <>
      <Sheet>
        <SheetTrigger
          aria-label="Abrir menú"
          className="rounded-md transition-all bg-transparent"
        >
          <div className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-xl font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input hover:text-accent-foreground h-10 w-10 hover:bg-gray-200 text-white hover:text-black bg-transparent border-none">
            <IoPerson className="w-5 h-5" />
          </div>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle></SheetTitle>
            <SheetDescription>
              <nav>
                {/* Input */}
                <div className="relative mt-14">
                  <IoSearchOutline
                    size={20}
                    className="absolute top-2 left-2"
                  />
                  <input
                    type="text"
                    placeholder="Buscar"
                    className="w-full bg-gray-50 dark:bg-[#282828] dark:text-white rounded pl-10 py-1 pr-10 border-b-2 text-xl border-gray-200 focus:outline-none focus:border-black"
                  />
                </div>
                {/* Menú */}
                <Link
                  href="/"
                  className="flex items-center mt-5 p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded transition-all"
                >
                  <IoPersonOutline size={30} className="dark:text-white" />
                  <span className="ml-3 text-xl dark:text-white">Perfil</span>
                </Link>
                <Link
                  href="/"
                  className="flex items-center mt-5 p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded transition-all"
                >
                  <IoTicketOutline size={30} className="dark:text-white" />
                  <span className="ml-3 text-xl dark:text-white">Ordenes</span>
                </Link>
                <Link
                  href="/"
                  className="flex items-center mt-5 p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded transition-all"
                >
                  <IoLogInOutline size={30} className="dark:text-white" />
                  <span className="ml-3 text-xl dark:text-white">Ingresar</span>
                </Link>
                <Link
                  href="/"
                  className="flex items-center mt-5 p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded transition-all"
                >
                  <IoLogOutOutline size={30} className="dark:text-white" />
                  <span className="ml-3 text-xl dark:text-white">Salir</span>
                </Link>
                {/* Line Separator */}
                <div className="w-full h-px bg-gray-200 my-10" />
                <Link
                  href="/"
                  className="flex items-center mt-5 p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded transition-all"
                >
                  <IoShirtOutline size={30} className="dark:text-white" />
                  <span className="ml-3 text-xl dark:text-white">
                    Productos
                  </span>
                </Link>
                <Link
                  href="/"
                  className="flex items-center mt-5 p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded transition-all"
                >
                  <IoTicketOutline size={30} className="dark:text-white" />
                  <span className="ml-3 text-xl dark:text-white">Ordenes</span>
                </Link>
                <Link
                  href="/"
                  className="flex items-center mt-5 p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded transition-all"
                >
                  <IoPeopleOutline size={30} className="dark:text-white" />
                  <span className="ml-3 text-xl dark:text-white">Usuarios</span>
                </Link>
              </nav>
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </>
  );
}

export default Aside;
