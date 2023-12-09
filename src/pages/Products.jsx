import React from "react";
import { Button, Footer, Navbar, SecondaryFooter } from "../components";
import {
  animal_feed,
  hover_cfs,
  hover_cotton,
  hover_edibleoils,
  hover_freight,
  hover_grains,
  hover_rice,
  hover_rubber,
  hover_sgrains,
  hover_wood,
  image7
} from "../constants";
import { useNavigate } from "react-router-dom";

const products = [
  {
    id: 1,
    color: "first",
    title: "Grains & Oilseeds",
    subtitle: "A Supported, Sustainable Supply Chain.",
    image: hover_grains
  },
  {
    id: 2,
    title: "Edible Oils",
    subtitle: "A Range of Edible Oils Carefully Crafted for Customer Needs.",
    image: hover_edibleoils,
    color: "second"
  },
  {
    id: 3,
    title: "Rice",
    subtitle: "Sustainable Production of Rice.",
    image: hover_rice,
    color: "third"
  },
  {
    id: 4,
    title: "Specialty Grains & Seeds",
    subtitle: "Sustainable Production of Specialty Grains & Seeds.",
    image: hover_sgrains,
    color: "fourth"
  },
  {
    id: 5,
    title: "Integrated Feed & Protein",
    subtitle: "A Supported, Sustainable Supply Chain.",
    image: animal_feed,
    color: "fifth"
  },
  {
    id: 6,
    title: "Cotton",
    subtitle: "Universal Supplier of First Class, Sustainable Cotton.",
    image: hover_cotton,
    color: "sixth"
  },
  {
    id: 7,
    title: "Rubber",
    subtitle: "Responsibly Sourced Rubber.",
    image: hover_rubber,
    color: "seventh"
  },
  {
    id: 8,
    title: "Wood Products",
    subtitle: "Sustainably Sourced Timber and Wood Products.",
    image: hover_wood,
    color: "eight"
  },
  {
    id: 9,
    title: "Commodity Financial Services",
    subtitle: "Applying Insight, Research and Innovation to CFS.",
    image: hover_cfs,
    color: "nine"
  },
  {
    id: 10,
    title: "Freight Management",
    subtitle: "Our shipping capabilities cover a wide range of bulk cargoes. ",
    image: hover_freight,
    color: "ten"
  }
];

export default function Products() {
  const navigate = useNavigate();
  return (
    <div className="h-screen w-full">
      <Navbar />
      <div className="h-[100vh] bg-[#ff7000] flex flex-wrap overflow-hidden relative w-full ">
        <div className="px-10 py-8 md:py-0 md:px-0 md:flex-1 flex items-center md:pl-42.5">
          <div className="flex flex-col space-y-6">
            <h4 className="text-white text-[2.25rem]  md:text-8xl font-medium leading-10 md:leading-tight">
              Delivering
              <span className="text-black">Value </span>for Customers
            </h4>
            <a href="https://jorei.onrender.com">
              <Button text="Product Customization" buttonStyle=" py-3.5 px-15 bg-white text-black text-[.875rem] md:text-md font-semibold rounded-sm" />
            </a>
          </div>
        </div>
        <div className="flex-1">
          <picture>
            <img src={image7} alt="image1" className="w-full h-full bg-contain" />
          </picture>
        </div>
      </div>
      <div className="py-15 md:py-25 bg-[#2e2d2c] px-[30px] md:px-0">
        <div className="max-w-[1580px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2  gap-10 md:gap-20">
            <div>
              <h3 className="text-[2rem] md:text-5xl font-semibold text-white">
                We offer our customers a <span className="text-[#ff7000]"> deep understanding</span> of market needs, built through our on-the-ground presence
                in Asia and Africa over the last 30 years.
              </h3>
            </div>
            <div className="flex flex-col space-y-8">
              <p className="text-[1rem] font-normal md:text-xl md:font-light leading-1 text-white">
                Our operating capabilities in global origination, processing, trading, logistics, distribution and risk management set us apart from our peers,
                while our strategic manufacturing assets in key destination markets strengthen our service to customers.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="py-20 px-10 md:px-0">
        <div className="max-w-[1580px] mx-auto">
          <div className="w-full flex flex-col space-y-10 md:space-y-20">
            <div className="flex flex-col space-y-8 items-center">
              <h3 className="text-[2rem] md:text-5xl text-center md:text-left font-semibold text-[#2e2d2c]">Our Products & Services</h3>
              <p className="text-[1rem] font-normal md:text-xl md:font-light leading-1 text-[#2e2d2c] text-center">
                Whether it's working with rice farmers in Asia, sourcing cotton in Australia, or producing value-added products in Africa, we help our customers
                around the world meet the increasing demand for food, feed and fibre.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-2 md:gap-8">
              {products.map((product) => (
                <div
                  key={product.id}
                  id={product.color}
                  className="relative flex group flex-col h-[12.5rem] md:h-[45vh] w-[100%] justify-between rounded-tr-[1.875rem] rounded-bl-[1.875rem] p-[1.25rem] md:pr-0 md:pt-8 md:pb-8  bg-[#2e2d2c] border border-[#ff62ab] transition-all duration-300 ease-in-out transform">
                  <div className="flex flex-col space-y-6">
                    <h4 className="text-white text-[1.125rem] font-medium md:text-4xl leading-tight">{product.title}</h4>
                    <p className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-base font-thin">{product.subtitle}</p>
                  </div>
                  <div className="absolute right-[.375rem] bottom-[.625rem] md:relative md:right-4 md:bottom-0 md:flex md:justify-end">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="h-[3.75rem] w-[3.75rem] md:h-[140px] md:w-[140px] object-contain transition-all duration-300 ease-in-out transform group-hover:hidden "
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="py-10 bg-[#2e2d2c] rounded-t-[100%]"></div>
      <SecondaryFooter />
      <Footer />
    </div>
  );
}
