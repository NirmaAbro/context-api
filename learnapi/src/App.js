// import { createContext } from "react";
import React, { createContext } from "react";
import CompoA from "./Components/CompoA";
import CompoB from './Components/CompoB';
import CompoC from "./Components/CompoC";

const FirstName = createContext();
const LastName = createContext();
function App() {
  return (
    <>
      <FirstName.Provider value={"Nirma"}>
        <LastName.Provider value={"Abro"}>
        <CompoA></CompoA>
        </LastName.Provider>
      </FirstName.Provider>

      
    </>
  );
}

export { FirstName ,LastName};
export default App;
