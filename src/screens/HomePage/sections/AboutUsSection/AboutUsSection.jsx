import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const AboutUsSection = () => {
  return (
    <section className="w-full py-14 px-4">
      <Card className="w-full max-w-7xl mx-auto bg-[#ecf2fe] border-none rounded-none">
        <CardContent className="p-0">
          <div className="relative flex flex-col md:flex-row gap-8 p-6 md:p-12">
            <div className="w-full max-w-[640px]">
              <div className="relative mb-10">
                <img
                  className="absolute w-[84px] h-[88px] top-0 right-0"
                  alt="Star"
                  src="https://c.animaapp.com/1L0FWRLW/img/star-3.svg"
                />
                <h2 className="[font-family:'Anton_SC',Helvetica] font-normal text-[#336de6] text-5xl md:text-7xl tracking-[0] leading-[72px] mb-6">
                  EUROPEAN PRIDE BUSINESS NETWORK
                </h2>
                <img
                  className="w-[125px] h-[37px]"
                  alt="Colored line"
                  src="https://c.animaapp.com/1L0FWRLW/img/colored-line-1.svg"
                />
              </div>

              <p className="font-desktop-pargraph text-[#2d62d1] text-base mb-10">
                The European Pride Business Network (EPBN) champions diversity
                and inclusion for LGBTIQ+ professionals, managers, and
                organizations across Europe. We foster unity and collaboration
                to create workplaces where everyone feels valued. Through
                partnerships and advocacy, we break down barriers and promote
                best practices. Our goal is to ensure that diversity is
                celebrated in every workplace. Together, we empower LGBTIQ+
                individuals to thrive and lead.
              </p>

              <Button className="bg-[#e9830d] hover:bg-[#d67a0c] text-white rounded-full px-6 font-extrabold">
                LEARN MORE
              </Button>
            </div>

            <div className="hidden md:block flex-1">
              {/* Map image would go here based on the screenshot */}
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};
