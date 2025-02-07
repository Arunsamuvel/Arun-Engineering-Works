import React from "react";
import Particles from "react-tsparticles"; // Import Particles
import linkedin from "../assets/linkedin.png";
import whatsapp from "../assets/whatsapp.png";
import facebook from "../assets/facebook.png";
import instagram from "../assets/instagram.png";
import hero from "../assets/Myphoto.jpg";
import arun from "../assets/arun.jpg";
import { Facebook } from "lucide-react";

const Hero = () => {
  return (
    <section className="hero relative">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row items-center lg:h-[90vh] justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0 flex flex-col space-y-4 px-6 lg:px-0 lg:mt-0 mt-10">
            <h1 className="lg:text-7xl text-4xl font-bold lg:leading-snug">
              Hi There, <br />
              I'm <span className="text-red-500">Arun</span>
            </h1>
            <p className="md:text-2xl text-xl mb-4">
              Electrical Engineer &amp; Electrical Designer
            </p>
            <p className="mb-4">
              Professional Electrician & Electrical Engineer | Over 6 Years of
              Providing Top-Notch Electrical Services | B.Tech/B.E. in
              Electrical and Electronics Engineering.
            </p>
            <p className="mb-4">
              Specialized in apartment electrical projects, industrial wiring,
              and government smart city projects. Successfully completed
              multiple large-scale projects, ensuring high efficiency and safety
              compliance.
            </p>
            <button className="bg-black text-white px-3 py-2 w-max rounded-md">
              <a href="7502361667">Contact Now</a>
            </button>
          </div>
          {/* hero section Arun Profile */}
          <div className="md:w-1/2 relative flex justify-center items-center">
            <img
              src={arun}
              alt="Hero"
              className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl 
               h-auto rounded-md shadow-lg object-cover"
            />
          </div>
        </div>
      </div>
      <div className="absolute top-40 right-10 hidden bg-gray-200 p-4 md:flex flex-col gap-6 rounded-full">
        <button>
          <a href="https://www.linkedin.com/in/arun-s-57a414161/">
            <img src={linkedin} alt="linkedin" className="w-20" />
          </a>
        </button>
        <button>
          <a href="https://wa.me/7502361667">
            <img src={whatsapp} alt="whatsapp" className="w-20" />
          </a>
        </button>
        <button>
          <a href="https://wa.me/7502361667">
            <img src={facebook} alt="facebook" className="w-20" />
          </a>
        </button>
        <button>
          <a href="https://www.instagram.com/arun_david_98/">
            <img src={instagram} alt="instagram" className="w-20" />
          </a>
        </button>
      </div>
    </section>
  );
};

export default Hero;
