import { WhatsappLogo } from "@phosphor-icons/react/dist/ssr";
import HeaderDog from "../../public/images/hero-dog.webp";
import Image from "next/image";
const Header = () => {
  return (
    <header className="bg-[#FFA75E] text-white relative overflow-hidden">
      <div>
        <Image
          src={HeaderDog}
          alt="Foto de um cachorro"
          fill
          sizes="100vw"
          priority
          className="object-cover opacity-60 lg:hidden"
        />
        <div className="absolute inset-0 bg-black opacity-40 md:hidden"></div>
      </div>
      <div className="container mx-auto px-4 pt-16 pb-16 md:pb-0">
        <article className="grid grid-cols-1 lg:grid-cols-2 gap-8 relative">
          <div className="space-y-6">
            <h1 className="text-3xl font-bold md:text-4xl">
              Amor, cuidado e qualidade para quem faz parte da sua família
            </h1>
            <p className="lg:text-lg">
              Nosso compromisso é garantir o bem-estar do seu pet com serviços
              de confiança, profissionais dedicados e um ambiente acolhedor
              feito especialmente para ele.
            </p>

            <a
              className="bg-green-500 px-5 py-2 rounded-md font-semibold flex items-center justify-center w-fit mt-4  gap-2"
              href=""
            >
              <WhatsappLogo className="w-5 h-5" />
              Contato via Whatsapp
            </a>
            <div className="mt-8">
              <p className="text-sm mb-4">
                <b className="bg-black text-white rounded-md px-2 py-1">%5</b>{" "}
                de desconto na primeira compra
              </p>
            </div>
          </div>
          <div className="hidden md:block h-full relative">
            <Image
              src={HeaderDog}
              alt="foto de um cachorro"
              className="object-contain"
              fill
              sizes="(max-width: 768px) 0vw, 50vw"
              quality={100}
              priority
            />
          </div>
        </article>
      </div>
    </header>
  );
};

export default Header;
