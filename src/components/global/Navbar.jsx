import React from "react";
import { head_logo } from "../../constants";
import { Link } from "react-router-dom";

const routes = [
  {
    id: 1,
    link: "/about",
    name: "About Us",
  },
  {
    id: 2,
    link: "/services",
    name: "Products & Services",
  },
  {
    id: 3,
    link: "/news",
    name: "News",
  },
  {
    id: 4,
    link: "/careers",
    name: "Careers",
  },
];

export default function Navbar() {
  return (
    <div className="w-full bg-[#ff7000] h-20">
      <div className="max-w-[1580px] mx-auto h-full">
        <div className="h-full flex items-center justify-between gap-8">
          <div className="flex-1 flex items-center gap-3">
            <img src={head_logo} alt="head_logo" className="h-13" />
          </div>
          <div className="flex-1 flex items-center justify-between gap-10">
            {routes.map((route) => (
              <Link key={route.id} to={`${route.link}`}>
                <h4 className="font-bold hover:text-white transition cursor-pointer">
                  {route.name}
                </h4>
              </Link>
            ))}
          </div>
          <div className="flex-1"></div>
        </div>
      </div>
    </div>
  );
}
