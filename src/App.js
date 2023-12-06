import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Analytics from "./components/Analytics";
import Newsletter from "./components/Newsletter";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import BuyLendPage from "./components/BuyLendPage"; // Import your BuyLendPage component

function App() {
  return (
      <Router>
        <div>
          <NavBar />
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <Analytics />
                <Newsletter />
                <Cards />
              </>
            } />
            <Route path="/weather" element={
              <>
              </>
            } />
            <Route path="/dashboard" element={
              <>
              </>
            } />
            <Route path="/about" element={
              <>
              </>
            } />
            <Route path="/buy-lend" element={
              <>
                <BuyLendPage />
              </>
            } />
          </Routes>
          <Footer />
        </div>
      </Router>
  );
}

export default App;
