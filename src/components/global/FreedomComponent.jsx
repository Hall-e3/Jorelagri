import React from "react";
import { work } from "../../constants";

export default function FreedomComponent() {
  return (
    <div className="py-20 bg-[#2e2d2c]">
      <div className="max-w-[1580px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 relative">
          <div className="flex flex-col items-center space-y-5 absolute top-80 left-[-5%]">
            <div className="p-1.5 border-2 rounded-full border-white" />
            <div className="p-1.5 border-2 rounded-full border-white" />
            <div className="p-1.5 border-2 rounded-full border-white" />
          </div>
          <div>
            <img
              src={work}
              alt="work"
              className="h-full w-full rounded-bl-[60px] rounded-tr-[60px]"
            />
          </div>
          <div className="flex flex-col items-center justify-center h-[50vh] w-[55%] bg-white shadow-lg rounded-bl-[60px] rounded-tr-[60px] absolute top-40 right-0">
            <div className="flex flex-col px-15 space-y-5">
              <h4 className="text-5xl font-bold text-black">
                The Freedom To Be Remarkable
              </h4>
              <p className="text-xl font-light leading-1 text-black">
                Our entrepreneurial environment, innovative mind-set and diverse
                team help you to exceed traditional boundaries. Our
                collaborative culture empowers you to take risks and imagine new
                answers to everyday questions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
