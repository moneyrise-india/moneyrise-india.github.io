import bounceInfinity from "@/assets/brands/bounce-infinity.png";
import ampere from "@/assets/brands/ampere.png";
import ather from "@/assets/brands/ather.png";
import eicher from "@/assets/brands/eicher.png";
import piaggio from "@/assets/brands/piaggio.png";
import tvs from "@/assets/brands/tvs.png";

const brands = [
  { image: bounceInfinity, name: "Bounce Infinity" },
  { image: ampere, name: "Ampere" },
  { image: ather, name: "Ather" },
  { image: eicher, name: "Volvo Eicher" },
  { image: piaggio, name: "Piaggio" },
  { image: tvs, name: "TVS" },
];

const BrandsSection = () => {
  return (
    <section className="py-10 bg-background overflow-hidden">
      <div className="relative">
        <div className="flex animate-marquee whitespace-nowrap w-max">
          {[...brands, ...brands, ...brands, ...brands].map((brand, index) => (
            <div
              key={index}
              className="flex-shrink-0 mx-10 md:mx-16 flex items-center justify-center w-40 h-20 md:w-56 md:h-28 lg:w-64 lg:h-32 grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100"
            >
              <img
                src={brand.image}
                alt={brand.name}
                className="max-w-full max-h-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandsSection;
