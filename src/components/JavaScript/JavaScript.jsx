import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

function JavaScript() {
    return (
        <div className="md:absolute md:right-16 md:top-16 md:w-[70%] flex flex-col text-start mt-7 md:mt-0 p-6 md:p-0">
            <h1 className='text-3xl mt-10 font-bold'>Getting started with JavaScript</h1>
            <div>
                <h2 className='text-2xl mt-10 font-semibold'>What is JavaScript?</h2>
                <p className="mt-5 text-md text-gray-300">JavaScript is a high-level, interpreted programming language that is widely used for creating interactive and dynamic content on the web. It allows developers to implement complex features on web pages, such as form validation, animations, and asynchronous requests.</p>
            </div>
            <div>
                <h2 className='text-2xl mt-10 font-semibold'>What is ECMAScript?</h2>
                <p className="mt-5 text-md text-gray-300">ECMAScript is the standard specification for JavaScript. It defines the core features of the language, and JavaScript implementations typically adhere to this standard. The most recent versions, ES6 (2015) and later, introduced significant improvements like arrow functions, classes, and modules.</p>
            </div>
            <div>
                <h2 className='text-2xl mt-10 font-semibold'>How much JavaScript do I need to know?</h2>
                <p className="mt-5 text-md text-gray-300">A solid understanding of JavaScript basics is essential for web development. Focus on variables, functions, control structures, and DOM manipulation. Advanced topics include asynchronous programming, promises, and the use of frameworks like React or Vue.js.</p>
            </div>
            <div>
                <h2 className='text-2xl mt-10 font-semibold'>JavaScript in Web Development</h2>
                <p className="mt-5 text-md text-gray-300">JavaScript plays a crucial role in web development. It runs in the browser, allowing for client-side scripting, and can be used with server-side technologies like Node.js. With frameworks and libraries, JavaScript can enhance user experience and streamline development processes.</p>
            </div>
            <div>
                <h2 className='text-2xl mt-10 font-semibold'>Recommended JavaScript Libraries and Frameworks</h2>
                <ol className="mt-5 text-md">
                    <li>React - A library for building user interfaces, particularly single-page applications.</li>
                    <li>Vue.js - A progressive framework for building user interfaces.</li>
                    <li>Angular - A platform for building mobile and desktop web applications.</li>
                    <li>jQuery - A fast, small, and feature-rich JavaScript library.</li>
                </ol>
            </div>
            <div>
                <h2 className='text-2xl mt-10 font-semibold'>Best Practices</h2>
                <p className="mt-5 text-md text-gray-300">When coding in JavaScript, adhere to best practices for maintainability. Use meaningful variable names, write modular code, and comment your code for clarity. Understanding asynchronous programming, debugging techniques, and testing frameworks will also greatly enhance your development process.</p>
            </div>
            <NavLink className='content-w flex justify-center text-center gap-5' to='/jstags'>Common JavaScript Concepts <div><FontAwesomeIcon icon={faArrowRight} /></div></NavLink>
        </div>
    )
}

export default JavaScript;