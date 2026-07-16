import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight, Image as ImageIcon } from 'lucide-react';

interface SimpleGalleryProps {
  galleryName: string;
  images: string[];
}

const SimpleGallery: React.FC<SimpleGalleryProps> = ({ 
  galleryName, 
  images 
}) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (index: number) => {
    setSelectedImageIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImageIndex(null);
  };

  const goToNext = () => {
    if (selectedImageIndex !== null && images.length > 0) {
      setSelectedImageIndex(prev => {
        if (prev === null) return 0;
        return (prev + 1) % images.length;
      });
    }
  };

  const goToPrevious = () => {
    if (selectedImageIndex !== null && images.length > 0) {
      setSelectedImageIndex(prev => {
        if (prev === null) return images.length - 1;
        return (prev - 1 + images.length) % images.length;
      });
    }
  };

  const renderCollage = () => {
    if (images.length === 0) {
      return (
        <div className="w-full h-full flex items-center justify-center bg-muted">
          <ImageIcon size={40} className="text-muted-foreground" />
        </div>
      );
    }

    // Render a simple 2x2 grid of images with static layout
    if (images.length === 1) {
      return (
        <div className="grid grid-cols-1 grid-rows-1 h-full w-full overflow-hidden">
          <div className="relative w-full h-full">
            <img 
              src={images[0]} 
              alt={`${galleryName} preview`} 
              className="w-full h-full object-cover cursor-pointer"
              onClick={() => openModal(0)}
            />
          </div>
        </div>
      );
    } else if (images.length === 2) {
      return (
        <div className="grid grid-cols-2 grid-rows-1 h-full w-full overflow-hidden">
          <div className="relative w-full h-full">
            <img 
              src={images[0]} 
              alt={`${galleryName} preview 1`} 
              className="w-full h-full object-cover cursor-pointer"
              onClick={() => openModal(0)}
            />
          </div>
          <div className="relative w-full h-full">
            <img 
              src={images[1]} 
              alt={`${galleryName} preview 2`} 
              className="w-full h-full object-cover cursor-pointer"
              onClick={() => openModal(1)}
            />
          </div>
        </div>
      );
    } else if (images.length === 3) {
      return (
        <div className="grid grid-cols-2 grid-rows-2 h-full w-full gap-1 overflow-hidden">
          <div className="relative w-full h-full col-span-2">
            <img 
              src={images[0]} 
              alt={`${galleryName} preview 1`} 
              className="w-full h-full object-cover cursor-pointer"
              onClick={() => openModal(0)}
            />
          </div>
          <div className="relative w-full h-full">
            <img 
              src={images[1]} 
              alt={`${galleryName} preview 2`} 
              className="w-full h-full object-cover cursor-pointer"
              onClick={() => openModal(1)}
            />
          </div>
          <div className="relative w-full h-full">
            <img 
              src={images[2]} 
              alt={`${galleryName} preview 3`} 
              className="w-full h-full object-cover cursor-pointer"
              onClick={() => openModal(2)}
            />
          </div>
        </div>
      );
    } else {
      // For 4 or more images, show 2x2 grid with a count indicator
      return (
        <div className="grid grid-cols-2 grid-rows-2 h-full w-full gap-1 overflow-hidden">
          <div className="relative w-full h-full">
            <img 
              src={images[0]} 
              alt={`${galleryName} preview 1`} 
              className="w-full h-full object-cover cursor-pointer"
              onClick={() => openModal(0)}
            />
          </div>
          <div className="relative w-full h-full">
            <img 
              src={images[1]} 
              alt={`${galleryName} preview 2`} 
              className="w-full h-full object-cover cursor-pointer"
              onClick={() => openModal(1)}
            />
          </div>
          <div className="relative w-full h-full">
            <img 
              src={images[2]} 
              alt={`${galleryName} preview 3`} 
              className="w-full h-full object-cover cursor-pointer"
              onClick={() => openModal(2)}
            />
          </div>
          <div 
            className="relative w-full h-full bg-primary/10 cursor-pointer overflow-hidden"
            onClick={() => openModal(3)}
          >
            <img 
              src={images[3]} 
              alt={`${galleryName} preview 4`} 
              className="w-full h-full object-cover absolute top-0 left-0 opacity-70"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-white font-bold text-lg bg-black/50 px-3 py-1 rounded-lg backdrop-blur-sm">
                +{images.length - 4}
              </span>
            </div>
          </div>
        </div>
      );
    }
  };

  return (
    <div className="bg-background border border-border rounded-2xl overflow-hidden flex flex-col h-full">
      <div className="aspect-video bg-muted relative overflow-hidden">
        {renderCollage()}
        {/* Hover overlay - simplified without group-hover */}
        <div className="absolute inset-0 bg-black/0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
          <button 
            className="bg-primary text-primary-foreground rounded-full px-4 py-2 text-sm font-bold flex items-center gap-2"
            onClick={() => images.length > 0 && openModal(0)}
          >
            <ImageIcon size={14} /> View Gallery
          </button>
        </div>
      </div>
      <div className="p-4 flex-1 flex flex-col">
        <div className="flex items-center justify-between mb-2">
          <h3 className="font-black text-foreground text-sm" style={{ fontFamily: "'Abril Fatface', serif" }}>
            {galleryName}
          </h3>
          <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full font-bold" style={{ fontFamily: "'DM Mono', monospace" }}>
            JPG
          </span>
        </div>
        <p className="text-xs text-muted-foreground mb-3" style={{ fontFamily: "'DM Mono', monospace" }}>
          {images.length} {images.length === 1 ? 'photo' : 'photos'}
        </p>
        <div className="flex-1"></div>
        <button 
          className="w-full flex items-center justify-center gap-2 bg-primary/10 hover:bg-primary/20 text-primary py-2 rounded-lg transition-colors mt-3"
          onClick={() => images.length > 0 && openModal(0)}
        >
          <ImageIcon size={14} />
          <span className="text-xs font-bold" style={{ fontFamily: "'DM Mono', monospace" }}>BROWSE GALLERY</span>
        </button>
      </div>

      {/* Lightbox Modal */}
      {isModalOpen && selectedImageIndex !== null && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
          onClick={closeModal}
        >
          <div 
            className="relative bg-background border border-border rounded-xl max-w-6xl w-full max-h-[90vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-4 border-b border-border flex justify-between items-center">
              <h3 className="font-bold text-foreground" style={{ fontFamily: "'Abril Fatface', serif" }}>
                {galleryName} • {selectedImageIndex + 1} of {images.length}
              </h3>
              <button 
                onClick={closeModal}
                className="text-foreground hover:text-primary transition-colors"
              >
                <X size={20} />
              </button>
            </div>
             <div className="flex-1 flex items-center justify-center p-4 relative">
               <button 
                 className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-black/50 text-white rounded-full p-2 hover:bg-primary hover:text-primary-foreground transition-colors"
                 onClick={goToPrevious}
               >
                 <ChevronLeft size={24} />
               </button>
               
                <img 
                  src={images[selectedImageIndex]} 
                  alt={`${galleryName} ${selectedImageIndex + 1}`}
                  className="max-h-[80vh] max-w-full object-contain"
                />
               
               <button 
                 className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-black/50 text-white rounded-full p-2 hover:bg-primary hover:text-primary-foreground transition-colors"
                 onClick={goToNext}
               >
                 <ChevronRight size={24} />
               </button>
             </div>
            <div className="p-4 border-t border-border overflow-x-auto">
              <div className="flex gap-2 py-2">
                {images.map((img, idx) => (
                  <button
                    key={idx}
                    className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 ${
                      idx === selectedImageIndex ? 'border-primary ring-2 ring-primary/30' : 'border-transparent'
                    } transition-all duration-200`}
                    onClick={() => setSelectedImageIndex(idx)}
                  >
                    <img 
                      src={img} 
                      alt={`Thumbnail ${idx + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SimpleGallery;