# Understanding the JavaScript Event Loop (Without the Headache)

The **event loop** is one of the most notorious topics in JavaScript. It often sounds complicated, but once you understand how JavaScript executes code, it becomes surprisingly straightforward.

To understand the event loop, we need to know the **five main components** involved in JavaScript's execution model:

![JavaScript Event Loop Diagram](https://github.com/avi-jha/assets/blob/main/event_loop1.png?raw=true)
*JavaScript runtime showing the call stack, Web APIs, task queue, microtask queue, and event loop.*

1. **Call Stack**
2. **Web APIs**
3. **Task Queue (Macrotask Queue)**
4. **Microtask Queue**
5. **Event Loop**

## 1. Call Stack

The **call stack** manages the execution of your JavaScript code. JavaScript is single-threaded, which means it can execute only one piece of code at a time.

Each line of code (or function call) is pushed onto the call stack and executed in order. Once execution finishes, it's popped off the stack.

> Although JavaScript is interpreted, engines like **V8** use **JIT (Just-In-Time) compilation** under the hood for performance.

## 2. Web APIs

**Web APIs** are browser-provided features that JavaScript can use to perform asynchronous or specialized tasks.

Examples include:

- `setTimeout`
- DOM APIs
- Fetch
- Geolocation

These APIs are **not part of JavaScript itself**—they're provided by the browser environment. They can be **callback-based** or **promise-based**.

## 3. Task Queue (Macrotask Queue)

The **task queue** holds callbacks from Web APIs, such as:

- `setTimeout`
- `setInterval`
- DOM event handlers

When a Web API finishes its work, its callback is placed into the task queue, waiting for the call stack to become empty.

## 4. Microtask Queue

The **microtask queue** has higher priority than the task queue.

It is reserved for:

- Promises (`.then`, `.catch`, `.finally`)
- `async/await`
- `queueMicrotask`

All microtasks are executed **before** the event loop moves on to the task queue.

## 5. Event Loop

The **event loop** is the orchestrator.

Its job is simple:

- Check if the call stack is empty
- If empty, execute **all microtasks**
- Then take the next task from the task queue
- Push it onto the call stack

It keeps repeating this process indefinitely.

## Example: Event Loop in Action

```js
Promise.resolve().then(() => console.log(1));

setTimeout(() => console.log(2), 10);

queueMicrotask(() => {
  console.log(3);
  queueMicrotask(() => console.log(4));
});

console.log(5);
```

**Result:**
```
5
1
3
4
2
```

## Why is the output printed in this order?

## Execution Order

- Synchronous code runs first
- Then ALL microtasks are executed
- Then the task (macrotask) queue is executed

## Microtask Execution

- `console.log(1)` → from Promise
- `console.log(3)` → from queueMicrotask
- `console.log(4)` → nested microtask added while running microtasks

## Macrotask Execution

- `console.log(2)` → from setTimeout

## Final Output Order

- `5` → synchronous
- `1` → promise microtask
- `3` → microtask
- `4` → nested microtask
- `2` → macrotask (setTimeout)