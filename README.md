
## 1. What is JSX, and why is it used?

**JSX (JavaScript XML)** is a syntax extension for JavaScript used in
React to describe the UI structure.

It allows developers to write HTML-like code inside JavaScript.

### Example

``` jsx
const element = <h1>Hello, World!</h1>;
```

### Why JSX is used

-   Makes UI code easier to read and write
-   Combines UI logic and markup in one place
-   Improves developer productivity
-   Prevents injection attacks by escaping values

JSX is not required in React, but it is widely used because it
simplifies UI development.

------------------------------------------------------------------------

## 2. What is the difference between State and Props?

  -----------------------------------------------------------------------
  Feature                 State                   Props
  ----------------------- ----------------------- -----------------------
  Definition              Internal data managed   Data passed from parent
                          by a component          to child component

  Mutability              Mutable (can change)    Immutable (read-only)

  Controlled By           The component itself    Parent component

  Purpose                 Manage dynamic data     Pass data between
                                                  components
  -----------------------------------------------------------------------

### Example

``` jsx
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
```

Here, **name** is a prop passed to the component.

------------------------------------------------------------------------

## 3. What is the useState hook, and how does it work?

`useState` is a React Hook that allows functional components to manage
state.

### Syntax

``` jsx
const [state, setState] = useState(initialValue);
```

### Example

``` jsx
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
}
```

### How it works

-   `count` stores the current state value
-   `setCount` updates the state
-   When the state changes, React re-renders the component

------------------------------------------------------------------------

## 4. How can you share state between components in React?

The most common method is **Lifting State Up**.

### Lifting State Up

State is moved to the closest common parent component so multiple child
components can access it through props.

### Example

``` jsx
function Parent() {
  const [data, setData] = useState("Hello");

  return (
    <>
      <Child1 data={data} />
      <Child2 data={data} />
    </>
  );
}
```

### Other Methods

-   React Context API
-   State management libraries (Redux, Zustand)
-   Custom hooks

------------------------------------------------------------------------

## 5. How is event handling done in React?

Event handling in React is similar to DOM events but uses **camelCase
syntax**.

### Example

``` jsx
function Button() {
  function handleClick() {
    alert("Button clicked!");
  }

  return <button onClick={handleClick}>Click Me</button>;
}
```

### Key Points

-   Event names use camelCase (`onClick`, `onChange`)
-   You pass a function instead of a string
-   React uses a synthetic event system for better performance

------------------------------------------------------------------------
