
## 1. What is JSX, and why is it used?

**JSX (JavaScript XML)** is a syntax extension for JavaScript that allows you to write HTML-like structures directly inside your JavaScript files.

### Why use it?
* **Readability:** It makes the structure of UI components easier to visualize and understand compared to raw `React.createElement` calls.
* **Performance:** React transforms JSX into optimized JavaScript that the browser can execute.
* **Safety:** JSX helps prevent Cross-Site Scripting (XSS) attacks by escaping values before rendering them.

**Example:**
```jsx
const element = <h1 className="title">Hello, World!</h1>;

---
# React: State vs. Props

In React, both **State** and **Props** are plain JavaScript objects used to hold information that influences the output of a render, but they serve very different purposes.

---

## 1. Comparison Table

| Feature | Props (Properties) | State |
| :--- | :--- | :--- |
| **Definition** | Data passed from a parent to a child component. | Data managed locally within a component. |
| **Mutability** | **Immutable** (Read-only for the child). | **Mutable** (Can be updated by the component). |
| **Source** | Originates in the Parent component. | Originates inside the component itself. |
| **Purpose** | Used to configure or share data with a child. | Used to handle user interactions or dynamic UI. |
| **Update Trigger** | Parent re-renders or change in prop values. | Calling the state setter function (e.g., `setState`). |

---

## 2. What are Props?
**Props** act like function arguments. They allow you to pass data (strings, numbers, objects, or even functions) from a parent component down to a child component. A child component cannot modify the props it receives; it can only "read" them.



**Example:**
```jsx
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>; // Reading the prop
}

// Usage in Parent:
<Welcome name="John Miller" />