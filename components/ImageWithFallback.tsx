
import React, { useState } from 'react';

// --- IMAGE FALLBACK COMPONENT ---
const ImageWithFallback: React.FC<{
  src: string;
  fallbackSrc: string;
  alt: string;
  className?: string;
  style?: React.CSSProperties;
}> = ({ src, fallbackSrc, alt, ...props }) => {
  const [imgSrc, setImgSrc] = useState(src);

  const handleError = () => {
    setImgSrc(fallbackSrc);
  };

  return <img src={imgSrc} onError={handleError} alt={alt} {...props} />;
};

export default ImageWithFallback;
