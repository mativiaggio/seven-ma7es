import "bootstrap/dist/css/bootstrap.min.css";
import HomePageComponent from "@/components/HomePage/HomePage";
import FeaturedProducts from "@/components/FeaturedProducts/FeaturedProducts";
import LandingPage from "@/components/LandingPage/LandingPage";

async function HomePage() {
  return (
    <>
      {/* <HomePageComponent /> */}
      <LandingPage />
      <FeaturedProducts />
    </>
  );
}

export default HomePage;
