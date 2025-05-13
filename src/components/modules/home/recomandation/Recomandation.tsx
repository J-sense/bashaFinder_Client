import { Button } from "@/components/ui/button";
import Image from "next/image";
import recommendation from "@/assests/reomandation.jpg";
import { ArrowRight, Home, Star, CheckCircle } from "lucide-react";

const Recommendation = () => {
  return (
    <section className="bg-gradient-to-r from-blue-50 to-indigo-50 py-12 md:py-16 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-5 order-2 lg:order-1">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
                Smart Home Recommendations
              </span>
            </h2>

            <p className="text-base md:text-lg text-gray-600">
              Sign in to get property matches tailored to your lifestyle and
              preferences.
            </p>

            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <CheckCircle className="flex-shrink-0 h-5 w-5 text-green-500 mt-1" />
                <div>
                  <h4 className="font-medium text-gray-900">
                    Personalized Matches
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Properties selected just for you
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Star className="flex-shrink-0 h-5 w-5 text-yellow-500 mt-1" />
                <div>
                  <h4 className="font-medium text-gray-900">Early Access</h4>
                  <p className="text-gray-600 text-sm">
                    See new listings before others
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Home className="flex-shrink-0 h-5 w-5 text-blue-500 mt-1" />
                <div>
                  <h4 className="font-medium text-gray-900">
                    Saved Preferences
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Your ideal home criteria remembered
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <Button className="px-6 py-4 text-base bg-blue-600 hover:bg-blue-700">
                Sign In <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" className="px-6 py-4 text-base">
                Learn More
              </Button>
            </div>
          </div>

          {/* Image - Better Proportion */}
          <div className="relative order-1 lg:order-2">
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl shadow-md">
              <Image
                src={recommendation}
                alt="Personalized recommendations"
                fill
                className="object-cover"
                quality={90}
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-black/5 to-transparent" />
            </div>

            {/* Smaller decorative element */}
            <div className="absolute -bottom-3 -right-3 bg-white p-2 rounded-lg shadow-sm border border-gray-100 hidden lg:block">
              <div className="flex items-center gap-2">
                <div className="bg-green-100 p-1.5 rounded-full">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                </div>
                <div>
                  <p className="text-sm font-medium">2,341+</p>
                  <p className="text-xs text-gray-500">Matches Made</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Recommendation;
