import React from 'react';
import ReactDOM from 'react-dom/client';


//JSX Syntax 
// JSX is a syntax extension for JavaScript that looks similar to XML or HTML. It allows you to write HTML-like code within JavaScript, making it easier to create and manage UI components in React.

const heading = <h3 id="heading" className="heading">THIS IS A REACT ELEMENT</h3>;
//babel transpiles the JSX code into JavaScript code that React can understand. The above JSX code will be transpiled to the following JavaScript code:

// function component is a function that returns a React element. The function name should start with an uppercase letter to indicate that it is a component. The component can be used in JSX like this: <ComponentName />.

const HeadingComponent = () => (
  <div id="headingComponentdiv" className="headingComponentDiv">
   <h2 id="headingComponent" className="headingComponent">THIS IS A REACT HEADING COMPONENT </h2>
   </div>
);
const Title = function(){ 
  return (
  <div id="container" className="container">
    {heading}
  {HeadingComponent()}
  <h1 id="Title" className="TitleComp">THIS IS A REACT COMPONENT that has other component</h1>
</div>
);
}


// The above code will 
const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(<Title/>);
