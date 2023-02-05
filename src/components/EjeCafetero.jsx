import React from "react";
import Contact from "@/components/Contact";
import PageSection from "@/components/PageSection";
import HeroSection from "@/components/HeroSection";

const EjeCafetero = ({ isMenuShown }) => {
  return (
    <div className="flex flex-col items-center py-32">
      <PageSection
        name="/ejecafetero"
        title="ejecafetero"
        subtitle={`Recibe la mejor accesoria por patinadores expertos. Conoce los catálogos de patines.`}
      >
        <div>
          <h1>hello world eje cafetero</h1>
        </div>

        <Contact />
        <HeroSection isMenuShown={isMenuShown} />
      </PageSection>
    </div>
  );
};

export default EjeCafetero;
