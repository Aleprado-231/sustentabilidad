import { useState, useEffect, type FC } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

interface NavigationProps {
  className?: string;
}

export const Navigation: FC<NavigationProps> = ({ className }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Inicio', href: '#hero' },
    { label: 'Nuestro Compromiso', href: '#compromiso' },
    { label: 'ODS', href: '#ods' },
    { label: 'Logros', href: '#logros' },
    { label: 'Iniciativas', href: '#iniciativas' },
    { label: 'Ambiente', href: '#medioambiente' },
    { label: 'Programas', href: '#programas' },
    { label: 'Noticias', href: '#noticias' },
  ];

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg py-3'
          : 'bg-transparent py-5',
        className
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#hero" className="flex items-center gap-3">
            <img
              src="/images/logo-sustentabilidad.png"
              alt="Logo Sustentabilidad"
              width={40}
              height={40}
              className="w-10 h-10 object-contain"
            />
            <span
              className={cn(
                'font-bold text-xl transition-colors',
                isScrolled ? 'text-gray-800' : 'text-white'
              )}
            >
              CoopMorteros
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={cn(
                  'px-4 py-2 rounded-full text-sm font-medium transition-all hover:bg-yellow-400/20',
                  isScrolled ? 'text-gray-700' : 'text-white'
                )}
              >
                {item.label}
              </a>
            ))}
          </div>



          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className={isScrolled ? 'text-gray-800' : 'text-white'} size={24} />
            ) : (
              <Menu className={isScrolled ? 'text-gray-800' : 'text-white'} size={24} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 bg-white rounded-2xl shadow-xl p-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block px-4 py-3 text-gray-700 hover:bg-yellow-50 rounded-lg font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}

          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
