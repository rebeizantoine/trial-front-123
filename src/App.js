import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";

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
import Signupjob1 from "./Components/Signupjob";
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
import Jobdescriptiontrial from "./Components/Jobdescriptiontrial";
import Jobdescriptionedit from "./Components/Jobdescriptionedit";
import UpdateFeatured from "./Components/updatefeatured";
import Termsofuse from "./Components/termsofuse";
import Updateterms from "./Components/updateterms";
import Contact1 from "./Components/cotactus";
import JobPostForm from "./Components/Jobpostform";
import CategorySingle from "./Components/categorySingle";
import Singlejobdescription from "./Components/singlejobdescription";

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
          <Route path="/signup" element={<Signupjob1 />} />
          <Route path="/login" element={<Loginjobb />} />
          <Route path="/loginemp" element={<Loginemp />} />
          <Route path="/signupemp" element={<Signupemp />} />

          <Route path="/jobseekerpp/:usernamejobseek" element={<Jobseekpp />} />
          <Route
            path="/employerpp/:usernameEmployer"
            element={<Employerpp />}
          />
          <Route path="/employerpp" element={<Employerpp />} />
          <Route path="/jobdescription" element={<Jobdescription />} />
          <Route
            path="/jobdescriptiontrial/:usernameEmployer"
            element={<Jobdescriptiontrial />}
          />
          <Route
            path="/jobdescriptiontrial"
            element={<Jobdescriptiontrial />}
          />
          <Route
            path="/jobdescriptiontrialedit"
            element={<Jobdescriptionedit />}
          />

          <Route path="/category" element={<Category />} />
          <Route path="/category/:categoryName" element={<CategorySingle />} />
          <Route path="/admindash" element={<Admindash />} />
          <Route path="/employerdash" element={<Employerdash />} />
          <Route path="/jobseekdash" element={<Jobseekdash />} />
          <Route path="/removejob" element={<Removejob />} />
          <Route path="/updatefeatured" element={<UpdateFeatured />} />
          <Route path="/cv" element={<Cv />} />
          <Route path="/termsofuse" element={<Termsofuse />} />
          <Route path="/updateterms" element={<Updateterms />} />
          <Route path="/jobpost/:usernameEmployer" element={<JobPostForm />} />
          <Route
            path="/singlejobdescription/jobdescription/:jobId"
            element={<Singlejobdescription />}
          />

          <Route
            path="/contact"
            element={
              <>
                <Contact1 />
              </>
            }
          />
          <Route
            path="/contact"
            element={
              <>
                <Contact1 />
              </>
            }
          />

          {/* <Route path="/testimonials" element={<Testimonials testimonialData={data} />} /> */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
