import React from "react";
import Image from "next/image";
import clsx from "classnames";

interface ImageFrameProps extends React.HTMLAttributes<HTMLDivElement> {
  imageSrc: string;
  name: string;
  role: string;
  borderColor?: string;
}

const ImageFrame: React.FC<ImageFrameProps> = ({
  imageSrc,
  name,
  role,
  borderColor = "#79F77D",
  ...rest
}) => {
  return (
    <div
      {...rest}
      className={clsx(
        "relative flex flex-col items-center border-8 w-52 border-x-[10px]",
        rest.className
      )}
      style={{
        borderColor: borderColor,
        boxShadow: `0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)`,
      }}
    >
      {/* Image */}
      <div className="overflow-hidden rounded-lg -mt-10 h-56">
        <Image
          src={imageSrc}
          alt={name}
          className="w-full object-cover"
          width={4000}
          height={200}
        />
      </div>

      {/* Text */}
      <div
        className={clsx("text-center text-black px-4 w-full h-24 pt-4", rest.className)}
        style={{
          backgroundColor: borderColor,
          color: getContrastYIQ(borderColor),
        }}
      >
        <h3 className="text-md font-bold text-black">{name}</h3>
        <p className="text-sm uppercase opacity-80 text-black">{role}</p>
      </div>
    </div>
  );
};

function getContrastYIQ(hexcolor: string) {
  hexcolor = hexcolor.replace("#", "");

  const r = parseInt(hexcolor.substring(0, 2), 16);
  const g = parseInt(hexcolor.substring(2, 2), 16);
  const b = parseInt(hexcolor.substring(4, 2), 16);

  // Calculate YIQ luminance
  const yiq = (r * 299 + g * 587 + b * 114) / 1000;

  // Return black for light background, white for dark background
  return yiq >= 128 ? "black" : "white";
}

export default ImageFrame;
