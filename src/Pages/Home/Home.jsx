import Hero from "../../sections/Hero/Hero";
import Navbar from "../../components/NavBar/NavBar";
import Problem from "../../sections/Problem/Problem";
import Footer from "../../components/Footer/Footer";
import Solution from "../../sections/Solution/Solution";
import Workflow from "../../sections/WorkFlow/WorkFlow";
import WebDev from "../../sections/WebDev/WebDev";
import Guarantee from "../../sections/Guarantee/Guarantee";
import WhatsAppBtn from "../../components/WhatsAppBtn/WhatsAppBtn";

const Home = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <Problem />
      <Solution />
      <Workflow />
      <WebDev />
      <Guarantee />
      <Footer />
      <WhatsAppBtn />
    </main>
  );
};

export default Home;
