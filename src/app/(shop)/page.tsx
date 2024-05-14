import ProductGrid from "@/components/products/product-grid/ProductGrid";
import Title from "@/components/ui/title/Title";
import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/Product";

async function getProducts() {
  await mongooseConnect();

  const products = await Product.find({ featured: true });

  const data = JSON.parse(JSON.stringify(products));
  return data;
}

export default async function Home() {
  const products = await getProducts();
  return (
    // <>
    //   <Title
    //     title="Tienda"
    //     subtitle={"Nuestros productos favoritos"}
    //     className={"mb-2"}
    //   />

    //   <ProductGrid products={products} />
    // </>
    <main>Proximamente... </main>
  );
}
