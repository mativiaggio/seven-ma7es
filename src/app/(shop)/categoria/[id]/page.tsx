import ProductGrid from "@/components/products/product-grid/ProductGrid";
import Title from "@/components/ui/title/Title";
import { mongooseConnect } from "@/lib/mongoose";
import { Category } from "@/models/Category";
import { Product } from "@/models/Product";
import { notFound } from "next/navigation";
import React from "react";

interface Props {
  params: {
    id: string;
  };
}

async function getTitle(categoryName: string) {
  await mongooseConnect();

  const category = await Category.findOne({
    slug: categoryName,
    parent: { $exists: false },
  });

  return category?.name;
}

async function getCategoryIdByName(categoryName: string) {
  await mongooseConnect();

  const category = await Category.findOne({
    slug: categoryName,
    parent: { $exists: false },
  });

  return category?._id;
}

async function getProductsByCategory(categoryId: string) {
  const category = await Category.findOne({ _id: categoryId });
  const categoryIds = [categoryId];

  if (category) {
    const childCategories = await Category.find({ parent: categoryId });
    categoryIds.push(...childCategories.map((child) => child._id.toString()));
  }

  const products = await Product.find({
    category: { $in: categoryIds },
  });

  const data = JSON.parse(JSON.stringify(products));
  return data;
}

async function page({ params }: Props) {
  const { id } = params;
  const categoryId = await getCategoryIdByName(id);
  const title = await getTitle(id);

  // if (!categoryId) {
  //   notFound();
  // }

  const products = await getProductsByCategory(categoryId);

  return (
    <>
      <Title title={`${title}`} subtitle={""} className={"mb-2"} />

      <ProductGrid products={products} />
    </>
  );
}

export default page;
