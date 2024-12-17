import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';
import './Docshome.css'

function Docshome() {
  return (
    <div className="  md:absolute  md:right-16 md:top-16 md:w-[70%]  flex flex-col  text-start mt-7 md:mt-0 p-6 md:p-0">
      <h1 className="text-4xl mt-10 font-bold">Welcome to Web Dev Docs</h1>
      <p className="mt-10">
        Welcome to your one-stop destination for all things web development!
        Whether you are a beginner just starting your coding journey or an
        experienced developer looking to brush up on the latest best practices,
        our comprehensive documentation covers everything you need.
      </p>

      <h2 className="text-2xl mt-10 font-semibold">Community and Support</h2>
      <p className="mt-5 text-md">
        Join our growing community of web developers! Visit our Community Forum
        to ask questions, share knowledge, and connect with other learners and
        professionals. Need help? Our Support Page offers resources and contact
        information for personalized assistance.
      </p>
      <h2 className="text-2xl mt-10 font-semibold">Why Choose Our Documentation?</h2>
      <p className="mt-5 text-md">
        <span> Comprehensive Guides: Detailed tutorials and examples for each topic.</span>
        <span className="block mt-1">Interactive Examples: Hands-on examples to practice and apply what
          you've learned.</span>
        <span className="block mt-1">Regular Updates: Stay up-to-date with the latest trends and best practices in web development.</span>
        <span className="block mt-1">Community Support: Join our community to get help, share knowledge, and collaborate on projects.</span>
        Community Support: Join our community to get help, share knowledge, and collaborate on projects.
      </p>
      <div>
        <NavLink className='content-w flex justify-center text-center gap-5 ' to='/html'>Getting Started with HTML  <div><FontAwesomeIcon icon={faArrowRight} /></div></NavLink>
      </div>
    </div>

  );
}

export default Docshome;
