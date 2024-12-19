import React from "react";
import Particles from "react-tsparticles"; // Import Particles
import linkedin from "../assets/linkedin.png";
import hero from "../assets/Myphoto.jpg";

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
              Professional Electrician & Electrical Engineer | Over 5 Years of
              Providing Top-Notch Electrical Services | B.Tech/B.E. in
              Electrical Engineering.
            </p>
            <button className="bg-black text-white px-3 py-2 w-max rounded-md">
              <a
                href="https://drive.google.com/file/d/1LBMHWpTgTGkvCTcHYiU8JQRCHb5-SRl8/view?usp=sharing"
                download
                target="_blank"
                rel="noopener noreferrer"
              >
                Download CV
              </a>
            </button>
          </div>
          <div className="md:w-1/2 relative flex justify-center items-end">
            <img src={hero} alt="hero" className="lg:h-[90vh] h-96" />
          </div>
        </div>
      </div>
      <div className="absolute top-40 right-10 hidden bg-gray-200 p-4 md:flex flex-col gap-6 rounded-full">
        <img src={linkedin} alt="linkedin" className="w-20" />
        <img src={linkedin} alt="linkedin" className="w-20" />
        <img src={linkedin} alt="linkedin" className="w-20" />
        <img src={linkedin} alt="linkedin" className="w-20" />
      </div>
    </section>
  );
};

export default Hero;
