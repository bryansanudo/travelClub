import React, { useRef, useState } from "react";
import { FaPauseCircle, FaPlayCircle } from "react-icons/fa";

import heroVideo from "@/assets/pink.mp4";

const HeroSection = ({ isMenuShown }) => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(true);

  const videoRef = useRef();

  const handleVideoPause = () => {
    videoRef.current.pause();
    setIsVideoPlaying(false);
  };

  const handleVideoPlay = () => {
    videoRef.current.play();
    setIsVideoPlaying(true);
  };

  return (
    <div
      name="inicio"
      className="flex items-end justify-center w-full h-screen text-center"
    >
      <video
        ref={videoRef}
        autoPlay
        src={heroVideo}
        loop
        type="video/mp4"
        playsInline
        muted
        className="h-full object-cover w-full absolute -z-10"
      ></video>
      <div
        className={` w-full p-8 flex flex-row items-center justify-center duration-500  gap-10 ${
          isMenuShown ? "opacity-20" : "opacity-100"
        }`}
      >
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
    </div>
  );
};

export default HeroSection;
