import { Button } from "@/components/ui/button";
import Hero from "@/sections/Hero";
import React from "react";

type Props = {};

const LandingPage = (props: Props) => {
  return (
    <div>
      <div>
        <Hero />
        {/* <Button className="bg-[#2194F3]">Shadcn button</Button> */}
      </div>
    </div>
  );
};

export default LandingPage;
