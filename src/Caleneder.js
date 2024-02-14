import { InlineWidget } from "react-calendly";
import React from "react";
const Caleneder = () => {
    return (
      <div className="App ">
        <div className="mt-[100px] md:mt-2">
        <InlineWidget className="h-screen" url="https://calendly.com/saudkhanbpk" />
        </div>
      </div>
    );
  };
  
  export default Caleneder;