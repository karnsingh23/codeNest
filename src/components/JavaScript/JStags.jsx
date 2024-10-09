import React from 'react';

function JStags() {
    return (
        <div className="md:absolute md:right-16 md:top-16 md:w-[70%] flex flex-col text-start mt-7 md:mt-0 p-6 md:p-0">
            <h1 className='text-3xl mt-10 font-bold'>Common JavaScript Concepts</h1>
            <div>
                <h2 className='text-2xl mt-10 font-semibold'>Basic JavaScript Terminology</h2>
                <ul>
                    <li className="mt-5 text-md text-gray-300">Variable - A variable is a named storage for data. Use <code>let</code>, <code>const</code>, or <code>var</code> to declare variables.</li>
                    <li className="mt-5 text-md text-gray-300">Function - A function is a block of code designed to perform a specific task. Functions can take parameters and return values.</li>
                    <li className="mt-5 text-md text-gray-300">Object - An object is a collection of properties, where each property is a key-value pair.</li>
                    <li className="mt-5 text-md text-gray-300">Array - An array is a special type of object used to store multiple values in a single variable.</li>
                </ul>
            </div>
            <div>
                <h2 className='text-2xl mt-10 font-semibold'>Common JavaScript Concepts</h2>
                <ul className="mt-5 text-md text-gray-300">
                    <li><code>DOM Manipulation</code> - The Document Object Model (DOM) represents the structure of a document. JavaScript can manipulate the DOM to change content, structure, and styles dynamically.</li>
                    <li><code>Event Handling</code> - JavaScript can respond to user interactions like clicks, keypresses, and mouse movements by attaching event listeners to elements.</li>
                    <li><code>Asynchronous Programming</code> - JavaScript can handle asynchronous operations using callbacks, promises, and async/await syntax, allowing non-blocking code execution.</li>
                    <li><code>JSON</code> - JavaScript Object Notation (JSON) is a lightweight data interchange format commonly used for APIs and configuration files.</li>
                    <li><code>Modules</code> - ES6 introduced modules, which allow developers to break their code into reusable components, improving organization and maintainability.</li>
                </ul>
            </div>
        </div>
    )
}

export default JStags;