import royal from "../../public/images/royal.png";
import golden from "../../public/images/golden.png";
import primier from "../../public/images/primier.png";
import natural from "../../public/images/natural.png";
import whiskas from "../../public/images/whiskas.png";
import Image from "next/image";

const brands = [
  { name: "Royal Canin", logo: royal },
  { name: "Golden", logo: golden },
  { name: "Primier", logo: primier },
  { name: "Formula Natural", logo: natural },
  { name: "Whiskas", logo: whiskas },
  { name: "Whiskas", logo: whiskas },
];

const Footer = () => {
  return (
    <section className="bg-red-500 p-16 text-white">
      <div className="container px-4 mx-auto">
        <div className="border-b border-white/20 pb-8">
          <h4 className="text-3xl font-semibold mb-8 text-center">
            Marcas que trabalhamos
          </h4>
          <div className="grid grid-cols-2 lg:grid-cols-6 gap-8 items-center justify-items-center">
            {brands.map((brand, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-lg items-center justify-center"
              >
                <Image
                  src={brand.logo}
                  alt={brand.name}
                  className="object-contain"
                  width={200}
                  height={50}
                  quality={100}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
