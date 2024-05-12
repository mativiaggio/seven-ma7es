import React, { ReactNode } from "react";

export default function ShopLayout({ children }: { children: ReactNode }) {
  return <main className="flex min-h-screen bg-red-500">{children}</main>;
}
