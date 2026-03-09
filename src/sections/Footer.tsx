import type { FC } from 'react';
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, ExternalLink } from 'lucide-react';

export const Footer: FC = () => {
  const quickLinks = [
    { label: 'Inicio', href: '#hero' },
    { label: 'Nuestro Compromiso', href: '#compromiso' },
    { label: 'ODS', href: '#ods' },
    { label: 'Logros', href: '#logros' },
    { label: 'Iniciativas', href: '#iniciativas' },
    { label: 'Medio Ambiente', href: '#medioambiente' },
  ];

  const services = [
    { label: 'Telecomunicaciones', href: 'https://cooptech.com.ar/' },
    { label: 'Redes Eléctricas', href: '#' },
    { label: 'IT & Development', href: '#' },
    { label: 'Banco de Sangre', href: '#' },
    { label: 'Televisión', href: 'https://canal50.tv/' },
    { label: 'Agua Potable', href: '#' },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <img
                src="/images/logo-sustentabilidad.png"
                alt="Logo Sustentabilidad"
                width={40}
                height={40}
                className="w-10 h-10 object-contain"
              />
              <span className="font-bold text-xl">CoopMorteros</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Cooperativa de Servicios Públicos de Morteros LTDA. 
              Generando bienestar en la sociedad desde 1960.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.facebook.com/coopmorteros/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"
              >
                <Facebook size={18} />
              </a>
              <a
                href="https://www.instagram.com/coop.morteros/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-pink-600 transition-colors"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://www.linkedin.com/company/coopmorteros/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Enlaces Rápidos</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-yellow-400 transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Nuestros Servicios</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.label}>
                  <a
                    href={service.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-yellow-400 transition-colors text-sm inline-flex items-center gap-1"
                  >
                    {service.label}
                    <ExternalLink size={12} />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Contacto</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="text-yellow-400 flex-shrink-0 mt-0.5" size={18} />
                <span className="text-gray-400 text-sm">
                  Urquiza 17, Morteros<br />
                  Córdoba, Argentina
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-yellow-400 flex-shrink-0" size={18} />
                <a
                  href="tel:+543562402000"
                  className="text-gray-400 hover:text-yellow-400 transition-colors text-sm"
                >
                  +54 3562 402000
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-yellow-400 flex-shrink-0" size={18} />
                <a
                  href="mailto:info@coopmorteros.com"
                  className="text-gray-400 hover:text-yellow-400 transition-colors text-sm"
                >
                  info@coopmorteros.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-500 text-sm text-center md:text-left">
              Copyright © {new Date().getFullYear()} CoopMorteros. Todos los derechos reservados.
            </p>
            <div className="flex items-center gap-2 text-gray-500 text-sm">
              <span>Desarrollado por</span>
              <span className="text-yellow-400 font-medium">IT & Development - COOPMORTEROS</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
