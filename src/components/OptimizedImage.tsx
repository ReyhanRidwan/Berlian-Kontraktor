/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { IMAGES } from "../constants/images";

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string; // Additional classes for the image itself
  wrapperClassName?: string; // Classes for the wrapper (e.g. aspect-video, aspect-square, h-64)
  onClick?: () => void;
}

export default function OptimizedImage({
  src,
  alt,
  className = "",
  wrapperClassName = "aspect-video",
  onClick
}: OptimizedImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  const imageSrc = hasError || !src ? IMAGES.placeholder : src;

  return (
    <div
      className={`relative overflow-hidden bg-zinc-800 ${wrapperClassName}`}
      onClick={onClick}
      id={`opt-img-wrap-${src.substring(src.length - 8).replace(/[^a-zA-Z0-9]/g, "")}`}
    >
      {/* Loading state shimmer overlay */}
      {!isLoaded && !hasError && (
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-800 via-zinc-700 to-zinc-800 animate-pulse" />
      )}

      <motion.img
        src={imageSrc}
        alt={alt}
        loading="lazy"
        decoding="async"
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoaded ? 1 : 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        onLoad={() => setIsLoaded(true)}
        onError={() => setHasError(true)}
        className={`w-full h-full object-cover ${className} ${onClick ? 'cursor-pointer' : ''}`}
        id={`opt-img-${src.substring(src.length - 8).replace(/[^a-zA-Z0-9]/g, "")}`}
      />
    </div>
  );
}
