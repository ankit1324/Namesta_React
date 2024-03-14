# Chapter 3: Laying the foundation {JSX}

## JSX

JSX (JavaScript XML) is a syntax extension for JavaScript often used with React to describe what the UI should look like. Here's an overview of some of the concepts you've mentioned:

## React.createElement vs JSX

React.createElement: This is the traditional way to create React elements in JavaScript. It's a function that takes three arguments: the type of element (such as a string for HTML tags or a component function), properties (or "props"), and children.

Example:

javascript
Copy code
React.createElement('div', { className: 'container' }, 'Hello, world!');
JSX: JSX is a syntactic sugar for React.createElement. It allows you to write HTML-like syntax within JavaScript code, which gets transformed into React.createElement calls during the build process.

Example:

```JSX
<div className="container">Hello, world!</div>
```

## Benefits of JSX

Readability: JSX makes the code more readable, especially for those familiar with HTML.
Maintainability: JSX facilitates writing and maintaining UI components.
Expressiveness: JSX allows embedding JavaScript expressions directly within the markup, making it more expressive.

## Behind the Scenes of JSX

Babel: Babel is a JavaScript compiler that transforms JSX syntax into JavaScript that browsers can understand. It's often used in React projects to compile JSX code.
Parcel: Parcel is a web application bundler that can also handle JSX transformation as part of its build process.

Components:
Components: In React, components are the building blocks of UI. They can be either functional or class-based.

## Functional Components

These are JavaScript functions that accept props and return JSX.

Example:

```jsx
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
```

## Composing Components

React components can be composed together to build complex UIs. This means you can use one component within another to create a hierarchy of UI elements.

Example:

```jsx
function App() {
  return (
    <div>
      <Welcome name="Alice" />
      <Welcome name="Bob" />
    </div>
  );
}
```

JSX, along with React's component-based architecture, simplifies the process of building and maintaining user interfaces in web applications.
