import React from "react";

const Hero = ({ onClick }) => {
  return (
    <section className="text-center py-20 bg-gradient-to-br from-indigo-900 to-black text-white">
      <h1 className="text-4xl md:text-6xl font-bold mb-6">
        Track Real-Time Crypto Prices
      </h1>
      <p className="text-gray-400 mb-8 max-w-xl mx-auto">
        Stay updated with the latest prices of your favorite cryptocurrencies!
      </p>
      <button
        onClick={onClick}
        className="bg-green-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-600 transition"
      >
        Show Prices
      </button>
    </section>
  );
};

export default Hero;
