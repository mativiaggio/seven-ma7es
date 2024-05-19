import React from "react";
import { Input } from "../ui/input";
import { SearchIcon } from "lucide-react";
import { Button } from "../ui/button";
import Image from "next/image";

function LandingMain() {
  return (
    <div className="h-fit min-h-[85vh] flex flex-col items-center">
      <h1 className="text-5xl font-semibold px-0 pt-12 sm:text-4xl sm:px-32 sm:pt-12 mb-3 text-center">
        Acompañanos en una experiencia única
      </h1>
      <p className="text-center text-l sm:text-2xl font-thin mb-4">
        Siempre, para las mejores charlas, unos buenos mates.
      </p>

      <div className="flex flex-col sm:flex-row justify-center text-3xl px-0 py-3 w-full sm:w-1/2">
        <div className="flex rounded-md shadow-sm ring-1 ring-offset ring-gray-300 dark:ring-gray-950 focus-within:ring-2 focus-within:ring-offset focus-within:ring-black  overflow-hidden bg-white dark:bg-[#282828] w-full mb-2 mr-2">
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
        <Button className="">Buscar</Button>
      </div>
      <p className="text-xs sm:text-xs text-center w-full sm:w-1/2">
        En nuestro sitio podes encontrar el mate que buscar, al mejor precio,
        contando siempre con la mejor atención. Todos los medios de pago y en
        cuotas.
      </p>

      <div>
        <Image
          src={"/svg/landing_svg.svg"}
          height={800}
          width={800}
          alt="image"
        />
      </div>
    </div>
  );
}

export default LandingMain;
