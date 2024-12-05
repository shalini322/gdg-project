  import Image from "next/image";
  import React from "react";
  import MaxWidthWrapper from "../hooks/MaxWidthWrapper";
  import { Button } from "@/components/ui/button";

  const About = () => {
    return (
      <section id="about-us" className="dark:bg-darkgray py-12 md:py-16 lg:py-20">
        <MaxWidthWrapper className="w-full ">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center p-4">
            <div className="w-full order-2 md:order-1">
              <Image
                className="w-full h-auto object-cover rounded-lg shadow-md"
                height={500}
                width={600}
                src="/img/team.png"
                alt="People collaborating and building blocks"
                priority
              />
            </div>

            <div className="w-full space-y-6 order-1 md:order-2">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#4D4D4D] dark:text-headdark">
                About Us
              </h1>

              <p className="text-sm md:text-base text-[#717171] dark:text-[#C8E6C9] leading-relaxed">
                At GDG On Campus Haldia Institute of Technology, we uphold the
                principles of excellence. We believe in cultivating a culture that
                values learning, creativity, and teamwork. Our chapter is founded
                upon the principles of inclusivity and diversity, where every
                member's unique perspective enriches our collective endeavors. We
                are committed to creating an environment where ideas flourish,
                skills are honed diligently, and connections are forged
                enduringly.
              </p>

              <div className="flex justify-start">
                <Button className="bg-[#2194F3] dark:bg-[#2194F3] hover:dark:bg-red-400 sm:text-md max-md:px-16 text-white rounded-sm w-1/4 md:w-40 h-10">
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
