// import React from "react";
// import { mongooseConnect } from "@/lib/mongoose";
// import { Category } from "@/models/Category";

// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuLabel,
//   DropdownMenuSeparator,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu";
// import CategoryItem from "./CategoryItem";

// async function getCategories() {
//   await mongooseConnect();

//   const categories = await Category.find({ parent: { $exists: false } });
//   const data = JSON.parse(JSON.stringify(categories));
//   return data;
// }

// async function CategoriesDropdown({ className }) {
//   const categories = await getCategories();
//   return (
//     <>
//       <DropdownMenu>
//         <DropdownMenuTrigger className={`outline-none ${className}`}>
//           Categorías
//         </DropdownMenuTrigger>
//         <DropdownMenuContent>
//           <DropdownMenuLabel>Nuestras categorías</DropdownMenuLabel>
//           <DropdownMenuSeparator />
//           <CategoryItem categories={categories} />
//         </DropdownMenuContent>
//       </DropdownMenu>
//     </>
//   );
// }

// export default CategoriesDropdown;
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
  const data = JSON.parse(JSON.stringify(categories));
  return data;
}

interface Props {
  className?: string;
}

async function CategoriesDropdown({ className }: Props) {
  const categories = await getCategories();
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger className={`outline-none ${className}`}>
          Categorías
        </DropdownMenuTrigger>
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
