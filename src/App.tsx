import { useState } from "react";
import ChooseTemplate from "./components/ChooseTemplate";
import InputData from "./components/InputData";
import Preview from "./components/Preview";

function App() {
  const [userInfo, setUserInfo] = useState({
    firstName: "",
    lastName: "",
    email: ""
  });

  const changeHandler = ({e}: {e: any}) => {
    setUserInfo( prevValues => {
      return { ...prevValues, [e.target.name]: e.target.value}
    })
    // https://stackoverflow.com/questions/59813926/how-can-i-store-and-update-multiple-values-in-react-usestate
  }

  return (
    <div className="App">
      <hr></hr>
      <InputData />
      <hr></hr>
      <ChooseTemplate />
      <hr></hr>
      <Preview />
    </div>
  );
}

export default App;
