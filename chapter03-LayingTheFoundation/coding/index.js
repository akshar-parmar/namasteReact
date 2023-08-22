import React from "react";
import ReactDOM from "react-dom/client";

 const root = ReactDOM.createRoot(document.querySelector("#root"));

// const header = React.createElement('div',
// {
//     className: "title",

// },
// [
//     React.createElement('h1',{},"i am h1"),
//     React.createElement('h2',{},"i am h2"),
//     React.createElement('h3',{},"i am h3"),
    
// ]
// );

// const header2 = (
//     <div className ="title">
//         <h1>i am h1</h1>
//         <h2>i am h2</h2>
//         <h3>i am h2</h3>
//     </div>
// );

const HeaderComponent = ()=>{
    return (
        <div className ="title" key = "div">
        <h1 key = "h1">i am h1</h1>
        <h2 key = "h2">i am h2</h2>
        <h3 key = "h3">i am h3</h3>
    </div>
    );
};

root.render(<HeaderComponent/>);

