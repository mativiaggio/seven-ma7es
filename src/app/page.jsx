"use client";

import "bootstrap/dist/css/bootstrap.min.css";
import HomePageComponent from "@/components/HomePage/HomePage";
import FeaturedProducts from "@/components/FeaturedProducts/FeaturedProducts";
import LandingPage from "@/components/LandingPage/LandingPage";
// import { signOut, useSession } from "next-auth/react";
function HomePage() {
  // const session = useSession();
  return (
    <>
      {/* <div>{session?.data?.user?.name}</div>
      <button onClick={() => signOut()}></button> */}
      <LandingPage />
      <FeaturedProducts />
    </>
  );
}

export default HomePage;
