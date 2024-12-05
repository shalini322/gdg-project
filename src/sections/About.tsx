import Image from "next/image";
import React from "react";
import MaxWidthWrapper from "../hooks/MaxWidthWrapper";
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <section id="about-us" className="dark:bg-darkgray">
      <MaxWidthWrapper className="h-full flex flex-col md:flex-row items-center justify-between">
        <div className="flex mt-8">
          <div className="w-1/2">
            <Image
              height={100}
              width={500}
              src="/img/team.png"
              alt="People collaborating and building blocks"
            />
          </div>
          <div className="w-1/2">
            <h1 className="text-5xl font-bold text-[#4D4D4D] dark:text-headdark mb-4">
              About Us
            </h1>
            <p className="text-sm md:text-base text-[#717171] dark:text-[#C8E6C9] px-4 md:px-0">
              At GDG On Campus Haldia Institute of Technology, we uphold the
              principles of excellence. We believe in cultivating a culture that
              values learning, creativity, and teamwork. Our chapter is founded
              upon the principles of inclusivity and diversity, where every
              member&apos;s unique perspective enriches our collective endeavors. We
              are committed to creating an environment where ideas flourish,
              skills are honed diligently, and connections are forged
              enduringly.
            </p>
            <div className="flex items-end justify-end mt-10">
              <Button className="bg-[#2194F3] dark:bg-[#2194F3] hover:dark:bg-red-400  text-white rounded-sm w-1/4 md:w-1/4 h-10">
                Read More
              </Button>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default About;
