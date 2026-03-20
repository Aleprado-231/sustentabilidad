import { useState, type FC } from 'react';
import { Leaf, Recycle, FileCheck, Sun, Wind, Droplets } from 'lucide-react';
import { HexagonPattern } from '@/components/hexagon/HexagonPattern';
import { CertificadoModal } from '@/components/CertificadoModal';

export const MedioAmbiente: FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const environmentalActions = [
    {
      icon: <Recycle className="text-green-500" size={32} />,
      title: 'Programa de Reciclado',
      description: 'Implementamos programas de reciclado en nuestras oficinas con contenedores diferenciados.',
    },
    {
      icon: <Sun className="text-yellow-500" size={32} />,
      title: 'Energía Solar',
      description: 'Nuestro Parque Solar genera energía limpia para la comunidad.',
    },
    {
      icon: <Wind className="text-blue-500" size={32} />,
      title: 'Eficiencia Energética',
      description: 'Promovemos el uso eficiente de la energía en todos nuestros servicios.',
    },
    {
      icon: <Droplets className="text-cyan-500" size={32} />,
      title: 'Cuidado del Agua',
      description: 'Optimizamos el uso de agua en nuestras instalaciones y servicios.',
    },
  ];

  return (
    <section id="medioambiente" className="relative py-24 bg-white overflow-hidden">
      <HexagonPattern color="#10B981" opacity={0.05} count={12} />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-green-100 rounded-full px-4 py-2 mb-4">
            <Leaf className="text-green-600" size={18} />
            <span className="text-green-800 text-sm font-semibold">Ambiente</span>
          </div>
          <h2 className="section-title">
            Compromiso con el <span className="text-green-600">Ambiente</span>
          </h2>
          <p className="section-subtitle">
            En 2022 formalizamos un compromiso con el Medioambiente definiendo esta responsabilidad como un nuevo objetivo estratégico.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left: Image and Stats */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="/images/medioambiente-main.jpg"
                alt="Compromiso Ambiental"
                width={800}
                height={600}
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-green-900/80 to-transparent"></div>
              
              {/* Overlay Stats */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/95 backdrop-blur-sm rounded-xl p-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center">
                        <Recycle className="text-white" size={24} />
                      </div>
                      <div>
                        <div className="text-sm text-gray-600">Material reciclado</div>
                        <div className="text-xl font-bold text-gray-800">En curso</div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white/95 backdrop-blur-sm rounded-xl p-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-yellow-500 rounded-xl flex items-center justify-center">
                        <Sun className="text-white" size={24} />
                      </div>
                      <div>
                        <div className="text-sm text-gray-600">Energía limpia</div>
                        <div className="text-xl font-bold text-gray-800">55.000 kW/h</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-green-400 rounded-2xl rotate-12 opacity-60"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-yellow-400 rounded-xl -rotate-12 opacity-60"></div>
          </div>

          {/* Right: Content */}
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
              Acciones y prácticas en pos de un futuro más{' '}
              <span className="text-green-600">sostenible</span>
            </h3>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              A partir de nuestro compromiso ambiental, se delinearon acciones y establecieron prácticas 
              en pos de su cumplimiento. Trabajamos continuamente para reducir nuestro impacto ambiental.
            </p>

            {/* Action Cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              {environmentalActions.map((action, index) => (
                <div
                  key={index}
                  className="bg-gray-50 rounded-xl p-5 hover:bg-green-50 transition-colors group"
                >
                  <div className="mb-3 group-hover:scale-110 transition-transform">
                    {action.icon}
                  </div>
                  <h4 className="font-semibold text-gray-800 mb-2">{action.title}</h4>
                  <p className="text-sm text-gray-600">{action.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Huella de Carbono Section */}
        <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-8 md:p-12 border border-green-100">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-green-200 rounded-full px-4 py-2 mb-4">
                <FileCheck className="text-green-700" size={18} />
                <span className="text-green-800 text-sm font-semibold">Huella de Carbono</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                Primera cooperativa de servicios públicos en registrar su{' '}
                <span className="text-green-600">Huella de Carbono</span>
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Nos convertimos en la primera Cooperativa de la provincia de Córdoba en Registrar 
                su Huella de Carbono en La Secretaría de Cambio Climático del Ministerio de Ambiente 
                y Economía Circular.
              </p>
              <button
                onClick={() => setIsModalOpen(true)}
                className="inline-flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-700 transition-colors cursor-pointer"
              >
                <FileCheck size={20} />
                Ver certificado
              </button>
            </div>

            <div className="relative">
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <div className="flex items-center justify-center mb-6">
                  <div className="w-32 h-32 bg-green-100 rounded-full flex items-center justify-center">
                    <div className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center">
                      <Leaf className="text-white" size={48} />
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-semibold text-gray-800 mb-2">Registro Oficial</div>
                  <div className="text-sm text-gray-600">
                    Secretaría de Cambio Climático<br />
                    Ministerio de Ambiente y Economía Circular
                  </div>
                </div>
              </div>
              
              {/* Decorative */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-yellow-400 rounded-full opacity-60"></div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-green-400 rounded-full opacity-60"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal del Certificado */}
      <CertificadoModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </section>
  );
};

export default MedioAmbiente;
