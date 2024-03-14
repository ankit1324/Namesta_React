## What is prop drilling?

Prop drilling is a term commonly used in the context of React.js, a JavaScript library for building user interfaces. It refers to the practice of passing down data (props) from a parent component to deeply nested child components through intermediary components that do not actually use the data themselves.

For example, imagine you have a hierarchy of components: ParentComponent -> IntermediateComponent -> ChildComponent. If ChildComponent needs some data that is held in ParentComponent, but IntermediateComponent doesn't use that data, you might pass the data down through IntermediateComponent as a prop just to make it accessible to ChildComponent. This passing of props through intermediary components, even though they don't directly use the props themselves, is what is referred to as prop drilling.

Prop drilling can lead to code that is harder to maintain and understand, especially as the application grows larger and the component hierarchy becomes more complex. It can also make it difficult to refactor components or change the structure of the application.

To avoid prop drilling, developers often use other techniques like context API, Redux, or other state management libraries to make data accessible to components without having to pass it down through multiple layers of the component tree. These techniques provide a centralized way to manage and access state or data across components without relying on prop drilling.

## What is lifting the state up?

"Lifting state up" is another concept commonly used in React.js development. It refers to the practice of moving the state from a child component to a parent component in order to share that state among multiple components or to manage it at a higher level in the component hierarchy.

When a piece of state is lifted up from a child component to a parent component, the parent component becomes responsible for managing that state, and it can pass down the state and any necessary functions or callbacks as props to its child components.

This pattern is often used when multiple components need access to the same state or when a component's state needs to be synchronized with the state of its siblings or parent components.

By lifting state up, developers can simplify their code, reduce duplication, and make it easier to manage and reason about the application's state. It also promotes better separation of concerns by keeping related state and behavior in higher-level components rather than scattering them across multiple child components.

## What is Context Provider and Context Consumer?

In React.js, the Context API provides a way to pass data through the component tree without having to pass props down manually at every level. It consists of two main components: the Context Provider and the Context Consumer.

Context Provider:
The Context Provider is a component that allows its child components to subscribe to a particular context and receive updates whenever the context value changes.
It accepts a value prop which is the data that it wants to provide to its descendant components.
The Context Provider wraps around a portion of the component tree and makes the context value available to all components within that tree.
It's typically placed higher up in the component hierarchy to provide the context data to a broader range of components.
Example:

```jsx
const MyContext = React.createContext();

function App() {
  const contextValue = "Hello from Context";
  return (
    <MyContext.Provider value={contextValue}>
      <ChildComponent />
    </MyContext.Provider>
  );
}
Context Consumer:
```

The Context Consumer is a component that subscribes to a context provided by a Context Provider and accesses the context value.
It allows components to access the context value without the need for prop drilling.
The Context Consumer is typically used within the render method of a component that needs to access the context data.
Example:

```jsx
function ChildComponent() {
  return (
    <MyContext.Consumer>{(value) => <div>{value}</div>}</MyContext.Consumer>
  );
}
```

In this example, ChildComponent is a consumer of the MyContext context. It receives the context value passed by the nearest MyContext.Provider ancestor and renders it within a div.

By using the `Context API`, you can avoid prop drilling and manage global state or shared data more efficiently within your React application.

## If you don’t pass a value to the provider does it take the default value?

Yes, if you don't pass a value to the Provider, it will take the default value specified when creating the context using `React.createContext(defaultValue)`.

For example:

```jsx
const MyContext = React.createContext("default value");

function App() {
  return (
    <MyContext.Provider>
      <ChildComponent />
    </MyContext.Provider>
  );
}
```

In this case, since no value prop is provided to the `MyContext.Provider`, it will use the default value `"default value"` that was specified when creating the context. Any consumers of MyContext within the subtree of MyContext.Provider that do not have a matching Provider ancestor will use this default value.
