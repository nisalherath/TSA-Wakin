import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import React from "react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Separator } from "../../components/ui/separator";
import { AboutUsSection } from "./sections/AboutUsSection/AboutUsSection";
import { FooterSection } from "./sections/FooterSection/FooterSection";
import { HeroBannerSection } from "./sections/HeroBannerSection/HeroBannerSection";
import { LatestNewsSection } from "./sections/LatestNewsSection/LatestNewsSection";
import { NewsCardSection } from "./sections/NewsCardSection/NewsCardSection";
import { TestimonialsSection } from "./sections/TestimonialSection/TestimonialSection";
import { WiseProjectSection } from "./sections/WiseProjectSection/WiseProjectSection";

export const HomePage = () => {
  // Navigation menu items
  const mainNavItems = [
    { label: "HOME", active: true },
    { label: "ABOUT US", active: false },
    { label: "NEWS", active: false },
    { label: "EVENTS", active: false },
    { label: "MEMBERS", active: false },
    { label: "RESOURCES", active: false },
  ];

  const secondaryNavItems = [
    { label: "JOIN US", active: true },
    { label: "CONTACT", active: false },
    { label: "DONATION", active: false },
  ];

  // Partner logos section
  const partnerLogosSection = (
    <section className="w-full mt-[140px] relative">
      <Separator className="w-[1440px] h-1 mx-auto mt-[164px]" />

      <div className="text-center mt-[76px] mx-auto max-w-2xl">
        <p className="font-['Nunito_Sans',Helvetica] font-semibold text-black text-xl tracking-[-0.40px] leading-7">
          Meet the organizations championing workplace inclusion and LGBTIQ+
          diversity across Europe
        </p>
      </div>

      <div className="mt-[42px] mx-auto">
        <img
          className="w-[1197px] h-[221px] mx-auto"
          alt="Partner organization logos"
          src="https://c.animaapp.com/1L0FWRLW/img/logos.svg"
        />
      </div>

      <div className="flex justify-center gap-1 mt-[40px]">
        <div className="w-[46px] h-1.5 bg-[#770088] rounded-lg" />
        <div className="w-[17px] h-1.5 bg-[#d9d9d9] rounded-lg" />
      </div>
    </section>
  );

  // Events section
  const eventsSection = (
    <section className="w-full bg-[#336de6] relative">
      <div className="relative w-full max-w-[1335px] mx-auto">
        <div className="pt-8 pl-[98px]">
          <h2 className="font-['Anton_SC',Helvetica] font-normal text-white text-7xl leading-[78px] max-w-[506px]">
            JOIN OUR UPCOMING EVENTS
          </h2>

          <Separator className="w-[610px] h-[7px] mt-[112px]" />

          <p className="font-['Nunito_Sans',Helvetica] font-semibold text-white text-xl tracking-[-0.40px] leading-7 mt-[10px] max-w-[612px]">
            Stay connected and engage with our community through events that
            drive progress in workplace diversity and inclusion.
          </p>
        </div>

        <div className="relative mt-[48px] ml-[63px] max-w-[441px]">
          <NewsCardSection />

          <Button
            variant="ghost"
            size="icon"
            className="absolute top-[277px] left-0 rotate-180 text-white"
          >
            <ChevronLeftIcon className="h-[30px] w-[30px]" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="absolute top-[277px] right-[-454px] text-white"
          >
            <ChevronRightIcon className="h-[30px] w-[30px]" />
          </Button>
        </div>

        <img
          className="absolute top-0 right-0 w-[855px] h-[793px]"
          alt="Person at event"
          src="https://c.animaapp.com/1L0FWRLW/img/lady.png"
        />
      </div>
    </section>
  );

  return (
    <div className="bg-white flex flex-row justify-center w-full">
      <div className="bg-white overflow-hidden w-full max-w-[1440px] relative">
        {/* Header with logo and navigation */}
        <header className="relative w-full pt-2.5">
          <img
            className="w-[151px] h-[121px] ml-24 object-cover"
            alt="EPBN logo"
            src="https://c.animaapp.com/1L0FWRLW/img/epbn-logo-2@2x.png"
          />

{/* Main navigation */}
<Card className="fixed w-[584px] h-12 top-[50px] left-[430px] bg-black rounded-[100px] backdrop-blur-[20px] z-50">
  <CardContent className="p-0 h-full flex items-center">
    {mainNavItems.map((item, index) => (
      <div
        key={index}
        className={`relative h-10 px-4 flex items-center justify-center ${
          index === 0 ? "ml-1" : ""
        } ${item.active ? "bg-white rounded-[120px]" : ""}`}
      >
        <span
          className={`font-['Nunito_Sans',Helvetica] font-bold text-sm leading-[14px] ${
            item.active ? "text-black" : "text-white"
          }`}
        >
          {item.label}
        </span>
      </div>
    ))}
  </CardContent>
</Card>

{/* Secondary navigation */}
<Card className="fixed w-[280px] h-12 top-[50px] left-[1063px] bg-black rounded-[100px] backdrop-blur-[20px] z-50">
  <CardContent className="p-0 h-full flex items-center">
    {secondaryNavItems.map((item, index) => (
      <div
        key={index}
        className={`relative h-10 px-4 flex items-center justify-center ${
          index === 0 ? "ml-1" : ""
        } ${item.active ? "bg-[#336de6] rounded-[120px]" : ""}`}
      >
        <span className="font-['Nunito_Sans',Helvetica] font-bold text-white text-sm tracking-[-0.56px] leading-[14px]">
          {item.label}
        </span>
      </div>
    ))}
  </CardContent>
</Card>
        </header>

        {/* Main content sections */}
        <main>
          <section className="relative mt-[131px]">
            <Separator className="w-[1440px] h-0.5 mx-auto mt-3" />
            <HeroBannerSection />
            <AboutUsSection />
            <img
              className="absolute w-[544px] h-[547px] top-[646px] right-[79px] object-cover"
              alt="EPBN map color"
              src="https://c.animaapp.com/1L0FWRLW/img/epbn-map--color-version.png"
            />
          </section>

          {partnerLogosSection}

          {eventsSection}

          <LatestNewsSection />

          <TestimonialsSection />

          <WiseProjectSection />

          <FooterSection />
        </main>

        {/* Floating CTA button */}
        <Button className="fixed w-[164px] h-12 top-[673px] right-[99px] rounded-[30px] font-['Nunito_Sans',Helvetica] font-semibold text-white text-base leading-4 bg-gradient-to-r from-[rgba(233,131,13,1)] to-[rgba(51,109,230,1)]">
          Become a member
        </Button>
      </div>
    </div>
  );
};
