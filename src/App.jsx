import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

import Home from "./Pages/Home";
import Cars from "./Pages/Cars";
import Contact from "./Pages/Contact";

export default function App() {
  return (
    <section id="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cars" element={<Cars />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </section>
  );
}