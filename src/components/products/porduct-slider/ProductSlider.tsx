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

    <div className="w-full flex justify-center items-center">
      <Carousel className="">
        <CarouselContent className="-ml-1">
          {products.map((product) => (
            <CarouselItem
              key={product.slug}
              className="pl-1 md:basis-1/2 lg:basis-1/3"
            >
              <div className="p-1">
                <Card>
                  <CardContent className="flex aspect-square items-center justify-center p-6">
                    <span className="text-2xl font-semibold">d</span>
                  </CardContent>
                </Card>
              </div>
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
