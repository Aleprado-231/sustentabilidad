import type { FC } from 'react';
import { useRef } from 'react';
import { Handshake } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';

export const Colaboradores: FC = () => {
  const plugin = useRef(Autoplay({ delay: 2500, stopOnInteraction: false }));
  // Lista de logos de instituciones colaboradoras
  const logos = [
    { id: 1, name: 'Institución 1', src: '/images/logos/1.png' },
    { id: 2, name: 'Institución 2', src: '/images/logos/2.png' },
    { id: 3, name: 'Institución 3', src: '/images/logos/3.png' },
    { id: 4, name: 'Institución 4', src: '/images/logos/4.png' },
    { id: 5, name: 'Institución 5', src: '/images/logos/5.png' },
    { id: 6, name: 'Institución 6', src: '/images/logos/6.png' },
    { id: 7, name: 'Institución 7', src: '/images/logos/7.png' },
    { id: 8, name: 'Institución 8', src: '/images/logos/8.png' },
    { id: 9, name: 'Institución 9', src: '/images/logos/9.png' },
    { id: 10, name: 'Institución 10', src: '/images/logos/10.png' },
    { id: 11, name: 'Institución 11', src: '/images/logos/11.png' },
    { id: 13, name: 'Institución 13', src: '/images/logos/13.png' },
    { id: 14, name: 'Institución 14', src: '/images/logos/14.png' },
    { id: 15, name: 'Institución 15', src: '/images/logos/15.png' },
    { id: 16, name: 'Institución 16', src: '/images/logos/16.png' },
    { id: 17, name: 'Institución 17', src: '/images/logos/17.png' },
    { id: 18, name: 'Institución 18', src: '/images/logos/18.png' },
    { id: 19, name: 'Institución 19', src: '/images/logos/19.png' },
  ];

  return (
    <section id="colaboradores" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-blue-100 rounded-full px-4 py-2 mb-4">
            <Handshake className="text-blue-600" size={18} />
            <span className="text-blue-800 text-sm font-semibold">Alianzas Estratégicas</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Instituciones con las que <span className="text-green-600">Colaboramos</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Trabajamos junto a organizaciones comprometidas con el desarrollo sustentable y el bienestar de nuestra comunidad.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative px-4 md:px-12">
          <Carousel
            opts={{
              align: 'start',
              loop: true,
            }}
            plugins={[plugin.current]}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {logos.map((logo) => (
                <CarouselItem
                  key={logo.id}
                  className="pl-6 basis-1/2 md:basis-1/3"
                >
                  <div className="bg-white rounded-xl p-10 shadow-sm hover:shadow-lg transition-all duration-300 h-52 flex items-center justify-center group">
                    <img
                      src={logo.src}
                      alt={logo.name}
                      className="max-w-full max-h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-6 bg-white border-gray-300 hover:bg-green-50 hover:border-green-400 shadow-md" />
            <CarouselNext className="hidden md:flex -right-6 bg-white border-gray-300 hover:bg-green-50 hover:border-green-400 shadow-md" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Colaboradores;
