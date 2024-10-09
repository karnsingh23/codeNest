import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

function ReactDoc() {
    return (
        <div className="md:absolute md:right-16 md:top-16 md:w-[70%] flex flex-col text-start mt-7 md:mt-0 p-6 md:p-0">
            <h1 className='text-3xl mt-10 font-bold'>Getting started with React</h1>
            <div>
                <h2 className='text-2xl mt-10 font-semibold'>What is React?</h2>
                <p className="mt-5 text-md text-gray-300">React is a JavaScript library for building user interfaces. It allows developers to create single-page applications with a component-based architecture, making it easy to manage and reuse UI elements.</p>
            </div>
            <div>
                <h2 className='text-2xl mt-10 font-semibold'>Why Use React?</h2>
                <p className="mt-5 text-md text-gray-300">React offers a virtual DOM for improved performance, supports reusable components, and provides a declarative approach to building user interfaces. Its ecosystem includes tools and libraries that enhance development efficiency.</p>
            </div>
            <div>
                <h2 className='text-2xl mt-10 font-semibold'>Creating a React Application</h2>
                <p className="mt-5 text-md text-gray-300">You can create a React application using various tools, with Create React App and Vite being the most popular options. Both tools streamline the setup process but have different features and performance characteristics.</p>
            </div>
            <div>
                <h2 className='text-2xl mt-10 font-semibold'>Create React App</h2>
                <p className="mt-5 text-md text-gray-300">Create React App is an officially supported way to create single-page React applications. It sets up a modern web development environment with no configuration required.</p>
                <h3 className='text-xl mt-8 font-semibold'>Installation Process</h3>
                <ol className="mt-5 text-md">
                    <li>Open your terminal.</li>
                    <li>Run: <code>npx create-react-app my-app</code></li>
                    <li>Navigate into the project directory: <code>cd my-app</code></li>
                    <li>Start the development server: <code>npm start</code></li>
                </ol>
            </div>
            <div>
                <h2 className='text-2xl mt-10 font-semibold'>Vite</h2>
                <p className="mt-5 text-md text-gray-300">Vite is a next-generation frontend tool that offers a faster development experience. It uses native ES modules in the browser and has an extremely fast hot module replacement (HMR).</p>
                <h3 className='text-xl mt-8 font-semibold'>Installation Process</h3>
                <ol className="mt-5 text-md">
                    <li>Open your terminal.</li>
                    <li>Run: <code>npm create vite@latest my-app</code></li>
                    <li>Navigate into the project directory: <code>cd my-app</code></li>
                    <li>Install dependencies: <code>npm install</code></li>
                    <li>Start the development server: <code>npm run dev</code></li>
                </ol>
            </div>
            <div>
                <h2 className='text-2xl mt-10 font-semibold'>Key Differences</h2>
                <ul className="mt-5 text-md text-gray-300">
                    <li><strong>Setup Speed:</strong> Vite is generally faster to set up and run, especially for larger projects.</li>
                    <li><strong>Hot Module Replacement:</strong> Vite’s HMR is faster, providing a better development experience.</li>
                    <li><strong>Build Size:</strong> Vite often produces smaller bundle sizes compared to Create React App.</li>
                </ul>
            </div>
            <NavLink className='content-w flex justify-center text-center gap-5' to='/reacttags'>Common React Concepts <div><FontAwesomeIcon icon={faArrowRight} /></div></NavLink>
        </div>
    )
}

export default ReactDoc;