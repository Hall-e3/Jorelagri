import React from "react";
import { footer_logo, head_logo, linkedin, twitter } from "../constants";

export default function Home() {
  return (
    <div className="h-screen w-full">
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
      <div className="py-20 bg-[#2e2d2c]">
        <div className="max-w-[1580px] mx-auto">
          <div className="flex flex-col space-y-10 ">
            <div className="flex flex-row justify-between ">
              <div>
                <img src={footer_logo} alt="footer_logo" className="h-13" />
              </div>
              <div className="flex flex-col space-y-4">
                <h5 className="font-semibold text-lg text-white">
                  Quick Links
                </h5>
                <div className="flex flex-col space-y-2">
                  <div className="flex flex-col space-y-2">
                    <p className="text-md font-thin text-white">Careers</p>
                    <p className="text-md font-thin text-white">Contact</p>
                    <p className="text-md font-thin text-white">About us</p>
                    <p className="text-md font-thin text-white">Locations</p>
                    <p className="text-md font-thin text-white">
                      Privacy Policy
                    </p>
                  </div>
                  <div className="flex flex-col space-y-2">
                    <p className="text-md font-thin text-white">
                      Cookie Policy
                    </p>
                    <p className="text-md font-thin text-white">Sitemap</p>
                    <p className="text-md font-thin text-white">Terms of Use</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col space-y-4">
                <h5 className="font-semibold text-lg text-white">
                  Products & Services
                </h5>
                <div className="flex flex-col space-y-2">
                  <div className="flex flex-col space-y-2">
                    <p className="text-md font-thin text-white">
                      Grains & Oilseeds
                    </p>
                    <p className="text-md font-thin text-white">
                      CFS & Oilseeds
                    </p>
                    <p className="text-md font-thin text-white">Cotton</p>
                    <p className="text-md font-thin text-white">
                      Editable Oils
                    </p>
                    <p className="text-md font-thin text-white">Rice</p>
                  </div>
                  <div className="flex flex-col space-y-2">
                    <p className="text-md font-thin text-white">Rubber</p>
                    <p className="text-md font-thin text-white">
                      Specialty Grains & Seed
                    </p>
                    <p className="text-md font-thin text-white">
                      Integrated Feed & Protein
                    </p>
                    <p className="text-md font-thin text-white">
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
                    <p className="text-md font-thin text-white">LinkedIn</p>
                  </div>
                  <div className="flex flex-row space-x-2 items-center">
                    <img
                      src={twitter}
                      alt="twitter"
                      className="object-contain h-5 w-5"
                    />
                    <p className="text-md font-thin text-white ">X</p>
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
