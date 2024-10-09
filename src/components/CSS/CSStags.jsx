import React from 'react';

function CSSTags() {
    return (
        <div className="md:absolute md:right-16 md:top-16 md:w-[70%] flex flex-col text-start mt-7 md:mt-0 p-6 md:p-0">
            <h1 className='text-3xl mt-10 font-bold'>Common CSS Properties</h1>
            <div>
                <h2 className='text-2xl mt-10 font-semibold'>Basic CSS Terminology</h2>
                <ul>
                    <li className="mt-5 text-md text-gray-300">Selector - A selector is a pattern used to select the elements you want to style. It can be based on tag names, classes, IDs, or other attributes.</li>
                    <li className="mt-5 text-md text-gray-300">Property - A property is a specific characteristic that you want to change, such as color, font-size, or margin. Each property has a corresponding value.</li>
                    <li className="mt-5 text-md text-gray-300">Value - A value is the setting you apply to a property, such as <code>red</code> for color or <code>20px</code> for font-size.</li>
                </ul>
            </div>
            <div>
                <h2 className='text-2xl mt-10 font-semibold'>Common CSS Properties</h2>
                <ul className="mt-5 text-md text-gray-300">
                    <li><code>color</code> - Sets the text color.</li>
                    <li><code>background-color</code> - Sets the background color of an element.</li>
                    <li><code>font-size</code> - Sets the size of the font.</li>
                    <li><code>margin</code> - Sets the space outside an element. Use <code>margin: auto;</code> for centering elements.</li>
                    <li><code>padding</code> - Sets the space inside an element, affecting the element's size.</li>
                    <li><code>border</code> - Sets the border around an element, allowing customization of width, style, and color.</li>
                    <li><code>display</code> - Defines how an element is displayed on the page (e.g., block, inline, flex, grid).</li>
                    <li><code>flex</code> - Applies flexbox layout to an element, enabling flexible designs.</li>
                    <li><code>grid</code> - Applies grid layout to an element, allowing complex layouts.</li>
                    <li><code>text-align</code> - Sets the horizontal alignment of text (left, right, center, justify).</li>
                    <li><code>overflow</code> - Controls what happens to content that overflows an element’s box (e.g., hidden, scroll, auto).</li>
                    <li><code>opacity</code> - Sets the transparency level of an element, from 0 (invisible) to 1 (fully visible).</li>
                    <li><code>transition</code> - Allows changes to property values to occur smoothly over a specified duration.</li>
                    <li><code>animation</code> - Creates animations by changing properties over time.</li>
                </ul>
            </div>
        </div>
    )
}

export default CSSTags;