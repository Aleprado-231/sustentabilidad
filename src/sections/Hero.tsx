import type { FC } from 'react';
import { ArrowRight, Leaf, Heart, Zap } from 'lucide-react';
import { HexagonPattern } from '@/components/hexagon/HexagonPattern';

export const Hero: FC = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/images/hero-sustentabilidad.jpg"
          alt="Sustentabilidad CoopMorteros"
          width={1920}
          height={1080}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent"></div>
      </div>

      {/* Hexagon Pattern Overlay */}
      <HexagonPattern color="#FFD700" opacity={0.08} count={15} />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
            <Leaf className="text-yellow-400" size={18} />
            <span className="text-white text-sm font-medium">Gestión Sustentable</span>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Quiero un{' '}
            <span className="text-yellow-400">CoopMorteros</span>{' '}
            Sustentable
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed">
            Nuestro aporte a los Objetivos de Desarrollo Sostenible. 
            Nuestro compromiso con vos y con el futuro de nuestra comunidad.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4">
            <a
              href="#ODS"
              className="inline-flex items-center gap-2 bg-gradient-coop text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transition-all group"
            >
              Conocé nuestro aporte a la agenda ONU 2030
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-white/20">
            <div className="text-center">
              <div className="flex justify-center mb-2">
                <Zap className="text-yellow-400" size={28} />
              </div>
              <div className="text-2xl md:text-3xl font-bold text-white">55.000</div>
              <div className="text-white/70 text-sm">kW/h Generados</div>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-2">
                <Heart className="text-red-400" size={28} />
              </div>
              <div className="text-2xl md:text-3xl font-bold text-white">500+</div>
              <div className="text-white/70 text-sm">Niños beneficiados</div>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-2">
                <Leaf className="text-green-400" size={28} />
              </div>
              <div className="text-2xl md:text-3xl font-bold text-white">1°</div>
              <div className="text-white/70 text-sm">Cooperativa en reportar</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Hexagon Decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-24 overflow-hidden">
        <svg
          viewBox="0 0 1200 100"
          preserveAspectRatio="none"
          className="absolute bottom-0 w-full h-full"
        >
          <defs>
            <pattern id="hexagons" width="50" height="43.4" patternUnits="userSpaceOnUse" patternTransform="scale(0.8)">
              <polygon
                fill="none"
                stroke="#FFD700"
                strokeWidth="1"
                points="24.8,22 37.3,29.2 37.3,43.7 24.8,50.9 12.3,43.7 12.3,29.2"
                transform="translate(0, -15)"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hexagons)" opacity="0.3" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
