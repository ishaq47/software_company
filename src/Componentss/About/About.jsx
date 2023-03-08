import "./about.css";
import React, { useState } from "react";
import img1 from "../../image/img15.webp";
import repairimg from "../../image/repaircms.jpeg";
import patronimg from "../../image/petron.png";
import saloonimg from "../../image/saloon.png";
import imgsen1 from "../../image/saud.webp";
import imgsen2 from "../../image/shehzadshah.webp";
import imgsen3 from "../../image/amir.webp";
import imgsen4 from "../../image/roohullah.webp";
import imgpro1 from "../../image/travcont.webp";
import imgpro2 from "../../image/RiseImage.webp";
import imgpro3 from "../../image/raso.webp";
import imgpro4 from "../../image/Behance.webp";
import imgpro5 from "../../image/AddaImage.webp";
import imgpro6 from "../../image/bubbleImage.webp";
import imgpro7 from "../../image/MusafirImage.webp";
import imgpro8 from "../../image/GratitudeImage.webp";
import imgpro9 from "../../image/traficinfoImage.webp";
import imgpro10 from "../../image/PakfoneImage.webp";
import imgpro11 from "../../image/khpalmart.webp";
import imgpro12 from "../../image/khpalmart.webp";
import imgpro13 from "../../image/petron1.png";
import imgpro14 from "../../image/repair1.png";
import imgpro15 from "../../image/saloon1.png";


import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { GrLinkedinOption } from "react-icons/gr";
import Career from "../Careers/Career";
import Footers from "../Footers/Footer";
import Fade from "react-reveal/Fade";
import { useNavigate } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";




import { EffectCoverflow, Pagination, Navigation } from "swiper";
import { Helmet } from "react-helmet";
import Ourteam from "./Ourteam";

const About = () => {
  
  const navigate = useNavigate();
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const Array = [
    {
      img: imgsen1,
      title: "CEO",
      name: "Saud Khan",
      link: "https://www.linkedin.com/in/saudkhan0039/",
    },
    {
      img: imgsen3,
      title: "MG",
      name: "Aamir Shehzad",
      link: "https://pk.linkedin.com/in/aamir-shahzad-77ba95191?trk=public_profile_browsemap",
    },
  ];

  const Senior = [
    {
      img: imgsen1,
      title: "CEO FullStack Developer",
      name: "Saud Khan",
      link: "https://www.linkedin.com/in/saudkhan0039/",
    },
    {
      img: imgsen2,
      title: "Full Stack Developer",
      name: "Shehzad Shah",
    },
    {
      img: imgsen3,
      title: "Founder",
      name: "Aamir Shehzad",
      link: "https://pk.linkedin.com/in/aamir-shahzad-77ba95191?trk=public_profile_browsemap",
    },
    {
      img: imgsen4,
      title: "DevOps/Project Manager",
      name: "Rooh Ullah",
      link: "https://pk.linkedin.com/in/rooh-ullah-bpk?trk=public_profile_browsemap",
    },
  ];

  const projectInfo = [
    {
      img: imgpro1,
      link: "https://www.travcont.com/",
      head: "Travcont",
      para: "Travcont provide complete satisfaction for every traveler. We recognize that good service is more than competitive pricing",
      btn: "Go To Website",
    },
    {
      img: imgpro2,
      link: "https://risetech.pk/",
      head: "Ristech",
      para: "Modern web design and development using the latest web frameworks for providing the best user experience and the best performance.",
      btn: "Go To Website",
    },
    {
      img: imgpro3,
      link: "https://www.behance.net/gallery/92378157/Rasoya-App?tracking_source=project_owner_other_projects",
      head: "Rasoyia",
      para: "A rasoiya can also be a caterer who provides food for events such as weddings, parties, and corporate meetings.", 
      btn: "Go To Website",
    },
    {
      img: imgpro4,
      link: "https://www.behance.net/gallery/92378157/Rasoya-App?tracking_source=project_owner_other_projects",
      head: "Mobile & Laptop Services",
      para: "This service enables users to make payments and transfer money using their mobile devices.",
      btn: "Go To Website",
    },
    {
      img: imgpro5,
      link: "https://www.upwork.com/o/companies/~010359a829c900bed1/portfolio/project/1484076208918925312",
      head: "Adda Bazar",
      para: " With the rise of e-commerce, some Adda bazar projects have moved online. These platforms connect small businesses and artisans with customers all over the world.",
      btn: "Go To Website",
    },
    {
      img: imgpro6,
      link: "https://www.behance.net/gallery/92465019/Bubbles-Laundry-App?tracking_source=project_owner_other_projects",
      head: "Bubbles Laundry",
      para: "Bubbles Laundry may need to upgrade its laundry facilities to improve the quality of its services and increase efficiency. ",
      btn: "Go To Website",
    },
    {
      img: imgpro7,
      link: "https://www.behance.net/gallery/89606661/Mosafir-App-for-Mobilink-Jazz?tracking_source=project_owner_other_projects",
      head: "Musafir App",
      para: "Musafir App is easy to use for booking both International as well as domestic flights, hotel bookings, holidays & packages booking",
      btn: "Go To Website",
    },
    {
      img: imgpro8,
      link: "https://www.behance.net/gallery/92140709/Gratitude",
      head: "Gratitude-Selfcare",
      para: "During your self-care routine, express gratitude for the opportunity to take care of yourself.",
      btn: "Go To Website",
    },
    {
      img: imgpro9,
      link: "https://traffikinfoo.netlify.app/",
      head: "Traffic Info",
      para: "This refers to a situation where the volume of vehicles on a particular road is higher than usual, causing delays and slow-moving traffic.",
      btn: "Go To Website",
    },
    {
      img: imgpro10,
      link: "https://pakfon.com/",
      head: "Pakfone",
      para: "Pakfones provides you world class mobile repair services, if you're in search of best mobile repair center in Pakistan,",
      btn: "Go To Website",
    },
    {
      img: imgpro12,
      link: "https://khpalmart.com/",
      head: "Khpal Mart",
      para: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..",
      btn: "Go To Website",
    },
    {
      img: imgpro12,
      link: "https://khpalmart.com/",
      head: "Khpal Mart",
      para: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..",
      btn: "Go To Website",
    },
    {
      img: imgpro13,
      link: "http://www.patronworks.net/home",
      head: "Patronworks",
      para: "Patronworks is a complete E-Commerce solution for your Restaurants, ",
      btn: "Go To Website",
    },
    {
      img: imgpro14,
      link: "https://repaircms.com/de/",
      head: "Repaircms",
      para: "The fact that they’ve been with us from the start and were patient, supportive, committed, and flexible is excellent.",
      btn: "Go To Website",
    },
    {
      img: imgpro15,
      link: "https://dancing-vacherin-e90755.netlify.app/",
      head: "Saloon",
      para: "A spot where all your beauty appointments meet",
      btn: "Go To Website",
    },
  ];
  return (
    <>
      <Helmet>
        <title>About - Techcreator Software Company</title>
        <meta
          name="description"
          content="We have been providing quality services since 2001. We provide our clients with complete end-to-end solutions. We offer customized solutions according to their needs."
        />
        <meta
          name="keywords"
          content="techcreator, techcreatorsofwarehouse, sofwarehouse, appsdevelopment, softwareindustry, swabisoftwarehouse, techcreatorabout"
        />
        <link rel="canonical" href="techcreator.co/about" />
      </Helmet>
      <section className="d-flex align-items-center aboutimg text-white">
        <div className="container-fluid ">
          <div
            className="row"
            style={{ marginTop: "15%", marginBottom: "15%" }}
          >
            <Fade left delay={500} duration={3000}>
              <div className="col-10 mx-auto">
                <div className="row">
                  <div className="col-lg-5 col-md-12 col-sm-12 pt-5 pt-lg-0  d-flex justify-content-center flex-column">
                    <h1 className="about">About Us</h1>
                  </div>

                  <div className="col-lg-7 col-md-12 col-sm-12 mb-5">
                    <p className="we-about lead">
                      At TechCreator We specialize in products and services that
                      span over several domains like Software Applications, Data
                      analytics, Embedded Systems and Artificial Intelligence
                      smart solutions with unified goal of realizing the dreams
                      of a better tomorrow through technology.
                    </p>
                  </div>
                </div>
              </div>
            </Fade>
          </div>
        </div>
      </section>

      <section id="header2" className="d-flex align-items-center">
        <div className="container-fluid ">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-lg-5 col-md-12 col-sm-12 pt-5 pt-lg-0  d-flex flex-column ">
                  <img src={img1} className="img1" />
                </div>
                <Fade bottom duration={2000}>
                  <div className="col-lg-7 col-md-12 col-sm-12 mb-5 ">
                    <Carousel
                      activeIndex={index}
                      onSelect={handleSelect}
                      className="slider"
                    >
                      <Carousel.Item className="carouselitem">
                        <h2 className="slidetitle1">
                          WE ARE
                          <br />
                          <br />
                          GEEKS
                        </h2>
                        <p className="slidepara1">
                          We live and breath technology. We keep ourselves
                          updated: try new components, study new languages and
                          collaborating with the open source community.
                        </p>
                      </Carousel.Item>
                      <Carousel.Item className="carouselitem">
                        <h2 className="slidetitle1">
                          WE ARE A
                          <br />
                          <strong>TEAM</strong>
                        </h2>
                        <p className="slidepara1">
                          We focus on integral solutions, exploring various
                          perspectives to solve a problem. Our work is the
                          result of collaborative thinking.
                        </p>
                      </Carousel.Item>
                      <Carousel.Item className="carouselitem">
                        <h2 className="slidetitle1">
                          WE ARE
                          <br />
                          <strong>AGNOSTIC</strong>
                        </h2>
                        <p className="slidepara1">
                          We have experience in multiple technologies and
                          methodologies, which gives us the ability to think on
                          the best approach and tool for each problem.
                        </p>
                      </Carousel.Item>
                    </Carousel>
                  </div>
                </Fade>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* 
            <section id="header3" className="d-flex align-items-center bg-light text-dark">

                <div className="container-fluid ">
                    <div className="row">
                        <div className="col-10 mx-auto">
                            <div className="row">
                                <div className="col-lg-6 col-md-12 col-sm-12 pt-5 pt-lg-0  d-flex justify-content-center flex-column">
                                    <div className='triangleimg1'>
                                        <img src={img2} className="img-fluid" />
                                    </div>
                                    <div className='triangleimg2' >
                                        <img src={img2} className="img-fluid" />
                                    </div>
                                    <div className='triangleimg3' >
                                        <img src={img2} className="img-fluid" />
                                    </div>
                                    <Fade bottom duration={2000}>
                                        <div className='lifetext'>
                                            <p className='style'>LIFESTYLE</p>
                                            <h1 className='our'>Our Culture</h1>
                                            <p className='spite'>In spite of having experienced significant growth we strive to maintain the essence of a small outfit: with open door policies, a relaxed work culture and, first and foremost, an unwavering fidelity for all of our clients, big and small.</p>
                                            <a class="cmp-btn" onClick={() => navigate("/services")}>View all services <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 20 20" class="cmp-btn__icon" height="1.3em" width="1.3em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg></a>
                                        </div>
                                    </Fade>
                                </div>

                                <div className="col-lg-6 col-md-12 col-sm-12 mb-5 mt-5">
                                    <Fade right duration={2000}>
                                        <div className='img4'>
                                            <img src={img4} className="img-fluid" />
                                        </div>
                                    </Fade>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            <section id="header4" className="d-flex align-items-center  ">

                <div className="container-fluid ">
                    <div className="row" style={{ marginTop: "10%", marginBottom: "10%" }}>
                        <Fade bottom duration={2000}>
                            <div className="col-10 mx-auto">

                                <p className='start'>We started out in a garage down south in patagonia. But now...</p>
                                <h3 className='you'>You can find us here</h3>
                            </div>
                        </Fade>
                    </div>
                </div>
            </section>

            <section id="header5" className="d-flex align-items-center">

                <div className="container-fluid ">
                    <div className="row">
                        <Fade bottom duration={2000}>
                            <div className="col-10 mx-auto">
                                <div className="row">
                                    <div className="col-lg-4 col-md-12 col-sm-12 mb-5 mb-lg-0 mt-5 mt-lg-0">
                                        <div className='circle'>
                                            <img src={img5} className="img-fluid" />
                                        </div>
                                        <h3 className='caption'>Argentina</h3>
                                    </div>

                                    <div className="col-lg-4 col-md-12 col-sm-12 ">
                                        <div className='circle'>
                                            <img src={img6} className="img-fluid" />
                                        </div>
                                        <h3 className='caption'>Colombia</h3>
                                    </div>
                                    <div className="col-lg-4 col-md-12 col-sm-12 mb-5 mb-lg-0 mt-5 mt-lg-0">
                                        <div className='circle'>
                                            <img src={img7} className="img-fluid" />
                                        </div>
                                        <h3 className='caption'>USA</h3>
                                    </div>
                                </div>

                            </div>
                        </Fade>
                    </div>
                </div>
            </section> */}

      <section
        id="header3"
        className="d-flex align-items-center bg-light text-dark mt-5"
      >
        <div className="container-fluid ">
          <div className="row">
            <Fade bottom duration={2000}>
              <div className="col-10 mx-auto justify-content-center">
                <div className="board">
                  <h3>Board Of Directors</h3>
                  <p>Meet the guys that are directing our efforts</p>
                </div>

                <Row xs={1} md={4} className="g-4 two-img">
                  {Array.map((item, index) => (
                    <Col key={index}>
                      <Card>
                        <div className="senior-img">
                          <img src={item.img} className="img-fluid" />
                        </div>
                        <Card.Body className="main-cards">
                          <Card.Text className="sen-name">
                            <div className="d-flex flex-column spac-main">
                              <p
                                className="p-0 m-0"
                                style={{ color: "#8a94a5" }}
                              >
                                {" "}
                                {item.title}
                              </p>
                              <p className="p-0 m-0" style={{ color: "#000" }}>
                                {" "}
                                {item.name}
                              </p>
                            </div>
                            <div>
                              <a
                                href={item.link}
                                target="_blank"
                                className="icon"
                              >
                                <GrLinkedinOption />
                              </a>
                            </div>
                          </Card.Text>
                        </Card.Body>
                        {/* <Card.Body className="main-cards">
                          <Card.Title className="sen-title">
                            {item.title}
                          </Card.Title>
                          <Card.Text className="sen-name">
                            {item.name}
                            <a href={item.link} target="_blank">
                              <GrLinkedinOption className="icon" />
                            </a>
                          </Card.Text>
                        </Card.Body> */}
                      </Card>
                    </Col>
                  ))}
                </Row>
              </div>
            </Fade>
          </div>
          {/* <div className="row">
            <Fade bottom duration={2000}>
              <div className="col-10 mx-auto">
                <Carousel
                  activeIndex={index}
                  onSelect={handleSelect}
                  className="slider2"
                >
                  <Carousel.Item className="carouselitem2">
                    <h3 className="slidetitle2">"No risk, no reward"</h3>
                    <p className="slidepara2">Federico</p>
                  </Carousel.Item>
                  <Carousel.Item className="carouselitem2">
                    <h3 className="slidetitle2">
                      "This looks intersting, let's give it a try"
                    </h3>
                    <p className="slidepara2">Rodrigo</p>
                  </Carousel.Item>
                  <Carousel.Item className="carouselitem2">
                    <h3 className="slidetitle2">"Think big!"</h3>
                    <p className="slidepara2">Eugenio</p>
                  </Carousel.Item>
                </Carousel>
              </div>
            </Fade>
          </div> */}

          <div className="row ">
            <Fade bottom duration={2000}>
              <div className="col-10 mx-auto senior-main">
                <div className="Senior">
                  <h3>Senior Management</h3>
                  <p>Where Strategic decisions take place</p>
                </div>

                <Row xs={1} md={4} className="g-4">
                  {Senior.map((item, index) => (
                    <Col key={index}>
                      <Card>
                        <div className="senior-img">
                          <img src={item.img} className="img-fluid" />
                        </div>

                        <Card.Body className="main-cards">
                          <Card.Text className="sen-name">
                            <div className="d-flex flex-column spac-main">
                              <p
                                className="p-0 m-0"
                                style={{ color: "#8a94a5" }}
                              >
                                {item.title}
                              </p>
                              <p className="p-0 m-0" style={{ color: "#000" }}>
                                {item.name}
                              </p>
                            </div>
                            <div>
                              <a
                                href={item.link}
                                target="_blank"
                                className="icon"
                              >
                                <GrLinkedinOption />
                              </a>
                            </div>
                          </Card.Text>
                        </Card.Body>
                      </Card>
                    </Col>
                  ))}
                </Row>
              </div>
            </Fade>
          </div>

          <div></div>

          <Ourteam />

          <div className="row mt-5 backgimg text-white  rounded">
                        <Fade bottom duration={2000}>
                            <div className="col-10 mx-auto mt-5">
                                <h2 className=" text-center here">Here are our services in action</h2>
                                <h3 className="mt-2 text-center take">Take a look at some of what we do.</h3>
                                <a className="cmp-btn2 mt-5" onClick={() => navigate("/services")}>View all our work <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 20 20" class="cmp-btn__icon" height="1.3em" width="1.3em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg></a>
                                <div className="row bg-sam mt-5">
 
                                    <div className="col-lg-7 col-md-12 col-sm-12 pt-5 pt-lg-0  d-flex justify-content-center flex-column">


                                        <p className="petro">Repaircms</p>
                                        <p className="mt-2 Plat">TechCreator created a platform  that led Repaircms to its  digital transformation process</p>
                                        <p className="we lead">The fact that they’ve been with us from the start and were patient, supportive, committed, and flexible is excellent.</p>

                                        {/* <div className="mt-3 mb-5">
                                            <a href="" className="howbtn">SEE HOW WE DID IT <MdKeyboardArrowRight style={{ marginBottom: "5px", width: "1.3em", height: "1.3em" }} /></a>
                                        </div> */}

                                    </div>
                                    <div className="col-lg-5 col-md-12 col-sm-12 header-img">

                                        <div className="img13 mt-3">

                                            <img src={repairimg} className="img-fluid pt-5" alt="img13" />
                                        </div>
                                        {/* <div className="img14">
                                            <img src={img14} className="img-fluid" alt="img14" />

                                        </div> */}


                                    </div>

                                </div>

                            </div>
                        </Fade>
                    </div>


                    <div className="row text-white  rounded">
                        <Fade bottom delay={500} duration={2000}>
                            <div className="col-10 mx-auto mt-5">
                                <div className="row bg-sam mt-5">
                                    <div className="col-lg-7 col-md-12 col-sm-12 pt-5 pt-lg-0  d-flex justify-content-center flex-column">
                                        <p className="petro">PatronWorks</p>
                                        <p className="mt-2 Plat">Point of sale system for retail businesses</p>
                                        <p className="we lead">We were hesitant to switch to a new POS system, but we are so glad we chose Techcreator.</p>
                                        {/* <div className="mb-5">
                                        <a href="" className="howbtn">SEE HOW WE DID IT <MdKeyboardArrowRight style={{ marginBottom: "5px", width: "1.3em", height: "1.3em" }} /></a>
                                    </div> */}
                                    </div>
                                    <div className="col-lg-5 col-md-12 col-sm-12 header-img">

                                        <div className="img13 mt-3">

                                            <img src={patronimg} className="img-fluid pt-5" alt="img13" />
                                        </div>
                                        {/* <div className="img14">
                                              <img src={img14} className="img-fluid" alt="img14" />

                                             </div> */}


                                    </div>
                                </div>
                            </div>
                        </Fade>
                    </div>


                    <div className="row text-white  rounded">
                        <Fade bottom delay={500} duration={2000}>
                            <div className="col-10 mx-auto mt-5">
                                <div className="row bg-sam mt-5">
                                    <div className="col-lg-7 col-md-12 col-sm-12 pt-5 pt-lg-0  d-flex justify-content-center flex-column">
                                        <p className="petro">Sallon</p>
                                        <p className="mt-2 Plat">A spot where all your beauty appointments meet</p>
                                        <p className="we lead">Everyone at TechCreator has been an excellent communicator with no surprises in billing or delivery.</p>
                                        {/* <div className="mb-5">
                                        <a href="" className="howbtn">SEE HOW WE DID IT <MdKeyboardArrowRight style={{ marginBottom: "5px", width: "1.3em", height: "1.3em" }} /></a>
                                    </div> */}
                                    </div>
                                    <div className="col-lg-5 col-md-12 col-sm-12 header-img">

                                        <div className="img13 mt-3">

                                            <img src={saloonimg} className="img-fluid pt-5" alt="img13" />
                                        </div>
                                        {/* <div className="img14">
                                                <img src={img14} className="img-fluid" alt="img14" />

                                              </div> */}


                                    </div>
                                </div>
                            </div>
                        </Fade>
                    </div>
                </div>
            </section>

      <div className="proimg">
        <div className="col">
          <h2 className="pro-mains text-center my-5">Our Projects</h2>
        </div>
        <div className="container d-md-flex">
          <div className="row">
            {projectInfo.map((projectInfo) => {
              return (
                <div className="col-md-4 col-sm-12 cards container">
                  <img src={projectInfo.img} className="" />
                  <div className="cards-body">
                    <h2 className="cards-title">{projectInfo.head}</h2>
                    <p className="cards-info">{projectInfo.para}</p>
                    <a
                      className="cards-btn"
                      target="_blank"
                      href={projectInfo.link}
                    >
                      {projectInfo.btn}
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <Career />
      <Footers />
    </>
  );
};
export default About;
