# Chapter 06 - Exploring the world

## What is a Microservice?

A microservice is a software development technique where an application is structured as a collection of small, loosely coupled services. Each service is responsible for a specific business function and can be developed, deployed, and scaled independently. Microservices architecture typically emphasizes modularity, flexibility, and resilience, making it easier to maintain and update large, complex systems. This approach contrasts with monolithic architectures, where the entire application is developed and deployed as a single unit.

## What is Monolith architecture

Monolithic architecture is a traditional software design approach where an entire application is built as a single, self-contained unit. In a monolithic architecture, all components of the application, including the user interface, business logic, and data access layers, are tightly integrated and deployed together. This means that any changes or updates to one part of the application require redeploying the entire application.

Monolithic architectures are typically characterized by their simplicity, as all components are developed using the same programming language and technology stack. However, they can become difficult to maintain and scale as the application grows in size and complexity. Additionally, deploying changes to a monolithic application can be risky, as any errors or issues introduced during deployment can affect the entire application.

While monolithic architectures have been widely used for many years, they are increasingly being replaced by more modern approaches, such as microservices architecture, which offer greater flexibility, scalability, and resilience.

## What is the difference between Monolith and Microservice?

Monolithic architecture and microservices architecture represent two different approaches to designing and building software systems. Here are some key differences between the two:

- Size and Complexity:

Monolithic architecture: In a monolithic architecture, the entire application is developed as a single, self-contained unit. All components, including the user interface, business logic, and data access layers, are tightly integrated.
Microservices architecture: In a microservices architecture, the application is decomposed into a collection of small, loosely coupled services, each responsible for a specific business function. These services communicate with each other through well-defined APIs.
Deployment and Scalability:

Monolithic architecture: In a monolithic architecture, the entire application is deployed as a single unit. Scaling individual components can be challenging, as all components must scale together.
Microservices architecture: In a microservices architecture, services can be deployed and scaled independently. This allows for more granular control over resource allocation and can improve overall system scalability and performance.
Development and Maintenance:

Monolithic architecture: Development in a monolithic architecture is typically simpler, as all components are developed using the same programming language and technology stack. However, as the application grows in size and complexity, maintaining and updating the monolith can become challenging.
Microservices architecture: Development in a microservices architecture can be more complex, as developers need to design and implement communication protocols between services. However, microservices offer greater flexibility and modularity, making it easier to maintain and update individual components without impacting the entire system.

- Resilience and Fault Isolation:

Monolithic architecture: In a monolithic architecture, a failure in one component can potentially bring down the entire application.
Microservices architecture: In a microservices architecture, failures are isolated to individual services, allowing the rest of the system to continue functioning. This can improve overall system resilience and fault tolerance.
Overall, while monolithic architectures offer simplicity and ease of development, microservices architectures provide greater flexibility, scalability, and resilience, making them a popular choice for building modern, distributed software systems.

## Why do we need a useEffect Hook?

The useEffect hook in React is used to perform side effects in function components. Side effects can include data fetching, subscriptions, or manually changing the DOM in ways that React components don't handle automatically.

Here's why we need the useEffect hook:

- Lifecycle Management: In class components, lifecycle methods like componentDidMount, componentDidUpdate, and componentWillUnmount are used to manage side effects. The useEffect hook provides a way to perform similar tasks in function components.

- Avoiding Infinite Loops: When updating the state in a component, it can cause re-renders, which might trigger the useEffect hook again, leading to an infinite loop. The useEffect hook allows you to specify dependencies, ensuring that the effect runs only when certain values have changed.

- Managing Side Effects: Side effects such as data fetching, subscribing to events, or manually changing the DOM need to be executed after the component has rendered. The useEffect hook allows you to perform these side effects after the render is committed to the screen.

- Cleanup: Some side effects require cleanup when the component is unmounted or when dependencies change. The useEffect hook allows you to return a cleanup function to perform these cleanup tasks.

- Declarative Code: Using the useEffect hook makes your code more declarative and easier to understand. Instead of scattering side effect logic across different lifecycle methods, you can colocate it with the relevant component logic.

Overall, the useEffect hook is an essential tool for managing side effects and lifecycle events in function components in React. It provides a clean and concise way to incorporate side effects into your components while ensuring that your code remains easy to understand and maintain.

## What is Optional Chaining?

Optional chaining is a feature introduced in ECMAScript 2020 (also known as ES11) and is supported in modern JavaScript environments. It provides a concise and safe way to access properties or methods of an object without the need for explicit null or undefined checks.

In traditional JavaScript, if you try to access a property or method of an object that may be null or undefined, you would typically have to perform checks to avoid runtime errors:

```javascript
if (obj && obj.prop && obj.prop.method) {
    // Access obj.prop.method safely
}
With optional chaining, you can simplify this code by using the ?. syntax:

javascript
Copy code
if (obj?.prop?.method) {
    // Access obj.prop.method safely
}
```

If any part of the chain (obj, prop, or method) is null or undefined, the expression will short-circuit, and the result will be undefined, without throwing an error. This makes the code more concise and readable, especially when dealing with deeply nested objects or when chaining multiple property accesses.

Optional chaining can also be used to safely access array elements:

```javascript
const array = [1, 2, 3];
console.log(array?.[0]); // Output: 1
console.log(array?.[5]); // Output: undefined
```

This feature simplifies code and reduces the need for verbose null or undefined checks, making JavaScript code more concise and easier to maintain. However, it's essential to ensure that your code is running in an environment that supports optional chaining or use a transpiler like Babel to convert the code to older JavaScript versions for broader compatibility.

## What is Shimmer UI?

Shimmer UI, also known as Skeleton UI or Skeleton Screens, is a technique used in user interface design to provide users with visual feedback while content is loading. Instead of displaying a blank or empty space, a shimmer effect is used to simulate the appearance of content being loaded gradually.

A shimmer effect typically consists of a subtle animation where placeholder shapes or lines move across the screen in a wave-like pattern. These placeholders mimic the layout of the actual content, giving users a sense of progress and continuity while they wait for the data to load.

Shimmer UIs are commonly used in web and mobile applications, especially in scenarios where there may be a delay in fetching content from a server or when loading large amounts of data asynchronously. By providing users with a visual indication of progress, Shimmer UIs can help reduce perceived loading times and improve the overall user experience.

In summary, Shimmer UIs are a design pattern used to enhance user experience by displaying animated placeholder content while actual content is being loaded. They help maintain user engagement and provide feedback during loading processes.

## What is the difference between JS expression and JS statement

In JavaScript, expressions and statements are both fundamental building blocks of code, but they serve different purposes and behave differently. Here's the difference between them:

- JavaScript Expression:

An expression is any valid unit of code that produces a value. It can be a combination of variables, operators, and function calls that evaluate to a single value.
Examples of expressions:
`5 + 3 (evaluates to 8)`
`myVariable`
`myFunction()`
`5 > 3 (evaluates to true)`

- JavaScript Statement:

A statement is a complete instruction that performs an action. It doesn't necessarily produce a value. Statements can include declarations, loops, conditionals, and function calls.
Examples of statements:

```javascript
Variable declaration: let x = 5;
Function declaration: function myFunction() { ... }
Conditional statement: if (x > 5) { ... }
Loop statement: for (let i = 0; i < 5; i++) { ... }
Function call: console.log("Hello, world!");
```

In summary, expressions produce values, while statements perform actions. An expression can be a part of a statement, but a statement cannot be a part of an expression. Understanding the distinction between expressions and statements is crucial for writing effective and maintainable JavaScript code.

## What is Conditional Rendering, explain with a code example

Conditional rendering in JavaScript refers to the practice of displaying different UI elements or content based on certain conditions. This is commonly used in web development to show or hide components, display alternative content, or apply different styles based on user input or application state.

Here's a simple example of conditional rendering in React, a popular JavaScript library for building user interfaces:

```javascript
import React, { useState } from "react";

function App() {
  // Define a state variable to track whether the user is logged in
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Function to handle login/logout
  const handleLoginToggle = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <div>
      <h1>Conditional Rendering Example</h1>
      {/_Conditional rendering based on isLoggedIn state_/}
      {isLoggedIn ? (
        <div>
          <p>Welcome, User! You are logged in.</p>
          <button onClick={handleLoginToggle}>Logout</button>
        </div>
      ) : (
        <div>
          <p>Please log in to continue.</p>
          <button onClick={handleLoginToggle}>Login</button>
        </div>
      )}
    </div>
  );
}

export default App;
```

In this example:

We use the useState hook from React to define a state variable isLoggedIn, initialized to false.
We define a function handleLoginToggle that toggles the isLoggedIn state when called.
Inside the return statement, we use curly braces {} to perform conditional rendering based on the value of isLoggedIn.
If isLoggedIn is true, we render a welcome message and a logout button. Otherwise, we render a message prompting the user to log in and a login button.
Clicking the login/logout button triggers the handleLoginToggle function, which updates the isLoggedIn state, causing the UI to re-render with the appropriate content.
This example demonstrates how conditional rendering can be used to dynamically display different content based on the application's state or user interaction.

## What is CORS?

CORS stands for Cross-Origin Resource Sharing. It is a security feature implemented by web browsers to restrict web applications from making requests to resources on a different domain than the one that served the original web page.

When a web page hosted on one domain tries to make a request to a resource (such as an API endpoint) on a different domain, the browser typically blocks the request for security reasons. This is known as the Same-Origin Policy, which is a fundamental security concept in web browsers to prevent certain types of attacks, such as cross-site scripting (XSS) and cross-site request forgery (CSRF).

CORS allows servers to specify which origins are allowed to access their resources through HTTP headers. When a web application makes a cross-origin request, the browser sends a preflight request (an HTTP OPTIONS request) to the server to determine whether the cross-origin request is allowed. The server then responds with appropriate CORS headers, indicating whether the request is permitted or not.

The main CORS headers include:

- Access-Control-Allow-Origin: Specifies which origins are allowed to access the resource. This header can be set to a specific origin, '\*', or a list of allowed origins.
- Access-Control-Allow-Methods: Specifies the HTTP methods (e.g., GET, POST, PUT, DELETE) allowed when accessing the resource.
- Access-Control-Allow-Headers: Specifies which headers are allowed in the actual request.
- Access-Control-Allow-Credentials: Indicates whether the browser should include credentials (e.g., cookies, HTTP authentication) in the request.
- Access-Control-Expose-Headers: Specifies which headers are exposed to the browser in the response.
  By configuring these CORS headers on the server, web developers can control and manage cross-origin requests, allowing safe communication between web applications hosted on different domains while maintaining security.

## What is async and await?

async and await are keywords introduced in ECMAScript 2017 (ES8) to simplify asynchronous JavaScript code and make it easier to work with promises.

async: The async keyword is used to define a function as asynchronous. An async function always returns a promise. Inside an async function, you can use the await keyword to pause execution and wait for a promise to resolve before continuing.

```javascript
async function fetchData() {
  const response = await fetch("<https://api.example.com/data>");
  const data = await response.json();
  return data;
}
```

await: The await keyword can only be used inside an async function. It pauses the execution of the async function until the promise is settled (either resolved or rejected). When awaiting a promise, the async function will wait for the promise to resolve and return its resolved value. If the promise is rejected, it will throw an error that you can catch using a try-catch block.

```javascript
async function fetchData() {
  try {
    const response = await fetch("<https://api.example.com/data>");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}
```

By using async and await, you can write asynchronous code in a more synchronous style, making it easier to read and understand, especially when dealing with multiple asynchronous operations that depend on each other. This makes asynchronous JavaScript code feel more like traditional synchronous code while retaining the benefits of non-blocking behavior.

## What is the use of `const json = await data.json();` in getRestaurants()

In the context of the `getRestaurants()` function, the line const `json = await data.json();` is used to parse the response data from a network request as JSON. Let's break down what each part of this line does:

data.json(): This is a method provided by the Fetch API, commonly used to extract the response body as JSON. The json() method returns a promise that resolves with the JSON representation of the response body. It reads the response stream to completion and parses the response body as JSON.

await: The await keyword is used inside an async function to pause the execution of the function until the promise returned by data.json() is settled (i.e., until it resolves or rejects). While waiting for the promise to resolve, the event loop is freed up to handle other tasks, making the function non-blocking.

const json: Once the promise returned by data.json() is resolved, the result (which is the parsed JSON data) is assigned to the variable json. This variable then holds the JSON data retrieved from the network request, which can be used further in the function.

In summary, the line const json = await data.json(); in the getRestaurants() function is used to asynchronously fetch and parse the response data from a network request, allowing the function to work with the JSON data retrieved from the server.
