"use client";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function ProjectGallery({ images, alt }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // If it's a single image (string), just render it normally
  if (!Array.isArray(images)) {
    return (
      <img 
        src={images} 
        alt={alt} 
        className="w-full h-full object-cover rounded-xl transition-transform duration-700 group-hover:scale-105" 
      />
    );
  }

  // If array of images
  const nextImage = (e) => {
    e.preventDefault();
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevImage = (e) => {
    e.preventDefault();
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <div className="relative w-full h-full group/gallery overflow-hidden rounded-xl">
      <img 
        src={images[currentIndex]} 
        alt={`${alt} - Image ${currentIndex + 1}`} 
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
      />
      
      {images.length > 1 && (
        <>
          <button 
            onClick={prevImage}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-surface/80 hover:bg-surface text-secondary p-2 rounded-full opacity-0 group-hover/gallery:opacity-100 transition-opacity z-20 shadow-md backdrop-blur-md border border-border"
            aria-label="Previous image"
          >
            <ChevronLeft size={20} />
          </button>
          
          <button 
            onClick={nextImage}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-surface/80 hover:bg-surface text-secondary p-2 rounded-full opacity-0 group-hover/gallery:opacity-100 transition-opacity z-20 shadow-md backdrop-blur-md border border-border"
            aria-label="Next image"
          >
            <ChevronRight size={20} />
          </button>

          {/* Indicators */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20 opacity-0 group-hover/gallery:opacity-100 transition-opacity">
            {images.map((_, idx) => (
              <div 
                key={idx} 
                className={`w-2 h-2 rounded-full transition-colors ${idx === currentIndex ? 'bg-primary' : 'bg-secondary/40'}`} 
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
