import React from "react";
import Contact from "@/components/Contact";
import PageSection from "@/components/PageSection";
import HeroSection from "@/components/HeroSection";

const Home = ({ isMenuShown }) => {
  return (
    <div className="flex flex-col items-center">
      <PageSection name="/ejecafetero">
        <HeroSection isMenuShown={isMenuShown} />
        <div>
          <h1>sdfsdfsf</h1>
        </div>

        <Contact />
      </PageSection>
    </div>
  );
};

export default Home;
