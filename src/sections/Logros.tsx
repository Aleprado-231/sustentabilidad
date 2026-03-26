import type { FC } from 'react';
import { FileText, Sun, Leaf, Award, CheckCircle } from 'lucide-react';
import { HexagonPattern } from '@/components/hexagon/HexagonPattern';

export const Logros: FC = () => {
  const milestones = [
    {
      year: '2022',
      title: 'Reporte de Triple Impacto',
      description: 'Junto a nuestro Balance Social, lanzamos nuestro Reporte de Triple Impacto.',
      icon: <FileText className="text-white" size={20} />,
      color: 'bg-blue-500',
    },
    {
      year: '2023',
      title: 'Primer Reporte GRI',
      description: 'Lanzamos nuestro primer reporte de Sustentabilidad con Estándares GRI.',
      icon: <Award className="text-white" size={20} />,
      color: 'bg-purple-500',
    },
    {
      year: '2024',
      title: 'Parque Solar Comunitario',
      description: 'Inauguramos el Primer Parque Solar comunitario de la Provincia de Córdoba, pasando de ser distribuidores a generadores de energía limpia para nuestra comunidad.',
      icon: <Sun className="text-white" size={20} />,
      color: 'bg-yellow-500',
      highlight: true,
    },
    {
      year: '2025',
      title: 'Registro de Huella de Carbono',
      description: 'Nos convertimos en la primera Cooperativa de la provincia de Córdoba en Registrar su Huella de Carbono en La Secretaría de Cambio Climático del Ministerio de Ambiente y Economía Circular.',
      icon: <Leaf className="text-white" size={20} />,
      color: 'bg-green-500',
      highlight: true,
    },
    {
      year: '2026-2027',
      title: 'Certificación ISO 14001',
      description: 'Estamos iniciando un viaje hacia la certificación de Normas ISO 14001.',
      icon: <CheckCircle className="text-white" size={20} />,
      color: 'bg-orange-500',
      upcoming: true,
    },
  ];

  return (
    <section id="logros" className="relative py-24 bg-white overflow-hidden">
      <HexagonPattern color="#F59E0B" opacity={0.05} count={12} />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-yellow-100 rounded-full px-4 py-2 mb-4">
            <Award className="text-yellow-600" size={18} />
            <span className="text-yellow-800 text-sm font-semibold">Nuestro Recorrido</span>
          </div>
          <h2 className="section-title">
            Logros que nos dan <span className="text-yellow-500">Orgullo</span>
          </h2>
          <p className="section-subtitle">
            Un viaje de compromiso constante con la sustentabilidad y el desarrollo de nuestra comunidad.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Center Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 via-yellow-500 to-green-500 hidden lg:block"></div>

          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <div
                key={milestone.year}
                className={`relative flex flex-col lg:flex-row items-center gap-8 ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Content Card */}
                <div className={`flex-1 ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
                  <div
                    className={`bg-white rounded-2xl p-6 shadow-lg border-2 transition-all hover:shadow-xl ${
                      milestone.highlight
                        ? 'border-yellow-400 ring-4 ring-yellow-100'
                        : milestone.upcoming
                        ? 'border-dashed border-gray-300'
                        : 'border-transparent'
                    }`}
                  >
                    <div className={`flex items-center gap-3 mb-3 ${index % 2 === 0 ? 'lg:justify-end' : ''}`}>
                      <span className="text-3xl font-bold text-gray-800">{milestone.year}</span>
                      {milestone.upcoming && (
                        <span className="bg-orange-100 text-orange-700 text-xs font-semibold px-3 py-1 rounded-full">
                          En curso
                        </span>
                      )}
                      {milestone.highlight && (
                        <span className="bg-yellow-100 text-yellow-700 text-xs font-semibold px-3 py-1 rounded-full">
                          Destacado
                        </span>
                      )}
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{milestone.title}</h3>
                    <p className="text-gray-600">{milestone.description}</p>
                  </div>
                </div>

                {/* Center Dot */}
                <div className="relative z-10 flex-shrink-0">
                  <div className={`w-14 h-14 ${milestone.color} rounded-full flex items-center justify-center shadow-lg ring-4 ring-white`}>
                    {milestone.icon}
                  </div>
                </div>

                {/* Empty Space for Alignment */}
                <div className="flex-1 hidden lg:block"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Banner */}
        <div className="mt-20 bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-500 rounded-3xl p-8 md:p-12">
          <div className="grid md:grid-cols-3 gap-8 text-center text-white">
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">5</div>
              <div className="text-white/90">Años de reportes sustentables</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">1°</div>
              <div className="text-white/90">Cooperativa en reportar GRI</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">55.000</div>
              <div className="text-white/90">kW/h de energía limpia</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Logros;
