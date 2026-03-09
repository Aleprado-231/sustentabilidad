import type { FC } from 'react';
import { Award, Target, Lightbulb, Users } from 'lucide-react';
import { HexagonPattern } from '@/components/hexagon/HexagonPattern';

export const Compromiso: FC = () => {
  const features = [
    {
      icon: <Award className="text-yellow-500" size={32} />,
      title: 'Primera Cooperativa',
      description: 'Primera Cooperativa de Servicios Públicos del país en presentar su Reporte de Sustentabilidad.',
    },
    {
      icon: <Target className="text-green-500" size={32} />,
      title: 'Eje Transversal',
      description: 'La Sustentabilidad es el eje transversal de nuestra gestión, desde nuestra Misión, Visión y Valores.',
    },
    {
      icon: <Lightbulb className="text-blue-500" size={32} />,
      title: 'Innovación',
      description: 'Impulsamos acciones que generan servicios de calidad, impacto social y desarrollo económico compartido.',
    },
    {
      icon: <Users className="text-purple-500" size={32} />,
      title: 'Compromiso Comunitario',
      description: 'Nuestro compromiso con la comunidad, el ambiente y la innovación es el motor que nos impulsa.',
    },
  ];

  return (
    <section id="compromiso" className="relative py-24 bg-white overflow-hidden">
      <HexagonPattern color="#10B981" opacity={0.05} count={12} />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-green-100 rounded-full px-4 py-2 mb-4">
            <Award className="text-green-600" size={18} />
            <span className="text-green-800 text-sm font-semibold">Nuestro Compromiso</span>
          </div>
          <h2 className="section-title">
            Somos la primera Cooperativa de Servicios Públicos del país en presentar su{' '}
            <span className="text-green-600">Reporte de Sustentabilidad</span>
          </h2>
          <p className="section-subtitle">
            Nuestro compromiso con la comunidad, el ambiente y la innovación es el motor que nos impulsa.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="/images/compromiso-main.jpg"
                alt="Compromiso Sustentable"
                width={800}
                height={600}
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-gradient-green rounded-2xl flex items-center justify-center">
                      <Award className="text-white" size={32} />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-gray-800">2023</div>
                      <div className="text-gray-600">Primer Reporte GRI</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating Hexagons */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-yellow-400 rounded-2xl rotate-12 opacity-80"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-green-500 rounded-xl -rotate-12 opacity-80"></div>
          </div>

          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
              En CoopMorteros, hemos hecho de la{' '}
              <span className="text-green-600">Sustentabilidad</span> el eje transversal de nuestra gestión.
            </h3>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              Desde nuestra Misión, Visión y Valores, impulsamos acciones que no solo generan servicios de calidad, 
              sino también impacto social, cuidado ambiental y desarrollo económico compartido.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-gray-50 rounded-xl p-5 hover:bg-green-50 transition-colors group"
                >
                  <div className="mb-3 group-hover:scale-110 transition-transform">
                    {feature.icon}
                  </div>
                  <h4 className="font-semibold text-gray-800 mb-2">{feature.title}</h4>
                  <p className="text-sm text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Compromiso;
