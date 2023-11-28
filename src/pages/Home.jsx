import React, { useState } from "react";
import {
  featured1,
  featured2,
  featured3,
  featured4,
  footer_logo,
  head_logo,
  linkedin,
  talk,
  twitter,
} from "../constants";
import { Button } from "../components";
import { Carousel } from "@material-tailwind/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

export default function Home() {
  const [first, setFirst] = useState(false);
  const [second, setSecond] = useState(false);
  const handleFirst = () => {
    setFirst((value) => !value);
    console.log("first");
  };

  const handleSecond = () => {
    setSecond((value) => !value);
    console.log("second");
  };

  return (
    <div className="h-screen w-full border-t-orange-800">
      <div className="w-full bg-secondary_orange h-20">
        <div className="max-w-[1580px] mx-auto h-full">
          <div className="h-full flex items-center justify-between gap-8">
            <div className="flex-1 flex items-center gap-3">
              <img src={head_logo} alt="head_logo" className="h-13" />
            </div>
            <div className="flex-1 flex items-center justify-between gap-10">
              <h4 className="font-bold hover:text-white transition cursor-pointer">
                About Us
              </h4>
              <h4 className="font-bold hover:text-white transition cursor-pointer">
                Products & Services
              </h4>
              <h4 className="font-bold hover:text-white transition cursor-pointer">
                News
              </h4>
              <h4 className="font-bold hover:text-white transition cursor-pointer">
                Careers
              </h4>
            </div>
            <div className="flex-1"></div>
          </div>
        </div>
      </div>
      <div className="h-[100vh] w-full py-15">
        <div className="h-full max-w-[1780px] mx-auto">
          <div className="h-full w-full flex items-end px-20 relative bg-background2 bg-no-repeat bg-cover bg-center rounded-tr-[5%] rounded-bl-[5%]">
            <div className="w-full grid grid-cols-2 gap-10 py-10 px-10">
              <div className="col-span-1 pr-50">
                <h5 className="font-semibold text-5xl text-white">
                  Striving for a
                  <span className="text-yellow-600"> Food-Secure Future</span>
                </h5>
              </div>
              <div className="flex flex-col space-y-7 col-span-1">
                <p className="text-white text-xl">
                  As a purpose-driven business, we’re contributing positively to
                  improving the prosperity and well-being of people across our
                  supply chains, protecting and regenerating our natural
                  resources, and tackling climate change.
                </p>
                <div>
                  <Button
                    text="Discover more"
                    buttonStyle=" py-3.5 px-15 bg-white text-black text-md font-semibold rounded-sm"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-20">
        <div className="max-w-[1580px] mx-auto">
          <div className="grid grid-cols-5 gap-20">
            <div className="md:col-span-3">
              <div className="h-full bg-green-600 rounded-tr-[10%] rounded-bl-[10%]">
                <video autoPlay loop muted playsInline>
                  <source
                    src="/content/dam/olam-agri/assets/video/olam-agri-homepage-values-video.mp4"
                    type="video/mp4"
                  ></source>
                </video>
              </div>
            </div>
            <div className="md:col-span-2 flex flex-col space-y-8">
              <h4 className="font-bold text-5xl leading-tight">
                Creating Opportunities to{" "}
                <span className=" text-light-blue-500">Make a Difference</span>
              </h4>
              <p className="text-lg">
                We empower you to imagine extraordinary answers to the world’s
                everyday food supply challenges, fulfilling your own ambitions
                and positively influencing our global business and the world
                around us.
              </p>
              <p className="text-lg">
                Our values encourage colleagues to rise to the challenge, take
                ownership of decisions, and explore new ways of doing things.
              </p>
              <div>
                <Button
                  text="Discover more"
                  buttonStyle=" py-3.5 px-15 bg-[#2e2d2c] text-white text-md font-semibold rounded-sm"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative py-20">
        <div className="flex flex-col justify-center  mx-auto space-y-15">
          <div>
            <h3 className="font-semibold text-4xl text-black">Latest News</h3>
          </div>
          <Carousel
            autoplay={true}
            autoplayDelay={3000}
            transition={{ duration: 2 }}
            prevArrow={({ handlePrev }) => (
              <div
                onClick={handlePrev}
                className="h-20 w-20 rounded-full bg-orange-800 flex items-center justify-center !absolute top-2/4 left-4 -translate-y-2/4"
              >
                <ChevronLeftIcon className="h-7 w-7" />
              </div>
            )}
            nextArrow={({ handleNext }) => (
              <div
                onClick={handleNext}
                className="h-20 w-20 rounded-full bg-orange-800 flex items-center justify-center !absolute top-2/4 !right-4 -translate-y-2/4"
              >
                <ChevronRightIcon className="h-7 w-7" />
              </div>
            )}
            navigation={({ setActiveIndex, activeIndex, length }) => (
              <div className="absolute bottom-[1%] left-2/4 z-50 flex -translate-x-2/4 gap-2">
                {new Array(length).fill("").map((_, i) => (
                  <div
                    key={i}
                    onClick={() => setActiveIndex(i)}
                    className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                      activeIndex === i ? "w-8 bg-white" : "w-4 bg-white"
                    }`}
                  >
                    <div className="h-3 w-3 rounded-full bg-grey" />
                  </div>
                ))}
              </div>
            )}
          >
            <div className="flex flex-row items-center justify-between gap-4 px-50">
              <div className="flex flex-col space-y-8">
                <img
                  src={featured3}
                  alt="featured1"
                  className="h-full w-full object-contain rounded-tr-[20%] rounded-bl-[20%]"
                />
                <p className="text-lg">09 November 2023</p>
                <h4 className="font-semibold text-black text-3xl">
                  Supporting Akosombo Flood Victims
                </h4>
              </div>
              <div className="flex flex-col space-y-8">
                <img
                  src={featured4}
                  alt="featured2"
                  className="h-full w-full object-contain rounded-tr-[20%] rounded-bl-[20%]"
                />
                <p className="text-lg">29 September 2023</p>
                <h4 className="font-semibold text-black text-3xl">
                  Reducing crop loss to improve Food Security
                </h4>
              </div>
            </div>
            <div className="flex flex-row items-center justify-between gap-14 px-40">
              <div className="flex flex-col space-y-8">
                <img
                  src={featured1}
                  alt="featured1"
                  className="h-full w-full object-contain rounded-tr-[20%] rounded-bl-[20%]"
                />
                <p className="text-lg">19 June 2023</p>
                <h4 className="font-semibold text-black text-3xl">
                  Olam Agri's Seeds for the Future Wins Sustainability
                  Initiative of the Year Award 2023
                </h4>
              </div>
              <div className="flex flex-col space-y-8">
                <img
                  src={featured2}
                  alt="featured2"
                  className="h-full w-full object-contain rounded-tr-[20%] rounded-bl-[20%]"
                />
                <p className="text-lg">29 May 2023</p>
                <h4 className="font-semibold text-black text-3xl">
                  Olam Agri's Lays Foundation for New Cotton Gin in Kong, Cote
                  d'Ivoire
                </h4>
              </div>
            </div>
          </Carousel>
          <div className="text-center">
            <Button
              text="Discover more"
              buttonStyle=" py-4 px-20 bg-[#2e2d2c] text-white text-md font-semibold rounded-sm"
            />
          </div>
        </div>
      </div>
      <div className="py-10 bg-[#2e2d2c] rounded-t-[100%]"></div>
      <div className="pb-20 bg-[#2e2d2c]">
        <div className="max-w-[1240px] mx-auto px-30">
          <div className="w-full flex flex-col justify-center items-center gap-8">
            <img
              src={talk}
              alt="talk to us"
              className="h-30 w-30 object-contain"
            />
            <h4 className="text-white text-5xl font-semibold">Talk to Us</h4>
            <p className="text-white text-lg text-center">
              Whether you’re interested in speaking to our country management
              team, enquiring about one of our products or partnering with us,
              we want to hear from you.
            </p>
            <Button
              text="Contact Us"
              buttonStyle=" py-4 px-30 bg-white text-black text-md font-semibold rounded-sm"
            />
          </div>
        </div>
      </div>
      <div className="py-20 bg-[#2e2d2c] border-2 border-t-orange-800">
        <div className="max-w-[1580px] mx-auto">
          <div className="flex flex-col space-y-16">
            <div className="flex flex-row justify-between">
              <div className="flex-1">
                <img src={footer_logo} alt="footer_logo" className="h-16" />
              </div>

              <div
                onClick={handleSecond}
                className="flex flex-col space-y-4 flex-1"
              >
                <h5 className="font-semibold text-lg text-white cursor-pointer">
                  Quick Links
                </h5>
                <div
                  className={`flex ${
                    second ? "flex-row space-x-10" : "flex-col space-y-3"
                  } `}
                >
                  <div className="flex flex-col space-y-2">
                    <p className="text-md font-thin text-white hover:text-orange-800 transition">
                      Careers
                    </p>
                    <p className="text-md font-thin text-white hover:text-orange-800 transition">
                      Contact
                    </p>
                    <p className="text-md font-thin text-white hover:text-orange-800 transition ">
                      About us
                    </p>
                    <p className="text-md font-thin text-white hover:text-orange-800 transition">
                      Locations
                    </p>
                    <p className="text-md font-thin text-white hover:text-orange-800 transition">
                      Privacy Policy
                    </p>
                  </div>
                  <div className="flex flex-col space-y-2">
                    <p className="text-md font-thin text-white hover:text-orange-800 transition">
                      Cookie Policy
                    </p>
                    <p className="text-md font-thin text-white hover:text-orange-800 transition">
                      Sitemap
                    </p>
                    <p className="text-md font-thin text-white hover:text-orange-800 transition">
                      Terms of Use
                    </p>
                  </div>
                </div>
              </div>
              <div
                onClick={handleFirst}
                className="flex flex-col space-y-4 cursor-pointer flex-1"
              >
                <h5 className="font-semibold text-lg text-white">
                  Products & Services
                </h5>
                <div
                  className={`flex ${
                    first
                      ? "flex-row space-x-10 items-center"
                      : "flex-col space-y-2"
                  }`}
                >
                  <div className="flex flex-col space-y-2">
                    <p className="text-md font-thin text-white hover:text-orange-800 transition">
                      Grains & Oilseeds
                    </p>
                    <p className="text-md font-thin text-white hover:text-orange-800 transition">
                      CFS & Oilseeds
                    </p>
                    <p className="text-md font-thin text-white hover:text-orange-800 transition">
                      Cotton
                    </p>
                    <p className="text-md font-thin text-white hover:text-orange-800 transition">
                      Editable Oils
                    </p>
                    <p className="text-md font-thin text-white hover:text-orange-800 transition">
                      Rice
                    </p>
                  </div>
                  <div className="flex flex-col space-y-2">
                    <p className="text-md font-thin text-white hover:text-orange-800 transition">
                      Rubber
                    </p>
                    <p className="text-md font-thin text-white hover:text-orange-800 transition">
                      Specialty Grains & Seed
                    </p>
                    <p className="text-md font-thin text-white hover:text-orange-800 transition">
                      Integrated Feed & Protein
                    </p>
                    <p className="text-md font-thin text-white hover:text-orange-800 transition">
                      Wood Products
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col space-y-4">
                <h5 className="font-semibold text-lg text-white">Socials</h5>
                <div className="flex flex-col space-y-2">
                  <div className="flex flex-row space-x-2 items-center">
                    <img
                      src={linkedin}
                      alt="linkedin"
                      className="h-5 w-5 object-contain"
                    />
                    <p className="text-md font-thin text-white hover:text-orange-800 transition">
                      LinkedIn
                    </p>
                  </div>
                  <div className="flex flex-row space-x-2 items-center">
                    <img
                      src={twitter}
                      alt="twitter"
                      className="object-contain h-5 w-5"
                    />
                    <p className="text-md font-thin text-white hover:text-orange-800 transition">
                      X
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <p className="text-[13px] font-medium text-white text-center">
                © 2023 jorel Agri Holdings Pte Ltd. All Rights Reserved Co. Reg
                No. 202115457K
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
