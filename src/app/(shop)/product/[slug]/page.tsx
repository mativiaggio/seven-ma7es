import { Button } from "@/components/ui/button";
import { Product } from "@/models/Product";
import Image from "next/image";
import { notFound } from "next/navigation";

interface Props {
  params: {
    slug: string;
  };
}

export default async function Home({ params }: Props) {
  const { slug } = params;
  const product = await Product.findOne({ slug: slug });
  if (!product) {
    notFound();
  }

  return (
    <div className="mt-5 mb-20 grid grid-cols-1 md:grid-cols-3 gap-3">
      {/* slide */}
      <div className="col-span-1 md:col-span-2"></div>

      {/* details */}
      <div className="col-span-1 px-5">
        <h1 className="antialised font-bold text-xl">{product.name}</h1>
        <p className="text-lg mb-5">${product.price}</p>
        {/* selector de params */}
        {/* selector de cantidad */}
        {/* boton de agregar al carrito */}
        <Button aria-label="Agregar al carrito" className="my-5">
          Agregar al carrito
        </Button>
        {/* description */}
        <h3 className="font-bold text-sm">Descripcion</h3>
        <p className="font-light">{product.description}</p>
      </div>
    </div>
  );
}
