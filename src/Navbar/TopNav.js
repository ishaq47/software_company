import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./TopNav.css";
import logo from "../image/logol.png";

const TopNav = () => {
  const menuData = [
    {
      path: "/",
      name: "Home",
    },
    {
      path: "/about",
      name: "About",
    },
    {
      path: "/services",
      name: "Services",
    },
    {
      path: "/pri",
      name: "Pricing",
    },
    {
      path: "/blog",
      name: "Blog",
    },
    {
      path: "/portfolio",
      name: "Portfolio",
    },
    {
      path: "/career",
      name: "Career",
    },
  ];

  const [open, setOpen] = useState(false);

  const handleToggle = () => {
    setOpen(!open);
  };

  const handleNavItemClick = () => {
    setOpen(false);
  };

  return (
    <>
      <Navbar
        expand="lg"
        fixed="top"
        className="main-nav bg-black py-2 "
      >
        <Container>
          <NavLink to="/" className="logo flex ">
            <img src={logo} alt="logo" />
            <span className=" cursor-pointer lh-1 self-center logop ">TECH<br/>CREATOR</span>
          </NavLink>
         
         

          <Navbar.Toggle className="bg-white"   onClick={handleToggle} />

          <Navbar.Collapse  in={open}>
            <Nav className="ms-auto nav1">
              {menuData.map((item) => (
                <NavLink
                  to={item.path}
                  key={item.path}
                  className="nav-item"
                  onClick={handleNavItemClick}
                >
                  <div className="">{item.name}</div>
                </NavLink>
              ))}
            </Nav>

            <Nav className="ms-auto">
              <NavLink
                to="/contact"
                className="btn-nav px-3 py-2 md:py-1"
                onClick={handleNavItemClick}
              >
                CONTACT
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default TopNav;
