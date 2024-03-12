import img1 from "../../image/bgs.png";
import imgsoft from "../../image/img1.webp";
import img3 from "../../image/repair1.png";
import img4 from "../../image/img4.webp";
import img6 from "../../image/petron1.png";
import img8 from "../../image/img8.webp";
import img9 from "../../image/img9.webp";
import img10 from "../../image/img10.webp";
import repairimg from "../../image/repaircms.jpeg";
import patronimg from "../../image/petron.png";
import "./home.css";
import { Helmet } from "react-helmet";
import Marquee from "react-fast-marquee";
import imgs2 from "../../image/Patronlogo.png";
import imgs3 from "../../image/logo-white.png";
import imgs5 from "../../image/BelgiumImmo.png";
import imgs7 from "../../image/twitter.png";
import { useNavigate } from "react-router-dom";
import Fade from "react-reveal/Fade";
import ss from "../../image/ss.jpg"

import first from "../../image/Screenshot 2024-03-04 at 10.37.59 PM (1).png"
import second from "../../image/Screenshot 2024-03-04 at 10.38.13 PM.png"
import third from "../../image/Screenshot 2024-03-04 at 10.38.27 PM.png"
import fourth from "../../image/Screenshot 2024-03-04 at 10.38.53 PM.png"
import Slider from "react-slick";
// const boxInfo = [
//   {
//     img: cardimg3,
//     para: "TechCreator's innovative software solutions have helped us streamline our operations and improve our customer service.",
//     link: "Zafar",
//     span: " CEO",
//   },
//   {
//     img: cardimg2,
//     para: "We were hesitant to switch to a new POS system, but we are so glad we chose Techcreator.",
//     link: "Norman moore",
//     span: "CTO",
//   },
// ];

const Home = () => {
  const navigate = useNavigate();
  let seetings = {

    Infinite: true,
    speed: 500,
    slidesToShow: 2,
    slideToScroll: 1,
    autoplay: true, // Add autoplay option
    autoplaySpeed: 5000, // Set autoplay speed to 10 seconds (10000 milliseconds)
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
          dots: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
  };

  return (
    <>
      <Helmet>
        <title data-react-helmet="true">Techcreator Software Company</title>
        <meta
          name="description"
          content="TechCreator is a leading technology software company that specializes in custom software development for businesses worldwide. Contact us today to learn more"
          data-rh="true"
        />
        <meta
          name="keywords"
          content=" TechCreator, TechCreator Software House, technology software company, TechCreator software company, TechCreator Software Development Company, TechCreator's innovative software solutions , software development, technology solutions"
        />
        <meta name="robots" content="index,follow"></meta>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
        <link rel="canonical" href="/" />
      </Helmet>
      <section
        id="header"
        className="d-flex align-items-center homeimg text-white "
      >
        <div className="container-fluid">
          <div className="row ">
            <div className="col-12 col-md-10 mx-auto home-main">
              <div className="container1">
                <Fade left duration={1000}>
                  <div className="min-head col-lg-12 col-m  d-10 col-sm-12 pt-5 pt-lg-0 d-flex justify-content-center flex-column text-center mt-[-80px] md:mt-0">
                    <p className=" text-3xl md:text-6xl maintext   col-lg-8 align-center mx-auto">
                      We <span className="text-textColor">Automate</span> Your
                      Business With
                      <span className="text-textColor">
                        {" "}
                        Software Solutions
                      </span>
                    </p>
                    <p className="pt-3 text-xl col-lg-10 self-center mx-3 md:mx-0 ">
                      At TechCreator, We Don't Just Understand Business - We
                      Anticipate its Needs. Our Mission is to Empower Your
                      Growth Journey With Cutting-Edge Automation Solutions.
                    </p>
                    <div className="mt-3 col-sm-6 d-flex col-lg-12 justify-content-center items-center self-center">
                      <button
                        className="btn btn-con1"
                        onClick={() => navigate("/contact")}
                      >
                        AUTOMATE YOUR BUSINESS
                      </button>
                    </div>
                  </div>
                </Fade>

                <div className="col-12 col-lg-8 lg:h-[400px] mx-auto col-md-12 col-sm-12  mb-5 animation">
                  <img
                    src={img1}
                    style={{ boxShadow: "2px 2px 20px #8c40d4" }}
                    className="img-fluid "
                    alt="TechCreator software company"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="header2"
        className="d-flex align-items-center mt-5  text-dark"
      >
        <div className="container-fluid nav_bg">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <Fade left duration={2000}>
                  <div className="col-lg-7 col-md-12 col-sm-12 soft-img">
                    <img src={imgsoft} alt="TechCreator software company" />
                  </div>
                </Fade>
                <Fade bottom delay={2000} duration={3000}>
                  <div className="col-lg-5 col-md-12 col-sm-12 hero-dev  d-flex justify-content-center flex-column">
                    <h2 className="mt-3 Develop">
                      Our Comprehensive Software Solutions
                    </h2>
                    <p className="pt-3 para1">
                      At TechCreator Software House, we believe that client
                      satisfaction is key to our success, and we are committed
                      to providing exceptional customer service at every stage
                      of the{" "}
                      <a href="https://en.wikipedia.org/wiki/Software_development_process">
                        software development process
                      </a>{" "}
                      . Our team works closely with clients to ensure that their
                      vision is realized, and their software
                      solution is a success.
                    </p>
                  </div>
                </Fade>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="header2"
        className="d-flex align-items-center  mt-5  text-dark"
      >
        <div className="container-fluid bg-light">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row abs">
                <Fade bottom delay={500} duration={1000}>
                  <div className="col-lg-7 col-md-12 col-sm-12 pt-5 pt-lg-0  d-flex  flex-column justify-center fade__bottom">
                    <h2 className="Develop row">
                      Innovative Software Solutions
                    </h2>
                    <p className=" Over  para1">
                      TechCreator is a technology software company that
                      specializes in developing custom software solutions to
                      help businesses of all sizes achieve their goals.{" "}
                      <a href="https://techcreator.co/about">Our team </a>
                      of experienced developers, designers, and project managers
                      work closely with clients to understand their business
                      needs and develop software solutions that streamline
                      operations, increase efficiency, and drive growth.
                    </p>
                  </div>
                </Fade>
                <div className="col-lg-5 col-md-12 col-sm-12  header-img mb-5">
                  <Fade right duration={1000}>
                    {/* <div className="img11"></div> */}
                    <div className="img8">
                      <img
                        src={img8}
                        className="img-fluid"
                        alt="Techcreator Software Company"
                      />
                    </div>
                    <div className="img3">
                      <img
                        src={img6}
                        className="img-fluid img3 my-img"
                        alt="TechCreator Software Development Company"
                      />
                    </div>
                    <div className="img4 ">
                      <img
                        src={img4}
                        className="img-fluid img4"
                        alt="TechCreator"
                      />
                    </div>
                  </Fade>
                </div>
              </div>
            </div>
          </div>

          <div className="row ">
            <div className="col-10 mx-auto mt-5">
              <div className="row">
                <div className="col-lg-5 col-md-12 col-sm-12 pt-5 header-img">
                  <Fade left duration={1000}>
                    <div className="img12"></div>
                    <div className="img9">
                      <img
                        src={img9}
                        alt="Techcreator Software Company"
                        className="img-fluid"
                      />
                    </div>
                    <div className="img6">
                      <img
                        src={img6}
                        className="img-fluid my-img"
                        alt="TechCreator Software Development Company"
                      />
                    </div>
                    <div className="img10">
                      <img
                        src={img10}
                        className="img-fluid"
                        alt="Techcreator Software Company"
                      />
                    </div>
                  </Fade>
                </div>
                <Fade bottom delay={500} duration={1000}>
                  <div className="col-lg-7 col-md-12 col-sm-12 pt-5 pt-lg-0  d-flex  justify-center  flex-column">
                    <h2 className=" Develop">
                      Software Products Discovery
                    </h2>
                    <p className=" Over para1">
                      We understand that every project is unique, and we work
                      closely with our clients to ensure that their software
                      products are tailored to meet their specific business
                      needs. Whether you need a web application, a mobile app,
                      or a custom software solution to automate your business
                      processes,<b>TechCreator software company</b> has the
                      expertise and experience to help you achieve your goals.
                    </p>
                  </div>
                </Fade>
              </div>
            </div>
          </div>

          <div className="row mt-5">
            <div className="col-10 mx-auto mt-5">
              <div className="row abs">
                <Fade bottom delay={500} duration={1000}>
                  <div className="col-lg-7 col-md-12 col-sm-12 pt-5 pt-lg-0  d-flex justify-content-center flex-column">
                    <h2 className=" Develop">Talent Augmentation</h2>
                    <p className=" Over para1">
                      TechCreator Software Development Company understands that
                      businesses need a strong and reliable software development
                      team to stay ahead of the competition. But finding and
                      retaining the right talent can be challenging. That's
                      where our talent augmentation services come in, helping
                      businesses augment their teams with top talent to achieve
                      their software development goals.
                    </p>
                  </div>
                </Fade>
                <div className="col-lg-5 col-md-12 col-sm-12  header-img">
                  <Fade right duration={2000}>
                    <div className="img11"></div>
                    <div className="img8">
                      <img
                        src={img8}
                        className="img-fluid"
                        alt="TechCreator Software House"
                      />
                    </div>
                    <div className="img3">
                      <img
                        src={img3}
                        className="img-fluid img3 my-img"
                        alt=" TechCreator software company"
                      />
                    </div>
                    <div className="img4">
                      <img
                        src={img4}
                        className="img-fluid img4"
                        alt="TechCreator Software Development Company"
                      />
                    </div>
                  </Fade>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-10 mx-auto mt-5">
              <a class="cmp-btn" onClick={() => navigate("/services")}>
                Views all services{" "}
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 20 20"
                  class="cmp-btn__icon"
                  height="1.3em"
                  width="1.3em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </a>
            </div>
          </div>

          <div className="row mt-5 backgimg text-white  rounded">
            <Fade bottom duration={1000}>
              <div className="col-10 mx-6 md:mx-auto mb-5  ">

                <div className="md:flex  gap-3  mt-4  ">
                  <div className=" md:w-[50%] bg-white text-black p-3 mt-4">
                    <div className="">
                      <div className="">
                        <img
                          src={repairimg}
                          className=""
                          alt="TechCreator Software House"
                        />
                      </div>
                    </div>
                    <div className="">
                      <p className="text-gray-400 text-xl mt-3">Repaircms</p>
                      <p className="lead text-gray-400 ">
                        TechCreator created a platform that led Repaircms to its
                        digital transformation process
                      </p>
                      <p className=" lead">
                        TechCreator's innovative software solutions have helped us
                        streamline our operations and improve our
                        customer service.
                      </p>
                    </div>

                  </div>
                  <div className="bg-white text-black md:w-[50%] p-3 mt-4">
                    <div >
                      <div className="">
                        <img
                          src={patronimg}
                          className=""
                          alt="TechCreator Software House"
                        />
                      </div>
                    </div>
                    <div >
                      <p className="text-gray-400 text-xl mt-3">PatronWorks</p>
                      <p className=" text-2xl text-gray-400 text-start ">
                        Point of sale system for retail businesses
                      </p>
                      <p className="lead ">
                        We were hesitant to switch to a new{" "}
                        <a href="https://patronworks.com/">POS system</a>, but we
                        are so glad we choose Techcreator.
                      </p>
                    </div>

                  </div>
                </div>
                <h2 className=" text-center here">
                  Here are our services in action
                </h2>
                <h3 className="mt-2 text-center take">
                  Take a look at some of what we do.
                </h3>
                <a
                  className="cmp-btn2 mt-5  cursor-pointer"
                  onClick={() => navigate("/services")}
                >
                  View all our work{" "}
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 20 20"
                    class="cmp-btn__icon"
                    height="1.3em"
                    width="1.3em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </a>
              </div>
            </Fade>
          </div>

          <div className="row text-white  rounded">
            <Fade bottom delay={500} duration={1000}>
              <div className="col-10 mx-auto">

              </div>
            </Fade>
          </div>
        </div>
      </section>

      <Fade bottom duration={1000}>
        <div className="col-md-12 clint-div text-center pt-5 my-5">
          <h2>CLIENT TESTIMONIALS</h2>
          <h3>What they say about us</h3>
        </div>
      </Fade>

      <section className="card-img">
        <div className="container py-5 ">
          <div className="flex  flex-wrap gap-1 justify-center  items-center p-5">
            <Slider {...seetings} className="w-[310px]  sm:w-full  md:w-[1150px] ">

              <img className="object-cover" src={first} />
              <img className="object-cover" src={third} />
              <img className="object-cover" src={second} />
              <img className="object-cover" src={ss} />
              <img className="object-cover" src={fourth} />

            </Slider>
            {/* <img  className="object-cover md:w-[550px] " src={first}/>
            <img  className="object-cover md:w-[550px] " src={third}/>
            <img  className="object-cover md:w-[550px] " src={second}/> */}

          </div>
          <div className="row flex justify-center">
            {/* {boxInfo.map((item) => {
              return (
                <Fade bottom duration={1000}>
                  <div className="col-md-6  col-lg-4 py-5">
                    <div className="box p-3 bg-white text-dark">
                      <img src={item.img} className=" img-div pt-2" />
                      <img
                        src={image4}
                        alt="Techcreator Software Company"
                        className="img-quote self-start top-11 relative"
                      />
                      <p className="">{item.para}</p>
                      <a>
                        {" "}
                        <img
                          src={image4}
                          alt="TechCreator Software House"
                          className="img-quote relative bottom-10 left-20"
                        />{" "}
                        {item.link}
                      </a>
                      <span>{item.span}</span>
                    </div>
                  </div>
                </Fade>
              );
            })} */}

            {/* start count jsx */}
            <div className="row">
              <Fade bottom duration={2000}>
                <div className=" d-md-flex col-10 mx-auto">
                  <div className="col-md-4 col-sm-12 count">
                    <p>
                      +<span>50</span>
                      <span className="my-span">CLIENTS</span>{" "}
                    </p>
                  </div>

                  <div className="col-md-4 col-sm-12 count">
                    <p>
                      +<span>10</span>
                      <span className="my-span">COUNTRIES</span>{" "}
                    </p>
                  </div>

                  <div className="col-md-4 col-sm-12 count">
                    <p>
                      +<span>100</span>
                      <span className="my-span">PRODUCTS</span>{" "}
                    </p>
                  </div>
                </div>
              </Fade>
            </div>
            <div className="row">
              <Fade bottom duration={1000}>
                <Marquee gradient={false} speed={40} className="pt-5 marque">
                  <div className="col img-wrapper">
                    <img src={imgs2} alt="TechCreator" />
                  </div>
                  <div className="col img-wrapper">
                    <img src={imgs3} alt="TechCreator" />
                  </div>

                  <div className="col img-wrapper">
                    <img src={imgs5} alt="TechCreator" />
                  </div>

                  <div className="col img-wrapper">
                    <img src={imgs7} alt="technology software company" />
                  </div>
                </Marquee>
              </Fade>
            </div>
          </div>
          {/* count jsx end */}
        </div>
      </section>

      <div className="container-fluid mains">
        <div className="row">
          <Fade bottom duration={1000}>
            <div className="col-10 mx-auto ">
              <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12  pt-lg-0  proj-header ">
                  {/* <p>
                    Ready to tell TechCreator about{" "}
                    <span className="bold">your project?</span>
                  </p> */}
                  <h2>Ready to tell TechCreator about your project?</h2>
                </div>
                <p>
                  Are you a TechCreator looking to develop your next big
                  project? Whether you're an experienced developer or just
                  starting out, we're here to help bring your ideas to life. At
                  our development company, we specialize in creating innovative
                  solutions for our clients across a variety of industries. From
                  mobile apps to web applications, we have the expertise to
                  build high-quality software that meets your needs and exceeds
                  your expectations.
                </p>

                <div className="pro-main col-lg-6 col-md-12 col-sm-12  d-md-flex  justify-content-end">
                  <button
                    className="proj-btn"
                    onClick={() => navigate("/contact")}
                  >
                    Contact Us
                  </button>
                </div>
              </div>
            </div>
          </Fade>
        </div>
      </div>



    </>
  );
};
export default Home;
