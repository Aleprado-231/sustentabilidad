import type { FC } from 'react';
import { useRef } from 'react';
import { Heart, GraduationCap, Trophy, Coffee, Users, HeartHandshake, Truck } from 'lucide-react';
import { HexagonPattern } from '@/components/hexagon/HexagonPattern';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';

interface CarouselLogosProps {
  logos: { id: number; name: string; src: string }[];
  delay?: number;
}

const CarouselLogos: FC<CarouselLogosProps> = ({ logos, delay = 3000 }) => {
  const plugin = useRef(Autoplay({ delay, stopOnInteraction: false }));

  return (
    <Carousel
      opts={{ align: 'start', loop: true }}
      plugins={[plugin.current]}
      className="w-full"
    >
      <CarouselContent className="-ml-4">
        {logos.map((logo) => (
          <CarouselItem
            key={logo.id}
            className="pl-4 basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5 xl:basis-1/6"
          >
            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 h-36 flex items-center justify-center">
              <img
                src={logo.src}
                alt={logo.name}
                className="max-w-full max-h-full object-contain"
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="hidden md:flex -left-4 bg-white border-gray-200 hover:bg-green-50 hover:border-green-300 shadow-sm" />
      <CarouselNext className="hidden md:flex -right-4 bg-white border-gray-200 hover:bg-green-50 hover:border-green-300 shadow-sm" />
    </Carousel>
  );
};

export const Colaboradores: FC = () => {
  const categorias = [
    {
      id: 'educativas',
      titulo: 'Instituciones educativas',
      cantidad: '+40',
      icono: <GraduationCap className="text-blue-500" size={22} />,
      color: 'blue',
      delay: 2800,
      logos: [
        { id: 1, name: 'Educativas', src: '/images/logos/Educativas.png' },
        { id: 2, name: 'Educativas 2', src: '/images/logos/Educativas (2).png' },
        { id: 3, name: 'Educativas 3', src: '/images/logos/Educativas (3).png' },
        { id: 4, name: 'Educativas 4', src: '/images/logos/Educativas (4).png' },
        { id: 5, name: 'Educativas 5', src: '/images/logos/Educativas (5).png' },
        { id: 6, name: 'Educativas 6', src: '/images/logos/Educativas (6).png' },
        { id: 7, name: 'Educativas 7', src: '/images/logos/Educativas (7).png' },
        { id: 8, name: 'Educativas 8', src: '/images/logos/Educativas (8).png' },
        { id: 9, name: 'Educativas 9', src: '/images/logos/Educativas (9).png' },
        { id: 10, name: 'Educativas 10', src: '/images/logos/Educativas (10).png' },
        { id: 11, name: 'Educativas 11', src: '/images/logos/Educativas (11).png' },
        { id: 12, name: 'Educativas 12', src: '/images/logos/Educativas (12).png' },
        { id: 13, name: 'Educativas 13', src: '/images/logos/Educativas (13).png' },
        { id: 14, name: 'Educativas 14', src: '/images/logos/Educativas (14).png' },
        { id: 15, name: 'Educativas 15', src: '/images/logos/Educativas (15).png' },
        { id: 16, name: 'Educativas 16', src: '/images/logos/Educativas (16).png' },
        { id: 17, name: 'Educativas 17', src: '/images/logos/Educativas (17).png' },
        { id: 18, name: 'Educativas 18', src: '/images/logos/Educativas (18).png' },
        { id: 19, name: 'Educativas 19', src: '/images/logos/Educativas (19).png' },
        { id: 20, name: 'Educativas 20', src: '/images/logos/Educativas (20).png' },
      ],
    },
    {
      id: 'deportivas',
      titulo: 'Instituciones deportivas',
      cantidad: '+7',
      icono: <Trophy className="text-yellow-500" size={22} />,
      color: 'yellow',
      delay: 3200,
      logos: [
        { id: 1, name: 'Deportivas', src: '/images/logos/Deportivas.png' },
        { id: 2, name: 'Deportivas 2', src: '/images/logos/Deportivas (2).png' },
        { id: 3, name: 'Deportivas 3', src: '/images/logos/Deportivas (3).png' },
        { id: 4, name: 'Deportivas 4', src: '/images/logos/Deportivas (4).png' },
        { id: 5, name: 'Deportivas 5', src: '/images/logos/Deportivas (5).png' },
        { id: 6, name: 'Deportivas 6', src: '/images/logos/Deportivas (6).png' },
        { id: 7, name: 'Deportivas 7', src: '/images/logos/Deportivas (7).png' },
      ],
    },
    {
      id: 'merenderos',
      titulo: 'Merenderos',
      cantidad: '+7',
      icono: <Coffee className="text-orange-500" size={22} />,
      color: 'orange',
      delay: 3500,
      logos: [
        { id: 1, name: 'Merendero', src: '/images/logos/Merendero.png' },
        { id: 2, name: 'Merendero 2', src: '/images/logos/Merendero (2).png' },
        { id: 3, name: 'Merendero 3', src: '/images/logos/Merendero (3).png' },
        { id: 4, name: 'Merendero 4', src: '/images/logos/Merendero (4).png' },
        { id: 5, name: 'Merendero 5', src: '/images/logos/Merendero (5).png' },
        { id: 6, name: 'Merendero 6', src: '/images/logos/Merendero (6).png' },
        { id: 7, name: 'Merendero 7', src: '/images/logos/Merendero (7).png' },
      ],
    },
    {
      id: 'civiles',
      titulo: 'Organizaciones civiles',
      cantidad: '+8',
      icono: <Users className="text-purple-500" size={22} />,
      color: 'purple',
      delay: 2900,
      logos: [
        { id: 1, name: 'Org. Civil', src: '/images/logos/Org. Civil.png' },
        { id: 2, name: 'Org. Civil 2', src: '/images/logos/Org. Civil (2).png' },
        { id: 3, name: 'Org. Civil 3', src: '/images/logos/Org. Civil (3).png' },
        { id: 4, name: 'Org. Civil 4', src: '/images/logos/Org. Civil (4).png' },
        { id: 5, name: 'Org. Civil 5', src: '/images/logos/Org. Civil (5).png' },
        { id: 6, name: 'Org. Civil 6', src: '/images/logos/Org. Civil (6).png' },
        { id: 7, name: 'Org. Civil 7', src: '/images/logos/Org. Civil (7).png' },
        { id: 8, name: 'Org. Civil 8', src: '/images/logos/Org. Civil (8).png' },
      ],
    },
    {
      id: 'sin-fines',
      titulo: 'Organizaciones sin fines de lucro',
      cantidad: '+5',
      icono: <HeartHandshake className="text-pink-500" size={22} />,
      color: 'pink',
      delay: 3100,
      logos: [
        { id: 1, name: 'Sin fines de lucro', src: '/images/logos/Sin fines de lucro.png' },
        { id: 2, name: 'Sin fines de lucro 2', src: '/images/logos/Sin fines de lucro (2).png' },
        { id: 3, name: 'Sin fines de lucro 3', src: '/images/logos/Sin fines de lucro (3).png' },
        { id: 4, name: 'Sin fines de lucro 4', src: '/images/logos/Sin fines de lucro (4).png' },
        { id: 5, name: 'Sin fines de lucro 5', src: '/images/logos/Sin fines de lucro (5).png' },
      ],
    },
    {
      id: 'consorcios',
      titulo: 'Consorcios camineros',
      cantidad: '+6',
      icono: <Truck className="text-green-600" size={22} />,
      color: 'green',
      delay: 3400,
      logos: [
        { id: 1, name: 'Consorcio', src: '/images/logos/Consorcio.png' },
        { id: 2, name: 'Consorcio 2', src: '/images/logos/Consorcio (2).png' },
        { id: 3, name: 'Consorcio 3', src: '/images/logos/Consorcio (3).png' },
        { id: 4, name: 'Consorcio 4', src: '/images/logos/Consorcio (4).png' },
        { id: 5, name: 'Consorcio 5', src: '/images/logos/Consorcio (5).png' },
        { id: 6, name: 'Consorcio 6', src: '/images/logos/Consorcio (6).png' },
      ],
    },
  ];

  const colorClasses: Record<string, { badge: string; label: string }> = {
    blue: { badge: 'bg-blue-100', label: 'text-blue-800' },
    yellow: { badge: 'bg-yellow-100', label: 'text-yellow-800' },
    orange: { badge: 'bg-orange-100', label: 'text-orange-800' },
    purple: { badge: 'bg-purple-100', label: 'text-purple-800' },
    pink: { badge: 'bg-pink-100', label: 'text-pink-800' },
    green: { badge: 'bg-green-100', label: 'text-green-800' },
  };

  return (
    <section id="colaboradores" className="relative py-24 bg-white overflow-hidden">
      <HexagonPattern color="#10B981" opacity={0.05} count={12} />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-green-100 rounded-full px-4 py-2 mb-4">
            <Heart className="text-green-600" size={18} />
            <span className="text-green-800 text-sm font-semibold">Compromiso Social</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Apoyamos a <span className="text-green-600">+70 Instituciones</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            A través de donaciones, obras y programas de ayuda, contribuimos al fortalecimiento 
            de organizaciones comprometidas con el bienestar de nuestra comunidad.
          </p>
        </div>

        {/* Category Carousels */}
        <div className="space-y-14">
          {categorias.map((categoria) => (
            <div key={categoria.id}>
              <div className="flex items-center gap-3 mb-5">
                <div className={`${colorClasses[categoria.color].badge} rounded-full p-2`}>
                  {categoria.icono}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800">{categoria.titulo}</h3>
                  <span className={`text-sm font-semibold ${colorClasses[categoria.color].label}`}>
                    {categoria.cantidad} instituciones
                  </span>
                </div>
              </div>
              <div className="relative px-2 md:px-10">
                <CarouselLogos logos={categoria.logos} delay={categoria.delay} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Colaboradores;
