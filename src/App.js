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
import Loginemp from "./Components/Loginemp";
import Loginjobb from "./Components/Loginjobb";
import Signupjob from "./Components/Signupjob";
import Signupemp from "./Components/Singnupemp";
import NotFound from "./Components/NotFound";
import Jobseekpp from "./Components/Jobseekpp";
import Employerpp from "./Components/Employerpp";
import Jobdescription from "./Components/Jobdescription";
import Category from "./Components/Category";
import Admindash from "./Components/Admindash";
import Employerdash from "./Components/Employerdash";
import Removejob from "./Components/removejob";
import Jobseekdash from "./Components/jobseekdash";
import Cv from "./Components/cv";
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
          <Route path="/signup" element={<Signupjob />} />
          <Route path="/login" element={<Loginjobb />} />
          <Route path="/loginemp" element={<Loginemp />} />
          <Route path="/signupemp" element={<Signupemp />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/jobseekpp" element={<Jobseekpp />} />
          <Route path="/employerpp" element={<Employerpp />} />
          <Route path="/jobdescription" element={<Jobdescription />} />
          <Route path="/category" element={<Category />} />
          <Route path="/admindash" element={<Admindash />} />
          <Route path="/employerdash" element={<Employerdash />} />
          <Route path="/jobseekdash" element={<Jobseekdash />} />
          <Route path="/removejob" element={<Removejob />} />
          <Route path="/cv" element={<Cv />} />

          {/* <Route path="/testimonials" element={<Testimonials testimonialData={data} />} /> */}
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
