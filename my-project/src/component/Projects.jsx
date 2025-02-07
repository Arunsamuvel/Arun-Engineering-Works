import smartHomeImg from "../assets/smartHomeImg.png";
import commerical from "../assets/commerical.jpg";
import event from "../assets/Event.jpg";
import cctv from "../assets/cctv.jpg";
import gover from "../assets/gover.jpg";
import house from "../assets/redendial.jpg";
import chandelierImg from "../assets/Chandler.jpg";
import profileLightsImg from "../assets/RichAvenue.jpg";
import apart from "../assets/apart.jpg";

const Projects = () => {
  const projectJson = [
    {
      title: "Smart Home Automation",
      desc: "Designed and implemented smart home solutions using IoT technology, enabling remote control of lighting, security, and appliances.",
      image: smartHomeImg,
    },
    {
      title: "Commercial Wiring",
      desc: "Handled Commercial wiring projects for factories and manufacturing units, ensuring high safety standards and efficiency.",
      image: commerical,
    },
    {
      title: "Apartment Electrical Works",
      desc: "Completed full electrical installations for apartment complexes, including power distribution and automation systems.",
      image: apart,
    },
    {
      title: "Smart Cities Electrical Infrastructure",
      desc: "Contributed to smart city projects by integrating intelligent lighting, surveillance, and energy-efficient systems.",
      image: gover,
    },
    {
      title: "Event Decorative Lighting",
      desc: "Designed and installed decorative lighting for major events and celebrations, enhancing ambiance with smart lighting solutions.",
      image: event,
    },
    {
      title: "CCTV Installation",
      desc: "Installed and configured high-resolution CCTV systems for residential, commercial, and industrial security monitoring.",
      image: cctv,
    },
    {
      title: "Residential Wiring",
      desc: "Completed numerous residential wiring projects, ensuring safety, compliance, and modern electrical standards.",
      image: house,
    },
    {
      title: "Chandelier Lighting Installation", // New Project
      desc: "Installed elegant chandelier lighting solutions for homes, hotels, and event spaces, enhancing aesthetics with modern designs.",
      image: chandelierImg,
    },
    {
      title: "Profile Lights Installation", // New Project
      desc: "Installed high-quality profile lighting systems for homes and commercial spaces, providing modern and sleek lighting solutions.",
      image: profileLightsImg,
    },
  ];

  return (
    <section id="projects" className="relative bg-gray-700 py-10 px-4">
      <div className="mb-16 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-white border-b border-red-500 w-max pb-4">
          My Electrical Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-10">
          {projectJson.map((item, index) => (
            <div key={index} className="bg-white p-5 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">
                {item.title}
              </h3>
              <p className="text-lg mb-4 text-gray-700">{item.desc}</p>
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-64 object-cover mb-4 rounded-lg"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
