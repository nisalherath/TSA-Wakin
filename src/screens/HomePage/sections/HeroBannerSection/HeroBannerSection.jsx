import React from "react";
import { Button } from "../../../../components/ui/button";

export const HeroBannerSection = () => {
  return (
    <section className="relative w-full max-w-[1576px] h-auto py-8 mx-auto">
      <div className="relative w-full max-w-[1440px] mx-auto">
        <div className="relative flex flex-col md:flex-row">
          {/* Hero image */}
          <div className="relative">
            <img
              className="w-full max-w-[997px] h-auto"
              alt="Group of people celebrating equality"
              src="https://c.animaapp.com/1L0FWRLW/img/group-126639.png"
            />
          </div>

          {/* Content section */}
          <div className="relative flex-1 px-4 md:px-8 pt-8 md:pt-[35px]">
            {/* Decorative colored line */}
            <img
              className="w-[125px] h-[37px] mb-4"
              alt="Colored line"
              src="https://c.animaapp.com/1L0FWRLW/img/colored-line-1.svg"
            />

            {/* Main heading */}
            <h1 className="[font-family:'Anton_SC',Helvetica] font-normal text-black text-5xl md:text-7xl tracking-[-1.44px] leading-[72px] max-w-[654px]">
              CHAMPIONING WORKPLACE EQUALITY ACROSS EUROPE.
            </h1>

            {/* Decorative vector */}
            <div className="relative">
              <img
                className="w-[258px] h-[95px] my-4"
                alt="Vector"
                src="https://c.animaapp.com/1L0FWRLW/img/vector-21.svg"
              />
              <img
                className="w-1 h-[70px] absolute left-[121px] top-[103px]"
                alt="Rectangle"
                src="https://c.animaapp.com/1L0FWRLW/img/rectangle-74.svg"
              />
            </div>

            {/* Description text */}
            <p className="[font-family:'Nunito_Sans',Helvetica] font-medium text-black text-base tracking-[0] leading-[19.2px] max-w-[396px] mt-8">
              Join a network dedicated to advancing workplace equality and
              supporting LGBTIQ+ professionals through collaboration and
              resources.
            </p>

            {/* CTA Button */}
            <Button className="mt-8 bg-[#336de6] text-white rounded-[80px] px-[19px] py-[15px] h-12">
              <span className="[font-family:'Nunito_Sans',Helvetica] font-extrabold text-sm leading-[14px]">
                JOIN NOW
              </span>
            </Button>
          </div>
        </div>

        {/* Decorative star */}
        <img
          className="absolute w-[87px] h-[126px] top-[244px] right-0"
          alt="Star"
          src="https://c.animaapp.com/1L0FWRLW/img/star-2.svg"
        />
      </div>
    </section>
  );
};
