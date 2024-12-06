import EventCard from "@/components/EventCards";
import React from "react";

const Events: React.FC = () => {

  const firstRowEvents = [
    {
      imageSrc: "/img/image1.png",
      date: "Nov 10, 2024",
      type: "Workshop / Study Group",
      title: "UI/UX Bootcamp Day 1",
      location: "GDG on Campus Haldia Institute of Technology - Haldia, India",
    },
  ];

  const secondRowEvents = [
    {
      imageSrc: "/img/image1.png",
      date: "Nov 11, 2024",
      type: "Conference",
      title: "Tech Talks 2024",
      location: "HIT Auditorium - Haldia, India",
    },
    {
      imageSrc: "/img/image1.png",
      date: "Nov 12, 2024",
      type: "Hackathon",
      title: "Hack the Future",
      location: "HIT Campus - Haldia, India",
    },
  ];

  return (
    <section className="bg-white dark:bg-darkgray min-h-screen max-md:bg-none bg-[url('/img/events.png')] bg-no-repeat bg-cover bg-center flex items-center justify-center py-10">
      <div className="grid grid-rows-2 items-center justify-center gap-y-4">
        {/* First Row */}
        <div className="flex justify-center">
          {firstRowEvents.map((event, index) => (
            <EventCard
              key={`first-row-${index}`}
              imageSrc={event.imageSrc}
              date={event.date}
              type={event.type}
              title={event.title}
              location={event.location}
            />
          ))}
        </div>

        {/* Second Row */}
        <div className="flex gap-4 justify-evenly">
          {secondRowEvents.map((event, index) => (
            <EventCard
              key={`second-row-${index}`} 
              imageSrc={event.imageSrc}
              date={event.date}
              type={event.type}
              title={event.title}
              location={event.location}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;
