import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

function CSS() {
    return (
        <div className="md:absolute md:right-16 md:top-16 md:w-[70%] flex flex-col text-start mt-7 md:mt-0 p-6 md:p-0">
            <h1 className='text-3xl mt-10 font-bold'>Getting started with CSS</h1>
            <div>
                <h2 className='text-2xl mt-10 font-semibold'>What is CSS?</h2>
                <p className="mt-5 text-md text-gray-300">CSS stands for Cascading Style Sheets. It is a stylesheet language used to describe the presentation of a document written in HTML or XML. CSS controls the layout, colors, fonts, and overall visual style of web pages, allowing developers to create visually appealing designs.</p>
            </div>
            <div>
                <h2 className='text-2xl mt-10 font-semibold'>What is CSS3?</h2>
                <p className="mt-5 text-md text-gray-300">CSS3 is the latest version of CSS, introducing new features such as transitions, animations, and flexbox. It enhances the way developers style web pages, providing more control over layouts and designs. CSS3 also includes media queries for responsive design, allowing styles to adapt to different screen sizes.</p>
            </div>
            <div>
                <h2 className='text-2xl mt-10 font-semibold'>How much CSS do I need to know?</h2>
                <p className="mt-5 text-md text-gray-300">Understanding the basics of CSS is essential for web development. A weekend is usually sufficient to grasp foundational concepts. Focus on selectors, properties, and layout techniques. As you progress, you can explore more advanced topics like CSS Grid and Flexbox for complex layouts.</p>
            </div>
            <div>
                <h2 className='text-2xl mt-10 font-semibold'>CSS Preprocessors</h2>
                <p className="mt-5 text-md text-gray-300">CSS preprocessors like SASS and LESS allow developers to write CSS in a more dynamic way. They support features like variables, nesting, and mixins, making CSS more maintainable and modular. Preprocessors help streamline the development process, especially for larger projects.</p>
            </div>
            <div>
                <h2 className='text-2xl mt-10 font-semibold'>Recommended CSS frameworks</h2>
                <ol className="mt-5 text-md">
                    <li>Bootstrap - A popular CSS framework that helps create responsive designs quickly.</li>
                    <li>Tailwind CSS - A utility-first CSS framework that allows for rapid UI development.</li>
                    <li>Foundation - A responsive front-end framework that offers flexible grid layouts.</li>
                    <li>Bulma - A modern CSS framework based on Flexbox.</li>
                </ol>
            </div>
            <div>
                <h2 className='text-2xl mt-10 font-semibold'>Best Practices</h2>
                <p className="mt-5 text-md text-gray-300">When writing CSS, it’s essential to follow best practices for maintainability. Use comments to explain sections of your code, employ a consistent naming convention (like BEM), and structure your stylesheets logically. Keep your CSS organized and modular to facilitate collaboration and future updates.</p>
            </div>
            <NavLink className='content-w flex justify-center text-center gap-5' to='/csstags'>Common CSS Properties <div><FontAwesomeIcon icon={faArrowRight} /></div></NavLink>
        </div>
    )
}

export default CSS;