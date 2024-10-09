import React from 'react';

function ReactTags() {
    return (
        <div className="md:absolute md:right-16 md:top-16 md:w-[70%] flex flex-col text-start mt-7 md:mt-0 p-6 md:p-0">
            <h1 className='text-3xl mt-10 font-bold'>Common React Concepts</h1>
            <div>
                <h2 className='text-2xl mt-10 font-semibold'>Basic React Terminology</h2>
                <ul>
                    <li className="mt-5 text-md text-gray-300">Component - A reusable piece of UI that can accept inputs (props) and returns React elements. Components can be class-based or functional.</li>
                    <li className="mt-5 text-md text-gray-300">State - An object that determines how that component renders and behaves. State is managed within the component and can change over time.</li>
                    <li className="mt-5 text-md text-gray-300">Props - Short for properties, props are read-only inputs that are passed from parent to child components.</li>
                    <li className="mt-5 text-md text-gray-300">Lifecycle Methods - Methods that allow you to hook into different phases of a component's lifecycle, useful for managing side effects.</li>
                </ul>
            </div>
            <div>
                <h2 className='text-2xl mt-10 font-semibold'>Common React Patterns</h2>
                <ul className="mt-5 text-md text-gray-300">
                    <li><code>Functional Components</code> - Components defined as JavaScript functions, often utilizing hooks for state and lifecycle management.</li>
                    <li><code>Class Components</code> - Traditional way to define components using ES6 classes; can manage state and lifecycle methods.</li>
                    <li><code>Higher-Order Components (HOCs)</code> - Functions that take a component and return a new component, enabling code reuse.</li>
                    <li><code>Render Props</code> - A technique for sharing code between components using a prop that is a function.</li>
                </ul>
            </div>
        </div>
    )
}

export default ReactTags;