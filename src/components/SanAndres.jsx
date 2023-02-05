import React, { useRef, useState } from "react";
import { FaPauseCircle, FaPlayCircle } from "react-icons/fa";
import Contact from "@/components/Contact";
import PageSection from "@/components/PageSection";
import HeroSection from "@/components/HeroSection";

import sanandresVideo1 from "@/assets/sanandres1.mp4";
import sanandresVideo2 from "@/assets/sanandres2.mp4";

const SanAndres = ({ isMenuShown }) => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(true);

  const ref1 = useRef();
  const ref2 = useRef();

  const handleVideoPause = () => {
    ref1.current.pause();
    ref2.current.pause();
    setIsVideoPlaying(false);
  };

  const handleVideoPlay = () => {
    ref1.current.play();
    ref2.current.play();
    setIsVideoPlaying(true);
  };

  const travels = [
    {
      id: 1,
      src: sanandresVideo1,
      code: "/SanAndres.pdf",
      ref: ref1,
    },
    {
      id: 2,
      src: sanandresVideo2,
      code: "/SanAndres.pdf",
      ref: ref2,
    },
  ];
  return (
    <div className="flex flex-col items-center pt-32">
      <PageSection
        name="/ejecafetero"
        title="San Andrés"
        subtitle={`Es una isla colombiana ubicada en el mar caribe, es una de las más grandes que forma parte del Archipiélago de San Andrés, Providencia y Santa Catalina; conocido como el mar de los 7 colores.`}
      >
        <div className="grid lg:grid-cols-2 gap-8 mb-24 ">
          <div className="col-span-2 flex items-center justify-center">
            {isVideoPlaying ? (
              <FaPauseCircle
                size={25}
                onClick={handleVideoPause}
                className="cursor-pointer hover:scale-105 duration-300 text-thBlue"
              />
            ) : (
              <FaPlayCircle
                size={25}
                onClick={handleVideoPlay}
                className="cursor-pointer hover:scale-110 duration-300 text-thBlue"
              />
            )}
          </div>
          {travels.map(({ id, src, code, ref }) => (
            <div
              key={id}
              className="rounded-lg flex flex-col items-center justify-centerp-4  text-center col-span-2"
            >
              <a href={code} target="_blank" rel="noreferrer">
                <video
                  ref={ref}
                  src={src}
                  loop
                  type="video/mp4"
                  playsInline
                  autoPlay
                  muted
                  className="rounded-lg shadow-lg shadow-thBlue object-cover w-[20rem] h-[15rem] md:w-screen md:h-[17rem] duration-300 hover:scale-105"
                />
              </a>
            </div>
          ))}
        </div>

        <HeroSection isMenuShown={isMenuShown} />
        <Contact />
      </PageSection>
    </div>
  );
};

export default SanAndres;
