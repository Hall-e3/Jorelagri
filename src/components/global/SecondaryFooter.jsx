import React from "react";
import { talk } from "../../constants";
import Button from "../primitives/Button";

export default function SecondaryFooter() {
  return (
    <div className="pb-20 bg-[#2e2d2c]">
      <div className="max-w-[1240px] mx-auto px-10 md:px-30">
        <div className="w-full flex flex-col justify-center items-center gap-4 md:gap-8">
          <img
            src={talk}
            alt="talk to us"
            className="h-20 w-20 md:h-30 md:w-30 object-contain"
          />
          <h4 className="text-white text-[2rem] md:text-5xl font-semibold">
            Talk to Us
          </h4>
          <p className="text-white text-[1rem] md:text-lg text-center">
            Whether you’re interested in speaking to our country management
            team, enquiring about one of our products or partnering with us, we
            want to hear from you.
          </p>
          <Button
            text="Contact Us"
            buttonStyle=" py-4 px-15 md:px-30 bg-white text-black text-[.875rem] md:text-md font-semibold rounded-sm"
          />
        </div>
      </div>
    </div>
  );
}
