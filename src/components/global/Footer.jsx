import React, { useState } from "react";
import { footer_logo, linkedin, twitter } from "../../constants";

export default function Footer() {
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
  );
}
