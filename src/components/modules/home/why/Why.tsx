import Image from "next/image";
import { Button } from "@/components/ui/button";
import imOne from "@/assests/img1.webp";
import imTwo from "@/assests/img2.webp";
import imThree from "@/assests/img3.webp";
import { Home, Key, DollarSign } from "lucide-react";

const Why = () => {
  const info = [
    {
      id: "1",
      title: "Buy a home",
      description:
        "Find your dream home with our curated listings and expert guidance. Get transparent pricing and avoid hidden costs.",
      photo: imOne,
      icon: <Home className="w-6 h-6" />,
      color: "bg-blue-50 text-blue-600",
    },
    {
      id: "2",
      title: "Rent a home",
      description:
        "Seamless renting experience from search to move-in. Digital applications, virtual tours, and online payments.",
      photo: imTwo,
      icon: <Key className="w-6 h-6" />,
      color: "bg-green-50 text-green-600",
    },
    {
      id: "3",
      title: "Sell a home",
      description:
        "Maximize your property's value with our marketing expertise and extensive buyer network. Competitive commission rates.",
      photo: imThree,
      icon: <DollarSign className="w-6 h-6" />,
      color: "bg-purple-50 text-purple-600",
    },
  ];

  return (
    <section className="bg-gray-50 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Why Choose BashaFinder?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience real estate reimagined with our innovative solutions and
            personalized service.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {info.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden group"
            >
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={item.photo}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <div
                  className={`absolute -top-5 -right-5 w-20 h-20 rounded-full ${item.color} flex items-center justify-center shadow-lg`}
                >
                  {item.icon}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 mb-6">{item.description}</p>
                <Button
                  variant="outline"
                  className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition-colors"
                >
                  Learn More →
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Button
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 px-8 py-4 text-lg"
          >
            Explore All Services
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Why;
