import React from "react";
import Image from "next/image";

interface EventCardProps {
  imageSrc: string;
  date: string;
  type: string;
  title: string;
  location: string;
  hideLocation?: boolean;
}

const EventCard: React.FC<EventCardProps> = ({
  imageSrc,
  date,
  type,
  title,
  location,
  hideLocation = false,
}) => {
  return (
    <div
      className={`bg-[#cbade0] dark:bg-[#382347] w-72 h-96 rounded-3xl p-6 flex flex-col items-center text-center shadow-md drop-shadow-lg ring-2 ring-[#d3c4f3] transition duration-300 ease-in-out hover:shadow-xl hover:ring-[#9b7fdc]`}
    >
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
      <p className="text-sm font-medium mb-2">{date}</p>

      {/* Event Type */}
      <p className="text-base font-semibold text-[#4A148C] dark:text-[#b97ee7] mb-1">
        {type}
      </p>

      {/* Event Title */}
      <h3 className="text-lg font-bold mb-2 underline">{title}</h3>

      {/* Event Location (conditionally rendered) */}
      {!hideLocation && <p className="text-sm">{location}</p>}
    </div>
  );
};

export default EventCard;
