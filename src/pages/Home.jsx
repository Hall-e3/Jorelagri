import React from "react";
import {
  card_overlay,
  featured1,
  featured2,
  featured3,
  featured4,
  metric_icon1,
  metric_icon2,
  metric_icon3,
  metric_icon4,
} from "../constants";
import {
  Button,
  Footer,
  Hero,
  Navbar,
  SecondaryFooter,
  ServiceProducts,
} from "../components";
import { Carousel } from "@material-tailwind/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

export default function Home() {
  return (
    <div className="h-screen w-full border-t-[#ff7000]-800">
      <Navbar />
      <Hero />
      <div className="py-10 md:pt-30 pb-5 bg-[#2e2d2c]">
        <div className="max-w-[1580px] mx-auto">
          <div className="w-full px-10 md:px-0 grid grid-cols-1 md:grid-cols-2 gap-y-10 md:gap-y-0 md:gap-40">
            <div className=" md:px-30 flex flex-col space-y-6">
              <h5 className="text-white text-[36px] font-normal md:text-7xl md:font-medium leading-tight">
                We offer our customers{" "}
                <span className="text-orange-800">a deeper understanding</span>{" "}
                of market needs.
              </h5>
              <p className="text-[16px] font-normal md:text-xl md:font-light leading-1 text-white">
                We have over 33 years of experience in supply chains across the
                world with foundations built from our on-the-ground presence in
                Asia and Africa.
              </p>
              <p className="text-[16px] font-normal md:text-xl md:font-light leading-1 text-white">
                Our operating capabilities in global origination, processing,
                trading, logistics, distribution, and risk management set us
                apart from our peers. While our strategic manufacturing assets
                in key destination markets strengthen our service to customers
              </p>
            </div>
            <div className="flex flex-col gap-y-10 md:gap-y-40">
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-10 md:gap-0">
                <div className="md:flex-1 flex flex-row md:flex-col space-x-10 md:space-x-0  md:space-y-6">
                  <img
                    src={metric_icon1}
                    alt="metric icon"
                    className="h-[80px] md:h-[160px] w-[80px] md:w-[160px]"
                  />
                  <div className="flex flex-col md:flex-row">
                    <h4 className="text-[2rem] md:text-7xl font-bold text-purple-700">
                      60
                    </h4>
                    <p className="text-[1.125rem] md:text-xl font-semibold leading-1 text-white">
                      Manufacturing & Processing Facilities
                    </p>
                  </div>
                </div>
                <div className="md:flex-1 flex flex-row md:flex-col space-x-10 md:space-x-0 md:space-y-6">
                  <img
                    src={metric_icon2}
                    alt="metric icon"
                    className="h-[80px] md:h-[160px] w-[80px] md:w-[160px]"
                  />
                  <div className="flex flex-col md:flex-row">
                    <h4 className="text-[2rem] md:text-7xl font-bold text-yellow-700 ">
                      7,000+
                    </h4>
                    <p className="text-[1.125rem] md:text-xl font-semibold text-white">
                      Customers
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-10">
                <div className="md:flex-1 flex flex-row md:flex-col space-x-10 md:space-x-0  md:space-y-6">
                  <img
                    src={metric_icon3}
                    alt="metric icon"
                    className="h-[80px] md:h-[160px] w-[80px] md:w-[160px]"
                  />
                  <div className="flex flex-col md:flex-row">
                    <h4 className="text-[2rem] md:text-7xl font-bold text-pink">
                      30+
                    </h4>
                    <p className="text-[1.125rem] md:text-xl font-semibold text-white">
                      Countries
                    </p>
                  </div>
                </div>
                <div className="md:flex-1 flex flex-row md:flex-col space-x-10 md:space-x-0  md:space-y-6">
                  <img
                    src={metric_icon4}
                    alt="metric icon"
                    className="h-[80px] md:h-[160px] w-[80px] md:w-[160px]"
                  />
                  <div className="flex flex-col md:flex-row">
                    <h4 className="text-[2rem] md:text-7xl font-bold text-light-blue-700">
                      9,600
                    </h4>
                    <p className="text-[1.125rem] md:text-xl font-semibold text-white">
                      Employees
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-10 bg-[#2e2d2c]">
        <div className="max-w-[1580px] mx-auto px-10 md:px-0">
          <div className="w-full grid grid-cols-1 md:grid-cols-2">
            <div className="flex flex-col justify-center">
              <div className="h-[75%] rounded-tr-[60px] rounded-bl-[60px] bg-background3 bg-no-repeat bg-cover bg-opacity-60 flex items-center ">
                <img
                  src={card_overlay}
                  alt="card overlay"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="flex flex-col space-y-6 justify-center md:pl-30">
              <h4 className="text-white text-[36px] font-semibold md:text-5xl md:font-medium leading-tight">
                Firm Foundations for
                <span className="text-orange-800"> Sustainable Growth</span>
              </h4>
              <p className="text-[16px] font-normal md:text-xl md:font-light leading-1 text-white">
                We offer our farmers, our customers and every member of our
                global supply chains, a robust, and forward-looking approach to
                worldwide food, feed and fibre distribution.
              </p>
              <p className="text-[16px] font-normal md:text-xl md:font-light leading-1 text-white">
                Our global practices are firmly rooted in experience and
                understanding second to none.{" "}
              </p>
              <div>
                <Button
                  text="Discover more"
                  buttonStyle=" py-3.5 px-15 bg-white text-black text-[.875rem] md:text-md font-semibold rounded-sm"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <ServiceProducts />
      <div className="h-[70vh] md:h-[100vh] w-full md:py-15">
        <div className="h-full max-w-[11000px] mx-auto">
          <div className="h-full w-full flex items-end md:px-20 relative bg-background2 bg-no-repeat bg-cover bg-center rounded-tr-[5%] rounded-bl-[5%]">
            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-10 py-10 px-10">
              <div className="col-span-1 md:pr-50">
                <h5 className="font-semibold text-[2rem] md:text-5xl text-white">
                  Striving for a
                  <span className="text-yellow-600"> Food-Secure Future</span>
                </h5>
              </div>
              <div className="flex flex-col space-y-4 md:space-y-7 col-span-1">
                <p className="text-white text-[1rem] md:text-xl">
                  As a purpose-driven business, we’re contributing positively to
                  improving the prosperity and well-being of people across our
                  supply chains, protecting and regenerating our natural
                  resources, and tackling climate change.
                </p>
                <div>
                  <Button
                    text="Discover more"
                    buttonStyle=" py-3.5 px-15 bg-white text-black text-[.875rem] md:text-md font-semibold rounded-sm"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-20">
        <div className="max-w-[1580px] mx-auto px-10 md:px-0">
          <div className="w-full grid grid-cols-1 md:grid-cols-5 gap-10 md:gap-20">
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
              <h4 className="font-semibold text-[2rem] md:text-5xl md:font-bold leading-tight">
                Creating Opportunities to{" "}
                <span className=" text-light-blue-500">Make a Difference</span>
              </h4>
              <p className="text-[1rem] font-normal md:text-lg">
                We empower you to imagine extraordinary answers to the world’s
                everyday food supply challenges, fulfilling your own ambitions
                and positively influencing our global business and the world
                around us.
              </p>
              <p className="text-[1rem] font-normal md:text-lg">
                Our values encourage colleagues to rise to the challenge, take
                ownership of decisions, and explore new ways of doing things.
              </p>
              <div>
                <Button
                  text="Discover more"
                  buttonStyle="py-3.5 px-15 bg-[#2e2d2c] text-white text-[.875rem] md:text-md font-semibold rounded-sm"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative py-20">
        <div className="flex flex-col justify-center  mx-auto space-y-15">
          <div>
            <h3 className="text-[2rem] font-semibold md:pl-40 md:text-4xl text-black">
              Latest News
            </h3>
          </div>
          <Carousel
            autoplay={true}
            autoplayDelay={3000}
            transition={{ duration: 2 }}
            prevArrow={({ handlePrev }) => (
              <div
                onClick={handlePrev}
                className="hidden h-20 w-20 rounded-full bg-orange-800 md:flex items-center justify-center !absolute top-2/4 left-4 -translate-y-2/4"
              >
                <ChevronLeftIcon className="h-7 w-7" />
              </div>
            )}
            nextArrow={({ handleNext }) => (
              <div
                onClick={handleNext}
                className="hidden h-20 w-20 rounded-full bg-orange-800 md:flex items-center justify-center !absolute top-2/4 !right-4 -translate-y-2/4"
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
            <div className="flex flex-row items-center justify-between gap-4 md:px-50">
              <div className="flex flex-col space-y-8">
                <img
                  src={featured3}
                  alt="featured1"
                  className="h-full w-full object-contain rounded-tr-[20%] rounded-bl-[20%]"
                />
                <p className="text-[.875rem] md:text-lg">09 November 2023</p>
                <h4 className="font-normal md:font-semibold text-black text-[1.125rem] md:text-3xl">
                  Supporting Akosombo Flood Victims
                </h4>
              </div>
              <div className="flex flex-col space-y-8">
                <img
                  src={featured4}
                  alt="featured2"
                  className="h-full w-full object-contain rounded-tr-[20%] rounded-bl-[20%]"
                />
                <p className="text-[.875rem] md:text-lg">29 September 2023</p>
                <h4 className="font-normal md:font-semibold text-black text-[1.125rem] md:text-3xl">
                  Reducing crop loss to improve Food Security
                </h4>
              </div>
            </div>
            <div className="flex flex-row items-center justify-between gap-14 md:px-40">
              <div className="flex flex-col space-y-8">
                <img
                  src={featured1}
                  alt="featured1"
                  className="h-full w-full object-contain rounded-tr-[20%] rounded-bl-[20%]"
                />
                <p className="text-[.875rem] md:text-lg">19 June 2023</p>
                <h4 className="font-normal md:font-semibold text-black text-[1.125rem] md:text-3xl">
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
                <p className="text-[.875rem] md:text-lg">29 May 2023</p>
                <h4 className="font-normal md:font-semibold text-black text-[1.125rem] md:text-3xl">
                  Olam Agri's Lays Foundation for New Cotton Gin in Kong, Cote
                  d'Ivoire
                </h4>
              </div>
            </div>
          </Carousel>
          <div className="text-center">
            <Button
              text="Discover more"
              buttonStyle=" py-3.5 md:py-4 px-15 md:px-20 bg-[#2e2d2c] text-white text-[.875rem] md:text-md font-semibold rounded-sm"
            />
          </div>
        </div>
      </div>
      <div className="py-10 bg-[#2e2d2c] rounded-t-[100%]"></div>
      <SecondaryFooter />
      <Footer />
    </div>
  );
}
