import React from "react";
import ReactDOM from "react-dom/client";

//React Element
const Title = () => (
  <h1 className="head" id="heading">
    Namaste React using JSX
  </h1>
);

// React Functional Component
// Component Composition
const HeadingComponent = () => (
  <div id="container">
    <Title />
    <h1 className="heading">Namaste React from functional component</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
