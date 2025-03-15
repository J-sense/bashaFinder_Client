import HeroSection from "@/components/modules/home/herosection/HeroSection";
import Property from "@/components/modules/home/property/Property";
import Recomandation from "@/components/modules/home/recomandation/Recomandation";
import Why from "@/components/modules/home/why/Why";
import { AllHouseAction } from "@/services/landlord";

const HomePage = async () => {
  const { data } = await AllHouseAction(undefined);
  console.log(data);
  return (
    <div className="min-h-screen pt-10">
      <HeroSection />
      <Recomandation />
      <Property houses={data} />
      <Why />
    </div>
  );
};

export default HomePage;
