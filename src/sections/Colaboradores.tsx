import type { FC } from 'react';
import { Heart } from 'lucide-react';
import { HexagonPattern } from '@/components/hexagon/HexagonPattern';

export const Colaboradores: FC = () => {
  // Lista de logos de instituciones que apoyamos
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
    <section id="colaboradores" className="relative py-24 bg-white overflow-hidden">
      <HexagonPattern color="#10B981" opacity={0.05} count={12} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-green-100 rounded-full px-4 py-2 mb-4">
            <Heart className="text-green-600" size={18} />
            <span className="text-green-800 text-sm font-semibold">Compromiso Social</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Instituciones que <span className="text-green-600">apoyamos</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            A través de donaciones, obras y programas de ayuda, contribuimos al fortalecimiento 
            de organizaciones comprometidas con el bienestar de nuestra comunidad.
          </p>
        </div>

        {/* Logos Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {logos.map((logo) => (
            <div
              key={logo.id}
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 h-32 flex items-center justify-center group"
            >
              <img
                src={logo.src}
                alt={logo.name}
                className="max-w-full max-h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Colaboradores;
