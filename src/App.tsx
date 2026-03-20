import { Navigation } from '@/components/Navigation';
import { Hero } from '@/sections/Hero';
import { Compromiso } from '@/sections/Compromiso';
import { ODS } from '@/sections/ODS';
import { Logros } from '@/sections/Logros';
import { Iniciativas } from '@/sections/Iniciativas';
import { MedioAmbiente } from '@/sections/MedioAmbiente';
import { Programas } from '@/sections/Programas';
import { Noticias } from '@/sections/Noticias';
import { Colaboradores } from '@/sections/Colaboradores';
import { Footer } from '@/sections/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main>
        <Hero />
        <Compromiso />
        <ODS />
        <Logros />
        <Iniciativas />
        <MedioAmbiente />
        <Programas />
        <Colaboradores />
        <Noticias />
      </main>
      <Footer />
    </div>
  );
}

export default App;
