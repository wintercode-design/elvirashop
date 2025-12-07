import { useState } from "react";
import { cn } from "@/lib/utils";

interface ImageGalleryProps {
  images: string[];
  productName: string;
}

export const ImageGallery = ({ images, productName }: ImageGalleryProps) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);
  const [zoomPosition, setZoomPosition] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isZoomed) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setZoomPosition({ x, y });
  };

  return (
    <div className="space-y-4">
      {/* Main Image */}
      <div
        className="relative aspect-[3/4] overflow-hidden rounded-2xl bg-muted cursor-zoom-in"
        onMouseEnter={() => setIsZoomed(true)}
        onMouseLeave={() => setIsZoomed(false)}
        onMouseMove={handleMouseMove}
      >
        <img
          src={images[selectedIndex]}
          alt={`${productName} - Image ${selectedIndex + 1}`}
          className={cn(
            "h-full w-full object-cover transition-transform duration-300",
            isZoomed && "scale-150"
          )}
          style={
            isZoomed
              ? {
                  transformOrigin: `${zoomPosition.x}% ${zoomPosition.y}%`,
                }
              : undefined
          }
        />
      </div>

      {/* Thumbnails */}
      <div className="flex gap-3 overflow-x-auto pb-2">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setSelectedIndex(index)}
            className={cn(
              "relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-lg border-2 transition-all",
              selectedIndex === index
                ? "border-primary ring-2 ring-primary/20"
                : "border-border hover:border-primary/50"
            )}
          >
            <img
              src={image}
              alt={`${productName} thumbnail ${index + 1}`}
              className="h-full w-full object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
};
