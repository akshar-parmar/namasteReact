
## Assignment 3

## What is `JSX`?
`JSX` is a HTML like syntax , we are able to use markup and logic both beacause of jsx syntax. JSX under the hood uses React.createElement only. `Babel` is a modern javascript compiler which compiles jsx and transform it to browser compatible `javascript`
JSX produces `react elements`.

[![jsx.png](https://i.postimg.cc/y8BHrfbV/jsx.png)](https://postimg.cc/56PTXmJG)

Babel is like a black box it takes modern javascript code eg jsx and gives us browser compatible code.

jsx->React.createElement ->create a object ->HTML ->DOM

### Example 1 : Using JSX
```sh

const root = ReactDOM.createRoot(document.querySelector(".root"));
const heading = (
    <h1 className="greeting">
        Hello there
    </h1>
);
root.render(heading);

```
### Example 2 : without using  JSX
```sh

const root = ReactDOM.createRoot(document.querySelector(".root"));
const heading = React.createElement("h1",{className :"greeting","Hello there"});
root.render(heading);

```

learn more about jsx:
source :https://legacy.reactjs.org/docs/introducing-jsx.html




## Superpowers of JSX?
JSX (JavaScript XML) is a syntax extension for JavaScript often used with libraries like React to define the structure and layout of user interfaces. It allows you to write HTML-like code within your JavaScript files, making it easier to create and manage UI components. 

 1. **Readability and Familiarity**: JSX syntax closely resembles HTML, making it easier for developers familiar with HTML to understand and work with it. This improves the readability of code, especially for those transitioning from web development backgrounds.

2. **Component-Based Development**: JSX allows you to define UI components as functions or classes, making it simple to reuse and nest components. This promotes modular and structured development, making it easier to manage complex UIs.

3. **Dynamic Content Integration**: You can embed JavaScript expressions within JSX using curly braces `{}`. This enables dynamic content rendering, where you can integrate variables, calculations, and other JavaScript logic directly into your UI components.

```jsx
const name = "John";
const element = <h1>Hello, {name}!</h1>;
```

4. **Babel Compilation**: JSX code is not natively understood by browsers. It needs to be transformed into regular JavaScript using tools like Babel before being executed in the browser. This compilation step enables modern syntax to be used in older environments.

5. **Improved Development Workflow**: JSX integrates seamlessly with tooling like code editors, syntax highlighting, and linting tools, which aids in catching errors and maintaining code quality.


7. **Preventing Injection Attacks**: By default, JSX escapes any values inserted into the DOM, helping to prevent cross-site scripting (XSS) attacks.

8. **Conditional Rendering**: You can use JavaScript's conditional statements within JSX to control when and what elements are rendered based on specific conditions.

```jsx
const isLoggedIn = true;
const element = isLoggedIn ? <p>Welcome back!</p> : <p>Please log in.</p>;
```

9. **Event Handling**: JSX supports adding event handlers directly to elements, making it straightforward to attach functions that respond to user interactions.

```jsx
function handleClick() {
  alert('Button clicked!');
}

const element = <button onClick={handleClick}>Click me</button>;
```




## Role of type attribute in script tag? What options can I use there?
A: The `type` attribute specifies the type of the script. The type attribute identifies the content between the `<script>` and `</script>` tags. It has a Default value which is “text/javascript”.
### `type` attribute can be of the following types:
- `text/javascript` : It is the basic standard of writing javascript code inside the `<script>` tag.
    ### Syntax
    ```
    <script type="text/javascript"></script>
    ```
- `text/ecmascript` : this value indicates that the script is following the `EcmaScript` standards.
- `module`: This value tells the browser that the script is a module that can import or export other files or modules inside it.
- `text/babel` : This value indicates that the script is a babel type and required bable to transpile it.
- `text/typescript`: As the name suggest the script is written in `TypeScript`.


