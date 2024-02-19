import React, { useState } from "react";
import "./contact.css";
import contact from "../../image/contact.svg";
import Footers from "../Footers/Footer";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { GrTwitter } from "react-icons/gr";
import Fade from "react-reveal/Fade";
import { useRef } from "react";
import emailjs from "emailjs-com";
import { Helmet } from "react-helmet";
import { Formik, Form, ErrorMessage } from "formik";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import * as yup from "yup";
import { ImWhatsapp } from "react-icons/im";
const initialValues = {
  name: "",
  email: "",
  message: "",
  phone: "",
  location: "",
};

const Contact = () => {
  const [message, setSentMessage] = useState(false);
  const form = useRef();

  const defaultValue = {
    name: "",
    email: "",
    message: "",
    phone: "",
    location: "",
  };

  const validationSchema = yup.object().shape({
    name: yup.string().required("Please enter your name"),
    email: yup
      .string()
      .required("Please enter your valid email")
      .email("please enter valid email"),
    location: yup.string().required("please enter your location"),
    phone: yup.number().required(" please enter your phone number"),
    message: yup.string().required("At least 12 characters required"),
  });

  const handleSubmit = (values) => {
    console.log("values", values);
  };

  const sendEmail = (e) => {
    emailjs
      .sendForm(
        "service_ljl7dzo",
        "template_azji8xv",
        form.current,
        "V3m6c5qimGtsOA6yF"
      )
      .then(
        (result) => {
          console.log(result.text);
          setSentMessage(true);
          toast.success("Successful submitted");
          setTimeout(() => {
            setSentMessage(false);
          }, 2000);
        },
        (error) => {
          console.log(error.text);
        }
      );
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("location").value = "";
    document.getElementById("message").value = "";
  };

  return (
    <>
      <Helmet>
        <title>Contact - Techcreator Software Company</title>
        <meta
          name="description"
          content="If you are interested in contacting us, please fill in the contact form and we will get back to you as soon as we can."
        />
        <meta
          name="keywords"
          content="techcreator, techcreator software house, techcreator software compant, sofwarehouse, apps development, software industry, swabi software house, techcreator contact us"
        />
        <link rel="canonical" href="/contact" />
      </Helmet>
      {/* <section className="contact-main">
        <div className="container-fluid">
          <div className="row">
          <Fade left duration={2000}>
            <div className="col-10 mx-auto text-white">
              <div className="row">
                <div className="col-lg-6 col-md-12 col-sm-12   d-flex justify-content-center flex-column">
                  <h1 className="offset-md-6">Contact us</h1>
                </div>

                <div className="col-lg-6 col-md-12 col-sm-12">
                  <p>We are a Latin American company, based in non-traditional tech hubs, with an ever growing talent pool that is dedicated to building world class software development outsourcing services. Our service lines have been developed and tailored in accordance to what our clients need and the evolution of our still young and highly adaptive industry.</p>
                </div>
              </div>
            </div>
            </Fade>
          </div>
        </div>


      </section> */}
      <ToastContainer />
      <section
        id="header"
        className="d-flex align-items-center contact-main text-white"
      >
        <div className="container-fluid ">
          <div
            className="row"
            style={{ marginTop: "15%", marginBottom: "15%" }}
          >
            <Fade left delay={500} duration={3000}>
              <div className="col-10 mx-auto">
                <div className="row">
                  <div className="col-lg-5 col-md-12 col-sm-12 pt-5 pt-lg-0  d-flex justify-content-center flex-column">
                    <h1 className="contact">Contact Us</h1>
                  </div>

                  <div className="col-lg-7 col-md-12 col-sm-12 mb-5 cont-head">
                    <h2>Want to Say Something?</h2>
                    <p className="we-about lead">
                      We are here to respond on your querries.
                    </p>
                  </div>
                </div>
              </div>
            </Fade>
          </div>
        </div>
      </section>

      <div className="container-fluid">
        <div className="row">
          <div className="col-8 mx-auto">
            <div className="row">
              <Fade bottom duration={2000}>
                <div className="col-lg-5 col-md-12 col-sm-12 pt-5 pt-lg-0  d-flex flex-column cont-img">
                  <img src={contact} alt="Techcreator Software Company" />
                </div>
              </Fade>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div>
          <div className="container">
            <div className="row contact-container">
              <Fade bottom duration={2000}>
                <div className="col-lg-12 main-card">
                  <div className="card card-shadow border-0 mb-4">
                    <div className="row">
                      <div className="col-lg-8">
                        <div className="contact-box p-4">
                          <h2 className="title">Contact Us</h2>

                          <Formik
                            initialValues={defaultValue}
                            validationSchema={validationSchema}
                            onSubmit={sendEmail}
                          >
                            {({
                              values,
                              errors,
                              touched,
                              handleChange,
                              handleBlur,
                              isSubmitting,
                            }) => (
                              <form onSubmit={handleSubmit} ref={form}>
                                <div className="row">
                                  <div className="col-lg-6">
                                    <div className="form-group mt-3">
                                      <input
                                        className="form-control"
                                        type="text"
                                        placeholder="Name"
                                        name="name"
                                        id="name"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                      />
                                      <p className="text-danger">
                                        <ErrorMessage name="name" />
                                      </p>
                                    </div>
                                  </div>
                                  <div className="col-lg-6">
                                    <div className="form-group mt-3">
                                      <input
                                        className="form-control"
                                        type="text"
                                        placeholder="Email"
                                        id="email"
                                        name="email"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                      />
                                      <p className="text-danger">
                                        <ErrorMessage name="email" />
                                      </p>
                                    </div>
                                  </div>
                                  <div className="col-lg-6">
                                    <div className="form-group mt-3">
                                      <input
                                        className="form-control"
                                        type="text"
                                        placeholder="Phone"
                                        id="phone"
                                        name="phone"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                      />
                                      <p className="text-danger">
                                        <ErrorMessage name="phone" />
                                      </p>
                                    </div>
                                  </div>
                                  <div className="col-lg-6">
                                    <div className="form-group mt-3">
                                      <input
                                        className="form-control"
                                        type="text"
                                        placeholder="Location"
                                        id="location"
                                        name="location"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                      />
                                      <p className="text-danger">
                                        <ErrorMessage name="location" />
                                      </p>
                                    </div>
                                  </div>
                                  <div className="col-lg-12">
                                    <div className="form-group mt-3">
                                      <input
                                        className="form-control"
                                        type="text"
                                        placeholder="Message"
                                        id="message"
                                        name="message"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                      />
                                      <p className="text-danger">
                                        <ErrorMessage name="message" />
                                      </p>
                                    </div>
                                  </div>
                                  <div className="col-lg-12 pt-3">
                                    <button
                                      type="submit"
                                      className="contact-btn"
                                      disabled={isSubmitting}
                                    >
                                      SUBMIT NOW
                                    </button>
                                  </div>
                                </div>
                              </form>
                            )}
                          </Formik>

                          {message && (
                            <p
                              className="contact-box-text pt-3"
                              style={{ color: "black" }}
                            >
                              Thank you for Contacting us. We will get in touch
                              with you as soon as possible.
                            </p>
                          )}
                        </div>
                      </div>
                      <div
                        className="col-lg-4 bg-image"
                        style={{
                          backgroundImage:
                            "url(https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/contact/1.jpg)",
                        }}
                      >
                        <div className="detail-box p-4">
                          <h3
                            className="text-white font-weight-light mb-3"
                            style={{ fontSize: "20px" }}
                          >
                            ADDRESS
                          </h3>
                          <p className="text-white op-7">
                            TechCreator Private Limited near Muneer Hospital,
                            Mardan Road Swabi.
                          </p>
                          <h3
                            className="text-white font-weight-light mb-3 mt-4"
                            style={{ fontSize: "20px" }}
                          >
                            CALL US
                          </h3>
                          <p className="text-white op-7">
                            +92-311-9265290
                            <br />
                          </p>
                          <div className="col-md-3 col-sm-12 col-xs-12 text-center">
                            <div className="">
                              <div className="flex">
                                <a
                                  href="https://www.facebook.com/techcreatorfb"
                                  className="p-2"
                                >
                                  <FaFacebook className="  w-6 h-6 text-blue-500" />
                                </a>
                                <a
                                  href="https://www.linkedin.com/company/techcreator/mycompany/"
                                  className="p-2"
                                >
                                  <FaLinkedinIn className=" w-6 h-6 text-blue-500 " />
                                </a>
                                <a
                                  href="https://www.instagram.com/techcreatorco/"
                                  className="p-2"
                                >
                                  <FaInstagram className="w-6 h-6 text-pink-600" />
                                </a>
                                <a
                                  href="https://twitter.com/techcreatorco"
                                  className="p-2"
                                >
                                  <GrTwitter className=" w-6 h-6 text-blue-600 " />
                                </a>

                                <a href="tel:+92-311-9265290" className="p-2">
                                  <ImWhatsapp className="text-white flex self-start top-10 bg-green-500   w-6 h-6  " />
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Fade>
            </div>
          </div>
        </div>
      </div>

      <Footers />
    </>
  );
};

export default Contact;

// import React, { useRef, useState } from "react";
// import emailjs from "@emailjs/browser";
// import "./contactus.css";

// //validation

// //formid and yup
// import { Formik, Form, ErrorMessage } from "formik";
// import * as yup from "yup";
// import { Helmet } from "react-helmet";

// function Contactuswithouthelmet() {
//   const [message, setSentMessage] = useState(false);
//   const [done, setDone] = useState(false);
//   const form = useRef();

//   const defaultValue = {
//     name: "",
//     email: "",
//     message: "",
//     phone: "",
//     location: "",
//   };

//   const validationSchema = yup.object().shape({
//     name: yup.string().required("Please enter your name"),
//     email: yup
//       .string()
//       .required("Please enter your valid email")
//       .email("please enter valid email"),
//     location: yup.string().required("please enter your location"),
//     phone: yup.number().required(" please enter your phone number"),
//     message: yup.string().required("At least 12 characters required"),
//   });

//   const handleSubmit = (values) => {
//     console.log("values", values);
//   };

//   const sendEmail = (e) => {
//     emailjs
//       .sendForm(
//         "service_ke6l7t9",
//         "template_az7509f",
//         form.current,
//         "YVdl6iNn7uMxsZU4r"
//       )
//       .then(
//         (result) => {
//           console.log(result.text);
//           setSentMessage(true);
//           setTimeout(() => {
//             setSentMessage(false);
//           }, 2000);
//         },
//         (error) => {
//           console.log(error.text);
//         }
//       );
//     document.getElementById("name").value = "";
//     document.getElementById("email").value = "";
//     document.getElementById("phone").value = "";
//     document.getElementById("location").value = "";
//     document.getElementById("message").value = "";
//   };
//   return (
//     <div>
//       <div
//         className="contact2"
//         style={{
//           backgroundImage:
//             "url(https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/contact/map.jpg)",
//         }}
//         id="contact"
//       >
//         <div className="container">
//           <div className="row contact-container">
//             <div className="col-lg-12">
//               <div className="card card-shadow border-0 mb-4">
//                 <div className="row">
//                   <div className="col-lg-8">
//                     <div className="contact-box p-4">
//                       <h4 className="title">Contact Us</h4>
//                       <Formik
//                         initialValues={defaultValue}
//                         validationSchema={validationSchema}
//                         onSubmit={sendEmail}
//                       >
//                         {({
//                           values,
//                           errors,
//                           touched,
//                           handleChange,
//                           handleBlur,
//                           handleSubmit,
//                           isSubmitting,
//                         }) => (
//                           <form onSubmit={handleSubmit} ref={form}>
//                             <div className="row">
//                               <div className="col-lg-6">
//                                 <div className="form-group mt-3">
//                                   <input
//                                     className="form-control"
//                                     type="text"
//                                     placeholder="Name"
//                                     name="name"
//                                     id="name"
//                                     onChange={handleChange}
//                                     onBlur={handleBlur}
//                                   />
//                                   <p className="text-danger">
//                                     <ErrorMessage name="name" />
//                                   </p>
//                                 </div>
//                               </div>
//                               <div className="col-lg-6">
//                                 <div className="form-group mt-3">
//                                   <input
//                                     className="form-control"
//                                     type="text"
//                                     placeholder="Email"
//                                     id="email"
//                                     name="email"
//                                     onChange={handleChange}
//                                     onBlur={handleBlur}
//                                   />
//                                   <p className="text-danger">
//                                     <ErrorMessage name="email" />
//                                   </p>
//                                 </div>
//                               </div>
//                               <div className="col-lg-6">
//                                 <div className="form-group mt-3">
//                                   <input
//                                     className="form-control"
//                                     type="text"
//                                     placeholder="Phone"
//                                     id="phone"
//                                     name="phone"
//                                     onChange={handleChange}
//                                     onBlur={handleBlur}
//                                   />
//                                   <p className="text-danger">
//                                     <ErrorMessage name="phone" />
//                                   </p>
//                                 </div>
//                               </div>
//                               <div className="col-lg-6">
//                                 <div className="form-group mt-3">
//                                   <input
//                                     className="form-control"
//                                     type="text"
//                                     placeholder="Location"
//                                     id="location"
//                                     name="location"
//                                     onChange={handleChange}
//                                     onBlur={handleBlur}
//                                   />
//                                   <p className="text-danger">
//                                     <ErrorMessage name="location" />
//                                   </p>
//                                 </div>
//                               </div>
//                               <div className="col-lg-12">
//                                 <div className="form-group mt-3">
//                                   <input
//                                     className="form-control"
//                                     type="text"
//                                     placeholder="Message"
//                                     id="message"
//                                     name="message"
//                                     onChange={handleChange}
//                                     onBlur={handleBlur}
//                                   />
//                                   <p className="text-danger">
//                                     <ErrorMessage name="message" />
//                                   </p>
//                                 </div>
//                               </div>
//                               <div className="col-lg-12">
//                                 <button
//                                   type="submit"
//                                   className="btn btn-danger-gradiant mt-3 mb-3 text-white border-0 py-2 px-3"
//                                   disabled={isSubmitting}
//                                 >
//                                   <span>
//                                     {" "}
//                                     SUBMIT NOW <i className="ti-arrow-right" />
//                                   </span>
//                                 </button>
//                               </div>
//                             </div>
//                           </form>
//                         )}
//                       </Formik>
//                       {message && (
//                         <p
//                           className="contact-box-text"
//                           style={{ color: "black" }}
//                         >
//                           Thank you for Contacting us. We will get in touch with
//                           you as soon as possible.
//                         </p>
//                       )}
//                     </div>
//                   </div>
//                   <div
//                     className="col-lg-4 bg-image"
//                     style={{
//                       backgroundImage:
//                         "url(https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/contact/1.jpg)",
//                     }}
//                   >
//                     <div className="detail-box p-4">
//                       <h5 className="text-white font-weight-light mb-3">
//                         ADDRESS
//                       </h5>
//                       <p className="text-white op-7">
//                         Sherdad Dheri Village Maneri Payan,
//                         <br /> Swabi, Khyber Pakhtunkhwa
//                       </p>
//                       <h5 className="text-white font-weight-light mb-3 mt-4">
//                         CALL US
//                       </h5>
//                       <p className="text-white op-7">
//                         +923488123407
//                         <br />
//                         {/* 03485422181{" "} */}
//                       </p>
//                       <div className="round-social light">
//                         <a
//                           href="#"
//                           className="ml-0 text-decoration-none text-white border border-white rounded-circle"
//                         >
//                           <i className="icon-social-facebook" />
//                         </a>
//                         <a
//                           href="#"
//                           className="text-decoration-none text-white border border-white rounded-circle"
//                         >
//                           <i className="icon-social-twitter" />
//                         </a>
//                         <a
//                           href="#"
//                           className="text-decoration-none text-white border border-white rounded-circle"
//                         >
//                           <i className="icon-social-youtube" />
//                         </a>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//     </div>
//   );
// }

// export default Contactuswithouthelmet;
