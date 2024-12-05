import React from "react";
import Image from "next/image";

interface EventCardProps {
  imageSrc: string;
  date: string;
  type: string;
  title: string;
  location: string;
}

const EventCard: React.FC<EventCardProps> = ({
  imageSrc,
  date,
  type,
  title,
  location,
}) => {
  return (
    <div className="bg-red-500 w-[300px] rounded-3xl p-6 flex flex-col items-center text-center shadow-md">
      {/* Event Image */}
      <div className="rounded-full overflow-hidden w-[120px] h-[120px] mb-4 border">
        <Image
          src={imageSrc}
          alt={title}
          width={120}
          height={120}
          className="object-cover"
        />
      </div>

      {/* Event Date */}
      <p className="text-sm text-[#6B21A8] font-medium mb-2">{date}</p>

      {/* Event Type */}
      <p className="text-base font-semibold text-[#4A148C] mb-1">{type}</p>

      {/* Event Title */}
      <h3 className="text-lg font-bold text-[#3F3D56] mb-2 underline">
        {title}
      </h3>

      {/* Event Location */}
      <p className="text-sm text-[#4A148C]">{location}</p>
    </div>
  );
};

export default EventCard;
