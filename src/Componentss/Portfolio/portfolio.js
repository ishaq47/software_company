import "./portfolio.css";
import React, { useState } from "react";
import ReactPaginate from "react-paginate";
// import "react-paginate/dist/react-paginate.css";
import Fade from  "react-reveal/Fade";
import Career from "../Careers/Career";
import Footers from "../Footers/Footer";
import { Helmet } from "react-helmet"
import imgpro2 from "../../image/RiseImage.webp";
import imgpro3 from "../../image/raso.webp";
import imgpro4 from "../../image/Behance.webp";
import imgpro5 from "../../image/AddaImage.webp";
import imgpro6 from "../../image/bubbleImage.webp";
import imgpro8 from "../../image/GratitudeImage.webp";
import imgpro9 from "../../image/traficinfoImage.webp";
import imgpro10 from "../../image/PakfoneImage.webp";
import imgpro12 from "../../image/khpalmart.webp";
import imgpro13 from "../../image/petron1.png";
import imgpro14 from "../../image/repair1.png";
import imgpro15 from "../../image/saloon1.png";
import imgpro16 from "../../image/tchat.PNG";
import imgpro17 from "../../image/5g.png";
import imgpro18 from "../../image/image18.PNG";
import imgpro19 from "../../image/image19.PNG";
import imgpro20 from "../../image/image20.PNG";
import imgpro21 from "../../image/image21.PNG";
import imgpro22 from "../../image/image22.PNG";
import imgpro23 from "../../image/image23.PNG";
import imgpro24 from "../../image/image24.PNG";
import imgpro25 from "../../image/image25.PNG";
import imgpro26 from "../../image/image26.PNG";
import imgpro27 from "../../image/image27.PNG";
import imgpro28 from "../../image/image28.PNG";
import imgpro29 from "../../image/image29.PNG";
import imgpro30 from "../../image/image30.PNG";
import imgpro31 from "../../image/image31.PNG";
import imgpro32 from "../../image/image32.PNG";
import imgpro33 from "../../image/image33.PNG";
const Portfolio=()=>{

  const itemsPerPage = 12;
  const [currentPage, setCurrentPage] = useState(1);
  
    const projectInfo = [
      
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
        {
          img: imgpro16,
          link: "https://tidio-chat-frontend.pages.dev/",
          head: "Tidio Chat",
          para: "The Tidio live chat widget adjusts to yourcustomers’ screens, so they can write toyou on mobile and tablet",
          btn: "Go To Website",
        },
        {
          img: imgpro17,
        //   link: "https://tidio-chat-frontend.pages.dev/",
          head: "Solid labs 4G network",
          para: "Solid labs 4G network",
          btn: "Go To Website",
        },
        {
          img: imgpro18,
          link: "kidsontheyard.com",
          head: "Kidsonyheyard Schools institute",
          para: "Kidsonyheyard Schools institute academy app",
          btn: "Go To Website",
        },
        {
          img: imgpro19,
          link: "https://vulcan-v1.netlify.app/",
          head: "Vulcanweb Online academy",
          para: "Teach live online classes on any subject matter of your expertise.",
          btn: "Go To Website",
        },
        {
          img: imgpro20,
          link: "https://chrome-extension-social-app.onrender.com/",
          head: "Auto poster social media",
          para: "Auto poster social media app.",
          btn: "Go To Website",
        },
        {
          img: imgpro21,
          link: "https://repaircms.com/en/",
          head: "Repair CMS",
          para: "RepairCMS is a repair management solution for cell phone and computer repair shops and can be used in many other repair industries too.",
          btn: "Go To Website",
        },
        {
          img: imgpro22,
          link: "https://thecakehut.com.au/",
          head: "Thecakehut",
          para: "Thecakehut",
          btn: "Go To Website",
        },
        {
          img: imgpro23,
          link: "https://weworkwithtalent.com/",
          head: "we work with talent",
          para: "we work with talent",
          btn: "Go To Website",
        },
        {
          img: imgpro24,
          link: "https://liontrustspain.com/",
          head: "Lion Trust Spain Property Service",
          para: "Buying or selling a property on the Costa del Sol might seem a simple procedure.",
          btn: "Go To Website",
        },
        {
          img: imgpro25,
          link: "https://stackpushtechnology.com/",
          head: "stackpushtechnology Solutions Pvt Ltd",
          para: "We are stackpushtechnology Solutions Pvt Ltd. We build Mobile Apps, Web Apps And Cloud Apps, that perform!",
          btn: "Go To Website",
        },
        {
          img: imgpro26,
          link: "https://powerbikekc.com/",
          head: "HIMIWAY ELECTRIC BIKE ACCESSORIES",
          para: "Himiway electric bike accessories help you get more fun. Find favorite extras and upgrades for your electric fat bike",
          btn: "Go To Website",
        },
        {
          img: imgpro27,
          link: "https://newsite.basit.agency/",
          head: "Ace Painting Service",
          para: "Ace Painting is a locally owned and operated painting company based in Michigan.",
          btn: "Go To Website",
        },
        {
          img: imgpro28,
          link: "https://abdul.basit.agency/",
          head: "ASPIRE THUDUNG",
          para: "HIJAB COLLECTIONS",
          btn: "Go To Website",
        },
        {
          img: imgpro29,
          link: "https://bookingshop.basit.agency/",
          head: "Wedding Book Store",
          para: "Creating A Beautiful And Memorable Wedding",
          btn: "Go To Website",
        },
        {
          img: imgpro30,
          link: "https://restaurant.basit.agency/",
          head: "Restaurant Website",
          para: "Restaurant Website",
          btn: "Go To Website",
        },
        {
          img: imgpro30,
          link: "https://restaurant.basit.agency/",
          head: "Restaurant Website",
          para: "Restaurant Website",
          btn: "Go To Website",
        },
        {
          img: imgpro31,
          link: "https://transformrides.com/",
          head: "Transformrides",
          para: "Transformrides has been providing top-notch spare parts with the best quality standards for over a decade, earning...",
          btn: "Go To Website",
        },
        {
          img: imgpro32,
          link: "https://hussu.pk/",
          head: "Hussu Jewellers",
          para: "At Hussu Jewellers, we believe that jewelry is not just an accessory but an expression of one’s personality and style.",
          btn: "Go To Website",
        },
        {
          img: imgpro33,
          link: "https://aventon.basit.agency/",
          head: "Yacht Management Services",
          para: "A-Team Captains Yacht Management Services Newest Headquarters is located in Fort Pierce, next to Derecktors....",
          btn: "Go To Website",
        }
      ];
      const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayedProjects = projectInfo.slice(startIndex, endIndex);

  const handlePageChange = (selectedPage) => {
    setCurrentPage(selectedPage.selected + 1);
  };
    return(
        <>
        <Helmet>
        <title>Portfolio - Techcreator Software Company</title>
        <meta
          name="description"
          content="Discover our diverse range of projects that showcase our prowess in custom software development, web and mobile app solutions, UI/UX design, and digital transformation."
        />
        <meta
          name="keywords"
          content="techcreator, techCreator's UX/UI design, custom software development solutions, techcreator software house, softwarehouse, apps development, software industry, swabi software house, techcreator about"
        />
        <link rel="canonical" href="/about" />
      
      </Helmet>
      <section className="d-flex align-items-center aboutimg text-white">
        <div className="container-fluid ">
          <div
            className="row"
            style={{ marginTop: "15%", marginBottom: "15%" }}
          >
            <Fade left delay={500} duration={1000}>
              <div className="col-10 mx-auto">
                <div className="row">
                  <div className="col-lg-5 col-md-12 col-sm-12 pt-5 pt-lg-0  d-flex justify-content-center flex-column">
                    <h1 className="about">Our Portfolio</h1>
                  </div>
          
                  <div className="col-lg-7 col-md-12 col-sm-12 mb-5">
                    <p className="we-about lead text-center">
                    At TechCreator Software Company, we specialize in crafting bespoke software solutions that cater to your unique business needs. Our portfolio showcases a range of successful projects, from intuitive mobile apps to dynamic web platforms. With a talented team dedicated to quality and innovation, we're your partner in turning ideas into impactful realities. Join us in the journey of transforming your vision into cutting-edge technology.
                    </p>
                  </div>
                </div>
              </div>
            </Fade>

          </div>
        </div>
      </section>
      <div className="">
        <div className="col mt-5">
          <h2 className="text-center my-5 fw-bold lh-1 mb-3 text-primary">
            Our Projects
          </h2>
        </div>
        <div className="container d-md-flex mt-5">
          <div className="row">
            {displayedProjects.map((projectInfo, index) => {
              return (
                <div
                  key={index}
                  className="col-md-4 col-md-6 col-lg-4 cards container"
                >
                  <img
                    src={projectInfo.img}
                    alt={projectInfo.head}
                    className=""
                  />
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
        <div className="text-center mt-4">
          <ReactPaginate
            previousLabel={"Previous"}
            nextLabel={"Next"}
            pageCount={Math.ceil(projectInfo.length / itemsPerPage)}
            onPageChange={handlePageChange}
            containerClassName={"pagination"}
            previousLinkClassName={"pagination__link"}
            nextLinkClassName={"pagination__link"}
            disabledClassName={"pagination__link--disabled"}
            activeClassName={"pagination__link--active"}
          />
        </div>
      </div>
      <Career />
      <Footers />
        </>
    )
}
export default Portfolio;