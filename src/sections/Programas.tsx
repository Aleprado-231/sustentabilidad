import type { FC } from 'react';
import { Shield, Zap, Lightbulb, Heart, FileText, Download } from 'lucide-react';
import { HexagonPattern } from '@/components/hexagon/HexagonPattern';

export const Programas: FC = () => {
  const programs = [
    {
      icon: <Shield className="text-blue-500" size={32} />,
      title: 'Inspección de Seguridad Eléctrica en Clubes',
      description: 'Trabajamos junto a los clubes para garantizar instalaciones seguras, protegiendo a niños, jóvenes y a toda la comunidad que utiliza estos espacios.',
      color: 'blue',
      benefits: ['Inspección técnica gratuita', 'Asesoramiento especializado', 'Corrección de irregularidades'],
    },
    {
      icon: <Zap className="text-yellow-500" size={32} />,
      title: 'Reducción de Tarifa Eléctrica para Clubes',
      description: 'Acompañamos a las organizaciones locales con un beneficio directo en su factura de energía, ayudándolas a sostener sus actividades deportivas, culturales y sociales.',
      color: 'yellow',
      benefits: ['Bonificación en tarifa', '+ de $29 millones bonificados', '29 clubes beneficiados'],
    },
    {
      icon: <Lightbulb className="text-green-500" size={32} />,
      title: 'Eficiencia Energética para Comercios',
      description: 'Junto al Centro Comercial impulsamos diagnósticos, mediciones y planes de mejora para que los pequeños y medianos negocios puedan reducir consumos, bajar costos y cuidar el ambiente.',
      color: 'green',
      benefits: ['Diagnóstico gratuito', 'Mediciones profesionales', 'Plan de mejora personalizado'],
    },
    {
      icon: <Heart className="text-pink-500" size={32} />,
      title: 'Ayuda a Merenderos "Copa de Leche"',
      description: 'Cada mes apoyamos a los merenderos barriales con insumos alimenticios, asegurando que cientos de niños y niñas de Morteros accedan a una merienda nutritiva en un entorno de inclusión, solidaridad y contención.',
      color: 'pink',
      benefits: ['500+ niños beneficiados', '7 merenderos apoyados', 'Todo el año'],
    },
  ];

  return (
    <section id="programas" className="relative py-24 bg-gray-50 overflow-hidden">
      <HexagonPattern color="#8B5CF6" opacity={0.05} count={12} />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-purple-100 rounded-full px-4 py-2 mb-4">
            <Heart className="text-purple-600" size={18} />
            <span className="text-purple-800 text-sm font-semibold">Nuestro Compromiso</span>
          </div>
          <h2 className="section-title">
            Programas con la <span className="text-purple-600">Comunidad</span>
          </h2>
          <p className="section-subtitle">
            En CoopMorteros creemos que la sustentabilidad empieza en nuestra propia comunidad. 
            Llevamos adelante programas concretos que acompañan a clubes, instituciones, comercios y merenderos.
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {programs.map((program, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden card-hover"
            >
              <div className={`h-2 bg-${program.color}-500`} style={{
                background: program.color === 'blue' ? '#3B82F6' :
                           program.color === 'yellow' ? '#FBBF24' :
                           program.color === 'green' ? '#10B981' :
                           program.color === 'pink' ? '#EC4899' : '#8B5CF6'
              }}></div>
              <div className="p-8">
                <div className="flex items-start gap-4 mb-4">
                  <div className={`p-4 bg-${program.color}-100 rounded-xl`} style={{
                    background: program.color === 'blue' ? '#DBEAFE' :
                               program.color === 'yellow' ? '#FEF3C7' :
                               program.color === 'green' ? '#D1FAE5' :
                               program.color === 'pink' ? '#FCE7F3' : '#EDE9FE'
                  }}>
                    {program.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{program.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{program.description}</p>
                  </div>
                </div>

                {/* Benefits */}
                <div className="mt-6 pt-6 border-t border-gray-100">
                  <div className="text-sm font-semibold text-gray-500 mb-3">Beneficios del programa:</div>
                  <div className="flex flex-wrap gap-2">
                    {program.benefits.map((benefit, bIndex) => (
                      <span
                        key={bIndex}
                        className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium bg-${program.color}-100 text-${program.color}-700`}
                        style={{
                          background: program.color === 'blue' ? '#DBEAFE' :
                                     program.color === 'yellow' ? '#FEF3C7' :
                                     program.color === 'green' ? '#D1FAE5' :
                                     program.color === 'pink' ? '#FCE7F3' : '#EDE9FE',
                          color: program.color === 'blue' ? '#1D4ED8' :
                                program.color === 'yellow' ? '#B45309' :
                                program.color === 'green' ? '#047857' :
                                program.color === 'pink' ? '#BE185D' : '#6D28D9'
                        }}
                      >
                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {benefit}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Download Section */}
        <div className="mt-16 bg-white rounded-3xl shadow-xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center">
                  <FileText className="text-purple-600" size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800">Bases y Condiciones</h3>
                  <p className="text-gray-600">Descargá los documentos de los programas</p>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Estos programas son parte de nuestra identidad cooperativa: acciones concretas, 
                medibles y sostenidas en el tiempo, que muestran que nuestro compromiso con la 
                comunidad va más allá de los servicios que brindamos.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="/documents/bases-clubes.pdf" 
                download
                className="flex items-center justify-center gap-2 bg-purple-600 text-white px-6 py-4 rounded-xl font-semibold hover:bg-purple-700 transition-colors cursor-pointer"
              >
                <Download size={20} />
                Bases Clubes
              </a>
              <a 
                href="/documents/bases-comercios.pdf" 
                download
                className="flex items-center justify-center gap-2 bg-green-600 text-white px-6 py-4 rounded-xl font-semibold hover:bg-green-700 transition-colors cursor-pointer"
              >
                <Download size={20} />
                Bases Comercios
              </a>
              <a 
                href="/documents/bases-merenderos.pdf" 
                download
                className="flex items-center justify-center gap-2 bg-pink-600 text-white px-6 py-4 rounded-xl font-semibold hover:bg-pink-700 transition-colors cursor-pointer"
              >
                <Download size={20} />
                Bases Merenderos
              </a>
            </div>
          </div>
        </div>

        {/* Quote */}
        <div className="mt-16 text-center">
          <blockquote className="text-xl md:text-2xl text-gray-600 italic max-w-4xl mx-auto">
            "Estos programas son parte de nuestra identidad cooperativa: acciones concretas, 
            medibles y sostenidas en el tiempo, que muestran que nuestro compromiso con la 
            comunidad va más allá de los servicios que brindamos."
          </blockquote>
          <div className="mt-4 flex items-center justify-center gap-2">
            <img
              src="/images/logo-sustentabilidad.png"
              alt=""
              width={24}
              height={24}
              className="w-6 h-6 object-contain"
            />
            <span className="text-gray-500 font-medium">CoopMorteros</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Programas;
