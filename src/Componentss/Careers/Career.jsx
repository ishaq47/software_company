import React, { useState } from "react";
import "./career.css";
import { MdSend } from "react-icons/md";
import piwe from "../../image/career.jpg";
import Fade from "react-reveal/Fade";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import collobrate from "../../image/collabrate.jpg"
import dev from "../../image/dev.jpg"
import inno from "../../image/inno.jpg"
import gimpact from "../../image/gimpact.jpg"



const Career = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [profile_URL, setProfile_URL] = useState("");
  const [phone, setPhone] = useState("");
  const [fileCv, setFileCv] = useState("");
  const [loader, setLoader] = useState(false);
  console.log("newFilwe", fileCv);
  console.log("env data", process.env.REACT_APP_API_URL);
  const submit_btn = async () => {
    if (
      !firstName ||
      !lastName ||
      !email ||
      // !profile_URL ||
      // !phone ||
      !fileCv
    ) {
      return toast.error("please fill the form");
  
    }
    setLoader(true);
    const data = new FormData();
    data.append("file", fileCv);
    data.append("upload_preset", "thepictures");
    data.append("cloud_name", "dzvauvbk5");
    fetch(`${process.env.REACT_APP_CLOUDINARY_URL}image/upload`, {
      method: "post",
      body: data,
    })
      .then((res) => res.json())
      .then(async (data) => {
        // fileUrl = data;
        let fileUrl = data.url;
        console.log(data);
        console.log(firstName, lastName, email, profile_URL, phone);
        let result = await fetch(
          `${process.env.REACT_APP_API_URL}/api/v1/register`,
          {
            method: "POST",
            body: JSON.stringify({
              firstName,
              lastName,
              email,
              profile_URL,
              phone,
              fileUrl,
            }),
            headers: {
              "content-type": "application/json",
            },
          }
        );
        result = await result.json();
        console.log(result);
        setLoader(false);
        toast.success("Successful submitted");
      })
      .catch((err) => {
        console.log(err);
        setLoader(false);
        
        
        

      });
  };

  return (
    <>
      <div className="container-fluid bg-black mt-[-30px] md:mt-0">
        <ToastContainer />
        <Fade bottom duration={1000}>
          <div className="container  main-div">
            <div className="row">
              <div className="col-10 mx-auto">
                <div className="row">
                  <div className="col-lg-6 col-md-12 col-sm-12 pt-5 pt-lg-0 div-header  d-flex justify-content-center flex-column">
                    <h1 className="text-white">Careers at TechCreator</h1>

                    <p className="careers-p pt-3">
                      Are you passionate about technology and innovation? Do you
                      enjoy being at the forefront of cutting-edge developments
                      in the tech industry? If so, TechCreator might be the
                      perfect place for you to take your career to the next
                      level.
                    </p>
                    <p className="pt-3">
                      If you're interested in joining our team, we encourage you
                      to explore our current job openings and apply today. We
                      look forward to hearing from you!
                    </p>
                    <div className=" pt-4 col-sm-12 ">
                      {/* <button className="btns1 m-3">View our job openings <MdKeyboardArrowRight className="md_icon" /></button> */}
                      <button className="btns2 " onClick={handleShow}>
                        <div  >Send Resume </div> <MdSend className="md_icon" />
                      </button>
                      <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                          <Modal.Title>Want to be TechCreator?</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                          <Form>
                            <Form.Group
                              className="mb-3"
                              controlId="exampleForm.ControlInput1"
                            >
                              <Form.Control
                                type="text"
                                placeholder="First Name"
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                                autoFocus
                              />
                            </Form.Group>
                            <Form.Group
                              className="mb-3"
                              controlId="exampleForm.ControlInput1"
                            >
                              <Form.Control
                                type="text"
                                placeholder="Last Name"
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                                autoFocus
                              />
                            </Form.Group>
                            <Form.Group
                              className="mb-3"
                              controlId="exampleForm.ControlInput1"
                            >
                              <Form.Control
                                type="email"
                                placeholder="Email Address"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                autoFocus
                              />
                            </Form.Group>
                            <Form.Group
                              className="mb-3"
                              controlId="exampleForm.ControlInput1"
                            >
                              <Form.Control
                                type="text"
                                placeholder="Professional Profile URL"
                                value={profile_URL}
                                onChange={(e) => setProfile_URL(e.target.value)}
                                autoFocus
                              />
                            </Form.Group>
                            <Form.Group
                              className="mb-3"
                              controlId="exampleForm.ControlInput1"
                            >
                              <Form.Control
                                type="text"
                                placeholder="Phone"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                autoFocus
                              />
                            </Form.Group>
                            <Form.Group
                              className="mb-3"
                              controlId="exampleForm.ControlInput1"
                            >
                              <Form.Control
                                type="file"
                                // value={fileCv}
                                onChange={(e) => setFileCv(e.target.files[0])}
                                autoFocus
                              />
                            </Form.Group>
                          </Form>
                        </Modal.Body>
                        <Modal.Footer>
                          {loader ? (
                            <Button className="btn btn-primary">
                              Loading..
                            </Button>
                          ) : (
                            <Button
                              className="btn hover:font-semibold btn-primary"
                              onClick={submit_btn}
                            >
                              Submit
                            </Button>
                          )}
                          {/* <Button variant="secondary" onClick={submit_btn}>
                            Submit
                          </Button> */}
                        </Modal.Footer>
                      </Modal>
                    </div>
                  </div>

                  <div className="col-lg-6 col-md-12 col-sm-12 d-flex justify-content-end">
                    <img
                      src={piwe}
                      alt="Techcreator Software Company"
                      className="img-fluid"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Fade>

      </div>
      <div>
        <div className="flex flex-col justify-center items-center  pt-10 ">
          <h1 className='flex justify-self-center text-center text-3xl md:text-4xl font-semibold'>Where Innovation Meets Ambition!</h1>
          <p className='flex justify-self-center md:w-[800px] lg:w-[1000px] lead text-center mx-4 ' >Welcome to a world of limitless possibilities! At TechCreator, we don't just offer jobs; we offer careers that propel you towards unparalleled growth and success. Join us on a journey where your passion meets purpose, and every challenge is an opportunity to shine.</p>
        </div>
        <div>
          <div className="flex flex-col ">
            <h2 className=" flex items-center justify-center my-5">Why TechCreator?</h2>
            <div className="flex flex-col items-center  ">
            <div className="sm:grid grid-cols-2 mx-4 my-3 ">
              <div className="  md:w-[400px] flex flex-col items-center justify-center md:mr-[100px]  text-center ">
                <h3> Innovation at the Core</h3>
                <p className="lead" >At TechCreator, we foster a culture of innovation. Our team is at the forefront of the latest technological advancements, working on projects that push the boundaries of what's possible. Join us, and be a part of a company that values creativity and encourages out-of-the-box thinking.

                </p>
              </div>
              <div className="sm:w-[350px] md:w-[400px] ">
                <img className="flex md:ml-[100px]  rounded-2xl " src={inno} />

              </div>

            </div>
            <div className="flex flex-wrap-reverse sm:grid grid-cols-2 mx-4 my-3">
              <div className="sm:w-[350px] md:w-[400px] ">
                <img className="  rounded-2xl" src={collobrate} />

              </div>
              <div className="  md:w-[400px] flex flex-col items-center justify-center md:ml-[100px]  text-center">
                <h3>Collaborative Environment</h3>
                <p className="lead" >We believe that great ideas come from collaboration. Our inclusive and supportive work environment encourages open communication and teamwork. At TechCreator, you'll have the opportunity to collaborate with talented individuals from diverse backgrounds, each bringing unique perspectives to the table.

                </p>
              </div>


            </div>
            <div className="flex flex-wrap sm:grid grid-cols-2 mx-4 my-3">
             
              <div className="  md:w-[400px] flex flex-col items-center justify-center md:mr-[100px]  text-center">
                <h3> Professional Growth</h3>
                <p className="lead" > TechCreator is committed to the continuous development of its team members. We provide opportunities for skill enhancement, training programs, and mentorship to ensure that our employees are always at the forefront of their fields. Your professional growth is our priority.


                </p>
              </div>
              <div className="sm:w-[350px]  md:w-[400px] ">
                <img className="flex md:ml-[100px]  rounded-2xl " src={dev} />

              </div>

            </div>
            <div className="flex flex-wrap-reverse sm:grid grid-cols-2 mx-4 my-3">
              <div className="sm:w-[350px] md:w-[400px] ">
                <img className="  rounded-2xl" src={gimpact} />

              </div>
              <div className="  md:w-[400px] flex flex-col items-center justify-center md:ml-[100px]  text-center">
                <h3>Impactful Projects</h3>
                <p className="lead" >Join TechCreator, and you'll have the chance to work on projects that make a difference. Whether it's web development, app creation, or software solutions, our team is dedicated to delivering high-impact results that leave a lasting mark on the tech industry.

                </p>
              </div>


            </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Career;
