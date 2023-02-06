import React, { useRef, useState } from "react";
import { FaPauseCircle, FaPlayCircle } from "react-icons/fa";
import Contact from "@/components/Contact";
import PageSection from "@/components/PageSection";
import HeroSection from "@/components/HeroSection";

import ejecafeteroVideo1 from "@/assets/ejecafetero1.mp4";
import ejecafeteroVideo2 from "@/assets/ejecafetero2.mp4";

const EjeCafetero = ({ isMenuShown }) => {
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
      src: ejecafeteroVideo1,
      code: "/EjeCafetero.pdf",
      ref: ref1,
    },
    {
      id: 2,
      src: ejecafeteroVideo2,
      code: "/EjeCafetero.pdf",
      ref: ref2,
    },
  ];
  return (
    <div className="flex flex-col items-center pt-32">
      <PageSection
        name="/ejecafetero"
        title="Eje Cafetero"
        subtitle={`Es una región geográfica, cultural y ecológica de Colombia. Tiene hermosas haciendas y casonas tradicionales rurales onde se puede apreciar las tradiciones de los primeros colonos antioqueños, cada rincón está lleno de historia y hermosos cafetales.`}
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
              className="rounded-lg flex flex-col items-center justify-centerp-4  text-center md:col-span-1 col-span-2"
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
                  className="rounded-lg shadow-lg shadow-thBlue object-cover w-[20rem] h-[15rem] md:w-screen md:h-[35rem] duration-300 hover:scale-105 "
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

export default EjeCafetero;
