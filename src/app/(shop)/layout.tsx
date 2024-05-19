import Footer from "@/components/ui/footer/footer";
import TopMenu from "@/components/ui/top-menu/TopMenu";
import React, { ReactNode } from "react";

export default function ShopLayout({ children }: { children: ReactNode }) {
  return (
    <main className="flex flex-col min-h-screen ">
      <TopMenu />
      <div>{children}</div>
      <Footer />
    </main>
  );
}
