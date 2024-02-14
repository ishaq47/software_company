import React, { useState } from "react";
import "./career.css";
import { MdKeyboardArrowRight, MdSend } from "react-icons/md";
import piwe from "../../image/career.jpg";
import Fade from "react-reveal/Fade";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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
      !profile_URL ||
      !phone ||
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
    // }).then((response) => {
    //   return console.log("response :", response);
    //   console.log(response);

    //   if (response.ok) {
    //     return response.json();
    //   }
    //   throw new Error(`Network response was not ok: ${response.status}`);
    // });
    // return console.log("file url :", fileUrl);
  };

  return (
    <>
      <div className="container-fluid bg-white py-5 ">
        <ToastContainer />
        <Fade bottom duration={2000}>
          <div className="container  main-div">
            <div className="row">
              <div className="col-10 mx-auto">
                <div className="row">
                  <div className="col-lg-6 col-md-12 col-sm-12 pt-5 pt-lg-0 div-header  d-flex justify-content-center flex-column">
                    <h2>Careers at TechCreator</h2>

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
                    <div className=" pt-5 col-sm-12 ">
                      {/* <button className="btns1 m-3">View our job openings <MdKeyboardArrowRight className="md_icon" /></button> */}
                      <button className="btns2 " onClick={handleShow}>
                       <div>Send Resume </div> <MdSend className="md_icon" />
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
                              className="btn btn-primary"
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
    </>
  );
};

export default Career;
