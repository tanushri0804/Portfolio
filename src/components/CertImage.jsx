import { useState } from "react";

const CertImage = ({ cert, className = "" }) => {
  const [src, setSrc] = useState(cert.image);

  return (
    <img
      src={src}
      alt={cert.title}
      className={className}
      loading="lazy"
      referrerPolicy="no-referrer"
      onError={() => {
        if (cert.fallbackImage && src !== cert.fallbackImage) {
          setSrc(cert.fallbackImage);
        }
      }}
    />
  );
};

export default CertImage;
