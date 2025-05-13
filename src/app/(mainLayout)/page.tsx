import FAQAccordion from "@/components/modules/home/FAQAccordion";
import FeedbackSection from "@/components/modules/home/FeedbackSection";
import HeroSection from "@/components/modules/home/herosection/HeroSection";
import Property from "@/components/modules/home/property/Property";
import Recommendation from "@/components/modules/home/recomandation/Recomandation";
import RentalProcess from "@/components/modules/home/RentalProcess";
// import Recomandation from "@/components/modules/home/recomandation/Recomandation";
import Why from "@/components/modules/home/why/Why";
import { AllHouseAction } from "@/services/landlord";

const HomePage = async () => {
  const { data } = await AllHouseAction(undefined);
  console.log(data);
  return (
    <div className="min-h-screen pt-10">
      <HeroSection />
      <Recommendation />
      <Property houses={data} />
      <Why />
      <RentalProcess />
      <FeedbackSection />
      <FAQAccordion />
    </div>
  );
};

export default HomePage;
