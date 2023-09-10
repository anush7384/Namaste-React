import React from "react";
import ReactDOM from "react-dom/client";

const tree = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "Hello H1"),
    React.createElement("h2", {}, "Hello H2"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "Hello H1"),
    React.createElement("h2", {}, "Hello H2"),
  ]),
]);

const heading = React.createElement(
  "h1",
  { id: "heading", xyz: "abc" },
  "Hello world from React!"
);

console.log(tree); // object

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(tree);
