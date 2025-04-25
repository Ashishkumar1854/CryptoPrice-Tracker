import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted", formData);
    // You can integrate an API or email service here
  };

  return (
    <div className="bg-gray-800 text-white min-h-screen py-10 px-6">
      <h2 className="text-4xl font-bold text-center mb-4">Contact Us</h2>

      <div className="max-w-4xl mx-auto text-center mb-10">
        <p className="text-lg text-gray-300">
          <span className="font-semibold text-yellow-400">Contact Sales:</span>{" "}
          Our sales team is here to help you find the right solutions — so you
          can grow your business, increase efficiency, and deliver the future.
          Submit the form below to get started.
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="max-w-3xl mx-auto bg-gray-900 p-8 rounded-xl shadow-lg space-y-6"
      >
        <div>
          <label className="block mb-2 text-sm text-gray-400">Your Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
            required
          />
        </div>
        <div>
          <label className="block mb-2 text-sm text-gray-400">Your Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
            required
          />
        </div>
        <div>
          <label className="block mb-2 text-sm text-gray-400">Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your message"
            rows="5"
            className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-yellow-50 text-gray-900 font-semibold px-6 py-3 rounded-lg hover:bg-yellow-300 transition duration-300"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
