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
        <div className="flex flex-col lg:flex-row items-center justify-center gap-16 mt-20">
          <div className="flex flex-col gap-4 w-full lg:w-1/2 p-8 bg-gray-900 rounded-lg">
            <p className="border-l-4 pl-4 odd:border-thBlue even:border-th">
              kljdsfklfdsafdasdf
            </p>
            <p className="border-l-4 pl-4 odd:border-thBlue even:border-th">
              sdklfjsdafkljsdf
            </p>
            <p className="border-l-4 pl-4 odd:border-thBlue even:border-th">
              lskdfjskldjfkjl
            </p>
            <p className="border-l-4 pl-4 odd:border-thBlue even:border-th">
              asdlkfjdklfjkjl
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
              className="rounded-lg shadow-xl shadow-thBlue h-[400px] lg:h-[300px]"
            ></video>
          </div>
        </div>

        <Contact />
      </PageSection>
    </div>
  );
};

export default Home;
