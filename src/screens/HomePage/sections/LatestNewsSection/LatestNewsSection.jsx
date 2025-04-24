import { ArrowUpRightIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const LatestNewsSection = () => {
  // News article data for mapping
  const newsArticles = [
    {
      id: 1,
      title:
        "BUILDING INCLUSIVE FUTURES: WISE INITIATIVE'S PATH TO LGBTIQ+ EQUALITY IN EUROPE",
      excerpt:
        "At the heart of the EPBN Workplace Inclusion for a Sustainable Europe - WISE initiative lies a powerful vision: to create workplaces where every individual, regardless of their identity,",
      imageUrl:
        "https://c.animaapp.com/1L0FWRLW/img/instagram-post-empowering-lgbti-professionals-across-europe--32@2x.png",
    },
    {
      id: 2,
      title:
        "BUILDING INCLUSIVE FUTURES: WISE INITIATIVE'S PATH TO LGBTIQ+ EQUALITY IN EUROPE",
      excerpt:
        "At the heart of the EPBN Workplace Inclusion for a Sustainable Europe - WISE initiative lies a powerful vision: to create workplaces where every individual, regardless of their identity,",
      imageUrl:
        "https://c.animaapp.com/1L0FWRLW/img/instagram-post-empowering-lgbti-professionals-across-europe--32-1@2x.png",
    },
    {
      id: 3,
      title:
        "BUILDING INCLUSIVE FUTURES: WISE INITIATIVE'S PATH TO LGBTIQ+ EQUALITY IN EUROPE",
      excerpt:
        "At the heart of the EPBN Workplace Inclusion for a Sustainable Europe - WISE initiative lies a powerful vision: to create workplaces where every individual, regardless of their identity,",
      imageUrl:
        "https://c.animaapp.com/1L0FWRLW/img/instagram-post-empowering-lgbti-professionals-across-europe--32-2@2x.png",
    },
  ];

  return (
    <section className="w-full max-w-[1233px] mx-auto py-16">
      <div className="flex flex-col items-center text-center mb-12">
        <h2 className="font-desktop-heading-2 font-[number:var(--desktop-heading-2-font-weight)] text-black text-[length:var(--desktop-heading-2-font-size)] tracking-[var(--desktop-heading-2-letter-spacing)] leading-[var(--desktop-heading-2-line-height)] [font-style:var(--desktop-heading-2-font-style)]">
          LATEST NEWS
        </h2>

        <p className="mt-6 font-['Nunito_Sans',Helvetica] font-semibold text-black text-xl tracking-[-0.40px] leading-7 max-w-[860px]">
          Explore recent updates, insights, and developments in LGBTIQ+
          workplace inclusion and advocacy.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {newsArticles.map((article) => (
          <Card
            key={article.id}
            className="rounded-[10px] border-2 border-solid border-black overflow-hidden"
          >
            <CardContent className="p-0">
              <div className="relative">
                <div
                  className="w-full h-[218px] bg-cover bg-center"
                  style={{ backgroundImage: `url(${article.imageUrl})` }}
                >
                  <div className="absolute top-[5px] right-[5px] w-10 h-10 bg-[#336de6] rounded flex items-center justify-center">
                    <ArrowUpRightIcon className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="font-desktop-heading-4 font-[number:var(--desktop-heading-4-font-weight)] text-black text-[length:var(--desktop-heading-4-font-size)] tracking-[var(--desktop-heading-4-letter-spacing)] leading-[var(--desktop-heading-4-line-height)] [font-style:var(--desktop-heading-4-font-style)] mb-4">
                  {article.title}
                </h3>

                <p className="font-['Nunito_Sans',Helvetica] font-medium text-[#6d6d6d] text-sm tracking-[0] leading-5 overflow-hidden text-ellipsis [display:-webkit-box] [-webkit-line-clamp:3] [-webkit-box-orient:vertical] mb-6">
                  {article.excerpt}
                </p>

                <Button className="rounded-[80px] bg-black text-white h-10 px-[19px] py-[15px]">
                  <span className="font-['Nunito_Sans',Helvetica] font-extrabold text-sm tracking-[0] leading-[14px]">
                    READ MORE
                  </span>
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="flex justify-center mt-10">
        <Button className="rounded-[80px] bg-[#770088] text-white h-12 px-[19px] py-[15px]">
          <span className="font-['Nunito_Sans',Helvetica] font-extrabold text-sm tracking-[0] leading-[14px]">
            MORE NEWS
          </span>
        </Button>
      </div>
    </section>
  );
};
