import React from "react";
import { Footer, Input, Navbar } from "../components";
import { featured1, featured2, image1 } from "../constants";
import { featured5, featured3, featured4 } from "../constants";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
const data = [
  {
    id: 1,
    date: "09 November 2023 | News",
    title: "Supporting Akosombo Flood victims",
    subtitle: "Corporate / Sustainability",
    image: featured3
  },
  {
    id: 2,
    date: "13 October 2023 | News",
    title: "Bridging the Gap for Gender Equity in Agriculture",
    subtitle: "Sustainability",
    image: featured5
  },
  {
    id: 3,
    date: "29 September 2023 | Blog",
    title: "Reducing crop loss to improve Food Security",
    subtitle: "Sustainability",
    image: featured4
  }
];

const allNews = [
  {
    id: 1,
    date: "09 November 2023 | News",
    title: "Supporting Akosombo Flood victims",
    subtitle: "Corporate / Sustainability",
    image: featured3
  },
  {
    id: 2,
    date: "13 October 2023 | News",
    title: "Bridging the Gap for Gender Equity in Agriculture",
    subtitle: "Sustainability",
    image: featured5
  },
  {
    id: 3,
    date: "29 September 2023 | Blog",
    title: "Reducing crop loss to improve Food Security",
    subtitle: "Sustainability",
    image: featured4
  },
  {
    id: 4,
    date: "09 November 2023 | News",
    title: "Supporting Akosombo Flood victims",
    subtitle: "Corporate / Sustainability",
    image: featured2
  },
  {
    id: 5,
    date: "13 October 2023 | News",
    title: "Bridging the Gap for Gender Equity in Agriculture",
    subtitle: "Sustainability",
    image: featured1
  },
  {
    id: 6,
    date: "29 September 2023 | Blog",
    title: "Reducing crop loss to improve Food Security",
    subtitle: "Sustainability",
    image: featured4
  }
];

const downlinks = [
  {
    id: 1,
    title: "All News"
  },
  {
    id: 2,
    title: "Corporate"
  },
  {
    id: 3,
    title: "Business & Product"
  },
  {
    id: 4,
    title: "Sustainability"
  }
];

export default function News() {
  const [active, setActive] = React.useState(0);
  console.log(active);
  const handleChange = (evt) => {
   const selectedValue = parseInt(evt.target.value, 10);
   setActive(selectedValue);
  };

  return (
    <div className="h-screen w-full">
      <Navbar />
      <div className="h-[100vh] bg-[#ff7000] flex flex-col md:flex-row overflow-hidden relative w-full ">
        <div className="px-10 py-8 md:py-0 md:px-0 md:flex-1 flex items-center md:pl-42.5">
          <div className="flex flex-col space-y-6">
            <h4 className="text-white text-[2.25rem]  md:text-8xl font-medium leading-10 md:leading-tight">
              Sharing Our
              <span className="text-black"> Actions, Performance & Views</span>
            </h4>
          </div>
        </div>
        <div className="flex-1">
          <picture>
            <img src={image1} alt="image2" className="w-full h-full bg-contain" />
          </picture>
        </div>
      </div>
      <div className="py-20 bg-[#2e2d2c] px-[30px] md:px-0">
        <div className="max-w-[1580px] mx-auto">
          <div className="flex flex-col space-y-16">
            <div>
              <h3 className="text-[1.5625rem] md:text-5xl font-semibold text-white">Featured News</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {data.map((item) => (
                <div key={item.id} className="flex flex-col space-y-4 md:space-y-8">
                  <img src={item.image} alt={item.title} className="rounded-tr-[60px] rounded-bl-[60px]" />
                  <p className="text-white text-[.875rem] md:text-md font-light">{item.date}</p>
                  <h6 className="text-white font-semibold text-[1.125rem] md:text-2xl">{item.title}</h6>
                  <p className="text-[#cbcbcb] font-medium text-[.875rem] md:text-sm">{item.subtitle}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="py-20 ">
        <div className="max-w-[1580px] mx-auto">
          <div className="flex flex-col space-y-14 px-[30px] md:px-0">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <h3 className="text-[1.5625rem] md:text-5xl font-semibold text-black">All News</h3>
              <form className="flex flex-col md:flex-row items-center justify-between gap-10 md:gap-20">
                <div className="flex space-x-6 md:space-x-0 items-center">
                  <Input styles="flex flex-col items-start md:space-x-3 md:items-center md:flex-row" label="From" type="date" name="bday" />
                  <Input label="To" type="date" name="bday" />
                </div>
                <div className="hidden md:flex items-center space-x-2 border-b-2 border-b-[#2e2d2c] pb-2">
                  <p>Search:</p>
                  <input className="outline-none" />
                  <MagnifyingGlassIcon className="h-4 w-4" />
                </div>
                <div className="w-full flex flex-col items-start md:hidden">
                  <p className="text-[1rem] font-semibold">Search:</p>
                  <div className="w-full flex flex-row items-center border border-[#2e2d2c] py-2.5 px-3 rounded-md">
                    <input className="outline-none flex-1" />
                    <MagnifyingGlassIcon className="h-4 w-4" />
                  </div>
                </div>

                <div className="w-full flex flex-col items-start md:hidden">
                  <p className="text-[1rem] font-semibold">Show:</p>
                  <div className="w-full h-12 flex flex-row items-center border border-[#2e2d2c] rounded-md">
                    <select className=" h-full w-full outline-none rounded-md px-2" value={active} name="news" id="news" onChange={handleChange}>
                      {downlinks.map((link) => (
                        <option key={link.id} value={link.id}>
                          {link.title}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </form>
            </div>
            <div className="hidden md:flex flex-col items-center">
              <div className="flex items-center">
                {downlinks.map((link) => (
                  <h5
                    onClick={() => setActive(link.id)}
                    key={link.id}
                    className={`cursor-pointer text-xl font-light px-12 border-b-4 pb-2 ${
                      active === link.id ? " border-b-[#ff7000] font-bold" : "border-b-[#e9e9e9]"
                    }`}>
                    {link.title}
                  </h5>
                ))}
              </div>
            </div>
            <div>
              {active === 1 && (
                <>
                  {allNews.length === 0 ? (
                    <div className="flex items-center justify-center">
                      <h6 className="text-lg font-bold">No records found</h6>
                    </div>
                  ) : (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-20">
                      {allNews.map((item) => (
                        <div key={item.id} className="flex flex-col space-y-8">
                          <img src={item.image} alt={item.title} className="rounded-tr-[60px] rounded-bl-[60px]" />
                          <p className="text-black text-sm font-light">{item.date}</p>
                          <h6 className="text-black font-semibold text-2xl">{item.title}</h6>
                          <p className="text-[#2e2d2c] font-medium text-sm">{item.subtitle}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </>
              )}
              {active === 2 && (
                <>
                  {allNews.length === 0 ? (
                    <div className="flex items-center justify-center">
                      <h6 className="text-lg font-bold">No records found</h6>
                    </div>
                  ) : (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-20">
                      {allNews.map((item) => (
                        <div key={item.id} className="flex flex-col space-y-8">
                          <img src={item.image} alt={item.title} className="rounded-tr-[60px] rounded-bl-[60px]" />
                          <p className="text-black text-sm font-light">{item.date}</p>
                          <h6 className="text-black font-semibold text-2xl">{item.title}</h6>
                          <p className="text-[#2e2d2c] font-medium text-sm">{item.subtitle}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </>
              )}
              {active === 3 && (
                <>
                  <div className="flex items-center justify-center">
                    <h6 className="text-3xl font-bold">No records found</h6>
                  </div>
                </>
              )}
              {active === 4 && (
                <>
                  {allNews.length === 0 ? (
                    <div className="flex items-center justify-center">
                      <h6 className="text-lg font-bold">No records found</h6>
                    </div>
                  ) : (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-20">
                      {allNews.map((item) => (
                        <div key={item.id} className="flex flex-col space-y-8">
                          <img src={item.image} alt={item.title} className="rounded-tr-[60px] rounded-bl-[60px]" />
                          <p className="text-black text-sm font-light">{item.date}</p>
                          <h6 className="text-black font-semibold text-2xl">{item.title}</h6>
                          <p className="text-[#2e2d2c] font-medium text-sm">{item.subtitle}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
