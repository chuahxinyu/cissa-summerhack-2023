import { useState } from "react";
import ChooseTemplate from "./components/ChooseTemplate";
import InputData from "./components/InputData";
import Preview from "./components/Preview";

function App() {
  const [count, setCount] = useState(0);
  const name: string = "Meow";
  const age: number = 10;

  return (
    <div className="App">
      <InputData name={name} age={age} />
      <hr></hr>
      <ChooseTemplate />
      <hr></hr>
      <Preview />
    </div>
  );
}

export default App;

// FUNCTIONS
// function functionName(params) {
// }
// const functionName = (params) => {
// }
