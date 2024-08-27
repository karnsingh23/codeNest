import React from 'react'

function HTMLtags() {
  return (
    <div className="md:absolute  md:right-16 md:top-16 md:w-[70%]  flex flex-col  text-start mt-7 md:mt-0 p-6 md:p-0">
        <h1 className='text-3xl mt-10 font-bold'>Common HTML tags</h1>
        <div >
            <h2 className='text-2xl mt-10 font-semibold' >Enough of HTML that you need to know</h2>
            <p className="mt-5 text-md text-gray-300">
            First of all, remember we are not here to spend a month on HTML. We want to learn the basics and get out of here ASAP. HTML5 just adds a few new tags and attributes to HTML. Of course accessibility is a really long topic to be discussed but we will not be discussing it here. Accessibility is something that you will learn later, specially if you are planning to work on a web application with javascript or js frameworks.
            </p>
        </div>
        <div>
            <h2 className='text-2xl mt-10 font-semibold'>Basic terminology</h2>
            <ul>
                <li className="mt-5 text-md text-gray-300">Tag - A tag is a piece of text that is enclosed in angle brackets. It is used to define the structure of an HTML document.</li>
                <li className="mt-5 text-md text-gray-300">Attribute - An attribute is a piece of text that is placed inside the opening tag of an HTML element. It is used to provide additional information about the element.</li>
                <li className="mt-5 text-md text-gray-300">Element - An element is a piece of text that is enclosed in angle brackets and can have attributes. It is used to define the content of an HTML document.</li>
            </ul>
        </div>
        <div>
            <h2 className='text-2xl mt-10 font-semibold'>HTML tags for text</h2>
            <ul className="mt-5 text-md text-gray-300">
          <li><code>&lt;p&gt;</code> - Paragraph</li>
          <li><code>&lt;span&gt;</code> - Span</li>
          <li><code>&lt;div&gt;</code> - Div</li>
          <li><code>&lt;a&gt;</code> - Anchor</li>
          <li><code>&lt;img&gt;</code> - Image</li>
          <li><code>&lt;br&gt;</code> - Break</li>
          <li><code>&lt;hr&gt;</code> - Horizontal rule</li>
          <li><code>&lt;b&gt;</code> - Bold</li>
          <li><code>&lt;i&gt;</code> - Italic</li>
          <li><code>&lt;u&gt;</code> - Underline</li>
          <li><code>&lt;strong&gt;</code> - Strong</li>
          <li><code>&lt;em&gt;</code> - Emphasis</li>
          <li><code>&lt;code&gt;</code> - Code</li>
          <li><code>&lt;pre&gt;</code> - Preformatted text</li>
        </ul>
        </div>
    </div>
  )
}

export default HTMLtags