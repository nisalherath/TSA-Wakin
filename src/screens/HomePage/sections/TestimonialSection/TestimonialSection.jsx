import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

// Testimonial data for easy mapping
const testimonialData = {
  quote:
    "EPBN HAS BEEN INSTRUMENTAL IN HELPING US FOSTER AN INCLUSIVE CULTURE AT OUR COMPANY. THEIR RESOURCES AND NETWORK HAVE EMPOWERED OUR TEAM TO EMBRACE DIVERSITY AND CREATE A WORKPLACE WHERE EVERYONE CAN THRIVE.",
  author: "Sarah M., HR Director at InclusiveTech",
};

export const TestimonialsSection = () => {
  return (
    <section className="w-full py-16 flex flex-col items-center">
      <div className="max-w-[985px] w-full mx-auto">
        <h2 className="text-center font-desktop-heading-2 text-[#004cff] text-[length:var(--desktop-heading-2-font-size)] tracking-[var(--desktop-heading-2-letter-spacing)] leading-[var(--desktop-heading-2-line-height)] [font-style:var(--desktop-heading-2-font-style)] mb-8">
          VOICE OF IMPACT
        </h2>

        <p className="text-center font-['Nunito_Sans',Helvetica] font-medium text-[#336de6] text-xl tracking-[-0.40px] leading-7 max-w-[676px] mx-auto mb-12">
          Hear from our members and partners on how EPBN is transforming
          workplaces and empowering LGBTIQ+ professionals.
        </p>

        <div className="relative w-full">
          <button
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10"
            aria-label="Previous testimonial"
          >
            <img
              className="w-[60px] h-[60px]"
              alt="Previous arrow"
              src="https://c.animaapp.com/1L0FWRLW/img/arrow-back-ios-1@2x.png"
            />
          </button>

          <div className="relative mx-auto w-[830px]">
            <div className="absolute w-[801px] h-[352px] top-6 left-0 bg-[#336de6]" />

            <Card className="relative ml-[30px]">
              <CardContent className="p-0">
                <img
                  className="w-[801px] h-[353px]"
                  alt="Testimonial background"
                  src="https://c.animaapp.com/1L0FWRLW/img/rectangle-73.svg"
                />

                <div className="absolute top-12 left-[72px]">
                  <img
                    className="w-[34px] h-9"
                    alt="Quote icon"
                    src="https://c.animaapp.com/1L0FWRLW/img/64beb62da622391e75bd769c-layer-1-1.svg"
                  />
                </div>

                <blockquote className="absolute w-[708px] top-[92px] left-[72px] font-['Nunito_Sans',Helvetica] font-semibold italic text-[#336de6] text-xl tracking-[-0.40px] leading-7">
                  {testimonialData.quote}
                </blockquote>

                <div className="absolute w-[276px] h-[38px] top-[244px] left-[73px] bg-[#336de6] rounded">
                  <p className="w-[265px] mt-[6px] ml-[14px] font-['Nunito_Sans',Helvetica] font-bold text-white text-sm tracking-[0] leading-6">
                    {testimonialData.author}
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          <button
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10"
            aria-label="Next testimonial"
          >
            <img
              className="w-[60px] h-[60px]"
              alt="Next arrow"
              src="https://c.animaapp.com/1L0FWRLW/img/arrow-back-ios.svg"
            />
          </button>
        </div>
      </div>
    </section>
  );
};
