import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Analytics from "./components/Analytics";
import Newsletter from "./components/Newsletter";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import BorrowPage from "./components/BorrowPage";
import About from "./components/About";
import ProfilePage from "./components/ProfilePage";

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
            <Route path="/about" element={
              <>
                <About />
              </>
            } />
            <Route path="/borrow" element={
              <>
                <BorrowPage />
              </>
            } />
            <Route path="/profile" element={
              <>
                <ProfilePage />
              </>
            } />
          </Routes>
          <Footer />
        </div>
      </Router>
  );
}

export default App;
