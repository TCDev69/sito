import React, { useState } from 'react';
import { ImageIcon } from 'lucide-react';
import ImageModal from './ImageModal';

const images = [
  {
    url: '/images/IMG_7607.jpg',
    title: 'Cat on fence',
    category: 'Cats',
  },
  {
    url: '/images/IMG_6996.jpg',
    title: 'Cat by fence',
    category: 'Cats',
  },
  {
    url: '/images/IMG_7011.jpg',
    title: 'Cat on wood',
    category: 'Cats',
  },
  {
    url: '/images/IMG_7581.jpg',
    title: 'Cat on rocks',
    category: 'Cats',
  },
  {
    url: '/images/IMG_7588.jpg',
    title: 'Cat on rocks',
    category: 'Cats',
  },
  {
    url: '/images/IMG_7668.jpg',
    title: 'Cat in the dark',
    category: 'Cats',
  },
];

function Gallery() {
  const [selectedImage, setSelectedImage] = useState<(typeof images)[0] | null>(
    null
  );

  return (
    <>
      <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
        {images.map((image, index) => (
          <div
            key={index}
            className="group relative overflow-hidden rounded-xl bg-white/5 border border-white/10 break-inside-avoid cursor-pointer"
            onClick={() => setSelectedImage(image)}
          >
            <img
              src={image.url}
              alt={image.title}
              className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="p-4 bg-gradient-to-t from-black/60 to-transparent absolute bottom-0 left-0 right-0">
              <h3 className="text-xl font-semibold text-white mb-1">
                {image.title}
              </h3>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-400">{image.category}</span>
                <ImageIcon size={18} className="text-blue-400" />
              </div>
            </div>
          </div>
        ))}
      </div>
      <ImageModal
        image={selectedImage}
        onClose={() => setSelectedImage(null)}
      />
    </>
  );
}

export default Gallery;
