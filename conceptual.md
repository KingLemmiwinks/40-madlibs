### Conceptual Exercise

Answer the following questions below:

- What is React? When and why would you use it?
    A front-end framework. Use it to build modular, single-page apps.

- What is Babel?
    A Javascript compiler that transforms your syntax to be backwards compatible with older browsers and environments.

- What is JSX?
    A syntax extension for JavaScript that allows you to have HTML in your JavaScript.

- How is a Component created in React?
    By creating a function and returning HTML

- What are some difference between state and props?
    Props are variables passed down to child components from a parent. Child components do not change props. State is variables that are managed locally by a component

- What does "downward data flow" refer to in React?
    Components are "dumb", which means they recieve data from parent components, but do not change the data

- What is a controlled component?
    Components that allow React to control the form data

- What is an uncontrolled component?
    Form data that the DOM handles

- What is the purpose of the `key` prop when rendering a list of components?
    Keys give list items a stable identifier that let React keep track of change

- Why is using an array index a poor choice for a `key` prop when rendering a list of components?
    Item order can change in an array, which could cause a mismatch

- Describe useEffect.  What use cases is it used for in React components?
    A hook that lets you pass in a callback function to run when a component render or re-render happens. Used for API calls to fetch data or to perform an action when a piece of state changes.

- What does useRef do?  Does a change to a ref value cause a rerender of a component?
    Returns a mutable object whose value is equal to the initial value passed into the hook. This is persistent. A change to a ref value does not cause a re-render.

- When would you use a ref? When wouldn't you use one?
    Use ref to access underlying DOM elements and set up, or clear, timers. Do not use it to access or update DOM elements that can be controlled by React, or if the data does not need to be persistent.

- What is a custom hook in React? When would you want to write one?
    A wrapper function that you define that surrounds an existing hook. Write one when you want to reuse stateful logic between components.