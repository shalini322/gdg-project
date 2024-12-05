import Image from "next/image";
import React from "react";

interface FrameProps {
  src: string;
  alt: string;
  color?: string;
}

const ImageFrame: React.FC<FrameProps> = ({ src, alt, color = "#00FF00" }) => {
  return (
    <div
      className={`relative w-64 h-64 border-8 border-b-[40px] border-${color} rounded-lg`}
    >
      <Image
        height={100}
        width={100}
        src={src}
        alt={alt}
        className="w-full h-full object-cover rounded-lg"
      />
    </div>
  );
};

export default ImageFrame;
