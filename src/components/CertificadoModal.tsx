import { useEffect, type FC } from 'react';
import { X, ZoomIn, ZoomOut, Download } from 'lucide-react';
import { useState } from 'react';

interface CertificadoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CertificadoModal: FC<CertificadoModalProps> = ({ isOpen, onClose }) => {
  const [zoom, setZoom] = useState(1);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleEsc);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal Container */}
      <div className="relative w-full h-full flex flex-col animate-in fade-in duration-200">
        {/* Header con controles */}
        <div className="absolute top-0 left-0 right-0 z-10 flex items-center justify-between p-4 bg-gradient-to-b from-black/50 to-transparent">
          <h3 className="text-white font-semibold text-lg drop-shadow-lg">
            Certificado de Registro de Huella de Carbono
          </h3>
          <div className="flex items-center gap-2">
            {/* Zoom out */}
            <button
              onClick={() => setZoom(Math.max(0.5, zoom - 0.25))}
              className="p-2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-lg text-white transition-colors"
              title="Alejar"
            >
              <ZoomOut size={20} />
            </button>
            {/* Zoom in */}
            <button
              onClick={() => setZoom(Math.min(2, zoom + 0.25))}
              className="p-2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-lg text-white transition-colors"
              title="Acercar"
            >
              <ZoomIn size={20} />
            </button>
            {/* Descargar */}
            <a
              href="/images/certificado-huella-carbono.jpg"
              download="Certificado-Huella-Carbono-CoopMorteros.jpg"
              className="p-2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-lg text-white transition-colors"
              title="Descargar"
            >
              <Download size={20} />
            </a>
            {/* Cerrar */}
            <button
              onClick={onClose}
              className="p-2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-lg text-white transition-colors ml-2"
              title="Cerrar"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Área de scroll con la imagen */}
        <div className="flex-1 overflow-auto flex items-center justify-center p-4 pt-20">
          <div 
            className="relative transition-transform duration-200 ease-out"
            style={{ transform: `scale(${zoom})` }}
          >
            <img
              src="/images/certificado-huella-carbono.jpg"
              alt="Certificado de Registro de Huella de Carbono - CoopMorteros"
              className="max-w-full h-auto shadow-2xl rounded-lg bg-white"
              style={{ maxHeight: zoom === 1 ? 'calc(100vh - 120px)' : 'none' }}
            />
          </div>
        </div>

        {/* Footer con zoom level */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 backdrop-blur-sm text-white text-sm px-4 py-2 rounded-full">
          {Math.round(zoom * 100)}%
        </div>
      </div>
    </div>
  );
};

export default CertificadoModal;
