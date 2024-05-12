import React from "react";
import { mongooseConnect } from "@/lib/mongoose";
import { Category } from "@/models/Category";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import CategoryItem from "./CategoryItem";

async function getCategories() {
  await mongooseConnect();

  const categories = await Category.find({ parent: { $exists: false } });
  return categories;
}

async function CategoriesDropdown() {
  const categories = await getCategories();
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger>Categorías</DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>Nuestras categorías</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <CategoryItem categories={categories} />
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
}

export default CategoriesDropdown;
