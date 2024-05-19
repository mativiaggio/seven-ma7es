import LandingMain from "@/components/landing/landing-main";
import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/Product";
import { getSlides } from "@/lib/getSlides";
import Title from "@/components/ui/title/Title";
import ProductGrid from "@/components/products/product-grid/ProductGrid";
import LineSeparator from "@/components/ui/line-separator";

async function getProducts() {
  await mongooseConnect();

  const products = await Product.find({ featured: true });

  const data = JSON.parse(JSON.stringify(products));
  return data;
}

export default async function Home() {
  const slides = getSlides();
  const products = await getProducts();

  return (
    <>
      <LandingMain slides={slides} />
      <LineSeparator height="0.5" />
      <div className="px-5">
        <Title
          title={"¿Todavía no sabes bien qué es lo que estás buscando?"}
          subtitle={"Estos son nuestros productos favoritos."}
        />
        <ProductGrid products={products} />
      </div>
    </>
    // <main>Proximamente... </main>
  );
}
