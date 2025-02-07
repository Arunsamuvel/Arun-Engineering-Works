const Projects = () => {
  const projectJson = [
    {
      title: "Smart Home Automation",
      desc: "Designed and implemented smart home solutions using IoT technology, enabling remote control of lighting, security, and appliances.",
      image: "smart-home.png",
    },
    {
      title: "Industrial Wiring",
      desc: "Handled industrial wiring projects for factories and manufacturing units, ensuring high safety standards and efficiency.",
      image: "industrial-wiring.png",
    },
    {
      title: "Apartment Electrical Works",
      desc: "Completed full electrical installations for apartment complexes, including power distribution and automation systems.",
      image: "../assets/Arun.jpg",
    },
    {
      title: "Smart Cities Electrical Infrastructure",
      desc: "Contributed to smart city projects by integrating intelligent lighting, surveillance, and energy-efficient systems.",
      image: "smart-cities.png",
    },
    {
      title: "Event Decorative Lighting",
      desc: "Designed and installed decorative lighting for major events and celebrations, enhancing ambiance with smart lighting solutions.",
      image: "event-lighting.png",
    },
    {
      title: "CCTV Installation",
      desc: "Installed and configured high-resolution CCTV systems for residential, commercial, and industrial security monitoring.",
      image: "cctv.png",
    },
    {
      title: "Residential Wiring",
      desc: "Completed numerous residential wiring projects, ensuring safety, compliance, and modern electrical standards.",
      image: "residential-wiring.png",
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
