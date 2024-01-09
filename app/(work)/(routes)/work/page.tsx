"use client";
import React from "react";
import workData from "@/public/lotties/working.json";
import Lottie from "lottie-react";

export default function AboutPage() {
  return (
    <div className="w-full ">
      <div className="w-full text-3xl lg:text-6xl text-center font-semibold text-pink-400 mt-8 uppercase">workingPage</div>
      <div className="flex items-center w-full justify-around">
        <Lottie
          animationData={workData}
          className="flex justify-center items-center"
          loop={true}
        />
      </div>
    </div>
  );
}
