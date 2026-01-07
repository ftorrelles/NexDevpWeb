import React, { useEffect } from "react";
import Navbar from "../../components/NavBar/NavBar";
import WhatsAppBtn from "../../components/WhatsAppBtn/WhatsAppBtn";
import Footer from "../../components/Footer/Footer";

// Componentes Nuevos y Existentes
import SolutionsHero from "../../sections/SolutionsHero/SolutionHero";
import Solution from "../../sections/Solution/Solution";
import WebDev from "../../sections/WebDev/WebDev";
import Projects from "../../sections/Projects/Projects";
import Guarantee from "../../sections/Guarantee/Guarantee";

const Solutions = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>
      <Navbar />
      <SolutionsHero />
      <Solution />
      <WebDev />
      <Projects />
      <Guarantee />
      <Footer />
      <WhatsAppBtn />
    </main>
  );
};

export default Solutions;
