import { useState, type FC } from 'react';
import { HexagonPattern } from '@/components/hexagon/HexagonPattern';

interface ODSItem {
  number: string;
  name: string;
  color: string;
  bgColor: string;
  description: string;
  icon: React.ReactNode;
}

// Iconos SVG oficiales para cada ODS
const ODSIcons = {
  ods1: (
    <svg viewBox="0 0 100 100" className="w-20 h-20 mx-auto">
      <g fill="currentColor">
        {/* Familia oficial ODS */}
        <circle cx="20" cy="28" r="7"/>
        <path d="M12 42 L12 68 L20 68 L20 52 L25 52 L25 68 L33 68 L33 42 Z"/>
        <circle cx="50" cy="28" r="7"/>
        <path d="M43 42 L43 68 L57 68 L57 42 Z"/>
        <circle cx="80" cy="28" r="7"/>
        <path d="M72 42 L72 68 L80 68 L80 52 L85 52 L85 68 L93 68 L93 42 Z"/>
      </g>
    </svg>
  ),
  ods3: (
    <svg viewBox="0 0 100 100" className="w-20 h-20 mx-auto">
      <g fill="currentColor">
        {/* Latido cardíaco */}
        <path d="M10 50 L20 50 L25 35 L35 65 L45 40 L55 60 L65 30 L75 50 L90 50" 
              fill="none" stroke="currentColor" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
        {/* Corazón */}
        <path d="M50 75 L35 60 Q25 50 35 40 Q45 30 50 45 Q55 30 65 40 Q75 50 65 60 Z"/>
      </g>
    </svg>
  ),
  ods5: (
    <svg viewBox="0 0 100 100" className="w-20 h-20 mx-auto">
      <g fill="currentColor">
        {/* Símbolo de igualdad de género oficial */}
        <circle cx="40" cy="30" r="10"/>
        <line x1="40" y1="40" x2="40" y2="75" stroke="currentColor" strokeWidth="5"/>
        <line x1="28" y1="55" x2="52" y2="55" stroke="currentColor" strokeWidth="5"/>
        <line x1="28" y1="68" x2="52" y2="68" stroke="currentColor" strokeWidth="5"/>
        <circle cx="68" cy="45" r="10" fill="none" stroke="currentColor" strokeWidth="4"/>
        <line x1="68" y1="55" x2="68" y2="75" stroke="currentColor" strokeWidth="5"/>
        <line x1="60" y1="65" x2="76" y2="65" stroke="currentColor" strokeWidth="5"/>
        <line x1="76" y1="55" x2="85" y2="45" stroke="currentColor" strokeWidth="4"/>
        <polygon points="85,45 80,50 85,55" fill="currentColor"/>
      </g>
    </svg>
  ),
  ods7: (
    <svg viewBox="0 0 100 100" className="w-20 h-20 mx-auto">
      <g fill="currentColor">
        {/* Sol oficial */}
        <circle cx="50" cy="50" r="18"/>
        {/* Rayos */}
        <line x1="50" y1="20" x2="50" y2="10" stroke="currentColor" strokeWidth="5" strokeLinecap="round"/>
        <line x1="50" y1="80" x2="50" y2="90" stroke="currentColor" strokeWidth="5" strokeLinecap="round"/>
        <line x1="20" y1="50" x2="10" y2="50" stroke="currentColor" strokeWidth="5" strokeLinecap="round"/>
        <line x1="80" y1="50" x2="90" y2="50" stroke="currentColor" strokeWidth="5" strokeLinecap="round"/>
        <line x1="29" y1="29" x2="22" y2="22" stroke="currentColor" strokeWidth="5" strokeLinecap="round"/>
        <line x1="71" y1="71" x2="78" y2="78" stroke="currentColor" strokeWidth="5" strokeLinecap="round"/>
        <line x1="71" y1="29" x2="78" y2="22" stroke="currentColor" strokeWidth="5" strokeLinecap="round"/>
        <line x1="29" y1="71" x2="22" y2="78" stroke="currentColor" strokeWidth="5" strokeLinecap="round"/>
        {/* Enchufe */}
        <rect x="42" y="72" width="16" height="12" rx="2" fill="white"/>
        <line x1="46" y1="84" x2="46" y2="92" stroke="currentColor" strokeWidth="3"/>
        <line x1="54" y1="84" x2="54" y2="92" stroke="currentColor" strokeWidth="3"/>
      </g>
    </svg>
  ),
  ods8: (
    <svg viewBox="0 0 100 100" className="w-20 h-20 mx-auto">
      <g fill="currentColor">
        {/* Gráfico de barras creciente */}
        <rect x="12" y="60" width="14" height="28"/>
        <rect x="30" y="45" width="14" height="43"/>
        <rect x="48" y="30" width="14" height="58"/>
        <rect x="66" y="15" width="14" height="73"/>
        {/* Flecha de crecimiento */}
        <path d="M18 45 L52 25 L45 22 L52 25 L49 32" fill="none" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
      </g>
    </svg>
  ),
  ods10: (
    <svg viewBox="0 0 100 100" className="w-20 h-20 mx-auto">
      <g fill="currentColor">
        {/* Flechas convergentes */}
        <polygon points="50,12 35,30 42,30 42,42 20,42 20,30 28,30"/>
        <polygon points="50,88 65,70 58,70 58,58 80,58 80,70 72,70"/>
        <rect x="40" y="38" width="20" height="24"/>
        <line x1="15" y1="50" x2="35" y2="50" stroke="white" strokeWidth="5"/>
        <line x1="65" y1="50" x2="85" y2="50" stroke="white" strokeWidth="5"/>
      </g>
    </svg>
  ),
  ods11: (
    <svg viewBox="0 0 100 100" className="w-20 h-20 mx-auto">
      <g fill="currentColor">
        {/* Edificios skyline */}
        <rect x="8" y="55" width="18" height="35"/>
        <rect x="12" y="62" width="4" height="5"/>
        <rect x="18" y="62" width="4" height="5"/>
        <rect x="12" y="72" width="4" height="5"/>
        <rect x="18" y="72" width="4" height="5"/>
        
        <rect x="30" y="35" width="22" height="55"/>
        <rect x="35" y="42" width="5" height="7"/>
        <rect x="42" y="42" width="5" height="7"/>
        <rect x="35" y="55" width="5" height="7"/>
        <rect x="42" y="55" width="5" height="7"/>
        <rect x="35" y="68" width="5" height="7"/>
        <rect x="42" y="68" width="5" height="7"/>
        
        <rect x="56" y="48" width="16" height="42"/>
        <rect x="60" y="54" width="4" height="5"/>
        <rect x="64" y="54" width="4" height="5"/>
        <rect x="60" y="65" width="4" height="5"/>
        <rect x="64" y="65" width="4" height="5"/>
        
        <rect x="76" y="40" width="16" height="50"/>
        <rect x="80" y="48" width="4" height="5"/>
        <rect x="84" y="48" width="4" height="5"/>
        <rect x="80" y="60" width="4" height="5"/>
        <rect x="84" y="60" width="4" height="5"/>
      </g>
    </svg>
  ),
  ods12: (
    <svg viewBox="0 0 100 100" className="w-20 h-20 mx-auto">
      <g fill="none" stroke="currentColor" strokeWidth="6">
        {/* Símbolo del infinito/loop */}
        <path d="M30 50 C30 35 40 25 50 25 C60 25 70 35 70 50 C70 65 60 75 50 75 C40 75 30 65 30 50"/>
        <polygon points="65,30 75,40 65,50" fill="currentColor" stroke="none"/>
        <polygon points="35,70 25,60 35,50" fill="currentColor" stroke="none"/>
      </g>
    </svg>
  ),
  ods16: (
    <svg viewBox="0 0 100 100" className="w-20 h-20 mx-auto">
      <g fill="currentColor">
        {/* Paloma de la paz */}
        <path d="M20 55 Q15 48 22 42 Q28 36 38 42 Q45 32 58 32 Q72 32 78 42 Q85 36 92 42 Q98 48 92 55 Q85 62 78 56 Q72 66 58 66 Q45 66 38 56 Q28 62 20 55"/>
        {/* Rama de olivo */}
        <path d="M35 40 L42 45 L38 50" fill="none" stroke="currentColor" strokeWidth="3"/>
        <ellipse cx="40" cy="28" rx="10" ry="6"/>
      </g>
    </svg>
  ),
};

export const ODS: FC = () => {
  const [flippedCard, setFlippedCard] = useState<string | null>(null);

  const odsList: ODSItem[] = [
    {
      number: '01',
      name: 'Fin de la pobreza',
      color: '#E5243B',
      bgColor: '#E5243B',
      description: 'Trabajamos para erradicar la pobreza en nuestra comunidad mediante programas sociales.',
      icon: ODSIcons.ods1,
    },
    {
      number: '03',
      name: 'Salud y bienestar',
      color: '#4C9F38',
      bgColor: '#4C9F38',
      description: 'Garantizamos el bienestar de nuestros socios y la comunidad con servicios de calidad.',
      icon: ODSIcons.ods3,
    },
    {
      number: '05',
      name: 'Igualdad de género',
      color: '#FF3A21',
      bgColor: '#FF3A21',
      description: 'Promovemos la igualdad de oportunidades para todos en nuestra cooperativa.',
      icon: ODSIcons.ods5,
    },
    {
      number: '07',
      name: 'Energía asequible y no contaminante',
      color: '#FCC30B',
      bgColor: '#FCC30B',
      description: 'Desarrollamos energía limpia con nuestro parque solar de 55.000 kW/h.',
      icon: ODSIcons.ods7,
    },
    {
      number: '08',
      name: 'Trabajo decente y crecimiento económico',
      color: '#A21942',
      bgColor: '#A21942',
      description: 'Generamos empleo de calidad y desarrollo económico local en Morteros.',
      icon: ODSIcons.ods8,
    },
    {
      number: '10',
      name: 'Reducción de las desigualdades',
      color: '#DD1367',
      bgColor: '#DD1367',
      description: 'Reducimos brechas mediante tarifas sociales y programas de ayuda.',
      icon: ODSIcons.ods10,
    },
    {
      number: '11',
      name: 'Ciudades y comunidades sostenibles',
      color: '#FD9D24',
      bgColor: '#FD9D24',
      description: 'Construimos una comunidad más sostenible e inclusiva con nuestros servicios.',
      icon: ODSIcons.ods11,
    },
    {
      number: '12',
      name: 'Producción y consumo responsables',
      color: '#BF8B2E',
      bgColor: '#BF8B2E',
      description: 'Promovemos prácticas de consumo responsable y eficiencia energética.',
      icon: ODSIcons.ods12,
    },
    {
      number: '16',
      name: 'Paz, justicia e instituciones sólidas',
      color: '#00689D',
      bgColor: '#00689D',
      description: 'Fortalecemos nuestras instituciones con transparencia y gobierno cooperativo.',
      icon: ODSIcons.ods16,
    },
  ];

  return (
    <section id="ods" className="relative py-24 bg-gray-50 overflow-hidden">
      <HexagonPattern color="#3B82F6" opacity={0.05} count={15} />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-100 rounded-full px-4 py-2 mb-4">
            <span className="text-blue-800 text-sm font-semibold">Agenda ONU 2030</span>
          </div>
          <h2 className="section-title">
            Nuestro aporte a los{' '}
            <span className="text-blue-600">Objetivos de Desarrollo Sostenible</span>
          </h2>
          <p className="section-subtitle">
            En CoopMorteros nos alineamos con la Agenda 2030 de las Naciones Unidas, 
            contribuyendo activamente a los siguientes Objetivos de Desarrollo Sostenible.
          </p>
        </div>

        {/* ODS Grid with Flip Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {odsList.map((ods) => (
            <div
              key={ods.number}
              className="ods-flip-card h-72 cursor-pointer"
              onMouseEnter={() => setFlippedCard(ods.number)}
              onMouseLeave={() => setFlippedCard(null)}
            >
              <div 
                className={`ods-flip-card-inner ${flippedCard === ods.number ? 'flipped' : ''}`}
              >
                {/* Frente - Icono y color oficial */}
                <div 
                  className="ods-flip-card-front rounded-xl shadow-lg"
                  style={{ backgroundColor: ods.bgColor }}
                >
                  <div className="text-white p-8 h-full flex flex-col justify-between">
                    <div className="flex justify-between items-start">
                      <span className="text-6xl font-bold opacity-90">{ods.number}</span>
                    </div>
                    <div className="text-white/90 flex-1 flex items-center justify-center">
                      {ods.icon}
                    </div>
                    <h3 className="text-xl font-bold leading-tight uppercase tracking-wide">
                      {ods.name}
                    </h3>
                  </div>
                </div>

                {/* Dorso - Descripción */}
                <div 
                  className="ods-flip-card-back rounded-xl shadow-lg"
                  style={{ backgroundColor: ods.bgColor }}
                >
                  <div className="text-white p-8 h-full flex flex-col justify-center">
                    <div className="mb-4">
                      <span className="text-4xl font-bold opacity-50">ODS {ods.number}</span>
                    </div>
                    <h4 className="text-xl font-bold mb-4">{ods.name}</h4>
                    <p className="text-white/90 text-base leading-relaxed">
                      {ods.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <a
            href="https://www.un.org/sustainabledevelopment/es/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors"
          >
            Conocé más sobre la Agenda ONU 2030
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </div>

      <style>{`
        .ods-flip-card {
          perspective: 1000px;
        }
        .ods-flip-card-inner {
          position: relative;
          width: 100%;
          height: 100%;
          transition: transform 0.6s;
          transform-style: preserve-3d;
        }
        .ods-flip-card-inner.flipped {
          transform: rotateY(180deg);
        }
        .ods-flip-card-front,
        .ods-flip-card-back {
          position: absolute;
          width: 100%;
          height: 100%;
          -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
        }
        .ods-flip-card-back {
          transform: rotateY(180deg);
        }
      `}</style>
    </section>
  );
};

export default ODS;
