import React from "react";
import { MongoDBProduct, Product } from "@/interfaces";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

interface Props {
  products: MongoDBProduct[];
}

function ProductSlider({ products }: Props) {
  return (
    // <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 mb-10">
    //   {products.map((product) => (
    //     // <ProductGridItem key={product.slug} product={product} />
    //   ))}
    // </div>

    <div className="w-full flex justify-center items-center mb-5">
      <Carousel className="w-9/12 h-[300px]">
        <CarouselContent className="-ml-1">
          {products.map((product) => (
            <CarouselItem key={product.slug} className="pl-1">
              <Image
                src={"/examples/example2.jpg"}
                alt="imagen"
                width={500}
                height={500}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}

export default ProductSlider;
