/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useRef, useEffect } from "react";
import OptimizedImage from "./OptimizedImage";

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  heightClass?: string; // height preset
}

export default function BeforeAfterSlider({
  beforeImage,
  afterImage,
  heightClass = "h-[300px] md:h-[400px]"
}: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50); // percentage (0 to 100)
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    let position = (x / rect.width) * 100;
    if (position < 0) position = 0;
    if (position > 100) position = 100;
    setSliderPosition(position);
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (!isDragging) return;
    if (e.touches && e.touches[0]) {
      handleMove(e.touches[0].clientX);
    }
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
      window.addEventListener("touchmove", handleTouchMove);
      window.addEventListener("touchend", handleMouseUp);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleMouseUp);
    };
  }, [isDragging]);

  const handleMouseDown = () => {
    setIsDragging(true);
  };

  return (
    <div
      ref={containerRef}
      className={`relative w-full rounded-xl overflow-hidden select-none cursor-ew-resize border border-stone-300 shadow-sm ${heightClass}`}
      id={`ba-slider-${beforeImage.substring(beforeImage.length - 6)}`}
      onMouseDown={handleMouseDown}
      onTouchStart={handleMouseDown}
    >
      {/* After image (background) */}
      <div className="absolute inset-0 w-full h-full">
        <OptimizedImage
          src={afterImage}
          alt="Hasil Akhir Berlian Kontraktor"
          wrapperClassName="w-full h-full"
          className="w-full h-full object-cover"
        />
        {/* Label After */}
        <span className="absolute bottom-4 right-4 bg-orange-600/90 text-white text-[10px] md:text-xs font-black uppercase tracking-wider px-3 py-1.5 rounded backdrop-blur z-20">
          SESUDAH
        </span>
      </div>

      {/* Before image (foreground clipped by sliderPosition) */}
      <div
        className="absolute inset-0 top-0 left-0 h-full overflow-hidden z-10"
        style={{ width: `${sliderPosition}%` }}
      >
        <div style={{ width: containerRef.current?.getBoundingClientRect().width || "100%", height: "100%" }}>
          <img
            src={beforeImage}
            alt="Kondisi Sebelum Konstruksi"
            className="absolute top-0 left-0 w-full h-full object-cover pointer-events-none"
            style={{
              width: containerRef.current?.getBoundingClientRect().width || "100vw",
              maxWidth: "none"
            }}
          />
        </div>
        {/* Label Before */}
        <span className="absolute bottom-4 left-4 bg-zinc-900/90 text-white text-[10px] md:text-xs font-black uppercase tracking-wider px-3 py-1.5 rounded backdrop-blur z-20">
          SEBELUM
        </span>
      </div>

      {/* Drag center handle bar divider */}
      <div
        className="absolute top-0 bottom-0 w-1 bg-white hover:bg-orange-500 transition-colors z-30 cursor-ew-resize"
        style={{ left: `${sliderPosition}%` }}
      >
        {/* Circular grip button */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white hover:bg-orange-600 text-zinc-950 hover:text-white rounded-full shadow-2xl flex items-center justify-center border-2 border-orange-600 transition-all z-40">
          <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
            <path d="M8 7l-5 5 5 5V7zm8 0v10l5-5-5-5z" />
          </svg>
        </div>
      </div>
      
      {/* Help tooltip overlay instruction (disappears when manipulated) */}
      {sliderPosition === 50 && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-20 animate-pulse">
          <div className="bg-stone-900/85 backdrop-blur px-4 py-2 rounded-lg border border-stone-700 text-center text-xs text-white shadow-lg">
            Geser Slider untuk Perbandingan Sebelum/Sesudah
          </div>
        </div>
      )}
    </div>
  );
}
