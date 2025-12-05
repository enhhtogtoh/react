import { Header } from "@/components/portfolio/Header";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Skill } from "@/components/portfolio/Skills";
import { Experiences } from "@/components/portfolio/Experience";
import { Work_title } from "@/components/portfolio/Work-title";
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
      <Work_title />
      <Works />
      <Contact />
      <Footer />
    </div>
  );
};
export default Home;
