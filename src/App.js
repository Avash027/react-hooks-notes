import React from "react";

// import UseState from "./Hooks/UseState";
// import UseStateObj from "./Hooks/UseStateObj";
// import UseStatePrevState from "./Hooks/UseStatePrevState";
// import UseEffetRender from "./Hooks/UseEffetRender";
import UseContext from "./Hooks/context/UseContext";

export const UserContext = React.createContext();

function App() {
  return (
    <div className="App">
      {/* <UseState></UseState>
      <br />
      <br />
      <br />
      <br />
      <UseStatePrevState></UseStatePrevState>

      <br />
      <br />
      <br />
      <br />

      <UseStateObj /> */}

      {/* <UseEffetRender /> */}

      <UserContext.Provider value={"Avash"}>
        <UseContext></UseContext>
      </UserContext.Provider>
    </div>
  );
}

export default App;
