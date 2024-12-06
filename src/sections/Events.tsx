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
    <section className="bg-white dark:bg-darkgray min-h-screen bg-[url('/img/events.png')] bg-no-repeat bg-cover bg-center py-10 flex flex-col items-center">
      <div className="container mx-auto px-4">
        {/* First Row */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-8">
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
        <div className="flex flex-col md:flex-row justify-center md:justify-evenly items-center gap-6">
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
