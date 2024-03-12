import React from "react";
import "./footer.css";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { GrTwitter } from "react-icons/gr";
import { SiUpwork } from "react-icons/si";
import { IoLogoYoutube } from "react-icons/io";
import Fade from "react-reveal/Fade";
import logofot from "../../image/logol.png";
import { ImLocation2 } from "react-icons/im";
import { MdOutlineEmail } from "react-icons/md";
import { BsWhatsapp } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import Us from "../../image/unitedstate.png"
const Footers = () => {
  return (
    <>
      <Fade bottom duration={2000}>
        <footer className="footer-39201 bg-black text-white mt-5 pb-3">
          <div className="container pt-5">
            <div className="row">
              <div className="col-md-4">
                <NavLink
                  to="/"
                  className="logo flex relative bottom-5 xs:bottom-3 "
                >
                  <img src={logofot} alt="logo" />
                  <span className="hover:text-violet-600 cursor-pointer lh-1 self-center logop  ">
                    TECH
                    <br />
                    CREATOR
                  </span>
                </NavLink>
                <p className="">
                  We have been providing quality services since 2001. We provide
                  our clients with complete end-to-end solutions. We offer
                  customized solutions according to their needs.
                </p>
              </div>
              <div className="col-md-3 mb-4 mb-md-0">
                <h4 className="hover:text-violet-600">Useful Links</h4>
                <ul className="list-unstyled nav-links">
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
                    <h4 className="mb-4 hover:text-violet-600">CONTACT</h4>
                    <div className="d-flex">
                      <div className="mt-1 loc">
                        {/* <div style={{background:"#e56700", padding:"7px",  borderRadius:"50%"}}> */}
                        <ImLocation2 className="w-6 h-6 hover:text-violet-600" />
                        {/* </div> */}
                      </div>

                      <div className="location" style={{ marginLeft: "10px" }}>
                        <a className="a"
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
                      <MdOutlineEmail className="w-6 h-6 self-center   hover:text-violet-600" />
                      {/* </div> */}
                      &nbsp; &nbsp;
                      <div className="pt-1 location">
                        <a
                          href="mailto:contact@techcreator.co"
                          className="text-white "
                        >
                          contact@techcreator.co
                        </a>
                      </div>
                    </div>

                    <div className="d-flex pt-2">
                      {/* <div style={{background:"#e56700", padding:"7px",  borderRadius:"50%"}}> */}
                      <BsWhatsapp className="w-6 h-6 self-center  hover:text-violet-600" />
                      {/* </div> */}
                      &nbsp; &nbsp;
                      <div className="pt-1 location">
                        <a

                          href="tel:+92-311-9265290"
                          style={{ color: "white" }}
                        >
                          +92-311-9265290
                        </a>
                      </div>
                    </div>
                    <div className="d-flex pt-2">
                      {/* <div style={{background:"#e56700", padding:"7px",  borderRadius:"50%"}}> */}
                      {/* <BsWhatsapp className="w-6 h-6 self-center  hover:text-violet-600" /> */}
                      <img width={40} className="rounded self-center h-[25px]" src={Us}/>
                      {/* </div> */}
                      &nbsp; &nbsp;
                      <div className="pt-1 location ">
                
                        <a href="tel:+1-321-407-3272" style={{ color: "white" }}>
                          +1-321-407-3272
                        </a>
                      </div>
                    </div>
                    <div className="mt-3 flex flex-col gap-2  ">
                      <div >
                        <div className="flex gap-3  items-center">
                          <a
                            href="https://mentoga.com/saudkhan"
                            target="_blank"
                          >
                            <button className="cbtn text-white  bg-violet-600 hover:bg-violet-500 px-4 py-2 rounded-full  ">
                              CONSULTANCY
                            </button>
                          </a>

                          <NavLink to="/caleneder" className="relative">
                            <button className="cbtn text-white bg-violet-600 hover:bg-violet-500 py-2 px-3 rounded-full   ">
                              {" "}
                              APPOINTMENT{" "}
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
                <p>&copy; 2024 TechCreator. All rights reserved.</p>
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
                    href="https://www.upwork.com/agencies/techcreator/"
                    className="p-2"
                    target="_blank"
                  >
                    <SiUpwork className="conicon" />
                  </a>
                  <a
                    href="https://www.instagram.com/techcreatorco/"
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
