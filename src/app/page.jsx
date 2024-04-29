import "bootstrap/dist/css/bootstrap.min.css";
import HomePageComponent from "@/components/HomePage/HomePage";
import FeaturedProducts from "@/components/FeaturedProducts/FeaturedProducts";

async function HomePage() {
  return (
    <>
      <HomePageComponent />
      <FeaturedProducts />
    </>
  );
}

export default HomePage;
