import { Button } from "@/components/ui/button";
import Image from "next/image";
import recomandation from "@/assests/reomandation.jpg";

const Recomandation = () => {
  return (
    <div className="container mx-auto px-6 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Text Section */}
        <div className="flex flex-col space-y-4 text-center md:text-left">
          <h1 className="text-3xl md:text-4xl font-bold text-black uppercase">
            Get Home Recommendations
          </h1>
          <h3 className="text-base md:text-lg text-zinc-600 uppercase">
            Sign in for a more personalized experience.
          </h3>
          <div className="flex justify-center md:justify-start">
            <Button variant="default">Sign in</Button>
          </div>
        </div>

        {/* Image Section */}
        <div className="flex justify-center">
          <Image
            src={recomandation}
            height={500}
            width={500}
            alt="Recommendation"
            className="w-full max-w-[400px] md:max-w-[500px] rounded-lg shadow-lg object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Recomandation;
