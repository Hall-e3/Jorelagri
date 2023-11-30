import React from "react";
import Button from "../primitives/Button";
import { image1 } from "../../constants";

export default function Hero() {
  return (
    <div className="h-[100vh] bg-[#ff7000] flex flex-wrap overflow-hidden relative w-full ">
      <div className="h-full flex-1 flex items-center pl-42.5">
        <div className="flex flex-col space-y-6">
          <h4 className="text-black text-8xl font-medium leading-tight">
            Bridging the Gap for{" "}
            <span className="text-white">Gender Equity in Agriculture</span>
          </h4>
          <p className="text-xl font-light leading-1 text-black">
            Globally, one-third of the food produced is wasted before it reaches
            our plates. That’s food that could’ve nourished 828 million
            chronically hungry people and millions in lost income for farmers.
          </p>
          <div>
            <Button
              text="Discover more"
              buttonStyle=" py-3 px-13 bg-white text-black text-md font-semibold rounded-sm"
            />
          </div>
        </div>
        <div className="flex items-center space-x-3 absolute bottom-22">
          <div className="p-1.5 border-2  rounded-full border-white"></div>
          <div className="p-1.5 border-2  rounded-full border-white"></div>
          <div className="p-1.5 border-2  rounded-full border-white"></div>
          <div className="p-1.5 border-2  rounded-full border-white"></div>
        </div>
      </div>
      <div className="flex-1">
        <picture>
          <img src={image1} alt="image" className="w-full h-full bg-contain" />
        </picture>
      </div>
    </div>
  );
}
