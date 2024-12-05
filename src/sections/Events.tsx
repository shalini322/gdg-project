import EventCard from "@/components/EventCards";
import React from "react";

const Events: React.FC = () => {
  return (
    <section className="bg-white dark:bg-darkgray min-h-screen max-md:bg-none bg-[url('/img/events.png')] bg-no-repeat bg-cover bg-center flex items-center justify-center pt-10">
      <EventCard
        imageSrc="/img/image1.png"
        date="Nov 10, 2024"
        type="Workshop / Study Group"
        title="UI/UX Bootcamp Day 1"
        location="GDG on Campus Haldia Institute of Technology - Haldia, India"
      />
    </section>
  );
};

export default Events;
