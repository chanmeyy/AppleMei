import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home/Home";
import Mac from "./pages/Mac/Mac";
import Iphone from "./pages/Iphone/Iphone";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mac" element={<Mac />} />
        <Route path="/iphone" element={<Iphone />} />
      </Routes>
      <Footer />
    </div>
  );
}
