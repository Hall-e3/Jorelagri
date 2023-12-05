import React from "react";
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
  wood_cutout,
} from "../../constants";

export default function ServiceProducts() {
  return (
    <div className="py-20">
      <div className="max-w-[1580px] mx-auto px-10 md:px-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-10 md:gap-y-0">
          <div className="flex flex-col space-y-8">
            <div className="flex flex-col space-y-6 md:pr-60">
              <h4 className="text-[36px] font-semibold md:text-5xl md:font-medium leading-1">
                Our Products & Services
              </h4>
              <p className="text-[16px] font-normal md:text-xl md:font-light leading-1">
                Whether it's working with rice farmers in Asia, sourcing cotton
                in Australia, or producing value-added products in Africa, we
                help our customers around the world meet the increasing demand
                for food, feed and fibre.
              </p>
            </div>
            <div className="flex items-center justify-center">
              <img src={wood_cutout} alt="wood cutout" />
            </div>
          </div>
          <div className="flex flex-col space-y-8">
            <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row items-start md:items-center justify-between">
              <div className="flex items-center gap-8 md:flex-1">
                <img
                  src={hover_grains}
                  alt="hover rice"
                  className="w-[4.875rem] h-[4.875rem] md:h-[100px] md:w-[100px]"
                />
                <p>Grains & Oilseeds</p>
              </div>
              <div className="flex items-center gap-8 md:flex-1">
                <img
                  src={hover_edibleoils}
                  alt="hover rice"
                  className="w-[4.875rem] h-[4.875rem] md:h-[100px] md:w-[100px]"
                />
                <p>Edible Oils</p>
              </div>
            </div>
            <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row items-start md:items-center justify-between">
              <div className="flex items-center gap-8 flex-1">
                <img
                  src={hover_rice}
                  alt="hover rice"
                  className="w-[4.875rem] h-[4.875rem] md:h-[100px] md:w-[100px]"
                />
                <p>Rice</p>
              </div>
              <div className="flex items-center gap-8 flex-1">
                <img
                  src={hover_sgrains}
                  alt="hover rice"
                  className="w-[4.875rem] h-[4.875rem] md:h-[100px] md:w-[100px]"
                />
                <p>Specialty Grains & Seeds</p>
              </div>
            </div>
            <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row items-start md:items-center justify-between">
              <div className="flex items-center gap-8 flex-1">
                <img
                  src={animal_feed}
                  alt="hover rice"
                  className="w-[4.875rem] h-[4.875rem] md:h-[100px] md:w-[100px]"
                />
                <p>Integrated Feed & Protein</p>
              </div>
              <div className="flex items-center gap-8 flex-1">
                <img
                  src={hover_cotton}
                  alt="hover rice"
                  className="w-[4.875rem] h-[4.875rem] md:h-[100px] md:w-[100px]"
                />
                <p>Cotton</p>
              </div>
            </div>
            <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row items-start md:items-center justify-between">
              <div className="flex items-center gap-8 flex-1">
                <img
                  src={hover_rubber}
                  alt="hover rice"
                  className="w-[4.875rem] h-[4.875rem] md:h-[100px] md:w-[100px]"
                />
                <p>Rubber</p>
              </div>
              <div className="flex items-center gap-8 flex-1">
                <img
                  src={hover_wood}
                  alt="hover rice"
                  className="w-[4.875rem] h-[4.875rem] md:h-[100px] md:w-[100px]"
                />
                <p>Wood Products</p>
              </div>
            </div>
            <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row items-start md:items-center justify-between">
              <div className="flex items-center gap-8 flex-1">
                <img
                  src={hover_cfs}
                  alt="hover rice"
                  className="w-[4.875rem] h-[4.875rem] md:h-[100px] md:w-[100px]"
                />
                <p>Commodity Financial Services</p>
              </div>
              <div className="flex items-center gap-8 flex-1">
                <img
                  src={hover_freight}
                  alt="hover rice"
                  className="w-[4.875rem] h-[4.875rem] md:h-[100px] md:w-[100px]"
                />
                <p>Freight Management</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
