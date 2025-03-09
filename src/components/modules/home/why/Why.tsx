import Image from "next/image";
import { Button } from "@/components/ui/button";
import imOne from "@/assests/img1.webp";
import imTwo from "@/assests/img2.webp";
import imThree from "@/assests/img3.webp";

const Why = () => {
  const info = [
    {
      id: "1",
      title: "Buy a home",
      description:
        "A real estate agent can provide you with a clear breakdown of costs so that you can avoid surprise expenses.",
      photo: imOne,
    },
    {
      id: "2",
      title: "Rent a home",
      description:
        "We’re creating a seamless online experience – from shopping on the largest rental network, to applying, to paying rent.",
      photo: imTwo,
    },
    {
      id: "3",
      title: "Sell a home",
      description:
        "A real estate agent can provide you with a clear breakdown of costs so that you can avoid surprise expenses.",
      photo: imThree,
    },
  ];

  return (
    <div className="container mx-auto px-6 py-16">
      <h2 className="text-3xl font-bold text-center text-black mb-10">
        Why Choose Us?
      </h2>
      {/* Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {info.map((item) => (
          <div
            key={item.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden p-6 flex flex-col items-center text-center transition hover:shadow-xl"
          >
            <Image
              src={item.photo}
              alt={item.title}
              width={200}
              height={150}
              className="rounded-md mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-900">
              {item.title}
            </h3>
            <p className="text-gray-600 mt-2">{item.description}</p>
            <Button variant="default" className="mt-4">
              Learn More
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Why;
