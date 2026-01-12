import royal from "../../public/images/royal.png";
import golden from "../../public/images/golden.png";
import primier from "../../public/images/primier.png";
import natural from "../../public/images/natural.png";
import whiskas from "../../public/images/whiskas.png";
import Image from "next/image";
import {
  FacebookLogoIcon,
  InstagramLogoIcon,
  YoutubeLogoIcon,
} from "@phosphor-icons/react/dist/ssr";

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

        <footer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12 mt-5">
          <div>
            <h3 className="text-2xl font-semibold mb-2">PetShow LTDA</h3>
            <p className="mb-4">
              cuidando do seu melhor amigo com amor e carinho.
            </p>
            <a className="bg-green-500 rounded-md px-4 py-2" href="">
              Contato via Whatsapp
            </a>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-2">Contatos</h3>
            <p>Email: PetShow.atendimentos@gmail.com</p>
            <p>Telefone: (11) 99056 5723</p>
            <p>Rua Antonio Carlos Garcia, Centro nº349 São Paulo - SP</p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-2">Redes Sociais</h3>
            <div className="flex gap-2">
              <a href="">
                <FacebookLogoIcon className="w-8 h-8" />
              </a>
              <a href="">
                <InstagramLogoIcon className="w-8 h-8" />
              </a>
              <a href="">
                <YoutubeLogoIcon className="w-8 h-8" />
              </a>
            </div>
          </div>
        </footer>
      </div>
    </section>
  );
};

export default Footer;
