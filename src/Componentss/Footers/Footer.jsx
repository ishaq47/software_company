import React from "react";
import "./footer.css";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { GrTwitter } from "react-icons/gr";
import { SiUpwork } from "react-icons/si";
import { IoLogoYoutube } from "react-icons/io";
import { FaTiktok } from "react-icons/fa";
import Fade from "react-reveal/Fade";
import logofot from "../../image/techlogo.png";
import { ImLocation2 } from "react-icons/im";
import mentoga from "../../image/mentogaa.png";
import { MdOutlineEmail } from "react-icons/md";
import { BsWhatsapp } from "react-icons/bs";
import { NavLink } from "react-router-dom";
const Footers = () => {
  return (
    <>
      <Fade bottom duration={2000}>
        <footer className="footer-39201 bg-primary text-white mt-5 pb-3">
          <div className="container pt-5">
            <div className="row">
              <div className="col-md-4">
                <NavLink to="/">
                  <img src={logofot} className="logofot" />
                </NavLink>
                <p className="">
                  We have been providing quality services since 2001. We provide
                  our clients with complete end-to-end solutions. We offer
                  customized solutions according to their needs.
                </p>
              </div>
              <div className="col-md-3 mb-4 mb-md-0">
                <h4>Useful Links</h4>
                <ul className="list-unstyled nav-links  ">
                  <NavLink to="/">
                    <li>
                      <a style={{ color: "white" }}>Home</a>
                    </li>
                  </NavLink>
                  <NavLink to="/about">
                    <li>
                      <a style={{ color: "white" }}>About</a>
                    </li>
                  </NavLink>
                  <NavLink to="/services">
                    <li>
                      <a style={{ color: "white" }}>Our Services</a>
                    </li>
                  </NavLink>
                  <NavLink to="/contact">
                    <li>
                      <a style={{ color: "white" }}>Contact</a>
                    </li>
                  </NavLink>
                  <NavLink to="/blog">
                    <li>
                      <a style={{ color: "white" }}>Blog</a>
                    </li>
                  </NavLink>
                </ul>
              </div>
              <div className="col-md-4 mb-md-0  contect-div">
                <div className="col mb-4 mb-md-0 abs">
                  <div className="col ">
                    <h4 className="mb-4">CONTACT</h4>
                    <div className="d-flex">
                      <div className="mt-1 loc">
                        {/* <div style={{background:"#e56700", padding:"7px",  borderRadius:"50%"}}> */}
                        <ImLocation2 className="w-6 h-6 hover:text-yellow-600" />
                        {/* </div> */}
                      </div>

                      <div style={{ marginLeft: "10px" }}>
                        <a
                          href="https://goo.gl/maps/9jGNEgeX2fomX5CMA"
                          target="_blank"
                          style={{ color: "white" }}
                        >
                          TechCreator Private Limited near Muneer Hospital,
                          Mardan Road Swabi.
                        </a>
                      </div>
                    </div>

                    <div className="d-flex">
                      {/* <div style={{background:"#e56700", padding:"7px",  borderRadius:"50%"}}> */}
                      <MdOutlineEmail className="w-6 h-6 self-center   hover:text-yellow-600" />
                      {/* </div> */}
                      &nbsp; &nbsp;
                      <div className="pt-1">
                        <a
                          href="mailto:saudkhanbpk@gmail.com"
                          className="text-white"
                        >
                          contact@techcreator.co
                        </a>
                      </div>
                    </div>

                    <div className="d-flex pt-2">
                      {/* <div style={{background:"#e56700", padding:"7px",  borderRadius:"50%"}}> */}
                      <BsWhatsapp className="w-6 h-6 self-center  hover:text-yellow-600" />
                      {/* </div> */}
                      &nbsp; &nbsp;
                      <div className="pt-1">
                        <a
                          href="tel:+92-311-9265290"
                          style={{ color: "white" }}
                        >
                          +92-311-9265290
                        </a>
                      </div>
                    </div>
                    <div className="mt-2 flex flex-col gap-2  ">
                      <div>
                      <h5> Reach out to us on MENTOGA for consultation </h5>
                      <div className="flex gap-2  items-center">
                      <a href="https://mentoga.com/saudkhan" target="_blank">
                       <button className=" text-blue-500 bg-white p-2 rounded-full animate-pulse w-full">MENTOGA</button>
                      </a>
                      
                      <NavLink to="/caleneder"
                      className="relative">
                        <button className=" text-blue-500 bg-white p-2 rounded-full animate-pulse w-full  ">
                          {" "}
                          MAKE APPOINTMENT{" "}
                        </button>
                        
                      </NavLink>
                      </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <hr
                style={{ border: "1px solid", color: "#fff" }}
                className="mt-3"
              />
            </div>
            <div>
              <div className="col-md-11 col-sm-12  text-center d-md-flex justify-content-between">
                <p>&copy; 2023 TechCreator. All rights reserved.</p>
                <div className="social-icons">
                  <a
                    href="https://www.facebook.com/techcreatorfb/"
                    className="p-2"
                    target="_blank"
                  >
                    <FaFacebook className="conicon" />
                  </a>
                  <a
                    href="https://linkedin.com/company/techcreator"
                    className="p-2"
                    target="_blank"
                  >
                    <FaLinkedinIn className="conicon" />
                  </a>
                  <a
                    href="https://www.upwork.com/ag/brainspk"
                    className="p-2"
                    target="_blank"
                  >
                    <SiUpwork className="conicon" />
                  </a>
                  <a
                    href="https://instagram.com/techcreatorco"
                    className="p-2"
                    target="_blank"
                  >
                    <FaInstagram className="conicon " />
                  </a>
                  <a
                    href="https://twitter.com/techcreatorco"
                    className="p-2"
                    target="_blank"
                  >
                    <GrTwitter className="conicon " />
                  </a>
                  <a
                    href="https://www.youtube.com/@techcreator9512"
                    className="p-2"
                    target="_blank"
                  >
                    <IoLogoYoutube className="conicon " />
                  </a>
                  <a
                    href="https://twitter.com/techcreatorco"
                    className="p-2"
                    target="_blank"
                  >
                    <FaTiktok className="conicon " />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </Fade>
    </>
  );
};

export default Footers;
