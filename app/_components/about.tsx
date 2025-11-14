import Image from "next/image";

import AboutImage1 from "../../public/images/about-1.png";
import AboutImage2 from "../../public/images/about-2.png";
import {
  MapPinAreaIcon,
  WhatsappLogoIcon,
} from "@phosphor-icons/react/dist/ssr";
import { Check } from "lucide-react";
const About = () => {
  return (
    <main className="bg-amber-100 py-16">
      <div className="container px-4 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="relative">
          <div className="relative w-full h-[400px] rounded-3xl overflow-hidden">
            <Image
              className="object-cover hover:scale-110 duration-300"
              src={AboutImage1}
              alt="imagem de um gato e um cachorro"
              fill
              sizes="100vw"
              priority
              quality={100}
            />
          </div>
          <div className="absolute w-40 h-40 rounded-3xl overflow-hidden right-4 -bottom-8 border-4">
            <Image
              className="object-cover"
              src={AboutImage2}
              alt="imagem de um gato e um cachorro"
              fill
              sizes="100vw"
              priority
              quality={100}
            />
          </div>
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-semibold">SOBRE</h2>
          <p>
            Cuidar de pets é mais do que um trabalho pra nós é uma vocação.
            Nossa equipe é formada por profissionais apaixonados, preparados
            para oferecer atenção e carinho em cada detalhe.
          </p>
          <ul className="space-y-6">
            <li className="flex items-center gap-2">
              <Check className="text-amber-700 w-5" />
              Aberto desde 2006
            </li>
            <li className="flex items-center gap-2">
              <Check className="text-amber-700 w-5" />
              Temos mais de 10 veterinários
            </li>
            <li className="flex items-center gap-2">
              <Check className="text-amber-700 w-5" />
              Qualidade é nossa prioridade
            </li>
          </ul>
          <div className="flex gap-2">
            <a
              className="bg-amber-600 px-5 py-2 rounded-md flex items-center justify-center w-fit mt-4  gap-2 text-white"
              href="#"
            >
              <WhatsappLogoIcon className="w-5 h-5" />
              Contato via Whatsapp
            </a>

            <a
              className="px-5 py-2 rounded-md flex items-center justify-center w-fit mt-4  gap-2"
              href=""
            >
              <MapPinAreaIcon className="w-5 h-5" /> Endereço da Loja
            </a>
          </div>
        </div>
      </div>
    </main>
  );
};

export default About;
