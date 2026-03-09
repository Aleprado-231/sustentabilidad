import type { FC } from 'react';
import { GraduationCap, Heart, Droplets, Wifi, Zap, Users, BookOpen, Gift } from 'lucide-react';
import { HexagonPattern } from '@/components/hexagon/HexagonPattern';

export const Iniciativas: FC = () => {
  const initiatives = [
    {
      icon: <Zap className="text-yellow-500" size={28} />,
      title: 'Programa de Eficiencia Energética',
      subtitle: 'Para comercios locales',
      description: 'Programa de eficiencia energética para los comercios en conjunto con el Centro Comercial.',
      stat: 'OJO',
      statLabel: 'Programa activo',
      color: 'yellow',
    },
    {
      icon: <GraduationCap className="text-blue-500" size={28} />,
      title: 'Becas Estudiantiles',
      subtitle: 'Educación para todos',
      description: 'Becamos a 20 alumnos de colegios primarios y secundarios de la zona.',
      stat: '20',
      statLabel: 'Alumnos becados',
      color: 'blue',
    },
    {
      icon: <BookOpen className="text-green-500" size={28} />,
      title: 'Subsidio Útiles Escolares',
      subtitle: 'Apoyo educativo',
      description: '$11.5 Millones para la provisión de útiles escolares y elementos de gimnasia en diversas escuelas.',
      stat: '$11.5M',
      statLabel: 'Invertidos',
      color: 'green',
    },
    {
      icon: <Gift className="text-purple-500" size={28} />,
      title: 'Ayudas Escolares Anuales',
      subtitle: '43 centros educativos',
      description: 'Entrega Anual de Ayudas escolares a 43 centros estudiantiles de Morteros y zona Rural.',
      stat: '43',
      statLabel: 'Centros beneficiados',
      color: 'purple',
    },
    {
      icon: <Zap className="text-orange-500" size={28} />,
      title: 'Kit Social de Energía',
      subtitle: 'Apoyo a usuarios',
      description: '43 usuarios recibieron ayuda con el Kit Social de Energía.',
      stat: '43',
      statLabel: 'Usuarios ayudados',
      color: 'orange',
    },
    {
      icon: <Droplets className="text-cyan-500" size={28} />,
      title: 'Tarifa Social de Agua Potable',
      subtitle: 'Acceso universal',
      description: '86 usuarios accedieron a una tarifa preferencial por su situación socioeconómica.',
      stat: '86',
      statLabel: 'Familias beneficiadas',
      color: 'cyan',
    },
    {
      icon: <Wifi className="text-indigo-500" size={28} />,
      title: 'Plan de Internet Adultos Mayores',
      subtitle: 'Conectividad inclusiva',
      description: '622 usuarios accedieron a descuentos en internet para adultos mayores.',
      stat: '622',
      statLabel: 'Usuarios conectados',
      color: 'indigo',
    },
    {
      icon: <Users className="text-red-500" size={28} />,
      title: 'Tarifa Energética para Clubes',
      subtitle: 'Apoyo a instituciones',
      description: '+ de 29 millones de bonificación en tarifa energética para clubes y entidades sin fines de lucro.',
      stat: '+$29M',
      statLabel: 'Bonificados',
      color: 'red',
    },
    {
      icon: <Heart className="text-pink-500" size={28} />,
      title: 'Copa de Leche',
      subtitle: 'Alimentación infantil',
      description: 'Más de 500 niños de 7 merenderos diferentes tienen acceso a una merienda totalmente gratis gracias a CoopMorteros durante todo el año.',
      stat: '500+',
      statLabel: 'Niños alimentados',
      color: 'pink',
    },
  ];

  return (
    <section id="iniciativas" className="relative py-24 bg-gray-50 overflow-hidden">
      <HexagonPattern color="#EC4899" opacity={0.05} count={12} />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-pink-100 rounded-full px-4 py-2 mb-4">
            <Heart className="text-pink-600" size={18} />
            <span className="text-pink-800 text-sm font-semibold">Compromiso Social</span>
          </div>
          <h2 className="section-title">
            Nuestras principales <span className="text-pink-500">iniciativas solidarias</span>
          </h2>
          <p className="section-subtitle">
            Programas concretos que acompañan a nuestra comunidad, fortaleciendo el tejido social de Morteros.
          </p>
        </div>

        {/* Initiatives Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {initiatives.map((initiative, index) => (
            <div
              key={index}
              className={`initiative-card ${initiative.color} card-hover`}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 bg-gray-100 rounded-xl">
                  {initiative.icon}
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-gray-800">{initiative.stat}</div>
                  <div className="text-xs text-gray-500">{initiative.statLabel}</div>
                </div>
              </div>
              
              <div className="mb-3">
                <div className="text-xs font-semibold text-gray-400 uppercase tracking-wide">
                  {initiative.subtitle}
                </div>
                <h3 className="text-lg font-bold text-gray-800 mt-1">
                  {initiative.title}
                </h3>
              </div>
              
              <p className="text-gray-600 text-sm leading-relaxed">
                {initiative.description}
              </p>
            </div>
          ))}
        </div>

        {/* Total Impact Banner */}
        <div className="mt-16 bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-gray-100">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-800">Nuestro Impacto en Números</h3>
            <p className="text-gray-600 mt-2">Resultados de nuestras iniciativas solidarias</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-2xl flex items-center justify-center mx-auto mb-3">
                <Users className="text-yellow-600" size={28} />
              </div>
              <div className="text-3xl font-bold text-gray-800">1.500+</div>
              <div className="text-sm text-gray-600">Personas beneficiadas</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-3">
                <GraduationCap className="text-green-600" size={28} />
              </div>
              <div className="text-3xl font-bold text-gray-800">43</div>
              <div className="text-sm text-gray-600">Centros educativos</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-3">
                <Heart className="text-blue-600" size={28} />
              </div>
              <div className="text-3xl font-bold text-gray-800">7</div>
              <div className="text-sm text-gray-600">Merenderos apoyados</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-pink-100 rounded-2xl flex items-center justify-center mx-auto mb-3">
                <Gift className="text-pink-600" size={28} />
              </div>
              <div className="text-3xl font-bold text-gray-800">$40M+</div>
              <div className="text-sm text-gray-600">Invertidos en la comunidad</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Iniciativas;
