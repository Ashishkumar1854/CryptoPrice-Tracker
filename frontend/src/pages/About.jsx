import React from "react";

const About = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen py-10 px-6">
      <h2 className="text-4xl font-bold text-center mb-10">About Us</h2>

      <div className="max-w-5xl mx-auto space-y-12 text-lg leading-relaxed">
        <section className="space-y-4">
          <h3 className="text-2xl font-semibold text-teal-400">
            About Crypto Tracker
          </h3>
          <p>
            Welcome to <strong>Crypto Tracker</strong>, your go-to source for
            tracking the latest cryptocurrency prices. Our goal is to provide
            real-time data, detailed charts, and the most accurate information
            possible for cryptocurrency enthusiasts and traders.
          </p>
          <p>
            We aggregate data from various sources so you can be sure that
            you're always getting up-to-date and reliable information. Whether
            you're looking to track the price of Bitcoin, Ethereum, or any
            altcoin, we've got you covered.
          </p>
        </section>

        <section className="space-y-4">
          <h3 className="text-2xl font-semibold text-teal-400">
            About XivTech
          </h3>
          <p>
            <strong>XivTech</strong> is an AI/ML powered RPA automation company
            with a collaborative flagship product offering –
            <span className="text-teal-300 font-semibold"> EKISU</span> that
            helps you automate and streamline your workflows to function
            efficiently.
          </p>
        </section>

        <section className="space-y-4">
          <h3 className="text-2xl font-semibold text-teal-400">Our Vision</h3>
          <p>
            We envision assisting our clients to realize the vision of the
            future through productized RPA automation.
          </p>
        </section>

        <section className="space-y-4">
          <h3 className="text-2xl font-semibold text-teal-400">
            What We Offer
          </h3>
          <p>
            We provide innovative and cost-effective automated digital
            solutions. Our core focus on
            <span className="text-teal-300"> AI/ML + RPA</span>,{" "}
            <strong>Design Thinking</strong>, and{" "}
            <strong>Customer Experience</strong> allows us to lead
            customer-focused innovation, transforming businesses for growth,
            continued success, and leadership.
          </p>
        </section>

        <section className="space-y-4">
          <h3 className="text-2xl font-semibold text-teal-400">
            What It Means For You
          </h3>
          <ul className="list-disc list-inside space-y-1 ml-4">
            <li>Digital transformation for your business to grow</li>
            <li>Boost productivity and champion success</li>
            <li>Future-proof your business</li>
            <li>Resolve multifaceted problems using AI/ML powered RPA</li>
            <li>
              Automate workflows, optimize efficiency, and increase
              profitability
            </li>
            <li>
              Customer-centric delivery, driven by commitment and innovation
            </li>
          </ul>
        </section>

        <section className="space-y-4">
          <h3 className="text-2xl font-semibold text-teal-400">
            Core Values of XivTech
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {[
              "Say it as it is",
              "Focus",
              "Collaborative",
              "Trustworthy",
              "Innovative",
              "Competent",
            ].map((value) => (
              <div
                key={value}
                className="bg-gray-800 text-center py-3 px-4 rounded-xl shadow-md hover:bg-gray-700 transition"
              >
                {value}
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
