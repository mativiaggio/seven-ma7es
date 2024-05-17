import { MongoDBCategory } from "@/interfaces";
import React from "react";

import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
import Link from "next/link";

interface Props {
  categories: MongoDBCategory[];
}

function CategoryItem({ categories }: Props) {
  return (
    <>
      {categories.map((category) => (
        // <Link
        //   key={category._id}
        //   href={`/categoria/${category.name.toLowerCase().replace(/\s/g, "-")}`}
        // >
        <Link
          key={category._id}
          // href={`/category/${category.name.toLowerCase().replace(/\s/g, "-")}`}
          href={`/categoria/${category.slug}`}
        >
          <DropdownMenuItem className="cursor-pointer">
            {category.name}
          </DropdownMenuItem>
        </Link>
      ))}
    </>
  );
}

export default CategoryItem;
