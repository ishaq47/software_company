import React, { useState } from 'react'
import random from "../../image/random.jpg"
import ra from "../../image/ra.jpg"
import ri from "../../image/ri.jpg"
import solu from "../../image/solu.jpg"
import secu from "../../image/secu.jpg"



import { IoCheckmarkCircle } from "react-icons/io5";
import { NavLink } from 'react-router-dom'
function Pricing() {
  const [isChecked, setIsChecked] = useState(false)

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked)
  }

  return (
    <>
      <div className=' mt-14 h-auto bg-black'>
        <div className='flex flex-col justify-center items-center pt-10'>
          <p className='flex justify-center text-white text-3xl md:text-4xl font-semibold '>Our Pricing & Plans</p>
          <p className='flex justify-self-center md:w-[800px] lead text-center mx-4 text-white'>"Explore Your Potential with TechCreator's Alluring Pricing & Plans! From our Starter for individuals to Pro and Enterprise for larger teams, unlock transparent pricing and flexible options. Choose the perfect plan and elevate your business now!</p>
        </div>

        <div className='flex justify-center mt-10 mb-3'>
          <div class="switch-wrapper flex bg-white rounded-full ">

            <button for="monthly" onClick={handleCheckboxChange} className={`text-black w-[100px]  font-semibold  rounded-l-full  p-2  ${isChecked ? 'bg-white ' : 'bg-blue-400 text-white rounded-r-full'}`}  >MONTHLY</button>
            <button for="yearly" onClick={handleCheckboxChange} className={`text-black w-[100px] font-semibold  rounded-r-full p-2   ${isChecked ? 'bg-blue-400 rounded-l-full text-white' : "bg-white"} `}>YEARLY</button>
            <span class="highlighter"></span>
          </div>
        </div>
        <div className={`flex flex-wrap gap-5 justify-center pt-4 pb-[80px] ${isChecked ? 'hidden' : 'block'}`}>
          <div className='basic hover:scale-110 transition duration-500 cursor-pointer rounded-3xl  w-[330px]  py-4  bg-blue-200'>
            <h2 className='bg-blue-600 w-[200px] text-white p-3 mt-2 rounded-tr-3xl ml-[-10px]'>BASIC</h2>
            <div className='flex flex-col items-center'>
              <h4 className=' w-fit mt-3'><strong>$600</strong>/Month</h4>
              <ul className='mx-4'>
                <li className='flex gap-2  '>
                  <div> <IoCheckmarkCircle className='text-xl self-center' /></div><p>Standard website development</p>
                </li>
                <li className='flex gap-2  mb-4'>
                  <div> <IoCheckmarkCircle className='text-xl self-center' /></div> Front-end-development
                </li>
                <li className='flex gap-2  mb-4'>
                  <div> <IoCheckmarkCircle className='text-xl self-center' /></div>Basic maintenance

                </li>
                <li className='flex gap-2  mb-4'>
                  <div> <IoCheckmarkCircle className='text-xl self-center' /></div> Customer Management
                </li>
                <li className='flex gap-2  mb-4'>
                  <div> <IoCheckmarkCircle className='text-xl self-center' /></div> Responsive design

                </li>
                <li className='flex gap-2  mb-4'>
                  <div> <IoCheckmarkCircle className='text-xl self-center' /></div> Basic Deployment

                </li>
              </ul>
              <div className='mt-[170px] flex gap-2'>
              <NavLink to="/contact">  <button className=' bg-violet-800 hover:font-semibold text-white p-2   px-4 rounded-full '>Contact</button></NavLink>
              <a  href="https://www.upwork.com/agencies/techcreator/"> <button className=' bg-violet-800 hover:font-semibold text-white p-2   px-4 rounded-full '>Upwork</button></a>
              </div>
            </div>
          </div>
          <div className='hover:scale-110 transition duration-500 cursor-pointer rounded-3xl  w-[330px] py-4 bg-pink-200'>
            <h2 className='bg-pink-600 w-[200px] text-white p-3 mt-2 rounded-tr-3xl ml-[-10px]'>STANDARD</h2>
            <div className='flex flex-col items-center'>
              <h4 className=' w-fit mt-3'><strong>$1200</strong>/Month</h4>
              <ul className='mx-4'>
                <li className='flex gap-2  '>
                  <div> <IoCheckmarkCircle className='text-xl self-center' /></div> <p>Customized web development</p>
                </li>
                <li className='flex gap-2  mb-4'>
                  <div> <IoCheckmarkCircle className='text-xl self-center' /></div> Front-end-development
                </li>
                <li className='flex gap-2  mb-4'>
                  <div> <IoCheckmarkCircle className='text-xl self-center' /></div>Back-end-development

                </li>
                <li className='flex gap-2  mb-4'>
                  <div> <IoCheckmarkCircle className='text-xl self-center' /></div>Deployment
                </li>
                <li className='flex gap-2  mb-4'>
                  <div> <IoCheckmarkCircle className='text-xl self-center' /></div>Priority support

                </li>
                <li className='flex gap-2  mb-4'>
                  <div> <IoCheckmarkCircle className='text-xl self-center' /></div> Enhanced security measures
                </li>
                <li className='flex gap-2  mb-4'>
                  <div> <IoCheckmarkCircle className='text-xl self-center' /></div> Responsive design with advanced features
                </li>
              </ul>
              <div className='mt-[75px] flex gap-2'>
              <NavLink to="/contact">  <button className=' bg-violet-800 hover:font-semibold text-white p-2   px-4 rounded-full '>Contact</button></NavLink>
              <a  href="https://www.upwork.com/agencies/techcreator/"> <button className=' bg-violet-800 hover:font-semibold text-white p-2   px-4 rounded-full '>Upwork</button></a>
              </div>
            </div>
          </div>
          <div className='hover:scale-110  duration-500 cursor-pointer rounded-3xl  w-[330px] py-4 bg-violet-200'>
            <h2 className='bg-violet-600 w-[200px] text-white p-3 ml-[-10px] mt-2 rounded-tr-3xl'>PREMIUM</h2>
            <div className='flex flex-col items-center'>
              <h4 className=' w-fit mt-3'><strong>$1800</strong>/Month</h4>
              <ul className='mx-4 '>
                <li className='flex gap-2  '>
                  <div> <IoCheckmarkCircle className='text-xl  ' /></div><p> Comprehensive web development</p>
                </li>
                <li className='flex gap-2  mb-4'>
                  <div> <IoCheckmarkCircle className='text-xl self-center' /></div> Front-end-development
                </li>
                <li className='flex gap-2  mb-4'>
                  <div> <IoCheckmarkCircle className='text-xl self-center' /></div>Back-end-development
                </li>
                <li className='flex gap-2  mb-4'>
                  <div> <IoCheckmarkCircle className='text-xl self-center' /></div> Devops & Testing
                </li>

                <li className='flex gap-2  mb-4'>
                  <div> <IoCheckmarkCircle className='text-xl self-center' /></div>Exclusive features and integrations
                </li>
                <li className='flex gap-2  mb-4'>
                  <div> <IoCheckmarkCircle className='text-xl self-center' /></div>Priority access to new technologies
                </li>
                <li className='flex gap-2  mb-4'>
                  <div> <IoCheckmarkCircle className='text-xl self-center' /></div>Proactive security monitoring

                </li>
                <li className='flex gap-2  mb-4'>
                  <div> <IoCheckmarkCircle className='text-xl self-center' /></div>24/7 premium support

                </li>
              </ul>
              <div className=' flex gap-2'>
              <NavLink to="/contact">  <button className=' bg-violet-800 hover:font-semibold text-white p-2   px-4 rounded-full '>Contact</button></NavLink>
              <a  href="https://www.upwork.com/agencies/techcreator/"> <button className=' bg-violet-800 hover:font-semibold text-white p-2   px-4 rounded-full '>Upwork</button></a>
              </div>
            </div>
          </div>


        </div>
        <div className={`flex flex-wrap gap-5 justify-center pt-4 pb-[50px] ${isChecked ? 'block' : 'hidden'}`}>
          <div className='hover:scale-110 transition duration-500 cursor-pointer rounded-3xl w-[330px] py-4 bg-blue-200 '>
            <h2 className='bg-blue-600 w-[200px] text-white p-3 mt-2 rounded-tr-3xl ml-[-10px]'>BASIC</h2>
            <div className='flex flex-col items-center'>
              <h4 className=' w-fit mt-3'><strong>$7200</strong>/Year</h4>
              <ul className='mx-4'>
                <li className='flex gap-2  '>
                  <div> <IoCheckmarkCircle className='text-xl self-center' /></div><p>Standard website development</p>
                </li>
                <li className='flex gap-2  mb-4'>
                  <div> <IoCheckmarkCircle className='text-xl self-center' /></div> Front-end-development
                </li>
                <li className='flex gap-2  mb-4'>
                  <div> <IoCheckmarkCircle className='text-xl self-center' /></div>Basic maintenance

                </li>
                <li className='flex gap-2  mb-4'>
                  <div> <IoCheckmarkCircle className='text-xl self-center' /></div> Customer Management
                </li>
                <li className='flex gap-2  mb-4'>
                  <div> <IoCheckmarkCircle className='text-xl self-center' /></div> Responsive design

                </li>
                <li className='flex gap-2  mb-4'>
                  <div> <IoCheckmarkCircle className='text-xl self-center' /></div> Basic Deployment

                </li>
              </ul>
              <div className='mt-[170px] flex gap-2'>
              <NavLink to="/contact">  <button className=' bg-violet-800 hover:font-semibold text-white p-2   px-4 rounded-full '>Contact</button></NavLink>
              <a  href="https://www.upwork.com/agencies/techcreator/"> <button className=' bg-violet-800 hover:font-semibold text-white p-2   px-4 rounded-full '>Upwork</button></a>
              </div>
            </div>
          </div>
          <div className='hover:scale-110 transition duration-500 cursor-pointer rounded-3xl  w-[330px] py-4 bg-pink-200'>
            <h2 className='bg-pink-600 w-[200px] text-white p-3 mt-2 rounded-tr-3xl ml-[-10px]'>STANDARD</h2>
            <div className='flex flex-col items-center'>
              <h4 className=' w-fit mt-3'><strong>$14400</strong>/Year</h4>
              <ul className='mx-4'>
                <li className='flex gap-2  '>
                  <div> <IoCheckmarkCircle className='text-xl self-center' /></div> <p>Customized web development</p>
                </li>
                <li className='flex gap-2  mb-4'>
                  <div> <IoCheckmarkCircle className='text-xl self-center' /></div> Front-end-development
                </li>
                <li className='flex gap-2  mb-4'>
                  <div> <IoCheckmarkCircle className='text-xl self-center' /></div>Back-end-development

                </li>
                <li className='flex gap-2  mb-4'>
                  <div> <IoCheckmarkCircle className='text-xl self-center' /></div>Deployment
                </li>
                <li className='flex gap-2  mb-4'>
                  <div> <IoCheckmarkCircle className='text-xl self-center' /></div>Priority support

                </li>
                <li className='flex gap-2  mb-4'>
                  <div> <IoCheckmarkCircle className='text-xl self-center' /></div> Enhanced security measures
                </li>
                <li className='flex gap-2  mb-4'>
                  <div> <IoCheckmarkCircle className='text-xl self-center' /></div> Responsive design with advanced features
                </li>
              </ul>
              <div className='mt-[75px] flex gap-2'>
              <NavLink to="/contact">  <button className=' bg-violet-800 hover:font-semibold text-white p-2   px-4 rounded-full '>Contact</button></NavLink>
              <a  href="https://www.upwork.com/agencies/techcreator/"> <button className=' bg-violet-800 hover:font-semibold text-white p-2   px-4 rounded-full '>Upwork</button></a>
              </div>
            </div>
          </div>
          <div className='hover:scale-110  duration-500 cursor-pointer rounded-3xl  w-[330px] py-4 bg-violet-200'>
            <h2 className='bg-violet-600 w-[200px] text-white p-3 ml-[-10px] mt-2 rounded-tr-3xl'>PREMIUM</h2>
            <div className='flex flex-col items-center'>
              <h4 className=' w-fit mt-3'><strong>$21600</strong>/Year</h4>
              <ul className='mx-4 '>
                <li className='flex gap-2  '>
                  <div> <IoCheckmarkCircle className='text-xl  ' /></div><p> Comprehensive web development</p>
                </li>
                <li className='flex gap-2  mb-4'>
                  <div> <IoCheckmarkCircle className='text-xl self-center' /></div> Front-end-development
                </li>
                <li className='flex gap-2  mb-4'>
                  <div> <IoCheckmarkCircle className='text-xl self-center' /></div>Back-end-development
                </li>
                <li className='flex gap-2  mb-4'>
                  <div> <IoCheckmarkCircle className='text-xl self-center' /></div> Devops & Testing
                </li>

                <li className='flex gap-2  mb-4'>
                  <div> <IoCheckmarkCircle className='text-xl self-center' /></div>Exclusive features and integrations
                </li>
                <li className='flex gap-2  mb-4'>
                  <div> <IoCheckmarkCircle className='text-xl self-center' /></div>Priority access to new technologies
                </li>
                <li className='flex gap-2  mb-4'>
                  <div> <IoCheckmarkCircle className='text-xl self-center' /></div>Proactive security monitoring

                </li>
                <li className='flex gap-2  mb-4'>
                  <div> <IoCheckmarkCircle className='text-xl self-center' /></div>24/7 premium support

                </li>
              </ul>
              <div className=' flex gap-2'>
              <NavLink to="/contact">  <button className=' bg-violet-800 hover:font-semibold text-white p-2   px-4 rounded-full '>Contact</button></NavLink>
              <a  href="https://www.upwork.com/agencies/techcreator/"> <button className=' bg-violet-800 hover:font-semibold text-white p-2   px-4 rounded-full '>Upwork</button></a>
              </div>
            </div>
          </div>


        </div>
      </div >
      <div className='flex justify-center items-center flex-col py-5 mx-4'>
        <h1 className='text-center'>  Where Innovation Meets Affordability </h1>
        <p className='flex justify-self-center md:w-[800px] lead text-center mx-4 '>At TechCreator, we believe that cutting-edge technology shouldn't come with a hefty price tag. We are your gateway to a world of possibilities, offering unparalleled solutions at prices that won't leave your budget in the dust. </p>
        <div className='flex flex-col-reverse md:grid grid-cols-2 gap-5 mt-5  '>
          <div className=' md:w-[500px] flex justify-center '><img src={random} className='rounded-xl' alt="innovative" /></div>
          <div className=' md:w-[500px] flex flex-col justify-center mt-4 md:mt-0 '><h2>Innovation Unleashed</h2><p className='lead'> Dive into the future with our state-of-the-art products and services. From software development to hardware solutions, we are the architects of your digital dreams.</p></div>
        </div>
        <div className=' md:grid  md:grid-cols-2 gap-5 mt-5  '>
          <div className=' md:w-[500px] flex flex-col justify-center mt-4 md:mt-0  '><h2>Affordability Redefined</h2><p className='lead mb-5 md:mb-0'> At TechCreator, we understand the value of your hard-earned money. Our pricing is designed to give you maximum bang for your buck without compromising on quality. </p></div>
          <div className=' md:w-[500px] flex justify-center '><img src={ra} className='rounded-xl' alt="innovative" /></div>
        </div>
        <div className='flex flex-col-reverse md:grid grid-cols-2 gap-5 mt-5  '>
          <div className=' md:w-[500px] flex justify-center '><img src={ri} className='rounded-xl' alt="innovative" /></div>
          <div className=' md:w-[500px] flex flex-col justify-center mt-4 md:mt-0 '><h2>Tailored Packages</h2> <p className='lead'>No two businesses are the same, and neither are their tech needs. Our customizable packages ensure that you get precisely what you need, without paying for unnecessary bells and whistles.</p></div>
        </div>
        <div className=' md:grid grid-cols-2 gap-5 mt-5  '>
          <div className=' md:w-[500px] flex flex-col justify-center mt-4 md:mt-0 '><h2>Solutions for Every Scale</h2> <p className='lead mb-5 md:mb-0'>Whether you're a startup on the rise or an established enterprise, our pricing plans cater to businesses of all sizes. Grow with us, and let technology be the catalyst for your success.</p></div>
          <div className=' md:w-[500px] flex justify-center '><img src={solu} className='rounded-xl' alt="innovative" /></div>
        
        </div>
        <div className='flex flex-col-reverse md:grid grid-cols-2 gap-5 mt-5  '>
          <div className=' md:w-[500px] flex justify-center '><img src={secu} className='rounded-xl' alt="innovative" /></div>
          <div className=' md:w-[500px] flex flex-col justify-center mt-4 md:mt-0 '><h2>Security First</h2> <p className='lead'> Your data is precious, and we take its security seriously. With TechCreator, you can trust that your information is in safe hands, allowing you to focus on what matters most – your business.</p></div>
        </div>
      </div>

    </>
  )
}

export default Pricing
