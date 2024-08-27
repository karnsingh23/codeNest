import React from 'react'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
function HTML() {
  return (
    <div className="md:absolute  md:right-16 md:top-16 md:w-[70%]  flex flex-col  text-start mt-7 md:mt-0 p-6 md:p-0">
      <h1 className='text-3xl mt-10 font-bold'>Getting started with HTML</h1>
      <div>
        <h2 className='text-2xl mt-10 font-semibold'>What is HTML?</h2>
        <p className="mt-5 text-md text-gray-300">HTML stands for HyperText Markup Language. It is a markup language used to create web pages. It is used to define the structure of a web page, including the content, layout, and style.</p>
      </div>
      <div>
        <h2 className='text-2xl mt-10 font-semibold'>What is HTML5?</h2>
        <p className="mt-5 text-md text-gray-300">HTML5 is a version of HTML that is designed to be backwards compatible with older versions of HTML. It includes new features and improvements that make it easier to create and maintain web pages. In short, some new tags and attributes are added to HTML5 to make it more user-friendly and easier to use.</p>
      </div>
      <div>
        <h2 className='text-2xl mt-10 font-semibold'>How much HTML do I need to know?</h2>
        <p className="mt-5 text-md text-gray-300">You just need to know the basics of HTML. You should not spend more than a weekend to learn HTML. Just get the basics done and you will be good to go.</p>
      </div>
      <div>
        <h2 className='text-2xl mt-10 font-semibold'>Text/code Editor vs Word processor</h2>
        <p className="mt-5 text-md text-gray-300">Text editors are used to write and edit text files. Specially code editros comes with features like syntax highlighting, auto-completion, and code formatting.Word processors are used to create and edit documents. They are used to create documents like books, reports, and presentations.You need a code editor to write HTML code.</p>
      </div>
      <div>
        <h2 className='text-2xl mt-10 font-semibold'>Recommended code editor extensions</h2>
        <ol className="mt-5 text-md">
          <li>HTML Snippets</li>
          <li>Live Server</li>
        </ol>
      </div>
      <div>
        <h2 className='text-2xl mt-10 font-semibold'>EMMIT HTML</h2>
        <p className="mt-5 text-md text-gray-300">To create a new HTML file, open a text editor and create a new file with the .html extension. By default for all HTML files, emmit is enabled in VS Code as default. Emmit is used to produce code faster with shortcuts. No one nowadays writes HTML code by hand. Emmit takes care of it for you. Spend some time to get used to it. Visit Emmit for more information.</p>
      </div>
          <NavLink className='content-w flex justify-center text-center gap-5 ' to='/htmltags' >Common HTML Tags <div><FontAwesomeIcon icon={faArrowRight} /></div></NavLink>
    </div>
  )
}

export default HTML