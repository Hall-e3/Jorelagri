import React from "react";
import { Navbar } from "../components";
import { image1 } from "../constants";
import { featured5, featured3, featured4 } from "../constants";
const data = [
  {
    id: 1,
    date: "09 November 2023 | News",
    title: "Supporting Akosombo Flood victims",
    subtitle: "Corporate / Sustainability",
    image: featured3,
  },
  {
    id: 2,
    date: "13 October 2023 | News",
    title: "Bridging the Gap for Gender Equity in Agriculture",
    subtitle: "Sustainability",
    image: featured5,
  },
  {
    id: 3,
    date: "29 September 2023 | Blog",
    title: "Reducing crop loss to improve Food Security",
    subtitle: "Sustainability",
    image: featured4,
  },
];

export default function News() {
  return (
    <div className="h-screen w-full">
      <Navbar />
      <div className="h-[100vh] bg-[#ff7000] flex flex-wrap overflow-hidden relative w-full ">
        <div className="h-full flex-1 flex items-center pl-42.5">
          <div className="flex flex-col space-y-6">
            <h4 className="text-white text-8xl font-medium leading-tight">
              Sharing Our
              <span className="text-black">Actions, Performance & Views</span>
            </h4>
          </div>
        </div>
        <div className="flex-1">
          <picture>
            <img
              src={image1}
              alt="image"
              className="w-full h-full bg-contain"
            />
          </picture>
        </div>
      </div>
      <div className="py-20 bg-[#2e2d2c]">
        <div className="max-w-[1580px] mx-auto">
          <div className="flex flex-col space-y-16">
            <div>
              <h3 className="text-5xl font-semibold text-white">
                Featured News
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {data.map((item) => (
                <div key={item.id} className="flex flex-col space-y-8">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="rounded-tr-[60px] rounded-bl-[60px]"
                  />
                  <p className="text-white text-md font-light">{item.date}</p>
                  <h6 className="text-white font-semibold text-2xl">
                    {item.title}
                  </h6>
                  <p className="text-[#cbcbcb] font-medium text-sm">
                    {item.subtitle}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className=""></div>
    </div>
  );
}
