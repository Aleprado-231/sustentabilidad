import type { FC } from 'react';
import { Calendar, ArrowRight, Newspaper } from 'lucide-react';
import { HexagonPattern } from '@/components/hexagon/HexagonPattern';

export const Noticias: FC = () => {
  const news = [
    {
      title: 'Inauguración del Parque Solar Comunitario',
      excerpt: 'CoopMorteros inaugura el primer parque solar fotovoltaico comunitario de la provincia de Córdoba, marcando un hito en la generación de energía limpia.',
      date: '15 de marzo de 2024',
      category: 'Energía Limpia',
      image: '/images/noticia-parque-solar.jpg',
      color: 'yellow',
    },
    {
      title: 'Registro de Huella de Carbono',
      excerpt: 'Nos convertimos en la primera cooperativa de servicios públicos de Córdoba en registrar oficialmente nuestra huella de carbono.',
      date: '10 de enero de 2025',
      category: 'Medio Ambiente',
      image: '/images/noticia-huella-carbono.jpg',
      color: 'green',
    },
    {
      title: 'Programa Copa de Leche 2025',
      excerpt: 'Continuamos apoyando a 7 merenderos barriales, garantizando una merienda nutritiva para más de 500 niños durante todo el año.',
      date: '5 de febrero de 2025',
      category: 'Compromiso Social',
      image: '/images/noticia-copa-leche.jpg',
      color: 'pink',
    },
  ];

  return (
    <section id="noticias" className="relative py-24 bg-white overflow-hidden">
      <HexagonPattern color="#3B82F6" opacity={0.05} count={12} />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-100 rounded-full px-4 py-2 mb-4">
            <Newspaper className="text-blue-600" size={18} />
            <span className="text-blue-800 text-sm font-semibold">Novedades</span>
          </div>
          <h2 className="section-title">
            Noticias de <span className="text-blue-600">Sustentabilidad</span>
          </h2>
          <p className="section-subtitle">
            Enterate de las últimas novedades sobre nuestras acciones sustentables y compromiso con la comunidad.
          </p>
        </div>

        {/* News Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {news.map((item, index) => (
            <article
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden card-hover group cursor-pointer"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  width={600}
                  height={400}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold bg-${item.color}-100 text-${item.color}-700`}
                    style={{
                      background: item.color === 'yellow' ? '#FEF3C7' :
                                 item.color === 'green' ? '#D1FAE5' :
                                 item.color === 'pink' ? '#FCE7F3' : '#DBEAFE',
                      color: item.color === 'yellow' ? '#B45309' :
                            item.color === 'green' ? '#047857' :
                            item.color === 'pink' ? '#BE185D' : '#1D4ED8'
                    }}
                  >
                    {item.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-2 text-gray-500 text-sm mb-3">
                  <Calendar size={14} />
                  {item.date}
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed line-clamp-3 mb-4">
                  {item.excerpt}
                </p>
                <div className="flex items-center gap-2 text-blue-600 font-semibold text-sm group-hover:gap-3 transition-all">
                  Leer más
                  <ArrowRight size={16} />
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="inline-flex items-center gap-2 border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-600 hover:text-white transition-all">
            Ver todas las noticias
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Noticias;
