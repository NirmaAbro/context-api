import React from "react";
import { FirstName, LastName } from "../App";

function CompoC() {
  return (
    <>
      <FirstName.Consumer>
        {(FirstName) => {
          // console.log("FirstName:", FirstName); // Add this line
          return (
            <LastName.Consumer>
              {(LastName) => {
                //  console.log("LastName:", LastName); // Add this line
                return (
                  <h1>
                    Hey! {FirstName} 
                    {LastName}
                  </h1>
                );
              }}
            </LastName.Consumer>
          );
        }}
      </FirstName.Consumer>
    </>
  );
}

export default CompoC;
