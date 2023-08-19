import React from "react";
import ReactDOM from "react-dom/client";
const root = ReactDOM.createRoot(document.querySelector("#root"));


const h1Element = React.createElement("h1",{className : "heading"},"main heading");
const h2Element = React.createElement("h2",{className : "sub-heading"},"sub heading");
const container = React.createElement("div",{className:"container-div"},[h1Element,h2Element]);

root.render(container);


