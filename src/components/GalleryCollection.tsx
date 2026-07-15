import React, { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Image as ImageIcon } from 'lucide-react';

// Import all the required images directly
import andreasBritney from '../assets/Andreas britney.png';
import nastaranBritney from '../assets/Nastaran_Britney.png';
import rendyBritney from '../assets/Rendy Britney.jpeg';
import yarenBritney from '../assets/Yaren-britney.png';
import simgeBritney from '../assets/simge-britney.jpeg';
import andreasPaparazzi from '../assets/andreas paparazzi.jpeg';
import nastaranPaparazzi from '../assets/Nastaran Paparazzi.jpeg';
import rendyPaparazzi from '../assets/rendy paparazzi.jpeg';
import yarenPaparazzi from '../assets/yaren paparazzi.jpeg';
import simgePaparazzi from '../assets/simge paparazzi.jpeg';

interface GalleryCollectionProps {
  traineeId: string;
  galleryName: string;
  folderPath: string;
  displayName: string;
  fallbackImages?: string[];
}

const GalleryCollection: React.FC<GalleryCollectionProps> = ({ 
  traineeId, 
  galleryName, 
  folderPath, 
  displayName,
  fallbackImages = []
}) => {
  const [images, setImages] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    // Set the images based on the folder path
    const setGalleryImages = () => {
      setIsLoading(true);
      setError(null);
      
      try {
        if (traineeId === "BA-LDN-2026-01482" && folderPath === "performance") {
          setImages([andreasBritney, nastaranBritney, rendyBritney, yarenBritney, simgeBritney]);
        } else if (traineeId === "BA-LDN-2026-01482" && folderPath === "paparazzi") {
          setImages([andreasPaparazzi, nastaranPaparazzi, rendyPaparazzi, yarenPaparazzi, simgePaparazzi]);
        } else {
          // If it's not one of the expected trainee IDs and folder paths, use fallback
          if (fallbackImages && fallbackImages.length > 0) {
            setImages(fallbackImages);
          } else {
            setError('Unsupported trainee ID or folder path');
          }
        }
      } catch (err) {
        console.error(`Error loading images from ${folderPath}:`, err);
        setError('Failed to load images');
        if (fallbackImages && fallbackImages.length > 0) {
          setImages(fallbackImages);
        }
      } finally {
        setIsLoading(false);
      }
    };

    setGalleryImages();
  }, [traineeId, folderPath, fallbackImages]);

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

    // Render a simple 2x2 grid of images
    if (images.length === 1) {
      return (
        <div className="grid grid-cols-1 grid-rows-1 h-full w-full overflow-hidden">
          <div className="relative w-full h-full">
            <img 
              src={images[0]} 
              alt={`${displayName} preview`} 
              className="w-full h-full object-cover cursor-pointer"
              onClick={() => openModal(0)}
            />
            <div className="absolute inset-0 bg-black/0 hover:bg-black/20 transition-colors"></div>
          </div>
        </div>
      );
    } else if (images.length === 2) {
      return (
        <div className="grid grid-cols-2 grid-rows-1 h-full w-full overflow-hidden">
          <div className="relative w-full h-full">
            <img 
              src={images[0]} 
              alt={`${displayName} preview 1`} 
              className="w-full h-full object-cover cursor-pointer"
              onClick={() => openModal(0)}
            />
            <div className="absolute inset-0 bg-black/0 hover:bg-black/20 transition-colors"></div>
          </div>
          <div className="relative w-full h-full">
            <img 
              src={images[1]} 
              alt={`${displayName} preview 2`} 
              className="w-full h-full object-cover cursor-pointer"
              onClick={() => openModal(1)}
            />
            <div className="absolute inset-0 bg-black/0 hover:bg-black/20 transition-colors"></div>
          </div>
        </div>
      );
    } else if (images.length === 3) {
      return (
        <div className="grid grid-cols-2 grid-rows-2 h-full w-full gap-1 overflow-hidden">
          <div className="relative w-full h-full col-span-2">
            <img 
              src={images[0]} 
              alt={`${displayName} preview 1`} 
              className="w-full h-full object-cover cursor-pointer"
              onClick={() => openModal(0)}
            />
            <div className="absolute inset-0 bg-black/0 hover:bg-black/20 transition-colors"></div>
          </div>
          <div className="relative w-full h-full">
            <img 
              src={images[1]} 
              alt={`${displayName} preview 2`} 
              className="w-full h-full object-cover cursor-pointer"
              onClick={() => openModal(1)}
            />
            <div className="absolute inset-0 bg-black/0 hover:bg-black/20 transition-colors"></div>
          </div>
          <div className="relative w-full h-full">
            <img 
              src={images[2]} 
              alt={`${displayName} preview 3`} 
              className="w-full h-full object-cover cursor-pointer"
              onClick={() => openModal(2)}
            />
            <div className="absolute inset-0 bg-black/0 hover:bg-black/20 transition-colors"></div>
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
              alt={`${displayName} preview 1`} 
              className="w-full h-full object-cover cursor-pointer"
              onClick={() => openModal(0)}
            />
            <div className="absolute inset-0 bg-black/0 hover:bg-black/20 transition-colors"></div>
          </div>
          <div className="relative w-full h-full">
            <img 
              src={images[1]} 
              alt={`${displayName} preview 2`} 
              className="w-full h-full object-cover cursor-pointer"
              onClick={() => openModal(1)}
            />
            <div className="absolute inset-0 bg-black/0 hover:bg-black/20 transition-colors"></div>
          </div>
          <div className="relative w-full h-full">
            <img 
              src={images[2]} 
              alt={`${displayName} preview 3`} 
              className="w-full h-full object-cover cursor-pointer"
              onClick={() => openModal(2)}
            />
            <div className="absolute inset-0 bg-black/0 hover:bg-black/20 transition-colors"></div>
          </div>
          <div 
            className="relative w-full h-full bg-primary/10 cursor-pointer overflow-hidden"
            onClick={() => openModal(3)}
          >
            <img 
              src={images[3]} 
              alt={`${displayName} preview 4`} 
              className="w-full h-full object-cover absolute top-0 left-0 opacity-70"
            />
            <div className="absolute inset-0 bg-black/0 hover:bg-black/30 transition-colors flex items-center justify-center">
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
    <div className="bg-background border border-border rounded-2xl overflow-hidden flex flex-col h-full group hover:border-primary/50 transition-all duration-300 hover:-translate-y-1">
      <div className="aspect-video bg-muted relative overflow-hidden">
        {isLoading ? (
          <div className="w-full h-full flex items-center justify-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
          </div>
        ) : error ? (
          <div className="w-full h-full flex flex-col items-center justify-center bg-destructive/10 p-4">
            <ImageIcon className="text-destructive mb-2" size={32} />
            <p className="text-destructive text-sm text-center">{error}</p>
          </div>
        ) : (
          renderCollage()
        )}
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
          <button 
            className="bg-primary text-primary-foreground rounded-full px-4 py-2 text-sm font-bold flex items-center gap-2 transform transition-transform duration-300 group-hover:scale-105"
            onClick={() => images.length > 0 && openModal(0)}
          >
            <ImageIcon size={14} /> View Gallery
          </button>
        </div>
      </div>
      <div className="p-4 flex-1 flex flex-col">
        <div className="flex items-center justify-between mb-2">
          <h3 className="font-black text-foreground text-sm" style={{ fontFamily: "'Abril Fatface', serif" }}>
            {displayName}
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
            className="relative bg-background border border-border rounded-xl max-w-6xl w-full h-[90vh] flex flex-col overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-4 border-b border-border flex justify-between items-center">
              <h3 className="font-bold text-foreground" style={{ fontFamily: "'Abril Fatface', serif" }}>
                {displayName} • {selectedImageIndex + 1} of {images.length}
              </h3>
              <button 
                onClick={closeModal}
                className="text-foreground hover:text-primary transition-colors"
              >
                <X size={20} />
              </button>
            </div>
            <div className="flex-1 flex items-center justify-center p-4 relative overflow-hidden">
              <button 
                className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-black/50 text-white rounded-full p-2 hover:bg-primary hover:text-primary-foreground transition-colors"
                onClick={goToPrevious}
              >
                <ChevronLeft size={24} />
              </button>
              
               <img 
                 src={images[selectedImageIndex]} 
                 alt={`${displayName} ${selectedImageIndex + 1}`}
                 className="h-[90vh] max-w-full object-contain"
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
                    } transition-all duration-200 hover:opacity-90`}
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

export default GalleryCollection;