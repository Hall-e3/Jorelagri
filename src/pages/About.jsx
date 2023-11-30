import React from "react";
import {
  Button,
  CareerComponent,
  Footer,
  FreedomComponent,
  Navbar,
  SecondaryFooter,
  ServiceProducts,
} from "../components";
import {
  featured3,
  featured4,
  featured5,
  grow_source,
  image3,
  laboratory,
  our_organization,
} from "../constants";

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

export default function About() {
  return (
    <div className="h-screen w-full">
      <Navbar />
      <div className="h-[100vh] bg-[#ff7000] flex flex-wrap overflow-hidden w-full ">
        <div className="h-full flex-1 flex items-center pl-42.5">
          <div className="flex flex-col space-y-6">
            <h4 className="text-white text-8xl font-medium leading-tight">
              Cultivating
              <span className="text-white">a Sustainable Future</span>
            </h4>
            <div>
              <Button
                text="Download Factsheet"
                buttonStyle=" py-3 px-13 bg-white text-black text-md font-semibold rounded-sm"
              />
            </div>
          </div>
        </div>
        <div className="flex-1">
          <picture>
            <img
              src={image3}
              alt="image3"
              className="w-full h-full bg-contain"
            />
          </picture>
        </div>
      </div>

      <div className="py-20 bg-[#2e2d2c]">
        <div className="max-w-[1580px] mx-auto">
          <div className="flex flex-col space-y-10">
            <h4 className="text-5xl font-semibold text-white">
              Proven Expertise that Meet Your Needs
            </h4>

            <div>
              <div className="flex items-center space-x-2">
                <p className="px-4 py-4.5 rounded-tr-[25px] bg-white text-[#2e2d2c] font-medium text-base">
                  We Grow & Source
                </p>
                <p className="px-6 py-4.5 rounded-tr-[25px] bg-[#ff7000] text-[#2e2d2c] font-medium text-base">
                  We Process & Manufacture
                </p>
                <p className="px-4 py-4.5 rounded-tr-[25px] bg-[#ff7000] text-[#2e2d2c] font-medium text-base">
                  We Transport & Distribute
                </p>
                <p className="px-4 py-4.5 rounded-tr-[25px] bg-[#ff7000] text-[#2e2d2c] font-medium text-base">
                  We Trade & Manage Risk
                </p>
              </div>
              <div className="py-30 bg-white px-20 rounded-tr-[60px] rounded-bl-[60px]">
                <div className="grid grid-cols-1 md:grid-cols-2   ">
                  <div className="flex flex-col px-20 justify-center">
                    <p className="leading-snug font-normal text-xl text-[#2e2d2c]">
                      Through our own growing operations and partnerships with
                      both large- and small-scale producers, our global sourcing
                      capabilities enable us to reliably source and deliver
                      high-quality products to customers around the world.
                    </p>
                  </div>
                  <div>
                    <img
                      src={grow_source}
                      alt="cotton"
                      className="h-full w-full bg-cover rounded-tr-[60px] rounded-bl-[60px]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ServiceProducts />
      <CareerComponent />
      <div className="py-20 bg-white">
        <div className="max-w-[1580px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 relative">
            <div className="flex flex-col items-center space-y-5 absolute top-80 left-[-5%]">
              <div className="p-1.5 border-2 rounded-full border-white" />
              <div className="p-1.5 border-2 rounded-full border-white" />
              <div className="p-1.5 border-2 rounded-full border-white" />
            </div>
            <div>
              <img
                src={our_organization}
                alt="work"
                className="h-full w-full rounded-bl-[60px] rounded-tr-[60px]"
              />
            </div>
            <div className="flex flex-col items-center justify-center h-[50vh] w-[55%] bg-[#2e2d2c] shadow-lg rounded-bl-[60px] rounded-tr-[60px] absolute top-40 right-0">
              <div className="flex flex-col px-15 space-y-5">
                <h4 className="text-5xl font-bold text-white">
                  Olam Group's{" "}
                  <span className="text-[#00b2e7]">Re-organisation</span>
                </h4>
                <p className="text-xl font-light leading-1 text-white">
                  In January 2020, Olam announced a re-organisation to create
                  new operating groups. Olam Agri is now established as a market
                  leading and differentiated food, feed and fibre global
                  agri-business with unique focus on high-growth emerging
                  markets with operations across grains and oilseeds, edible
                  oils, animal feed and protein, rice, specialty grains and
                  seeds, cotton, wood, rubber, commodity financial services and
                  risk management.
                </p>
              </div>
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
