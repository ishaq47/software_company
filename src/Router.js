import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TopNav from "./Navbar/TopNav";
import Home from "./Componentss/Home/Home";
import About from "./Componentss/About/About";
import Services from "./Componentss/Our Services/Services";
import Contact from "./Componentss/Contacts/Contact";
import Scrolltoup from "./Componentss/Scrool/Scrool";
import Blog from "./Componentss/Blog/Blog";
import Portfolio from "./Componentss/Portfolio/portfolio";
import useFetch from "../src/hooks/useFetcgh";
import Post from "./Componentss/Post/Post";
import Caleneder from "./Caleneder";
import Socialicon from "./Componentss/Socialicon";
import Meeting from "./Componentss/Meeting";
import {  ThreeDots } from "react-loader-spinner";
import Pricing from "./Componentss/Pricing/Pricing";
import Career from "./Componentss/Careers/Career";
import Footers from "./Componentss/Footers/Footer";

const RouterPage = () => {


  let { loading } = useFetch(
    `${process.env.REACT_APP_STRAPI_URL}/api/blogs?populate=*`
  );
  if (loading) return <div className="flex justify-center h-screen items-center"><ThreeDots
  visible={true}
  height="80"
  width="80"
  color="blue"
  radius="9"
  ariaLabel="three-dots-loading"
  wrapperStyle={{}}
  wrapperClass=""
  />
    </div>
  return (
    <BrowserRouter>
      <Scrolltoup />
      <TopNav />
      <Socialicon/>
      
      {/* Frontity Menu Link */}
      <Routes>
        {/* React Router Routes */}
        <Route path="/" element={<Home />} /> {/* Frontity's Home route */}
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/post/:slug" element={<Post />} />
        <Route path="/caleneder" element={<Caleneder/>} />
        <Route path="/meeting" element={<Meeting />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/pri" element={<Pricing/>} />
        <Route path="/career" element={<Career/>} />

       
      </Routes>
      <Footers/>
    </BrowserRouter>
  );
};

export default RouterPage;
