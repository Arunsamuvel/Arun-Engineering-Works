const About = () => {
  return (
    <div className="relative" id="about">
      <div className="bg-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base text-red-600 font-semibold tracking-wide uppercase">
              About Me
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Hi, I'm Arun.
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Electrical Engineer & Entrepreneur | Expert in Smart Home Technology, CCTV Installation, Industrial Wiring & Government Projects
            </p>
          </div>

          {/* My Journey Section */}
          <div className="mt-10 grid grid-cols-1 gap-12 lg:grid-cols-2">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900">
                My Journey
              </h3>
              <p className="mt-4 text-lg text-gray-600">
                With over **6 years of experience**, I have worked on **apartment projects, industrial wiring, smart city initiatives, CCTV installation, and government electrical works**.  
                I specialize in **smart switch control systems using ESP32 & NodeMCU**, enabling seamless automation without replacing old switches.  
                My passion for **IoT, security systems, and automation** has driven me to innovate in home automation, industrial power solutions, and surveillance systems.
              </p>
            </div>

            {/* Skills & Expertise Section */}
            <div className="border border-red-200 rounded-lg md:p-7 py-7 flex flex-col gap-6 items-center shadow-lg shadow-red-300">
              <h3 className="text-2xl font-semibold text-red-600">
                Skills & Expertise
              </h3>
              <div className="flex flex-wrap gap-3 justify-center">
                {[
                  "Electrical Wiring",
                  "Smart Home Automation",
                  "Industrial Wiring",
                  "CCTV Installation",
                  "IoT & ESP32",
                  "Power Distribution",
                  "Building Electrical Design",
                  "PCB Design",
                  "Solar Panel Systems",
                  "Python & SQL",
                  "MERN Stack",
                ].map((skill, index) => (
                  <div key={index} className="border border-red-300 px-3 py-1 rounded-lg shadow-md shadow-red-300">
                    <span className="font-semibold">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* More About Me */}
          <div className="mt-12">
            <h3 className="text-2xl font-semibold text-gray-900">
              More About Me
            </h3>
            <p className="mt-4 text-lg text-gray-600">
              Outside of work, I am passionate about **innovation in electrical engineering, security solutions, and automation**.  
              I have successfully implemented **CCTV surveillance systems** in both **residential and commercial buildings**, ensuring safety and real-time monitoring.  
              My entrepreneurial journey includes working on **government tenders, private sector electrical works, and integrating modern automation & security solutions** in buildings and industries.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
