import React, { useEffect, useState } from 'react';
import { X, Copyright } from 'lucide-react';

interface ImageModalProps {
  image: {
    url: string;
    title: string;
    category: string;
  } | null;
  onClose: () => void;
}

function ImageModal({ image, onClose }: ImageModalProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (image) {
      setIsModalOpen(true);
    } else {
      setIsModalOpen(false);
    }
  }, [image]);

  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  if (!image) return null;

  const modalImageUrl = image.url;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-lg transition-opacity duration-500 ${
        isModalOpen ? 'opacity-100' : 'opacity-0'
      }`}
      onClick={onClose}
    >
      <div className="relative w-full max-w-5xl max-h-screen">
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 text-white hover:text-blue-400 transition-colors"
          aria-label="Close image modal"
        >
          <X size={24} />
        </button>
        <div
          className={`relative rounded-xl overflow-hidden bg-white/5 border border-white/10 max-h-screen transition-all duration-500 ${
            isModalOpen ? 'scale-105' : 'scale-100'
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <img
            src={modalImageUrl}
            alt={image.title}
            className="w-full h-full max-h-[80vh] object-contain"
          />
          <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 to-transparent">
            <h3 className="text-2xl font-bold text-white mb-2">
              {image.title} 
            </h3>
            <p className="text-blue-400">{image.category}</p>
            <div className="absolute bottom-4 right-4 text-white text-sm">
            <p className="text-white">© TCDev</p>
            
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ImageModal;
