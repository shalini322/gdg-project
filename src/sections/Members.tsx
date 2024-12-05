import ImageFrame from "@/components/ImageFrame";
import { Button } from "@/components/ui/button";
import MaxWidthWrapper from "@/hooks/MaxWidthWrapper";
import React from "react";

const Members: React.FC = () => {
  // Member data array
  const members = [
    {
      role: "WEB DEVELOPMENT LEAD",
      name: "Deepak Kumar",
      borderColor: "#79F77D",
      imageSrc: "/img/webdev.png",
    },
    {
      role: "GDSC LEAD",
      name: "Rishabh Kumar",
      borderColor: "#7E9EFF",
      imageSrc: "/img/lead.png",
    },
    {
      role: "APP DEVELOPMENT LEAD",
      name: "Chinmay Verma",
      borderColor: "#FF5752",
      imageSrc: "/img/applead.png",
    },
    {
      role: "WEB DEVELOPMENT LEAD",
      name: "Deepak Kumar",
      borderColor: "#79F77D",
      imageSrc: "/img/webdev.png",
    },
    {
      role: "GDSC LEAD",
      name: "Rishabh Kumar",
      borderColor: "#7E9EFF",
      imageSrc: "/img/lead.png",
    },
    {
      role: "APP DEVELOPMENT LEAD",
      name: "Chinmay Verma",
      borderColor: "#FF5752",
      imageSrc: "/img/applead.png",
    },
    {
      role: "WEB DEVELOPMENT LEAD",
      name: "Deepak Kumar",
      borderColor: "#79F77D",
      imageSrc: "/img/webdev.png",
    },
    {
      role: "GDSC LEAD",
      name: "Rishabh Kumar",
      borderColor: "#7E9EFF",
      imageSrc: "/img/lead.png",
    },
    {
      role: "APP DEVELOPMENT LEAD",
      name: "Chinmay Verma",
      borderColor: "#FF5752",
      imageSrc: "/img/applead.png",
    },
  ];

  return (
    <section id="members" className="bg-white dark:bg-darkgray h-full w-full bg-[url('/img/members1.png')] bg-no-repeat bg-cover bg-center flex items-center justify-center pt-10">
      <MaxWidthWrapper className="w-full">
        <h1 className="text-5xl text-[#4D4D4D] text-center my-10 font-semibold dark:text-headdark">
          Members
        </h1>

        {/* Members Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 justify-center items-center gap-x-10 gap-y-10">
          {members.map((member, index) => (
            <ImageFrame
              key={index}
              role={member.role}
              name={member.name}
              borderColor={member.borderColor}
              imageSrc={member.imageSrc}
              className="justify-self-center"
            />
          ))}
        </div>

        {/* Show More Button */}
        <div className="flex justify-center my-10">
          <Button className="bg-[#2194F3] dark:bg-[#2194F3] hover:dark:bg-red-400 sm:text-md max-md:px-16 text-white rounded-sm w-1/4 md:w-40 h-10">
            Show More
          </Button>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default Members;
