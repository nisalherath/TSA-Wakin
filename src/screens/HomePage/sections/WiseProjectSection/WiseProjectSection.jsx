import React from "react";
import { Button } from "../../../../components/ui/button";

export const WiseProjectSection = () => {
  return (
    <section className="w-full bg-black py-12 relative">
      <div className="container mx-auto px-4 bg-black">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="w-full md:w-1/2">
            <p className="font-desktop-heading-4 text-[length:var(--desktop-heading-4-font-size)] tracking-[var(--desktop-heading-4-letter-spacing)] leading-[var(--desktop-heading-4-line-height)] font-[number:var(--desktop-heading-4-font-weight)] [font-style:var(--desktop-heading-4-font-style)]">
              <span className="text-white">It&apos;s </span>
              <span className="text-[#ffdd02]">WISE</span>
              <span className="text-white">
                {" "}
                to champion LGBTIQ+ inclusion in the workplace, and EPBN is at
                the forefront of this movement across Europe. Discover
                EPBN&apos;s groundbreaking initiative aimed at transforming
                LGBTIQ+ workplace equality.{" "}
              </span>
            </p>

            <Button className="mt-10 bg-[#e9830d] hover:bg-[#d07509] text-white rounded-[80px] font-extrabold px-6 py-3 h-12">
              LEARN MORE
            </Button>
          </div>

          <div className="w-full md:w-1/2">
            <h2 className="font-desktop-heading-2 text-[length:var(--desktop-heading-2-font-size)] tracking-[var(--desktop-heading-2-letter-spacing)] leading-[var(--desktop-heading-2-line-height)] font-[number:var(--desktop-heading-2-font-weight)] [font-style:var(--desktop-heading-2-font-style)]">
              <span className="text-[#ffdd02]">WISE</span>
              <span className="text-white">
                {" "}
                – Workplace Inclusion for a Sustainable Europe
              </span>
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};
