import React from "react";
import { Button } from "../../../../components/ui/button";
import { Input } from "../../../../components/ui/input";
import { Separator } from "../../../../components/ui/separator";

export const FooterSection = () => {
  // Navigation links data
  const navLinks = [
    { name: "HOME", href: "#" },
    { name: "ABOUT US", href: "#" },
    { name: "MEMBERS", href: "#" },
    { name: "EVENTS", href: "#" },
    { name: "RESOURCES", href: "#" },
    { name: "NEWS", href: "#" },
    { name: "CONTACT", href: "#" },
  ];

  // Social media links data
  const socialLinks = [
    {
      name: "LinkedIn",
      src: "https://c.animaapp.com/1L0FWRLW/img/linkedin.svg",
      alt: "Linked in",
    },
    {
      name: "Instagram",
      src: "https://c.animaapp.com/1L0FWRLW/img/instagram.svg",
      alt: "Instagram",
    },
    {
      name: "Youtube",
      src: "https://c.animaapp.com/1L0FWRLW/img/youtube.svg",
      alt: "Youtube",
    },
  ];

  return (
    <footer className="w-full mt-[00px]">
      {/* Newsletter subscription section */}
      <div className="w-full max-w-[1446px] h-[261px] mx-auto bg-[#aa27ba] relative px-[60px] py-[58px] flex justify-between">
        <div className="flex flex-col">
          <h2 className="[font-family:'Anton_SC',Helvetica] font-normal text-6xl tracking-[-1.20px] leading-[72px]">
            <span className="text-white tracking-[-0.72px]">Stay </span>
            <span className="text-[#ff8d00] tracking-[-0.72px]">Updated</span>
            <span className="text-white tracking-[-0.72px]"> with EPBN</span>
          </h2>
          <img
            className="w-[350px] h-[7px] mt-[10px] object-cover"
            alt="Vector"
            src="https://c.animaapp.com/1L0FWRLW/img/vector-30.svg"
          />
        </div>

        <div className="max-w-[456px] flex flex-col gap-10">
          <p className="[font-family:'Nunito_Sans',Helvetica] font-medium text-[#f4f4f4] text-base tracking-[0] leading-6">
            SUBSCRIBE TO OUR NEWSLETTER FOR THE LATEST NEWS, EVENTS, AND
            OPPORTUNITIES FOR LGBTIQ+ PROFESSIONALS ACROSS EUROPE.
          </p>

          <div className="flex gap-4">
            <Input
              className="h-12 rounded border border-solid border-white bg-transparent text-[#c4c4c4] [font-family:'Nunito_Sans',Helvetica]"
              placeholder="Enter you email"
            />
            <Button className="h-12 rounded-[80px] bg-black [font-family:'Nunito_Sans',Helvetica] font-extrabold text-white text-sm">
              SUBSCRIBE
            </Button>
          </div>
        </div>

        <img
          className="absolute w-[70px] h-[126px] bottom-[26px] left-0"
          alt="Star"
          src="https://c.animaapp.com/1L0FWRLW/img/star-3-1.svg"
        />
      </div>

      {/* Main footer section */}
      <div className="w-full max-w-[1440px] mx-auto bg-[#f5f8ff] flex flex-col items-center">
        {/* Gradient heading */}
        <h1 className="w-[906px] mt-[65px] [background:linear-gradient(90deg,rgba(255,221,2,1)_0%,rgba(233,131,13,1)_12%,rgba(2,153,49,1)_22%,rgba(51,109,230,1)_49%,rgba(226,0,26,1)_61%,rgba(170,39,186,1)_85%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Anton_SC',Helvetica] font-normal text-[90px] text-center tracking-[-1.80px] leading-[110px]">
          CHAMPIONING WORKPLACE EQUALITY ACROSS EUROPE
        </h1>

        {/* Social media icons */}
        <div className="flex justify-center gap-8 mt-[64px]">
          {socialLinks.map((social, index) => (
            <a href="#" key={index}>
              <img
                className="w-[50px] h-[50px]"
                alt={social.alt}
                src={social.src}
              />
            </a>
          ))}
        </div>

        {/* Navigation links */}
        <nav className="flex justify-center mt-[55px]">
          {navLinks.map((link, index) => (
            <React.Fragment key={index}>
              {index > 0 && (
                <Separator orientation="vertical" className="h-7 mx-2" />
              )}
              <a
                href={link.href}
                className="[font-family:'IBM_Plex_Sans_Thai_Looped',Helvetica] font-medium text-black text-base tracking-[0] leading-6"
              >
                {link.name}
              </a>
            </React.Fragment>
          ))}
        </nav>

        {/* Copyright section */}
        <div className="w-full h-9 mt-[68px] bg-black flex items-center px-36">
          <div className="flex justify-between w-full">
            <div className="[font-family:'IBM_Plex_Sans_Thai_Looped',Helvetica] font-normal text-white text-sm tracking-[0] leading-6">
              © 2024, EPBN. All Rights Reserved.
            </div>

            <div className="[font-family:'IBM_Plex_Sans_Thai_Looped',Helvetica] font-normal text-white text-sm tracking-[0] leading-6">
              Privacy | Policy
            </div>

            <div className="[font-family:'IBM_Plex_Sans_Thai_Looped',Helvetica] font-normal text-white text-sm tracking-[0] leading-6">
              Designed &amp; Developed by{" "}
              <span className="underline">The Social Agency</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
