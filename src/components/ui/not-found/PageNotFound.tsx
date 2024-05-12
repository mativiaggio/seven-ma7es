import Image from "next/image";
import Link from "next/link";
import React from "react";

function PageNotFound() {
  return (
    <div className="flex flex-col-reverse md:flex-row h-[500px] w-full justify-center items-center align-middle">
      <div className="text-center px-4 mx-5 ">
        <h2 className="antialiased text-9xl">404</h2>
        <p>Opa! Mal ahí, esta página no existe.</p>
        <div className="text-gray-500">
          <span>Puedes regresar al </span>
          <Link
            href="/"
            className="font-normal hover:underline transition-all text-gray-800"
          >
            Inicio.
          </Link>
        </div>
      </div>

      <div className="px-5 mx-5 ">
        <Image
          src={"/img/not-found.svg"}
          alt="Not found"
          className="p-5 sm:p-0"
          width={250}
          height={250}
          priority
        />
      </div>
    </div>
  );
}

export default PageNotFound;
