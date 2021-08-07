## React Hooks

This repo contains all the implemenations of react hooks

## useState

- In classes state is always an object but in useStateHook the state dosent have to be an object
- When dealing with objects and arrays, always make sure to spread your state and then call the setter function

## useEffect

- When we use useEffect without second argument it calls the funtion everytime a component updates
  It is similar to componentDidUpdate

```jsx
useEffect(() => {
  document.title = `Count = ${count}`;
});
```

- When the variables in the array updates then only the below useEffect runs
  It is similar to conditional componentDidUpdate

```jsx
useEffect(() => {
  document.title = `Count = ${count}`;
}, [count]);
```

- When we give empty array then it acts as componenetDidMount and it will run only once

```jsx
useEffect(() => {
  console.log("Run only once");
}, []);
```

- To make cleanup function to cancel all listners we can return a function and have the clean up code
  It is same as componentDidUnmount

```jsx
useEffect(() => {
  document.title = `Count = ${count}`;

  return () => {
    //Your clean up code here
  };
}, [count]);
```

## useContext

Eg of how to create context

```jsx
export const UserContext = React.createContext();
```

```jsx
<UserContext.Provider value={"Avash"}>
  <UseContext></UseContext>
</UserContext.Provider>
```

This is where we want to use the context info

```jsx
import { context_name } from "../../App";
```

and then inside function

```jsx
const variable = useContext(context_name);
```
