import React from 'react';
import ReactDOM from 'react-dom/client';


//JSX Syntax 
// JSX is a syntax extension for JavaScript that looks similar to XML or HTML. It allows you to write HTML-like code within JavaScript, making it easier to create a nd manage UI components in React.

const heading =  <h1 id="heading" className="heading">Hello World!</h1>;

//babel transpiles the JSX code into JavaScript code that React can understand. The above JSX code will be transpiled to the following JavaScript code:

console.log(heading);
// The above code will 
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(heading);
