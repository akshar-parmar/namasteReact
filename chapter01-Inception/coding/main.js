const sectionElement = React.createElement(
  "section",
  {
    className: "js-section",
  },
  React.createElement(
    "h1",
    { className: "heading" },
    "Javascript library and framework"
  ),
  React.createElement(
    "ul",
    {
      className: "list-lib-framework",
    },
    React.createElement("li", { className: "list-item" }, "react.js"),
    React.createElement("li", { className: "list-item" }, "angular"),
    React.createElement("li", { className: "list-item" }, "vue")
  )
);

const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(sectionElement);