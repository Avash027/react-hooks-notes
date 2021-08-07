## React Hooks

This repo contains all the implemenations of react hooks

## useState

- In classes state is always an object but in useStateHook the state dosent have to be an object
- When dealing with objects and arrays, always make sure to spread your state and then call the setter function

## useEffect

- When we use useEffect without second argument it calls the funtion everytime a component updates
  It is similar to componentDidUpdate

```js
useEffect(() => {
  document.title = `Count = ${count}`;
});
```

- When the variables in the array updates then only the below useEffect runs
  It is similar to conditional componentDidUpdate

```js
useEffect(() => {
  document.title = `Count = ${count}`;
}, [count]);
```

- When we give empty array then it acts as componenetDidMount and it will run only once

```js
useEffect(() => {
  console.log("Run only once");
}, []);
```

- To make cleanup function to cancel all listners we can return a function and have the clean up code
  It is same as componentDidUnmount

```js
useEffect(() => {
  document.title = `Count = ${count}`;

  return () => {
    //Your clean up code here
  };
}, [count]);
```
