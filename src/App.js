import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import Featuredjobs from "./Components/Featuredjobs";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Featuredemployers from "./Components/Featuredemployers";
import Testimonials from "./Components/Testimonials";
import data from "./data.json";
import Footer from "./Components/Footer";
import About from "./Components/About";
import Loginjob from "./Components/loginjob";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Featuredjobs />
                <Featuredemployers />
                <About />
              </>
            }
          />
          <Route path="/login" element={<Loginjob />} />
          {/* <Route path="/testimonials" element={<Testimonials testimonialData={data} />} /> */}
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
