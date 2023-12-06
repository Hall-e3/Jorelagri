import React from "react";
import { work } from "../../constants";

export default function FreedomComponent() {
  return (
    <div className="pt-115 md:py-20 bg-[#2e2d2c]">
      <div className="max-w-[1580px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 relative">
          <div className="flex flex-col items-center space-y-5 absolute top-80 left-[-5%]">
            <div className="p-1.5 border-2 rounded-full border-white" />
            <div className="p-1.5 border-2 rounded-full border-white" />
            <div className="p-1.5 border-2 rounded-full border-white" />
          </div>
          <div>
            <img src={work} alt="work" className="h-full w-full md:rounded-bl-[60px] md:rounded-tr-[60px]" />
          </div>
          <div className="flex flex-col items-center mb-[-1.875rem]  py-[1.5625rem]  px-[1.25rem] md:px-15 justify-start md:justify-center h-[30.1875rem] max-w-[19.6875rem] bg-[#2e2d2c] md:bg-white shadow-lg md:max-w-[55%] md:w-[100%] rounded-bl-[1.875rem] rounded-tr-[1.875rem] absolute bottom-100 left-10 md:bottom-0 md:left-[45%] w-full md:top-40 md:right-0 z-1">
            <div className="flex flex-col space-y-5">
              <h4 className="text-[2rem] md:text-5xl font-semibold text-[#2e2d2c] leading-9 md:leading-none">The Freedom To Be Remarkable</h4>
              <p className="text-[1rem] leading-snug md:text-xl font-light leading-1 text-[#2e2d2c]">
                Our entrepreneurial environment, innovative mind-set and diverse team help you to exceed traditional boundaries. Our collaborative culture
                empowers you to take risks and imagine new answers to everyday questions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
