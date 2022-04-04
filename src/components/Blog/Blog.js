import React from 'react';

const Blog = () => {
    return (
        <div>
          <div>
                <h2 className='text-danger'>What is Context API?</h2>
                <p>Sometime we need to pass same data from a parent to many others component. In that case we have to share data one by one and destructuring them.But if we use context API then we can do this just by creating context and then call it to every component. So we can say The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.</p>
          </div>

          <div>
                <h2 className='text-danger'>What is Semantic Tag?</h2>
                <p>Semantic Tag is the tag which we use in HTML for showing the design in ui.It makes HTML more comprehensible by better defining the different sections and layout of web pages. The core characteristic of a semantic element is that it clearly communicated its meaning to both the developer and the browser. These elements clearly define its content. Some semantic tags are header,nav,aside and more and more</p>
          </div>

          <div>
                <h2 className='text-danger '>Difference between Inline and Inline block element</h2>
                <div className='d-flex justify-content-between container'>
                <div className='w-50 text-start'>
                    <h3>Inline Elements</h3>
                    <li>An inline element does not start on a new line.</li>
                    <li>An inline element only takes up as much width as necessary.</li>
                    <li>By default, inline elements do not force a new line to begin in the document flow.</li>
                </div>
                <div className='w-50 text-start'>
                    <h3>Block-level Elements</h3>
                    <li>Block level elements can not break among the lines</li>
                    <li>A block-level element always starts on a new line, and the browsers automatically add some space (a margin) before and after the element.</li>
                    <li>A block-level element always takes up the full width available (stretches out to the left and right as far as it can).</li>
                </div>
                </div>
          </div>
        </div>
    );
};

export default Blog;