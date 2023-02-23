import React from "react";
import Terminator from "../Terminator/terminator.component";

const TerminatorList = ({ robotmodelsProp }) => {
  const terminatorComponents = robotmodelsProp.map((model) => {
    return (
      <Terminator
        key={model.id}
        id={model.id}
        name={model.name}
        serialNumber={model.serialNumber}
      />
    );
  });
  return <div>{terminatorComponents}</div>;
};

export default TerminatorList;
