import React from "react";
import ReactDOM from "react-dom/client";
const root = ReactDOM.createRoot(document.querySelector("#root"));
const heading = <h1>Hello</h1>;

const ChildComponent = ()=>{
    return (
        <h1>Inside Child Component</h1>
    );
}
const ChildOfChildComponent = ()=>{
    return(
        <p>this is child of child</p>
    );
}
const ParentComponent = ()=>{
    return (
        <>
        <h1>Inside Parent Component</h1>
        <ChildComponent/>
        <ChildOfChildComponent/>
        {heading}
        </>
    );
}
root.render(<ParentComponent/>);