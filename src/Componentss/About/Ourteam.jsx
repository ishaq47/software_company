import React from "react";
import "./team.scss";
import Fade from "react-reveal/Fade";
import imgteam1 from "../../image/imranl.png";
import imgteam3 from "../../image/sam.png";
import imgteam4 from "../../image/saad.png";
import imgteam6 from "../../image/ahmad.png";
import imgteam8 from "../../image/rahmanl.png";
import imgteam10 from "../../image/luqmanl.png";
import imgteam14 from "../../image/Aqib.png";
import imgteam15 from "../../image/basita.png";
import imgteam16 from "../../image/hamzafarooq.png";
import imgteam17 from "../../image/ihtizaz.png";
import imgteam19 from "../../image/ayaz.png";
import ali from "../../image/alih.png";
import { GrLinkedinOption } from "react-icons/gr";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const team = [
  {
    img: imgteam14,
    linkdin: "https://www.linkedin.com/in/aqib-hassan-zeb-bb7b58211/",
    name: "Aqib Khan",
    title: "CTO",
  },
  
  {
    img: imgteam19,
    linkdin: "https://www.linkedin.com/in/ayazcoder/",
    name: "Ayaz Khan",
    title: "React Developer",
  },

  {
    img: imgteam3,
    linkdin: "https://www.linkedin.com/in/sameer-khan-660966251/",
    name: "Sameer Khan",
    title: "React Developer",
  },
  {
    img: imgteam4,
    linkdin: "https://www.linkedin.com/in/saad-khan-42716a222/",
    name: "Saad Khan",
    title: "Angular Developer",
  },
  {
    img: imgteam6,
    linkdin: "https://www.linkedin.com/in/ahmad-ali-791190241/",
    name: "Ahmad Ali",
    title: "Angular Developer",
  },

  {
    img: imgteam8,
    linkdin: "https://www.linkedin.com/in/rehmanzeb",
    name: "Rehman Zeb",
    title: "React Developer",
  },

  
];
const HalfTeam= [
  {
    img: imgteam10,
    linkdin: "https://www.linkedin.com/in/luqman-yousafzai-8a4744223",
    name: "Muhammad Luqman",
    title: "Angular Developer",
  },
  {
    img: ali,
    linkdin: "https://www.linkedin.com/in/ali-hassan-b5a81925b",
    name: "Ali Hasan",
    title: "Angular Developer",
  },

  {
    img: imgteam1,
    linkdin: "https://www.linkedin.com/in/imran-khan-160446216/",
    name: "Imran Khan",
    title: "React Developer",
  },
  {
    img: imgteam15,
    linkdin: "https://www.linkedin.com/in/abdul-basit-seo-2232b6220/",
    name: "Abdul Basit",
    title: "React Developer",
  },
  {
    img: imgteam16,
    linkdin: "https://www.linkedin.com/in/hamza-farooq-009673227/",
    name: "Hamza Farooq",
    title: "React Developer",
  },
  {
    img: imgteam17,
    linkdin: "https://www.linkedin.com/in/ihtizaz-ahmad-716385255",
    name: "Ihtizaz",
    title: "Angular Developer",
  },
];
const Ourteam = () => {
  let seetings = {
    dots: true,
    Infinite: true,
    speed: 500,
    slidesToShow: 4,
    slideToScroll: 1,
    autoplay: true, // Add autoplay option
    autoplaySpeed: 3000, // Set autoplay speed to 10 seconds (10000 milliseconds)
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
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
    <div className="row rowteam mt-5">
      <Fade bottom duration={2000}>
        <div className="col-12 mx-auto">
          <div className="team">
            <h3>Our Team</h3>
            <p>These are the people who get the job done</p>
          </div>

          <Slider {...seetings} className="slick-non container  pb-2 pt-4">
            {team.map((item) => {
              return (
                <div className="cart-wrapeer ">
                  <div className="cart">
                    <div className="cart-image">
                      <img src={item.img} className="img-fluid item1 " />
                    </div>
                    <ul className="social-icon">
                      <li>
                        <a href={item.linkdin} target="_blank">
                          <i className="fa">
                            <GrLinkedinOption className="icon" />
                          </i>
                        </a>
                      </li>
                    </ul>
                    <div className="details">
                      <h2>
                        {item.name}{" "}
                        <span className="job-title text-primary">
                          {item.title}
                        </span>
                      </h2>
                    </div>
                  </div>
                </div>
              );
            })}
          </Slider>
          <Slider {...seetings} className="slick-non container pb-10 pt-10">
            {HalfTeam.map((item) => {
              return (
                <div className="cart-wrapeer ">
                  <div className="cart">
                    <div className="cart-image">
                      <img src={item.img} className="img-fluid item1 " />
                    </div>
                    <ul className="social-icon">
                      <li>
                        <a href={item.linkdin} target="_blank">
                          <i className="fa">
                            <GrLinkedinOption className="icon" />
                          </i>
                        </a>
                      </li>
                    </ul>
                    <div className="details">
                      <h2>
                        {item.name}{" "}
                        <span className="job-title text-primary">
                          {item.title}
                        </span>
                      </h2>
                    </div>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </Fade>
    </div>
  );
};

export default Ourteam;
