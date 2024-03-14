# Chapter 1: Inception

## What is Emmet?

Emmet is a web development tool that allows developers to write HTML and CSS code faster and more efficiently. It's a plugin for text editors and IDEs (Integrated Development Environments) like Visual Studio Code, Sublime Text, and Atom. Emmet uses abbreviation syntax to generate HTML and CSS code snippets quickly. For example, you can type something like ul>li\*5 and then expand it into an unordered list with five list items automatically. It's a handy tool for speeding up front-end web development workflows.

## Difference between a Library and Framework?

The main difference between a library and a framework lies in the control flow.

Library: A library is a collection of reusable code that you can call to perform specific tasks or functions. When you use a library, you are in control of the flow of your application. You decide when and how to use the functions or components provided by the library. Examples of libraries include React.js for building user interfaces, NumPy for numerical computing in Python, and jQuery for DOM manipulation in JavaScript.

Framework: A framework, on the other hand, provides a structure or scaffold for your application. In contrast to a library where you call its functions, with a framework, the control flow is inverted. The framework calls your code. It provides a skeleton where you plug in your code to customize the behavior. Frameworks often enforce a specific architecture and dictate how your application should be structured. Examples of frameworks include Django for web development in Python, AngularJS for building web applications in JavaScript, and Flask for web development in Python.

In summary, while both libraries and frameworks provide reusable code, the key distinction lies in who controls the flow of the application: with libraries, you control the flow, while with frameworks, the framework controls the flow and you plug in your code.

## CDN

stands for Content Delivery Network. It's a network of distributed servers strategically located across different geographic locations. The primary purpose of a CDN is to deliver web content (such as images, CSS files, JavaScript files, videos, and other static assets) to users more efficiently and reliably.

## cross-origin

In web development, "cross-origin" refers to interactions between different origins, where an origin is defined by the combination of protocol (HTTP, HTTPS), domain (example.com), and port (if specified). When a web page makes a request to a different origin (domain, protocol, or port) than the one from which it was served, it's considered a cross-origin request.

Cross-origin requests can occur in various scenarios, such as:

AJAX Requests: When JavaScript code running on a web page tries to make an XMLHttpRequest (XHR) or fetch API request to a different domain, it's a cross-origin request.

Embedded Resources: Loading resources like images, scripts, stylesheets, iframes, or fonts from a different origin is considered cross-origin.

API Calls: Calling a web service or API hosted on a different domain from a web application is also a cross-origin request.

Cross-origin requests are subject to browser security mechanisms known as the "same-origin policy." This policy is designed to prevent malicious websites from accessing sensitive data or executing unauthorized actions on behalf of users. By default, browsers restrict cross-origin requests initiated by scripts for security reasons.

To enable cross-origin requests, web servers can send specific HTTP headers, such as Access-Control-Allow-Origin, Access-Control-Allow-Methods, Access-Control-Allow-Headers, etc. These headers inform the browser whether the requested resource should be shared with the requesting origin.

Cross-origin resource sharing (CORS) is a mechanism that allows servers to specify which origins are permitted to access resources by including appropriate CORS headers in the HTTP responses. This mechanism provides a way for servers to relax the same-origin policy selectively and facilitate secure cross-origin communication between web applications.

In summary, "cross-origin" refers to interactions between different origins in web development, and cross-origin requests are subject to browser security mechanisms enforced by the same-origin policy. CORS is used to enable controlled access to resources across origins while maintaining security.

## Why is React known as React?

React, the JavaScript library for building user interfaces, is called "React" because of its core concept: reactive programming.

In reactive programming, the UI reacts to changes in data, meaning that when the underlying data changes, the user interface automatically updates to reflect those changes without the need for manual intervention. React utilizes a virtual DOM (Document Object Model) and a reconciliation algorithm to efficiently update the actual DOM based on changes in application state.

The name "React" reflects this reactive nature of the library. It emphasizes the idea that user interfaces should react dynamically to changes in data, providing a more responsive and interactive user experience. Additionally, "React" also suggests the idea of component-based architecture, where UI elements are broken down into reusable and composable components that react independently to changes in their state or props.

Overall, the name "React" encapsulates the core principles and philosophy of the library, highlighting its focus on reactive programming and component-based development.

## What is crossorigin in script tag?

The crossorigin attribute is used in the <script> tag when loading external scripts from different origins (domains) to specify how the browser should handle CORS (Cross-Origin Resource Sharing) requests for that script.

CORS is a security feature implemented by web browsers to prevent scripts hosted on one domain from making requests to resources hosted on another domain, unless explicitly allowed by the server hosting those resources.

The crossorigin attribute can take one of the following values:

anonymous: Indicates that the script should be fetched without sending any credentials (such as cookies or HTTP authentication). This is the default value if the attribute is present but has no value specified.

use-credentials: Indicates that the script should be fetched with credentials (such as cookies or HTTP authentication) if the requesting origin has appropriate permissions.

For example:

html
Copy code

<script src="https://example.com/script.js" crossorigin="anonymous"></script>

By setting crossorigin="anonymous", you're indicating to the browser that the script should be fetched without including any credentials, even if the user is logged in to the site hosting the script. This is suitable for public resources where you don't need to send cookies or other credentials.

If you need to include credentials, you can set crossorigin="use-credentials". This might be necessary if the script needs access to user-specific data from the server hosting the script.

Setting the crossorigin attribute appropriately helps prevent CORS-related security issues and ensures proper handling of requests between different origins.

## What is diference between React and ReactDOM

React and ReactDOM are closely related libraries, both developed and maintained by Facebook, but they serve different purposes in the React ecosystem.

React: React is a JavaScript library for building user interfaces. It provides a declarative and component-based approach to building UIs, allowing developers to create reusable UI components and manage application state efficiently. React is responsible for defining and rendering components, handling component lifecycle, managing state and props, and facilitating the flow of data within the application. It's essentially the core library that enables you to write React applications.

ReactDOM: ReactDOM is a package that provides React-specific methods for working with the DOM (Document Object Model). It serves as the glue between React components and the DOM, allowing React to interact with the browser environment. ReactDOM provides methods for rendering React components into the DOM, updating component state, handling events, and managing the component lifecycle. It's specifically tailored for web development and enables React components to be displayed in a web browser.

In summary, React is the core library for building user interfaces using a component-based approach, while ReactDOM provides the necessary functionality to render React components into the browser DOM and interact with the browser environment. You typically use both React and ReactDOM together when developing web applications with React. However, if you're building applications for other platforms, such as mobile or desktop, you might use different libraries or frameworks in conjunction with React.

## What is difference between react.development.js and react.production.js files via CDN

The difference between react.development.js and react.production.js files via CDN lies in their intended use cases and optimizations for development and production environments, respectively.

react.development.js:

This file is meant for development purposes. It includes additional debugging information and warnings, making it easier for developers to identify and fix issues during development.
It typically contains extra error checking, helpful warnings, and console messages aimed at aiding development and debugging.
The file size is usually larger compared to the production version since it includes extra code for debugging purposes.

react.production.js:

This file is optimized for production use. It removes development-specific code, warnings, and console messages to minimize file size and improve performance.
It's stripped of any development-only features and optimizations to reduce the size of the JavaScript bundle, making it more suitable for deployment in production environments.
The file size is smaller compared to the development version, helping to optimize page load times and improve overall performance for end-users.
When deploying a React application to a production environment, it's recommended to use the react.production.js file to benefit from the optimizations and reduced file size. During development, however, the react.development.js file is more appropriate for its additional debugging features and error checking capabilities, which aid in the development and debugging process.

Therefore, the choice between react.development.js and react.production.js via CDN depends on whether you're working in a development or production environment, and you should use the appropriate version accordingly.

## What is async and defer?

async and defer are attributes used in HTML <script> tags to control how scripts are loaded and executed in web pages. They affect the order in which scripts are fetched and executed, as well as their impact on page loading and rendering.

async:
When you include the async attribute in a <script> tag, it indicates to the browser that the script should be downloaded asynchronously while the HTML parsing continues.
Asynchronous scripts do not block the HTML parsing and rendering process. Instead, they're fetched concurrently with other resources, and once fetched, they execute immediately, potentially interrupting HTML parsing and rendering.
The order in which asynchronous scripts are executed is not guaranteed. They may execute as soon as they're fetched, regardless of their position in the HTML document.
This attribute is suitable for scripts that don't depend on the page's structure or other scripts and can be executed independently.
Example:

html
Copy code

<script src="script.js" async></script>

defer:
The defer attribute, similar to async, also allows scripts to be fetched asynchronously. However, it ensures that the script is executed only after the HTML parsing is complete but before the DOMContentLoaded event fires.
Deferred scripts are fetched in parallel with HTML parsing but are executed in the order they appear in the document, just before the closing </body> tag.
Unlike asynchronous scripts, deferred scripts do not interrupt the HTML parsing and rendering process. They're executed after the document has been parsed, which can improve page load times and perceived performance.
This attribute is useful for scripts that need to access or manipulate the DOM but don't need to execute immediately.
Example:

html
Copy code

<script src="script.js" defer></script>

In summary, async and defer attributes in <script> tags provide ways to control the loading and execution behavior of scripts in web pages. async allows for asynchronous downloading and immediate execution, while defer ensures deferred execution after HTML parsing, improving page load times and performance.
