import React from "react";
import { Button, Footer, FreedomComponent, Navbar, SecondaryFooter } from "../components";
import { cotton_american, image2, laboratory } from "../constants";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

export default function Careers() {
  const [one, setOne] = React.useState(false);
  const [two, setTwo] = React.useState(false);
  const [three, setThree] = React.useState(false);
  const [four, setFour] = React.useState(false);

  return (
    <div className="h-screen w-full">
      <Navbar />
      <div className="h-[100vh] bg-[#ff7000] flex flex-col md:flex-row overflow-hidden relative w-full">
        <div className="px-10 py-8 md:py-0 md:px-0 md:flex-1 flex items-center md:pl-42.5">
          <div className="flex flex-col space-y-6">
            <h4 className="text-white text-[2.25rem] md:text-8xl font-medium leading-10 md:leading-tight">
              Creating Opportunities to
              <span className="text-black">Make a Difference</span>
            </h4>
          </div>
        </div>
        <div className="flex-1">
          <picture>
            <img src={image2} alt="image2" className="w-full h-full bg-contain" />
          </picture>
        </div>
      </div>
      <div className="py-20 bg-[#2e2d2c] px-[30px] md:px-0">
        <div className="max-w-[1580px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 space-y-10 md:gap-20">
            <div>
              <h3 className="text-[2rem] md:text-5xl font-semibold text-white leading-tight">
                Our challenge to you is to
                <span className="text-[#ff7000]"> imagine the extraordinary.</span>
              </h3>
            </div>
            <div className="flex flex-col space-y-8">
              <p className="text-[1rem] font-normal md:text-xl md:font-light leading-1 text-white">
                We’re a Purpose-led organisation with a clear ambition to help customers, farmers, and communities prosper sustainably.
              </p>
              <p className="text-[1rem] font-normal md:text-xl md:font-light leading-1 text-white">
                We seek to empower you to imagine extraordinary answers to the world’s everyday food supply challenges, fulfilling your own ambitions and
                positively influencing our global business and the world around us.
              </p>
              <p className="text-[1rem] font-normal md:text-xl md:font-light leading-1 text-white">
                Because of the scale of the challenge, we encourage colleagues to take ownership of decisions and explore new ways of doing things.
              </p>
            </div>
          </div>
        </div>
      </div>
      <FreedomComponent />
      <div className="pt-15 md:pt-0 md:py-30 px-10 md:px-0">
        <div className="max-w-[1580px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-0">
            <div className="pr-20">
              <h3 className="text-[2rem] md:text-7xl flex flex-col font-semibold text-[#00b2e7] leading-tight pr-30">
                Entrepreneurial
                <span className="text-[#ff5baf]">Agile</span>
                <span className="text-[#8e75f8]">Resourceful</span>
                <span className="text-[#ffc400]">Collaborative</span>
                <span className="text-[#00a865]">Sustainable</span>
              </h3>
            </div>
            <div className="flex flex-col space-y-3">
              <p className="text-[1rem] font-normal md:text-xl md:font-light leading-snug md:leading-1 text-black">
                Our distinctive culture is underpinned by our five core values and finessed with influences from our 9,500+ strong multicultural team. We
                celebrate our differences and value inclusivity and equality.
              </p>
              <p className="text-[1rem] font-normal md:text-xl md:font-light leading-snug md:leading-1 text-black">
                We offer you the chance to learn from skilled colleagues, and through formal programmes – providing the opportunities to develop your own skills
                and knowledge, and to explore personal and professional passions through your role and a variety of projects.
              </p>
              <p className="text-[1rem] font-normal md:text-xl md:font-light leading-snug md:leading-1 text-black">
                We value collaboration, not just internally but through the relationships we build with partners and customers. It’s not about individual glory,
                it’s about achieving shared goals – although we are quick to recognise a job well done!
              </p>
              <p className="text-[1rem] font-normal md:text-xl md:font-light leading-snug md:leading-1 text-black">
                All our colleagues positively contribute to the company, our farming communities, and fulfilling our customers’ expectations, as well as aim to
                fulfil a personal sense of purpose.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="py-20 px-10 md:px-0">
        <div className="max-w-[1580px] mx-auto">
          <div className="flex flex-col space-y-8 md:space-y-5">
            <div className="flex flex-col space-y-14">
              <div>
                <h4 className="text-[2rem] leading-9 md:text-5xl font-semibold text-black">Work Streams</h4>
              </div>
              <div>
                <p className="text-[16px] font-normal md:text-xl md:font-light leading-1 text-black">
                  We are involved in many different types of activities, locations, and products, which gives you a breadth of choice and variety of challenge.
                  Below are just some of the work streams in Olam Agri.
                </p>
              </div>
            </div>
            <div className="flex md:hidden flex-col space-y-4">
              <div
                onClick={() => setOne(!one)}
                className={`p-[1.25rem] ${
                  one ? "bg-[#2e2d2c] text-white" : "bg-[#ff7000] text-[#2e2d2c]"
                }  rounded-tr-[1.875rem] rounded-bl-[1.875rem] cursor-pointer transition-all duration-[800ms]`}>
                {!one && (
                  <div className="flex flex-row items-center justify-between">
                    <h4 className="text-[1.5625rem] text-[#2e2d2c] leading-tight font-semibold">Supply Chain Management</h4>
                    <ChevronDownIcon className="w-7 h-7" />
                  </div>
                )}
                {one && (
                  <div className="flex flex-col space-y-6">
                    <div className="flex flex-row items-center justify-between">
                      <h2 className="text-[1.5625rem] text-white leading-tight font-semibold">Supply Chain Management</h2>
                      <ChevronDownIcon className="w-7 h-7" />
                    </div>

                    <p className="text-[1rem] font-normal leading-snug">
                      Our well-established network of farmers and cooperatives, and our skills in logistics and risk management enable us to secure supplies and
                      deliver them to our customers consistently. Our technologies enhance product traceability, adding value for our customers.
                    </p>
                    <div>
                      <Button text="Explore Opportunities" buttonStyle=" py-3 px-8 bg-white text-black text-md font-semibold rounded-sm" />
                    </div>
                    <img src={cotton_american} alt="cotton" className="h-full w-full bg-cover rounded-tr-[1.875rem] rounded-bl-[1.875rem]" />
                  </div>
                )}
              </div>
              <div
                onClick={() => setTwo(!two)}
                className={`p-[1.25rem] ${
                  two ? "bg-[#2e2d2c] text-white" : "bg-[#ff7000] text-[#2e2d2c]"
                }  rounded-tr-[1.875rem] rounded-bl-[1.875rem] cursor-pointer transition-all duration-[800ms]`}>
                {!two && (
                  <div className="flex flex-row items-center justify-between">
                    <h4 className="text-[1.5625rem] text-[#2e2d2c] leading-tight font-semibold">Trading</h4>
                    <ChevronDownIcon className="w-7 h-7" />
                  </div>
                )}
                {two && (
                  <div className="flex flex-col space-y-6">
                    <div className="flex flex-row items-center justify-between">
                      <h2 className="text-[1.5625rem] text-white leading-tight font-semibold">Trading</h2>
                      <ChevronDownIcon className="w-7 h-7" />
                    </div>
                    <p className="text-[1rem] font-normal leading-snug">
                      Our traders analyse proprietary information on supply and demand. Our rigorous research and analysis is honed by quantitative tools and
                      techniques to offer unique industry insight.
                    </p>
                    <div>
                      <Button text="Explore Opportunities" buttonStyle=" py-3 px-8 bg-white text-black text-md font-semibold rounded-sm" />
                    </div>
                    <img src={cotton_american} alt="cotton" className="h-full w-full bg-cover rounded-tr-[1.875rem] rounded-bl-[1.875rem]" />
                  </div>
                )}
              </div>
              <div
                onClick={() => setThree(!three)}
                className={`p-[1.25rem] ${
                  three ? "bg-[#2e2d2c] text-white" : "bg-[#ff7000] text-[#2e2d2c]"
                }  rounded-tr-[1.875rem] rounded-bl-[1.875rem] cursor-pointer transition-all duration-[800ms]`}>
                {!three && (
                  <div className="flex flex-row items-center justify-between">
                    <h4 className="text-[1.5625rem] text-[#2e2d2c] leading-tight font-semibold">Plantations & Farming</h4>
                    <ChevronDownIcon className="w-7 h-7" />
                  </div>
                )}
                {three && (
                  <div className="flex flex-col space-y-6">
                    <div className="flex flex-row items-center justify-between">
                      <h2 className="text-[1.5625rem] text-white leading-tight font-semibold">Plantations & Farming</h2>
                      <ChevronDownIcon className="w-7 h-7" />
                    </div>

                    <p className="text-[1rem] font-normal leading-snug">
                      We grow a range of crops, and share learnings from one to another, driving efficiencies for us and our customers. We understand the
                      pressures of farming and work on the ground with small-scale producers to increase volumes. We stimulate opportunity with communities
                      local to our operations through smallholder ‘outgrower’ programmes.
                    </p>
                    <div>
                      <Button text="Explore Opportunities" buttonStyle=" py-3 px-8 bg-white text-black text-md font-semibold rounded-sm" />
                    </div>
                    <img src={cotton_american} alt="cotton" className="h-full w-full bg-cover rounded-tr-[1.875rem] rounded-bl-[1.875rem]" />
                  </div>
                )}
              </div>
              <div
                onClick={() => setFour(!four)}
                className={`p-[1.25rem] ${
                  four ? "bg-[#2e2d2c] text-white" : "bg-[#ff7000] text-[#2e2d2c]"
                }  rounded-tr-[1.875rem] rounded-bl-[1.875rem] cursor-pointer transition-all duration-[800ms]`}>
                {!four && (
                  <div className="flex flex-row items-center justify-between">
                    <h4 className="text-[1.5625rem] text-[#2e2d2c] leading-tight font-semibold">Manufacturing, Innovation & Procurement</h4>
                    <ChevronDownIcon className="w-7 h-7" />
                  </div>
                )}
                {four && (
                  <div className="flex flex-col space-y-6">
                    <div className="flex flex-row items-center justify-between">
                      <h2 className="text-[1.5625rem] text-white leading-tight font-semibold">Manufacturing, Innovation & Procurement</h2>
                      <ChevronDownIcon className="w-7 h-7" />
                    </div>

                    <p className="text-[1rem] font-normal leading-snug">
                      Our manufacturing team is responsible for health, safety, quality, and food safety across our business. They ensure we comply with all
                      local laws and meet our environment, social and ethical standards, as well as identifying efficiencies and opportunities to improve our
                      processes.
                    </p>
                    <div>
                      <Button text="Explore Opportunities" buttonStyle=" py-3 px-8 bg-white text-black text-md font-semibold rounded-sm" />
                    </div>
                    <img src={cotton_american} alt="cotton" className="h-full w-full bg-cover rounded-tr-[1.875rem] rounded-bl-[1.875rem]" />
                  </div>
                )}
              </div>
            </div>

            <div className="hidden">
              <div className="flex items-center space-x-2">
                <p className="px-4 py-4.5 rounded-tr-[25px] bg-[#000000] text-white font-medium text-base">Supply Chain Management</p>
                <p className="px-6 py-4.5 rounded-tr-[25px] bg-[#ff7000] text-[#2e2d2c] font-medium text-base">Trading</p>
                <p className="px-4 py-4.5 rounded-tr-[25px] bg-[#ff7000] text-[#2e2d2c] font-medium text-base">Plantations & Farming</p>
                <p className="px-4 py-4.5 rounded-tr-[25px] bg-[#ff7000] text-[#2e2d2c] font-medium text-base">Manufacturing, Innovation & Procurement</p>
              </div>
              <div className="py-30 bg-[#2e2d2c] px-20 rounded-tr-[60px] rounded-bl-[60px]">
                <div className="grid grid-cols-1 md:grid-cols-2   ">
                  <div className="flex flex-col space-y-10 px-20 justify-center">
                    <p className="leading-snug font-normal text-xl text-white">
                      Our well-established network of farmers and cooperatives, and our skills in logistics and risk management enable us to secure supplies and
                      deliver them to our customers consistently. Our technologies enhance product traceability, adding value for our customers.
                    </p>
                    <div>
                      <Button text="Explore Opportunities" buttonStyle=" py-3 px-8 bg-white text-black text-md font-semibold rounded-sm" />
                    </div>
                  </div>
                  <div>
                    <img src={cotton_american} alt="cotton" className="h-full w-full bg-cover rounded-tr-[60px] rounded-bl-[60px]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-0 pb-15 md:pt-0 md:pb-0 md:py-20 px-10 md:px-0">
        <div className="max-w-[1580px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-9 md:gap-0">
            <div className="flex flex-col justify-center">
              <div className="flex items-center ">
                <img src={laboratory} alt="card overlay" className="w-full h-full object-cover rounded-tr-[60px] rounded-bl-[60px]" />
              </div>
            </div>

            <div className="flex flex-col space-y-6 justify-center md:pl-30">
              <h4 className="text-[#2e2d2c] text-[2rem] leading-9 md:text-5xl font-medium md:leading-tight">
                What's <span className="text-light-blue-500">your</span> next step?
              </h4>
              <p className="text-[1rem] md:text-xl font-light leading-snug md:leading-1 text-[#2e2d2c]">
                Whether you’re an entrepreneur, agricultural expert, trader, accountant, food scientist, or sales and marketing professional, a world of
                opportunity awaits.
              </p>
              <p className="text-[1rem] md:text-xl font-light leading-snug md:leading-1  text-[#2e2d2c]">
                Click below to see all opportunities within the Olam Group.
              </p>
              <div>
                <Button text="Discover opportunities" buttonStyle="py-2.5 px-6 md:py-3.5 md:px-10 bg-[#000000] text-white text-md font-semibold rounded-sm" />
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
