import React from "react";
import ReactDOM from "react-dom/client";

//JSX (transpiled before it reaches the JS) - PARCEL - Babel

//JSX =>React.createElement => ReactElement-JS Object => HTMLelement(render)
//Babel is doing this conversion from JSX to React.createElement

const jsxHeading = (
  <h1 className="head" id="heading">
    Namaste React using JSX :)
  </h1>
);

console.log(jsxHeading);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(jsxHeading);
