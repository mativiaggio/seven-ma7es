import { mongooseConnect } from "@/lib/mongoose";
import { Category } from "@/models/Category";
import { notDeepEqual } from "assert";
import { notFound } from "next/navigation";
import React from "react";

interface Props {
  params: {
    id: String;
  };
}

async function getCategories() {
  await mongooseConnect();

  const categories = await Category.find({ parent: { $exists: false } });
  const categoryNames = categories.map((category) =>
    category.name.toLowerCase().replace(/\s/g, "-")
  );
  return categoryNames;
}

async function page({ params }: Props) {
  const { id } = params;

  const categories = await getCategories();

  if (!categories.includes(id)) {
    notFound();
  }

  return <div>Categoría {id}</div>;
}

export default page;
