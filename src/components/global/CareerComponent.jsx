import React from "react";

export default function CareerComponent() {
  return (
    <div className="  md:py-30 px-10 md:px-0">
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
  );
}
