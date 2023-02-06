import React, { useRef, useState } from "react";
import { FaPauseCircle, FaPlayCircle } from "react-icons/fa";
import Contact from "@/components/Contact";
import PageSection from "@/components/PageSection";
import HeroSection from "@/components/HeroSection";

import cartagenaVideo1 from "@/assets/cartagena1.mp4";
import cartagenaVideo2 from "@/assets/cartagena2.mp4";

const Cartagena = ({ isMenuShown }) => {
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
      src: cartagenaVideo1,
      code: "/Cartagena.pdf",
      ref: ref1,
    },
    {
      id: 2,
      src: cartagenaVideo2,
      code: "/Cartagena.pdf",
      ref: ref2,
    },
  ];
  return (
    <div className="flex flex-col items-center pt-32">
      <PageSection
        name="/ejecafetero"
        title="Cartagena"
        subtitle={`Es uno de los principales destinos turísticos de Colombia. Esta ciudad cuenta con una gran historia y grandes atractivos naturales. Dentro de los lugares históricos están: El Castillo de San Felipe, el Palacio de la Inquisición, Torre del Reloj, murallas, calles coloniales y sus hermosas playas.`}
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
                  className="rounded-lg shadow-lg shadow-thBlue object-cover w-[20rem] h-[15rem] md:w-screen md:h-[35rem] duration-300 hover:scale-105  "
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

export default Cartagena;
