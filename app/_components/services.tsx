"use client";

import useEmblaCarousel, { EmblaViewportRefType } from "embla-carousel-react";
import {
  ChevronLeft,
  ChevronRight,
  Scissors,
  Syringe,
  CarTaxiFront,
  Hotel,
  Clock,
} from "lucide-react";

import { WhatsappLogoIcon } from "@phosphor-icons/react";
import { title } from "process";

const service = [
  {
    title: "Banho e Tosa",
    description:
      "Deixe seu pet limpo e estiloso com nossos serviços de banho e tosa.",
    duration: "1h4",
    icon: <Scissors />,
    linkText:
      "Olá, vi no site sobre o banho e tosa e gostaria de mais informações.",
  },
  {
    title: "Consulta Veterinária",
    description:
      "Consultas veterinárias para garantir a saúde e bem-estar do seu pet.",
    duration: "30hmin",
    icon: <Syringe />,
    linkText:
      "Olá, vi no site sobre a consulta veterinária e gostaria de mais informações.",
  },
  {
    title: "Taxi pet",
    description: "Transporte seguro e confortável para seu pet.",
    duration: "2h",
    icon: <CarTaxiFront />,
    linkText:
      "Olá, vi no site sobre o taxi pet e gostaria de mais informações.",
  },
  {
    title: "Hotel para Pets",
    description: "Cuidados especiais para seu pet enquanto você estiver fora.",
    duration: "1h",
    icon: <Hotel />,
    linkText:
      "Olá, vi no site sobre o hotel para pets e gostaria de mais informações.",
  },
];

const Services = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: "start",
    slidesToScroll: 1,
    breakpoints: {
      "(min-width: 768px)": {
        slidesToScroll: 3,
      },
    },
  });

  function scrollPrev() {
    emblaApi?.scrollPrev();
  }

  function scrollNext() {
    emblaApi?.scrollNext();
  }

  return (
    <section className="bg-white py-16">
      <div className="container px-4 mx-auto">
        <h2 className="text-4xl mb-6 font-semibold">Serviços</h2>
      </div>
      <div className="relative">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {service.map((item, index) => (
              <div
                key={index}
                className="flex-[0_0_100%] min-w-0 md:flex-[0_0_calc(100%/3)] px-3"
              >
                <article className="bg-[#1e293b] text-white rounded-2xl p-6 space-y-4 h-full flex flex-col">
                  <div className="flex-1 flex items-start justify-between">
                    <div className="flex gap-3">
                      <span className="text-3xl">{item.icon}</span>
                      <div>
                        <h3 className="font-bold text-xl my-1">{item.title}</h3>
                        <p className="text-gray-400 text-sm select-none">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-gray-700 pt-4 flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm">
                      <Clock className="w-4 h-4" />
                      <span>{item.duration}</span>
                    </div>

                    <a
                      target="_blank"
                      href={`https://wa.me/556799998800?text=Olá vim pelo site e gostaria de mais informações sbore ${item.title}`}
                      className="flex items-center justify-center gap-2 hover:bg-red-500 px-4 py-1 rounded-md duration-300"
                    >
                      <WhatsappLogoIcon className="w-5 h-5" />
                      Entrar em contato
                    </a>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>

        <button
          className="bg-white flex items-center justify-center rounded-full shadow-lg w-10 h-10 absolute left-3 -translate-y-1/2 -translate-x-1/2 top-1/2 z-10"
          onClick={scrollPrev}
        >
          <ChevronLeft className="w-6 h-6 text-gray-600" />
        </button>

        <button
          className="bg-white flex items-center justify-center rounded-full shadow-lg w-10 h-10 absolute -right-6 -translate-y-1/2 -translate-x-1/2 top-1/2 z-10"
          onClick={scrollNext}
        >
          <ChevronRight className="w-6 h-6 text-gray-600" />
        </button>
      </div>
      <div></div>
    </section>
  );
};

export default Services;
