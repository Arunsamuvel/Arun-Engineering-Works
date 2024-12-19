import React, { useState } from "react";
import Lottie from "lottie-react";
import contact from "../assets/Contact.json";
import axios from "axios";

const facebook = "https://via.placeholder.com/50";
const instagram = "https://via.placeholder.com/50";
const linkedin = "https://via.placeholder.com/50";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/contact", {
        name,
        email,
        message,
      });
      if (response.status === 201) {
        setSuccess(true);
        setName("");
        setEmail("");
        setMessage("");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section
      id="contact"
      className="z-50 bg-gray-800 relative py-10 px-5 md:px-0"
    >
      <div className="mb-16 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="md:w-1/2 mb-8 ml-2 md:mb-0">
            <h2 className="text-3xl font-bold mb-3 text-red-500">
              Get in Touch
            </h2>
            <p className="mb-4 text-white/85">
              I'm always open to new opportunities and collaboration. Feel free
              to reach out!
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/60 hover:text-foreground/80"
              >
                <img src={facebook} alt="Facebook" className="h-6 w-6" />
              </a>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/60 hover:text-foreground/80"
              >
                <img src={instagram} alt="Instagram" className="h-6 w-6" />
              </a>
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/60 hover:text-foreground/80"
              >
                <img src={linkedin} alt="LinkedIn" className="h-6 w-6" />
              </a>
            </div>
            <Lottie
              animationData={contact}
              className="w-[350px] mx-auto lg:w-[500px]"
            />
          </div>
          <form
            onSubmit={handleSubmit}
            className="w-full md:w-1/2 bg-gray-100 rounded-lg border border-red-300 shadow-lg shadow-red-500 p-10"
          >
            <h1 className="text-gray-900 text-4xl font-bold mb-7">
              Contact Me
            </h1>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Full Name"
                className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Message
              </label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Enter Your Message"
                className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
            </div>
            <button
              type="submit"
              className="bg-red-500 text-white px-3 py-2 rounded-lg"
            >
              Send Message
            </button>
            {success && (
              <p className="text-green-500 mt-4">Message sent successfully!</p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
