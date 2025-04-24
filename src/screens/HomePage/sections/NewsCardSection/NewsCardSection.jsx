import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const NewsCardSection = () => {
  const newsData = {
    title:
      "EPBN WEBINAR SERIES: BEYOND LABELS: INAUGURAL INCLUSIVE JOB FAIRS IN POLAND",
    description:
      "At the heart of the EPBN Workplace Inclusion for a Sustainable Europe - WISE initiative lies a powerful vision: to create workplaces where every individual, regardless of their identity,",
    image:
      "https://c.animaapp.com/1L0FWRLW/img/instagram-post-empowering-lgbti-professionals-across-europe--32-3@2x.png",
  };

  return (
    <div className="w-full max-w-[405px]">
      <Card className="relative w-full border-2 border-solid border-black rounded-[10px] bg-white">
        <CardContent className="p-0">
          <img
            className="w-full h-[218px] object-cover rounded-t-[8px] mt-1.5 mx-1.5 max-w-[388px]"
            alt="Instagram post"
            src={newsData.image}
          />

          <div className="px-[26px] pt-4">
            <h3 className="font-['Nunito_Sans',Helvetica] font-bold text-black text-xl tracking-[-0.40px] leading-7 mb-4">
              {newsData.title}
            </h3>

            <p className="font-['Nunito_Sans',Helvetica] font-medium text-[#6d6d6d] text-sm tracking-[0] leading-5 mb-6 overflow-hidden text-ellipsis [display:-webkit-box] [-webkit-line-clamp:3] [-webkit-box-orient:vertical]">
              {newsData.description}
            </p>

            <div className="flex gap-3 mb-6">
              <Button
                variant="outline"
                className="h-[42px] rounded-[80px] border-black font-['Nunito_Sans',Helvetica] font-extrabold text-sm"
              >
                READ MORE
              </Button>

              <Button className="h-[42px] rounded-[50px] bg-black text-white font-['Nunito_Sans',Helvetica] font-semibold text-sm">
                REGISTER
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
