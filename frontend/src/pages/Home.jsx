import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-[80vh] bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white px-6 text-center">
      <h2 className="text-4xl md:text-5xl font-bold mb-4">
        Welcome to <span className="text-green-400">XivTech</span> Crypto
        Tracker
      </h2>
      <p className="text-lg md:text-xl mb-8 max-w-xl">
        Track real-time crypto prices, market caps, and trends – stay ahead in
        the crypto game!
      </p>
      <button
        onClick={() => navigate("/tracker")}
        className="px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg shadow-md transition duration-300"
      >
        🚀 Price Tracker
      </button>
    </div>
  );
};

export default Home;
