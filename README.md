
## 1. What is JSX, and why is it used?

**JSX (JavaScript XML)** is a syntax extension for JavaScript that allows you to write HTML-like structures directly inside your JavaScript files.

### Why use it?
* **Readability:** It makes the structure of UI components easier to visualize and understand compared to raw `React.createElement` calls.
* **Performance:** React transforms JSX into optimized JavaScript that the browser can execute.
* **Safety:** JSX helps prevent Cross-Site Scripting (XSS) attacks by escaping values before rendering them.

**Example:**
```jsx
const element = <h1 className="title">Hello, World!</h1>;