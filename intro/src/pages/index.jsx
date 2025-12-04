import { Header } from "@/components/portfolio/Header";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Skill } from "@/components/portfolio/Skills";
import { Experiences } from "@/components/portfolio/Experience";
// import { Work, Work1, Work2 } from "@/components/portfolio/Work-data";
import { Works } from "@/components/portfolio/Work";
import { Contact } from "@/components/portfolio/Contact-me";
import { Footer } from "@/components/portfolio/Footer";

const Home = () => {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Skill />
      <Experiences />
      <Works />

      <Contact />
      <Footer />
    </div>
  );
};
export default Home;
