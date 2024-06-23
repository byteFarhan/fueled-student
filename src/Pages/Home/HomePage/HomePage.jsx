import Carousel from "../Carousel/Carousel";
import ContactUs from "../ContactUs/ContactUs";
import MealsGallery from "../MealsGallery/MealsGallery";
import MealsbyCategory from "../MealsbyCategory/MealsbyCategory";
import PricingSection from "../PricingSection/PricingSection";

const HomePage = () => {
  return (
    <div>
      <Carousel />
      <div className="w-11/12 xl:w-10/12 mx-auto max-w-[1700px]">
        <MealsbyCategory />
        <MealsGallery />
        <PricingSection />
        <ContactUs />
      </div>
    </div>
  );
};

export default HomePage;
