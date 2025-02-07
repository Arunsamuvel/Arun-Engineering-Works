import Navbar from "./component/navbar";
import Hero from "./component/Hero";
import About from "./component/About";
import Projects from "./component/Projects";
import Contact from "./component/Contact";
import Testimonials from "./component/Testimonials";
import Footer from "./component/Footer";
import Title from "./component/Title";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
