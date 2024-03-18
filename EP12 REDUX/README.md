![Redux Notes](/Theory-Redux.png)

# REDUX TOOLKIT

- Install redux-toolkit & react-redux
- Build our Store
- Connect our Store with app
- Slice (cartSlice)
- dispatch(action)
- Selector

## useContext vs Redux

useContext and Redux are both tools used in React applications for managing state, but they serve slightly different purposes and have different use cases.

### useContext:

useContext is a React Hook that allows you to subscribe to React context without introducing nesting.

Context provides a way to pass data through the component tree without having to pass props down manually at every level.
It's useful for smaller applications or for sharing data that is needed by many components at different levels of the component tree.

Context is generally preferred when the state is simple and doesn't need advanced features like middleware or time-travel debugging.

useContext is built into React, so you don't need any additional dependencies to use it.
Redux:

### Redux

is a predictable state container for JavaScript apps, often used with React but not limited to it.

It provides a global state management solution with a single source of truth, making it easier to manage state across your application.

Redux works well for larger applications with complex state management needs, where you might have multiple components that need access to the same state or where you need features like middleware (for example, to handle asynchronous actions) or time-travel debugging.

Redux introduces more boilerplate code compared to useContext, but it can provide more powerful features and better scalability for larger applications.

Redux also offers a set of developer tools for debugging, such as Redux DevTools, which can be very helpful during development.
In summary, useContext is a simpler solution for managing state within React components, especially for smaller applications or for sharing data between a few closely related components. Redux, on the other hand, is a more powerful and scalable solution for managing state in larger applications with more complex state management needs.

## Advantage of using Redux Toolkit over Redux

Redux Toolkit is a set of utility functions and tools that simplify the process of writing Redux code. It's commonly used in Redux applications because it reduces boilerplate code and provides a more ergonomic API. Here are some advantages of using Redux Toolkit over writing plain Redux code:

- Reduces Boilerplate: Redux Toolkit provides utilities like createSlice and createReducer that significantly reduce the amount of boilerplate code needed to define actions and reducers. This leads to cleaner and more concise code.

- Simplifies Immutable Updates: With Redux Toolkit, you can write "mutating" logic in reducers using Immer, a library that allows you to write code that looks like mutable JavaScript, even though it's actually producing immutable updates. This makes writing reducers much simpler and more intuitive.

- Encourages Best Practices: Redux Toolkit comes with built-in support for Redux DevTools Extension, which allows you to inspect and debug your application's state changes in real time. It also encourages best practices like using configureStore for creating the Redux store, which sets up some default middleware and settings for you.

- Optimized for Performance: Redux Toolkit is designed to be optimized for performance out of the box. It includes features like built-in memoized selectors with createSelector, which can help prevent unnecessary re-renders in your React components.

- Easy Migration: If you're already using plain Redux in your application, Redux Toolkit provides a smooth migration path. You can gradually adopt Redux Toolkit by incorporating its features into your existing Redux codebase without needing to rewrite everything from scratch.

- Officially Recommended: The Redux maintainers officially recommend using Redux Toolkit for writing Redux logic. This means that it's actively maintained and will receive updates and improvements in the future.

Overall, Redux Toolkit simplifies the Redux development process, reduces boilerplate, encourages best practices, and provides built-in optimizations for performance. These advantages make it a popular choice for managing state in Redux applications.

## Explain Dispatcher

In the context of Redux, the term "dispatcher" typically refers to the mechanism responsible for dispatching actions to the store. Here's a breakdown of what a dispatcher does and how it fits into the Redux architecture:

> Dispatching Actions:

In Redux, actions are plain JavaScript objects that represent "what happened" in your application. They are the payloads of information that send data from your application to the Redux store.

The dispatcher is responsible for dispatching these actions to the Redux store. It's essentially a function that takes an action object as an argument and sends it to the store.
Redux Store:

The Redux store is the central piece of a Redux application. It holds the entire state tree of your application.
When an action is dispatched, the store passes that action and the current state tree to the reducer.

- Reducers:

Reducers are pure functions responsible for specifying how the application's state changes in response to actions sent to the store.

They take the current state and an action as arguments, and return the next state of the application.
Flow of Data:

When you call the dispatcher with an action, it sends that action to the store.
The store then passes the action and the current state to the root reducer.
The root reducer delegates the handling of the action to the appropriate reducer function(s), which then return the new state.
Finally, the store updates its state with the new state returned by the reducer(s).

- Middleware:

In Redux, middleware sits between the dispatcher and the store, allowing you to customize the behavior of dispatching actions.
Middleware can intercept actions before they reach the reducers, allowing you to perform tasks like logging, asynchronous operations, or modifying actions before they're processed by the reducers.

In summary, the dispatcher in Redux is responsible for sending actions to the store, initiating the process of state updates in response to those actions. It plays a crucial role in the Redux architecture by facilitating the flow of data from actions to reducers and ultimately updating the state of the application.

## Explain Reducer

In Redux, a reducer is a pure function responsible for specifying how the application's state changes in response to actions sent to the store. Here's a detailed explanation of what a reducer does and how it fits into the Redux architecture:

- Pure Functions:

Reducers are pure functions, which means they produce the same output for the same input and have no side effects. Given the same state and action, a reducer should always return the same result.

- State Changes:

The primary role of a reducer is to determine how the application state changes in response to actions.
Reducers take two arguments: the current state and an action. The action is a plain JavaScript object that describes the change to be made to the state.
Based on the type of action and its payload, reducers calculate the next state of the application.
Switch Statement or Object Mapping:

Inside a reducer function, you typically use a switch statement or an object mapping to handle different action types.
For each action type, you define a case or a key-value pair that describes how the state should be updated for that particular action.
Reducers return a new state object, which is typically a copy of the previous state with the necessary changes applied.

- Immutability:

It's crucial for reducers to maintain immutability when updating the state. This means that reducers should not mutate the existing state object, but instead return a new state object with the updated values.
Redux encourages the use of immutability to ensure predictable state updates and to enable performance optimizations such as shallow equality checks.

- Root Reducer:

In larger Redux applications, you often have multiple reducers, each responsible for managing a slice of the application state.
A root reducer combines these individual reducers into a single reducer function using Redux's combineReducers utility.
When an action is dispatched, the root reducer delegates the handling of that action to the appropriate individual reducer based on the slice of state it manages.

- Default State:

Reducers typically specify an initial state as their default parameter. This state is used when the store is initialized or when an action with an unknown type is dispatched.
The initial state serves as the starting point for the state tree of the application.
In summary, reducers in Redux are pure functions responsible for calculating the next state of the application based on the current state and the dispatched action. They play a central role in managing state changes and are a fundamental part of the Redux architecture.

## Explain slice.

In Redux Toolkit, a "slice" is a concept used to organize the Redux store and logic into smaller, more manageable pieces. Slices encapsulate the reducers, actions, and selectors related to a specific feature or domain of your application. Here's a breakdown of what a slice is and how it's used:

> Feature-based Organization:

Slices encourage structuring your Redux codebase based on features or domains of your application rather than having all logic in a single file or module.

Each slice represents a specific part of your application's state and behavior, such as user authentication, todo, or shopping cart.
Reducer Logic:

A slice contains a reducer function that specifies how the slice's state should change in response to dispatched actions.
The reducer typically uses a createSlice function provided by Redux Toolkit to define the initial state, action creators, and a reducer function in a single place.

> Action Creators:

createSlice automatically generates action creators based on the names of the reducers defined in the slice.
These action creators allow you to dispatch actions without having to manually define action types and action creators separately.
Selectors:

Slices often include selector functions that extract specific pieces of state from the Redux store.
Selectors help decouple components from the shape of the state tree, making it easier to maintain and refactor your code.
Exporting Slice:

Once a slice is defined using createSlice, you export the slice's reducer function and action creators to use them elsewhere in your application.
Other parts of your application, such as components or other slices, can import and use the exported reducer and action creators.

> Combined in Root Reducer:

In a Redux application, you typically combine all slice reducers into a single root reducer using Redux Toolkit's combineReducers function.

This root reducer is then used to create the Redux store.
By organizing your Redux logic into slices, you can create a more modular and maintainable codebase. Each slice encapsulates the state and behavior related to a specific feature, making it easier to reason about and modify individual parts of your application. Additionally, Redux Toolkit provides utilities to simplify the process of defining slices, reducing boilerplate code and improving developer productivity.

## Explain selector.

In the context of Redux and Redux Toolkit, a "selector" is a function that extracts specific pieces of data from the Redux store state. Selectors are used to decouple components from the shape and structure of the state tree, making it easier to maintain and refactor your application's code. Here's a detailed explanation of selectors and how they're used:

- Extracting State:

Selectors are functions that take the Redux state as an argument and return a specific piece of data from that state.
They allow components to access only the data they need from the store, rather than having direct access to the entire state tree.

- Derived Data:

Selectors are not limited to retrieving simple values from the state. They can also compute derived data or perform transformations on the state before returning the result.
For example, a selector might compute the total count of items in a shopping cart or filter and sort a list of todos based on certain criteria.

- Memoization:

Selectors are often memoized using libraries like Reselect or built-in memoization utilities provided by Redux Toolkit.
Memoization ensures that the selector function is only recomputed when its input values (usually the state) change. This can improve performance by preventing unnecessary re-renders of components.

- Encapsulation:

Selectors encapsulate the logic for accessing specific parts of the state, making it easier to refactor and modify your application's state structure without affecting other parts of the codebase.
They also promote reusability by allowing multiple components to use the same selector function to access the same data.

- Composing Selectors:

Selectors can be composed together to create more complex selectors.
You can combine multiple selectors using functions like createSelector from the Reselect library to create selectors that depend on the output of other selectors.

- Testing:

Selectors are typically pure functions, which makes them easy to test.
You can write unit tests for selectors to ensure they return the expected output given different input states.
Overall, selectors play a crucial role in Redux applications by providing a structured and efficient way to access and manipulate state data. They promote good coding practices such as encapsulation, reusability, and testability, making your codebase easier to maintain and extend over time.

## Explain createSlice and the configuration it takes

createSlice is a utility function provided by Redux Toolkit that simplifies the process of defining a slice of state in a Redux application. It combines the definition of initial state, action creators, and reducer logic into a single function call. Here's an explanation of createSlice and the configuration it takes:

- Configuration Parameters:

> name (string):

The name of the slice. This is used as the key in the Redux state tree where the slice's state will be stored.
initialState (object):

The initial state of the slice. This is the starting point for the slice's state before any actions are dispatched.
reducers (object):

An object containing one or more reducer functions. Each key-value pair in this object represents a named reducer function.

The key is the name of the action that will trigger the reducer, and the value is the reducer function itself.
Reducers take the current state and action payload as arguments and return the next state.
Returned Object:
When you call createSlice with the specified configuration, it returns an object with the following properties:

`name (string):`

The name of the slice, as provided in the configuration.
reducer (function):

The reducer function generated by createSlice. This function handles all the actions defined in the reducers object.
You typically export this reducer function and use it in the root reducer when creating the Redux store.
actions (object):

An object containing action creator functions generated by createSlice. These functions are automatically generated based on the keys of the reducers object.
Each action creator function dispatches the corresponding action type with the provided payload.
caseReducers (object):

A reference to the reducers object provided in the configuration. This is useful if you need access to the individual reducer functions later.
Example Usage:

```javascript
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment(state, action) {
      state.value += action.payload;
    },
    decrement(state, action) {
      state.value -= action.payload;
    },
  },
});

export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;
```

In this example:

We define a slice named 'counter' with an initial state containing a single property value.

Two reducers (increment and decrement) are defined within the reducers object. These reducers mutate the state based on the dispatched actions.

createSlice returns an object containing the reducer function and action creator functions (increment and decrement) that can be used elsewhere in the application.
