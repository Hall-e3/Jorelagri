import React from "react";
import {
  Button,
  Footer,
  FreedomComponent,
  Navbar,
  SecondaryFooter,
} from "../components";
import { cotton_american, image2, laboratory, work } from "../constants";

export default function Careers() {
  return (
    <div className="h-screen w-full">
      <Navbar />
      <div className="h-[100vh] bg-[#ff7000] flex flex-wrap overflow-hidden relative w-full ">
        <div className="h-full flex-1 flex items-center pl-42.5">
          <div className="flex flex-col space-y-6">
            <h4 className="text-white text-8xl font-medium leading-tight">
              Creating Opportunities to
              <span className="text-black">Make a Difference</span>
            </h4>
          </div>
        </div>
        <div className="flex-1">
          <picture>
            <img
              src={image2}
              alt="image2"
              className="w-full h-full bg-contain"
            />
          </picture>
        </div>
      </div>
      <div className="py-20 bg-[#2e2d2c]">
        <div className="max-w-[1580px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
            <div>
              <h3 className="text-5xl font-semibold text-white leading-tight">
                Our challenge to you is to
                <span className="text-[#ff7000]">
                  {" "}
                  imagine the extraordinary.
                </span>
              </h3>
            </div>
            <div className="flex flex-col space-y-8">
              <p className="text-xl font-light leading-1 text-white">
                We’re a Purpose-led organisation with a clear ambition to help
                customers, farmers, and communities prosper sustainably.
              </p>
              <p className="text-xl font-light leading-1 text-white">
                We seek to empower you to imagine extraordinary answers to the
                world’s everyday food supply challenges, fulfilling your own
                ambitions and positively influencing our global business and the
                world around us.
              </p>
              <p className="text-xl font-light leading-1 text-white">
                Because of the scale of the challenge, we encourage colleagues
                to take ownership of decisions and explore new ways of doing
                things.
              </p>
            </div>
          </div>
        </div>
      </div>
      <FreedomComponent />
      <div className="py-30">
        <div className="max-w-[1580px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 ">
            <div className="pr-20">
              <h3 className="text-7xl flex flex-col font-semibold text-[#00b2e7] leading-tight pr-30">
                Entrepreneurial
                <span className="text-[#ff5baf]">Agile</span>
                <span className="text-[#8e75f8]">Resourceful</span>
                <span className="text-[#ffc400]">Collaborative</span>
                <span className="text-[#00a865]">Sustainable</span>
              </h3>
            </div>
            <div className="flex flex-col space-y-3">
              <p className="text-xl font-light leading-1 text-black">
                Our distinctive culture is underpinned by our five core values
                and finessed with influences from our 9,500+ strong
                multicultural team. We celebrate our differences and value
                inclusivity and equality.
              </p>
              <p className="text-xl font-light leading-1 text-black">
                We offer you the chance to learn from skilled colleagues, and
                through formal programmes – providing the opportunities to
                develop your own skills and knowledge, and to explore personal
                and professional passions through your role and a variety of
                projects.
              </p>
              <p className="text-xl font-light leading-1 text-black">
                We value collaboration, not just internally but through the
                relationships we build with partners and customers. It’s not
                about individual glory, it’s about achieving shared goals –
                although we are quick to recognise a job well done!
              </p>
              <p className="text-xl font-light leading-1 text-black">
                All our colleagues positively contribute to the company, our
                farming communities, and fulfilling our customers’ expectations,
                as well as aim to fulfil a personal sense of purpose.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="py-20">
        <div className="max-w-[1580px] mx-auto">
          <div className="flex flex-col space-y-5">
            <div className="flex flex-col space-y-14">
              <div>
                <h4 className="text-5xl font-semibold text-black">
                  Work Streams
                </h4>
              </div>
              <div>
                <p className="text-xl font-light leading-1 text-black">
                  We are involved in many different types of activities,
                  locations, and products, which gives you a breadth of choice
                  and variety of challenge. Below are just some of the work
                  streams in Olam Agri.
                </p>
              </div>
            </div>

            <div>
              <div className="flex items-center space-x-2">
                <p className="px-4 py-4.5 rounded-tr-[25px] bg-[#000000] text-white font-medium text-base">
                  Supply Chain Management
                </p>
                <p className="px-6 py-4.5 rounded-tr-[25px] bg-[#ff7000] text-[#2e2d2c] font-medium text-base">
                  Trading
                </p>
                <p className="px-4 py-4.5 rounded-tr-[25px] bg-[#ff7000] text-[#2e2d2c] font-medium text-base">
                  Plantations & Farming
                </p>
                <p className="px-4 py-4.5 rounded-tr-[25px] bg-[#ff7000] text-[#2e2d2c] font-medium text-base">
                  Manufacturing, Innovation & Procurement
                </p>
              </div>
              <div className="py-30 bg-[#2e2d2c] px-20 rounded-tr-[60px] rounded-bl-[60px]">
                <div className="grid grid-cols-1 md:grid-cols-2   ">
                  <div className="flex flex-col space-y-10 px-20 justify-center">
                    <p className="leading-snug font-normal text-xl text-white">
                      Our well-established network of farmers and cooperatives,
                      and our skills in logistics and risk management enable us
                      to secure supplies and deliver them to our customers
                      consistently. Our technologies enhance product
                      traceability, adding value for our customers.
                    </p>
                    <div>
                      <Button
                        text="Explore Opportunities"
                        buttonStyle=" py-3 px-8 bg-white text-black text-md font-semibold rounded-sm"
                      />
                    </div>
                  </div>
                  <div>
                    <img
                      src={cotton_american}
                      alt="cotton"
                      className="h-full w-full bg-cover rounded-tr-[60px] rounded-bl-[60px]"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="py-20">
              <div className="max-w-[1580px] mx-auto">
                <div className="grid grid-cols-2">
                  <div className="flex flex-col justify-center">
                    <div className="flex items-center ">
                      <img
                        src={laboratory}
                        alt="card overlay"
                        className="w-full h-full object-cover rounded-tr-[60px] rounded-bl-[60px]"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col space-y-6 justify-center pl-30">
                    <h4 className="text-black text-5xl font-medium leading-tight">
                      What's your next step?
                    </h4>
                    <p className="text-xl font-light leading-1 text-black">
                      Whether you’re an entrepreneur, agricultural expert,
                      trader, accountant, food scientist, or sales and marketing
                      professional, a world of opportunity awaits.
                    </p>
                    <p className="text-xl font-light leading-1 text-black">
                      Click below to see all opportunities within the Olam
                      Group.
                    </p>
                    <div>
                      <Button
                        text="Discover opportunities"
                        buttonStyle=" py-3.5 px-10 bg-[#000000] text-white text-md font-semibold rounded-sm"
                      />
                    </div>
                  </div>
                </div>
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
