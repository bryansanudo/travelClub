import React from "react";
import Contact from "@/components/Contact";
import PageSection from "@/components/PageSection";
import HeroSection from "@/components/HeroSection";
import homeVideo from "@/assets/home.mp4";

const Home = ({ isMenuShown }) => {
  return (
    <div className="flex flex-col items-center">
      <PageSection name="/ejecafetero">
        <HeroSection isMenuShown={isMenuShown} />
        <div className="flex flex-col lg:flex-row items-center justify-center gap-16 mt-40 ">
          <div className="flex flex-col gap-10 w-full lg:w-1/2 p-8 bg-gray-900 rounded-lg ">
            <p className="border-l-4 pl-4 border-thBlue ">
              En Prestigio Travel Club somos directos con el mensaje que
              transmitimos, ofrecemos las mejores experiencias pensando en cada
              persona.
            </p>
            <p className="border-l-4 pl-4 border-thBlue ">
              Nos apasiona y queremos contagiarte de ese amor por descubrir
              nuevos lugares.
            </p>
            <p className="border-l-4 pl-4 border-thBlue ">
              Llevamos más 6 años recorriendo el mundo en el sector del turismo.
            </p>
            <p className="border-l-4 pl-4 border-thBlue ">
              Estamos las 24 horas pendientes de que todo salga bien durante tu
              viaje.
            </p>
          </div>
          <div className="w-full lg:w-1/2 flex justify-center">
            <video
              src={homeVideo}
              loop
              autoPlay
              muted
              type="video/mp4"
              playsInline
              className="rounded-lg shadow-xl shadow-thBlue  lg:h-[300px]"
            ></video>
          </div>
        </div>

        <Contact />
      </PageSection>
    </div>
  );
};

export default Home;
