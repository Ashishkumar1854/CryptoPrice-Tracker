import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import More from "./pages/More";
import CryptoTable from "./components/CryptoTable"; // If using separately for /tracker
import Footer from "./pages/Footer"; // 🔥 import Footer here

function App() {
  return (
    <Router>
      <div className="bg-gray-900 text-white min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/more" element={<More />} />
          <Route path="/tracker" element={<CryptoTable />} />
        </Routes>
        <Footer /> {/* 🔥 Display footer at the bottom of every page */}
      </div>
    </Router>
  );
}

export default App;
