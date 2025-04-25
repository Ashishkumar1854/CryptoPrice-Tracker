import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-tr from-slate-900 to-slate-800 text-slate-300 py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Company Description */}
        <div className="md:col-span-2">
          <h3 className="text-2xl font-bold text-cyan-400 mb-4">XivTech</h3>
          <p className="leading-relaxed text-slate-400">
            By leveraging our full spectrum strategy, design, and technology
            capabilities, we deliver game-changing outcomes for our clients
            around the world.
          </p>
        </div>

        {/* Locations */}
        <div>
          <h4 className="text-xl font-semibold text-white mb-3">Locations</h4>
          <ul className="space-y-2 text-slate-400">
            <li>🌍 Toronto</li>
            <li>🇮🇳 New Delhi</li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-xl font-semibold text-white mb-3">Services</h4>
          <ul className="space-y-2 text-slate-400">
            <li>🤖 Complete AI + RPA Automation</li>
            <li>☁️ Cloud Services</li>
            <li>🚀 Delivery Pipeline Automation</li>
            <li>⚙️ Simplify Cloud Ops</li>
            <li>📱 Build Better Apps</li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-700 mt-12 pt-6 flex flex-col md:flex-row items-center justify-between text-sm text-slate-500">
        <p>&copy; {new Date().getFullYear()} XivTech. All rights reserved.</p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a href="/about" className="hover:text-cyan-400 transition">
            About
          </a>
          <a href="/careers" className="hover:text-cyan-400 transition">
            Careers
          </a>
          <a href="/contact" className="hover:text-cyan-400 transition">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
