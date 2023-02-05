import React, { useRef, useState } from "react";

import Contact from "@/components/Contact";
import PageSection from "@/components/PageSection";
import HeroSection from "@/components/HeroSection";

import promotionImage1 from "@/assets/promotions/promotions1.jpg";
import promotionImage2 from "@/assets/promotions/promotions2.jpg";
import promotionImage3 from "@/assets/promotions/promotions3.jpg";
import promotionImage4 from "@/assets/promotions/promotions4.jpg";
import promotionImage5 from "@/assets/promotions/promotions5.jpg";
import promotionImage6 from "@/assets/promotions/promotions6.jpg";
import promotionImage7 from "@/assets/promotions/promotions7.jpg";
import promotionImage8 from "@/assets/promotions/promotions8.jpg";
import promotionImage9 from "@/assets/promotions/promotions9.jpg";
import promotionImage10 from "@/assets/promotions/promotions10.jpg";
import promotionImage11 from "@/assets/promotions/promotions11.jpg";
import promotionImage12 from "@/assets/promotions/promotions12.jpg";
import promotionImage13 from "@/assets/promotions/promotions13.jpg";

const Promotions = ({ isMenuShown }) => {
  const travels = [
    {
      id: 1,
      src: promotionImage1,
      code: "https://www.instagram.com/p/CklWCHntHd0/",
    },
    {
      id: 2,
      src: promotionImage2,
      code: "https://www.instagram.com/p/CkjMtkuKgFK/",
    },
    {
      id: 3,
      src: promotionImage3,
      code: "https://www.instagram.com/p/CkeUogWLKUo/",
    },
    {
      id: 4,
      src: promotionImage4,
      code: "https://www.instagram.com/p/CkhKPbHs5FL/",
    },
    {
      id: 5,
      src: promotionImage5,
      code: "https://www.instagram.com/p/CkY5hxkJxwm/",
    },
    {
      id: 6,
      src: promotionImage6,
      code: "https://www.instagram.com/p/CkWUvL3rktU/",
    },
    {
      id: 7,
      src: promotionImage7,
      code: "https://www.instagram.com/p/CkTUeQioKJz/",
    },
    {
      id: 8,
      src: promotionImage8,
      code: "https://www.instagram.com/p/CkOmWPfPqdb/",
    },
    {
      id: 9,
      src: promotionImage9,
      code: "https://www.instagram.com/p/CkMj4oGselC/",
    },
    {
      id: 10,
      src: promotionImage10,
      code: "https://www.instagram.com/p/CkLmFQTsksx/",
    },
    {
      id: 11,
      src: promotionImage11,
      code: "https://www.instagram.com/p/CkMBjiIMCFi/",
    },
    {
      id: 12,
      src: promotionImage12,
      code: "https://www.instagram.com/p/CkETK6iv8BG/",
    },
    {
      id: 13,
      src: promotionImage13,
      code: "https://www.instagram.com/p/CkD3tFUM8G6/",
    },
  ];

  return (
    <div className="flex flex-col items-center pt-32">
      <PageSection>
        <div className="mx-auto flex h-full w-full max-w-screen-lg flex-col justify-center mb-36">
          <div className="grid gap-8 sm:grid-cols-2 sm:px-0 md:grid-cols-3  ">
            {travels.map(({ id, src, code }) => (
              <div
                key={id}
                className="rounded-lg shadow-lg shadow-thBlue duration-300 hover:scale-105 flex items-center justify-center"
              >
                <a href={code} target="_blank" rel="noreferrer">
                  <img
                    src={src}
                    alt=""
                    className="rounded-md duration-200 hover:scale-105 object-cover "
                  />
                </a>
              </div>
            ))}
          </div>
        </div>

        <HeroSection isMenuShown={isMenuShown} />
        <Contact />
      </PageSection>
    </div>
  );
};

export default Promotions;
