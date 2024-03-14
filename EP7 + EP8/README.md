# EPISODE - 7

# What are various ways to add images into our App? Explain with code examples

In React, there are several ways to add images to your app. Here are a few methods along with code examples:

### Importing images directly into your component

You can import images directly into your component and use them as a local file reference.

```jsx
import React from "react";
import logo from "./logo.png"; // Assuming logo.png is in the same directory as this component

const MyComponent = () => {
  return (
    <div>
      <img src={logo} alt="Logo" />
    </div>
  );
};

export default MyComponent;
```

### Using dynamic URLs or paths

You can store image URLs or paths in your component's state or props and use them dynamically.

```jsx
import React from "react";

const MyComponent = ({ imageUrl }) => {
  return (
    <div>
      <img src={imageUrl} alt="Image" />
    </div>
  );
};

export default MyComponent;
```

Then, when using the component, pass the image URL as a prop:

```jsx
import React from "react";
import MyComponent from "./MyComponent";

const App = () => {
  const imageUrl = "https://example.com/image.jpg";

  return (
    <div>
      <MyComponent imageUrl={imageUrl} />
    </div>
  );
};

export default App;
```

### Using public folder

You can place your images in the public folder of your React app and reference them directly.

```jsx
import React from "react";

const MyComponent = () => {
  return (
    <div>
      <img src="/logo.png" alt="Logo" />
    </div>
  );
};

export default MyComponent;
```

Ensure that your images are placed in the public directory of your React project.

Each method has its own use case, depending on your project's requirements. Choose the one that best fits your needs.

# What would happen if we do console.log(useState())?

If you call console.log(useState()), you will see an array with two elements logged to the console. The first element of the array is the state value itself, and the second element is a function that allows you to update that state value.

Here's a breakdown of what you'll see:

```javascript
console.log(useState());
```

Output:

bash
`[initialStateValue, function]`

- initialStateValue: This is the initial value of the state. If you don't provide any initial value to useState, it will be undefined.
  function: This is the updater function that you can use to update the state value. When you call this function with a new value, React will re-render the component with the updated state.
  For example, if you have:

```javascript
const [count, setCount] = useState(0);
console.log(useState());
```

Output:

`[0, function]`

This indicates that the current state of count is 0, and setCount is the function you can use to update the count state.

# How will useEffect behave if we don't add a dependency array ?

If you don't add a dependency array to the useEffect hook, it will run the effect on every render. This means that the effect will execute after every render cycle of the component, including the initial render and subsequent updates.

Here's an example:

```javascript
import React, { useEffect } from "react";

const MyComponent = () => {
  useEffect(() => {
    console.log("Effect ran");
  });

  return <div>My Component</div>;
};

export default MyComponent;
```

In this example, the useEffect hook is used without a dependency array. Therefore, the effect will run after every render of MyComponent. So, you will see 'Effect ran' logged to the console on the initial render and every subsequent re-render of the component.

Adding an empty dependency array [] would ensure that the effect runs only once, similar to componentDidMount in class components, as it would not have any dependencies to trigger re-runs.

```javascript
useEffect(() => {
  console.log("Effect ran");
}, []);
```

In this case, 'Effect ran' will be logged only once, after the initial render of the component.

# What is SPA?

SPA stands for Single Page Application. It's a web application or website that interacts with the user by dynamically rewriting the current page rather than loading entire new pages from the server. In an SPA, the initial HTML, CSS, and JavaScript are loaded once when the user first accesses the application, and subsequent interactions with the application are handled by JavaScript.

### Some key characteristics of SPAs include

- Dynamic Content Loading: SPAs load content dynamically, usually using AJAX or Fetch API calls, and update the DOM without requiring a full page reload.

- Smooth User Experience: Since only portions of the page are updated, transitions between views can be smoother and faster compared to traditional multi-page applications.

- Improved Performance: SPAs can feel faster because they only load the necessary resources for the initial page load, and subsequent interactions with the application fetch data asynchronously without reloading the entire page.

- Client-Side Routing: SPAs often implement client-side routing, where the URL changes based on user interactions, but the server is not involved in handling these route changes. Libraries like React Router and Vue Router are commonly used for this purpose.

- Separation of Concerns: SPAs typically follow a more modular architecture, with a clear separation between the front-end (presentation layer) and back-end (data layer) of the application.

Popular JavaScript frameworks and libraries like React.js, Angular, and Vue.js are commonly used to build SPAs, providing developers with tools and utilities to efficiently manage state, handle routing, and create interactive user interfaces.

# What is difference between Client Side Routing and Server Side Routing?

Client-side routing and server-side routing refer to different approaches for handling navigation and routing within web applications.

## Client-Side Routing

In client-side routing, the routing logic and navigation are handled entirely on the client-side, typically within the web browser. When a user interacts with the application by clicking on links or buttons that trigger navigation, JavaScript running in the browser updates the application's UI accordingly without making requests to the server for new HTML pages.

### Key characteristics of client-side routing include

- Faster Navigation: Since only the necessary data is fetched from the server (e.g., JSON or other data formats), navigation between views within the application can be faster compared to server-side routing, which requires loading entire HTML pages.

- Smooth Transitions: Client-side routing allows for smooth transitions between views within the application without full page reloads, providing a more seamless user experience.

- Better Performance: With client-side routing, the initial page load may be faster because only minimal HTML, CSS, and JavaScript need to be loaded. Subsequent interactions with the application can also be faster due to partial updates of the DOM.

Popular JavaScript libraries and frameworks like React Router, Vue Router, and Angular Router are commonly used for implementing client-side routing in web applications.

## Server-Side Routing

In server-side routing, the routing logic and navigation are handled on the server. When a user requests a new page or resource, the server determines which HTML page or resource to send back to the client based on the requested URL. Each navigation action typically results in a new request being sent to the server, and the server responds with a complete HTML page.

### Key characteristics of server-side routing include

- Full Page Reloads: With server-side routing, navigating between different views or pages within the application typically results in full page reloads, as the server sends back complete HTML pages in response to each navigation action.

- Slower Performance: Server-side routing can lead to slower performance, especially for applications with complex navigation or large amounts of data, because each navigation action requires a round-trip to the server to fetch a new HTML page.

- SEO Benefits: Server-side rendering (SSR) can provide better search engine optimization (SEO) benefits compared to client-side rendering, as search engine crawlers can more easily index the content of server-rendered pages.

Server-side routing is commonly used in traditional multi-page applications (MPAs) and is still prevalent in many web applications, especially those built with server-side frameworks like Ruby on Rails, Django, and Laravel. However, modern web development practices often combine server-side routing with client-side routing for better performance and user experience.

# Chapter 08 - Let's get Classy

# How do you create Nested Routes react-router-dom cofiguration

To create nested routes using react-router-dom, you'll typically have a parent component that renders <Route> components for its children. Here's a basic example of how you can set up nested routes:

```jsx
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Components for nested routes
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Profile from "./components/Profile";
import Settings from "./components/Settings";

const App = () => {
  return (
    <Router>
      <Switch>
        {/* Parent Route */}
        <Route exact path="/" component={Home} />

        {/* Nested Routes */}
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />

        {/* Another Nested Route with Sub-Routes */}
        <Route
          path="/profile"
          render={() => (
            <Profile>
              {/* Sub-Routes inside Profile component */}
              <Route path="/profile/settings" component={Settings} />
            </Profile>
          )}
        />
      </Switch>
    </Router>
  );
};

export default App;
```

In this example:

The App component contains the `<Router>` component which wraps the entire application.
Inside `<Switch>`, each `<Route>` component defines a route and renders a specific component when that route matches the current URL.
/profile is a parent route that renders the Profile component.
Inside Profile, /profile/settings is a nested route which renders the Settings component.
Make sure that the nested routes are placed inside the components they belong to. In this case, the Settings component should be rendered within the Profile component's JSX structure.

## with new 6 version of react router dom

With version 6 of react-router-dom, the approach to nested routes has changed slightly. Instead of nesting `<Route>` components directly inside each other, you'll use the `<Routes>` component to define routes at different levels of your application hierarchy. Here's how you can create nested routes with version 6:

```jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components for nested routes
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Profile from "./components/Profile";
import Settings from "./components/Settings";

const App = () => {
  return (
    <Router>
      <Routes>
        {/_Parent Route_/}
        <Route path="/" element={<Home />} />

        {/* Nested Routes */}
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        {/* Another Nested Route with Sub-Routes */}
        <Route path="/profile" element={<Profile />}>
          {/* Sub-Routes inside Profile component */}
          <Route path="/settings" element={<Settings />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
```

In this example:

We use `<Routes>` instead of `<Switch>`.
Each `<Route>` component defines a route path and specifies the element prop, which indicates the component to render when that route matches.
Nested routes are defined by placing `<Route>`components inside the parent route's component. This is achieved using the JSX syntax within the element prop.

`/profile/settings` is a nested route within the Profile component.

This structure allows for more flexibility and readability when dealing with nested routes in your React application using react-router-dom version 6.

# Read abt createHashRouter, createMemoryRouter from React Router docs

In React Router, createHashRouter and createMemoryRouter are alternative router implementations provided by the library. These routers offer different functionalities and use cases compared to the more common BrowserRouter. Here's a brief overview of each:

### createHashRouter

createHashRouter is used to create a router that uses the hash portion of the URL to keep the UI in sync with the URL. This is particularly useful in scenarios where you need to support older browsers that don't support the HTML5 History API for routing.

- Here's how you can use createHashRouter:

```jsx
import { createHashRouter, Routes, Route } from "react-router-dom";

const HashRouter = createHashRouter();

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </HashRouter>
  );
}
```

## createMemoryRouter

createMemoryRouter creates a router that doesn't use the URL to keep the UI in sync with the URL. Instead, it keeps the router state in memory. This is useful for scenarios such as server-side rendering, testing, or building applications that don't rely on the URL for navigation.

- Here's how you can use createMemoryRouter:

```jsx
import { createMemoryRouter, Routes, Route } from "react-router-dom";

const MemoryRouter = createMemoryRouter();

function App() {
  return (
    <MemoryRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </MemoryRouter>
  );
}
```

Both createHashRouter and createMemoryRouter work similarly to BrowserRouter. You use them to wrap your application's routes and components, and they provide routing functionality to your application based on the chosen approach (hash-based or memory-based). Choose the appropriate router based on your application's requirements and constraints.

# What is the order of life cycle method calls in Class Based Components

In class-based components in React, the lifecycle methods are called in a specific order during the component's lifecycle. Here's the order of the lifecycle methods:

## Mounting Phase

- constructor(): This is called when the component is initialized. You should initialize state and bind event handlers here.
- static getDerivedStateFromProps(): This is called before rendering when new props are received. It returns an object to update the state, or null to indicate no changes are necessary.
- render(): This is required and returns the JSX to be rendered.
- componentDidMount(): This is called after the component is mounted (inserted into the DOM tree).

You can perform tasks such as fetching data from an API here.

## Updating Phase

- static getDerivedStateFromProps(): This is called as part of the updating process, similar to its use in the mounting phase.
- shouldComponentUpdate(): This is called before rendering when new props or state are received. It returns true if the component should update, and false otherwise (for optimization purposes).
- render(): This re-renders the component with updated props or state.
  getSnapshotBeforeUpdate(): This is called right before the changes from the virtual DOM are to be reflected in the DOM. It allows you to capture some information from the DOM before it is potentially changed.
- componentDidUpdate(): This is called after the component is updated in the DOM.

You can perform additional tasks after the component is re-rendered here.

## Unmounting Phase

- componentWillUnmount(): This is called immediately before a component is unmounted (removed from the DOM tree). You can perform cleanup tasks such as cancelling timers or network requests here.
  Error Handling:

- static getDerivedStateFromError(): This is called when there is an error during rendering, allowing the component to update its state to display an error UI.
  componentDidCatch(): This is called after an error has been thrown by a descendant component.

It's important to note that with the introduction of hooks in React, class-based components are becoming less common, and functional components with hooks are preferred. Hooks provide a simpler and more composable way to manage component lifecycle and state.

# Why do we use componentDidMount?

The componentDidMount() lifecycle method is used in React class-based components to perform tasks that require interaction with the browser DOM or external resources after the component has been rendered for the first time. It's invoked immediately after a component is mounted (i.e., inserted into the DOM tree).

## Here are some common use cases for componentDidMount()

- Data fetching: You can use componentDidMount() to fetch data from an API or perform any asynchronous operation needed for the component. Since componentDidMount() is called after the initial render, it ensures that the component is already in the DOM, making it a suitable place for data fetching.

- DOM manipulation: If you need to interact with the DOM directly, such as adding event listeners, modifying elements, or accessing the dimensions of DOM elements, componentDidMount() is the appropriate place to do so. This ensures that the DOM elements exist before you attempt to manipulate them.

- Subscribing to events or timers: You can subscribe to global events or start timers (such as setInterval) inside componentDidMount(). This is useful for setting up event listeners or timers that need to be active only while the component is mounted.

- Integrating with third-party libraries: If you're using third-party libraries that require access to the DOM or need to be initialized after the component is mounted, you can do so in componentDidMount(). Examples include initializing a charting library, a map component, or a video player.

Here's a basic example illustrating the use of componentDidMount() for data fetching:

```javascript
class MyComponent extends React.Component {
  componentDidMount() {
    // Fetch data from an API
    fetch("<https://api.example.com/data>")
      .then((response) => response.json())
      .then((data) => {
        // Update component state with fetched data
        this.setState({ data });
      })
      .catch((error) => {
        // Handle errors
        console.error("Error fetching data:", error);
      });
  }

  render() {
    return <div>{/_Render component content_/}</div>;
  }
}
```

By using `componentDidMount()`, you ensure that the component's side effects, such as data fetching or DOM manipulation, occur only after the component has been fully rendered and mounted into the DOM, providing a consistent and predictable behavior in your application.

# Why do we use componentWillUnmount? Show with example

The `componentWillUnmount()` lifecycle method in React class-based components is used for cleanup tasks that need to be performed when a component is about to be removed from the DOM tree. It's invoked immediately before a component is unmounted.

## Here are some common use cases for componentWillUnmount()

- Cleanup tasks: You can use componentWillUnmount() to clean up any resources or subscriptions created during the component's lifecycle. This could include clearing intervals or timeouts, unsubscribing from event listeners, or cancelling network requests.

- Memory management: If your component creates any resources or subscriptions that are not automatically garbage collected when the component is removed from the DOM, componentWillUnmount() provides an opportunity to release those resources to prevent memory leaks.

- Avoiding memory leaks: In scenarios where components create long-lived resources or subscriptions, failing to clean them up when the component is unmounted can lead to memory leaks and degraded performance over time. componentWillUnmount() helps prevent this by providing a designated place for cleanup logic.

Here's an example demonstrating the use of componentWillUnmount() to unsubscribe from an event listener:

```javascript
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    this.timerId = null;
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    // Start a timer when the component is mounted
    this.timerId = setInterval(() => {
      this.setState((prevState) => ({
        count: prevState.count + 1,
      }));
    }, 1000);
  }

  componentWillUnmount() {
    // Cleanup: stop the timer when the component is unmounted
    clearInterval(this.timerId);
  }

  handleClick() {
    // Example method that might be invoked during component lifecycle
    // This method is not directly related to componentWillUnmount(),
    // but it's just to demonstrate a method call in the component
    console.log("Button clicked");
  }

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.handleClick}>Click me</button>
      </div>
    );
  }
}
```

In this example:

`componentDidMount()` starts a timer using `setInterval()` when the component is mounted.
`componentWillUnmount()` cleans up the timer by calling `clearInterval()` when the component is about to be unmounted, ensuring that the timer is stopped and preventing any memory leaks.
This pattern ensures that resources associated with the component are properly released when the component is no longer needed, improving the overall performance and stability of the application.

# Why do we use super(props) in constructor?

In React class-based components, super(props) is used in the constructor to call the constructor of the parent class (React.Component). It's required when you define a constructor in a subclass (a component class that extends React.Component) and need to access the this.props object inside the constructor or when you need to initialize state using this.state.

### Here's why super(props) is used

- Accessing props in the constructor: In React, props are passed to components as arguments. When you define a constructor in a subclass, you may want to access these props using this.props. However, in JavaScript, you must call super() before accessing this in the constructor of a subclass. By calling super(props), you ensure that the parent constructor (React.Component) is called with the props, allowing you to access this.props inside the constructor.

- Initializing state: If you need to initialize the component's state using props (for example, setting the initial state based on props), you'll need to pass props to super() so that this.props is properly initialized before accessing it.

### Here's an example to illustrate the usage of super(props)

```javascript
class MyComponent extends React.Component {
  constructor(props) {
    // Call the constructor of the parent class with props
    super(props);
    // Initialize state based on props
    this.state = {
      initialValue: props.initialValue,
    };
  }

  render() {
    return (
      <div>
        <p>Initial value: {this.state.initialValue}</p>
      </div>
    );
  }
}
```

In this example:

`super(props)` calls the constructor of the parent class `(React.Component)` with the props argument.
This allows us to access this.props inside the constructor to initialize the component's state based on the props passed to it.

Without `super(props)`, this.props would be undefined inside the constructor, potentially leading to errors when trying to access props or initialize state based on props. Therefore, it's important to include `super(props)` in the constructor of a subclass whenever you define a constructor in a React class-based component.

# Why can't we have the callback function of useEffect async?

In React, the useEffect hook is used to perform side effects in function components. The callback function passed to useEffect cannot be declared as async directly for a couple of reasons:

- Return Value: The callback function passed to useEffect can optionally return a cleanup function. If the callback function is declared as async, it implicitly returns a promise. React does not support returning promises from the useEffect callback because it expects either a cleanup function or nothing at all.

- Execution Timing: React expects that any cleanup functions returned from useEffect are synchronous. If the callback function is declared as async, the cleanup function returned by it would also be a promise, and React may not handle it correctly or in the desired order.

To work around this limitation, you can create an inner asynchronous function inside the useEffect callback and call it immediately:

```jsx
useEffect(() => {
  const fetchData = async () => {
    // Asynchronous operations
    try {
      const data = await fetchDataFromAPI();
      // Update state or perform other operations
    } catch (error) {
      // Handle errors
    }
  };

  fetchData();

  // Optionally return a cleanup function
  return () => {
    // Cleanup logic
  };
}, [dependencies]);
```

In this pattern:

We define an inner asynchronous function fetchData.
We immediately invoke `fetchData()` inside the useEffect callback.

The fetchData function can now safely use async/await syntax to perform asynchronous operations.
This way, we can achieve the behavior of an asynchronous useEffect callback without directly marking the callback function as async. It maintains the expected behavior of useEffect, where the return value can be a cleanup function or nothing at all.
