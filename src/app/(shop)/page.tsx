import ProductGrid from "@/components/products/product-grid/ProductGrid";
import Title from "@/components/ui/title/Title";
import { MongoDBProduct } from "@/interfaces";
import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/Product";

async function getProducts() {
  await mongooseConnect();

  const products = await Product.find({ featured: true });
  return products;
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
