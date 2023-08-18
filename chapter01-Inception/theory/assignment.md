
## Assignment

#### What is emmet?
emmet is an extension using we can generate html css using some short cut. For eg: ! press Enter the HTML boiler plate is ready.
if you want a div with class heading we can easily do it with emmet with much faster way div.heading, it will create <div class ="heading"></div>

source : https://medium.com/@kartik2406/web-development-with-vs-code-part-1-emmet-6af80f0f630c




#### Difference between Library and Framework ?
Library and framework both are set of prewritten code which is written by someone else. Library is used for specific task.
For eg:toUpperCase() is a function of string library.
Framework are used for building application.
The main difference between library and framework is inversion of control.Thus, the key difference is in the “Inversion of Control”, commonly called as IoC. When we call a method from a library, we are in control. But in framework, the control is inverted i.e. the framework calls us. It defines a skeleton where the application defines its own features to fill out the skeleton.

source : https://www.geeksforgeeks.org/software-framework-vs-library/




#### What is CDN? Why do we use it?
Content delivery network (CDN) refers to a geographically distributed group of servers that work together to provide fast delivery of Internet content. The main use of a CDN is to deliver content through a network of servers in a secure and efficient way.



#### Why is React known as React?

React is named React because of its ability to react to changes in data. React is called React because it was designed to be a declarative, efficient, and flexible JavaScript library for building user interfaces. The name React was chosen because the library was designed to allow developers to "react" to changes in state and data within an application, and to update the user interface in a declarative and efficient manner. React is a JavaScript-based UI development library. Facebook and an open-source developer community run it.
source :https://www.technigo.io/explained/what-is-react

#### What is crossorigin in script tag?
The crossorigin attribute sets the mode of the request to an HTTP CORS Request. The purpose of crossorigin attribute is used to share the resources from one domain to another domain. Basically, it is used to handle the CORS request. It is used to handle the CORS request that checks whether it is safe to allow for sharing the resources from other domains.



#### What is diference between React and ReactDOM
React and ReactDOM both are javascript library. React is used to create react elements using React.createElement("type", {props}, [children]). Now we want to display it on browser then ReactDOM is useful because it has render method using which you can run react application. ReactDOM is responsible for rendering the react element inside root

https://www.geeksforgeeks.org/how-react-and-reactdom-works/



#### Difference between async and defer in script tag?
Using the async and defer attributes in the <script> tag can help control the execution order of your scripts and ensure that your JavaScript code doesn't block the rendering of the page. Here's how you can use them:

async: When you add the async attribute to a <script> tag, it tells the browser to fetch and execute the script asynchronously, without blocking the rendering of the page. The script will be executed as soon as it's downloaded, regardless of the order in which it appears in the HTML.

defer: When you add the defer attribute to a <script> tag, it tells the browser to download the script while parsing the HTML, but defer its execution until after the HTML parsing is complete. Scripts with the defer attribute maintain their order of appearance in the HTML.

[![Screenshot-68.png](https://i.postimg.cc/rsWtqDxQ/Screenshot-68.png)](https://postimg.cc/kRJ5cXjb)

#### What is difference between react.development.js and react.production.js files via CDN?
Development is the stage of an application before it's made public while production is the term used for the same application when it's made public. Development build is several times (maybe 3-5x) slower than the production build.

