import UseState from "./Hooks/UseState";
import UseStateObj from "./Hooks/UseStateObj";
import UseStatePrevState from "./Hooks/UseStatePrevState";

function App() {
  return (
    <div className="App">
      <UseState></UseState>
      <br />
      <br />
      <br />
      <br />
      <UseStatePrevState></UseStatePrevState>

      <br />
      <br />
      <br />
      <br />

      <UseStateObj />
    </div>
  );
}

export default App;
