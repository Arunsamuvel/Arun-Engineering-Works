import React, { useState } from "react";
import Lottie from "lottie-react";
import contact from "../assets/Contact.json";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    place: "",
  });
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess(false);

    if (!formData.name || !formData.phone || !formData.place) {
      setError("All fields are required.");
      return;
    }

    try {
      const response = await fetch(
        "https://formsubmit.co/aruneeeworks@gmail.com?_template=table", // ✅ FIXED
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        setSuccess(true);
        setFormData({ name: "", phone: "", place: "" }); // Reset form
      } else {
        setError("Failed to send the message. Please try again.");
      }
    } catch (err) {
      console.error(err);
      setError("Something went wrong. Please try again later.");
    }
  };

  return (
    <section className="bg-gray-800 py-10 px-5 md:px-0">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Left Section */}
          <div className="md:w-1/2 mb-8">
            <h2 className="text-3xl font-bold text-red-500">Get in Touch</h2>
            <p className="mb-4 text-white/85">
              We’re happy to assist you. Send us a message!
            </p>
            <Lottie
              animationData={contact}
              className="w-[350px] mx-auto lg:w-[500px]"
            />
          </div>

          {/* Right Section (Form) */}
          <form
            netlify
            onSubmit={handleSubmit}
            className="w-full md:w-1/2 bg-gray-100 rounded-lg p-10 shadow-lg"
          >
            <h1 className="text-gray-900 text-4xl font-bold mb-7">
              Contact Us
            </h1>

            {/* Full Name */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Full Name"
                className="mt-1 p-2 block w-full rounded-md border-gray-300"
              />
            </div>

            {/* Phone Number */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                className="mt-1 p-2 block w-full rounded-md border-gray-300"
              />
            </div>

            {/* Place */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Place
              </label>
              <input
                type="text"
                name="place"
                value={formData.place}
                onChange={handleChange}
                placeholder="Enter Your Place"
                className="mt-1 p-2 block w-full rounded-md border-gray-300"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="bg-red-500 text-white px-3 py-2 rounded-lg"
            >
              Send Message
            </button>

            {/* Success and Error Messages */}
            {success && (
              <p className="text-green-500 mt-4">Message sent successfully!</p>
            )}
            {error && <p className="text-red-500 mt-4">{error}</p>}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
