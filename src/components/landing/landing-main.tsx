/* eslint-disable @next/next/no-img-element */
import React from "react";
import HeroSlider from "../ui/hero-slider/HeroSlider";

interface Props {
  slides: string[];
}

function LandingMain({ slides }: Props) {
  return (
    <div className="h-fit min-h-screen">
      <div className="min-h-fit max-h-[728px] w-full flex justify-center">
        <HeroSlider slides={slides} />
      </div>
    </div>
  );
}

export default LandingMain;
