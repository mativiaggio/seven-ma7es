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
        <SheetTrigger className="rounded-md transition-all bg-transparent">
          <div className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input hover:text-accent-foreground h-10 w-10 hover:bg-gray-200 text-white hover:text-black bg-transparent border-none">
            <IoMenu className="w-5 h-5" />
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
                    className="w-full bg-gray-50 rounded pl-10 py-1 pr-10 border-b-2 text-xl border-gray-200 focus:outline-none focus:border-black"
                  />
                </div>

                {/* Menú */}

                <Link
                  href="/"
                  className="flex items-center mt-10 p-2 hover:bg-gray-100 rounded transition-all"
                >
                  <IoPersonOutline size={30} />
                  <span className="ml-3 text-xl">Perfil</span>
                </Link>

                <Link
                  href="/"
                  className="flex items-center mt-10 p-2 hover:bg-gray-100 rounded transition-all"
                >
                  <IoTicketOutline size={30} />
                  <span className="ml-3 text-xl">Ordenes</span>
                </Link>

                <Link
                  href="/"
                  className="flex items-center mt-10 p-2 hover:bg-gray-100 rounded transition-all"
                >
                  <IoLogInOutline size={30} />
                  <span className="ml-3 text-xl">Ingresar</span>
                </Link>

                <Link
                  href="/"
                  className="flex items-center mt-10 p-2 hover:bg-gray-100 rounded transition-all"
                >
                  <IoLogOutOutline size={30} />
                  <span className="ml-3 text-xl">Salir</span>
                </Link>

                {/* Line Separator */}
                <div className="w-full h-px bg-gray-200 my-10" />

                <Link
                  href="/"
                  className="flex items-center mt-10 p-2 hover:bg-gray-100 rounded transition-all"
                >
                  <IoShirtOutline size={30} />
                  <span className="ml-3 text-xl">Productos</span>
                </Link>

                <Link
                  href="/"
                  className="flex items-center mt-10 p-2 hover:bg-gray-100 rounded transition-all"
                >
                  <IoTicketOutline size={30} />
                  <span className="ml-3 text-xl">Ordenes</span>
                </Link>

                <Link
                  href="/"
                  className="flex items-center mt-10 p-2 hover:bg-gray-100 rounded transition-all"
                >
                  <IoPeopleOutline size={30} />
                  <span className="ml-3 text-xl">Usuarios</span>
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
