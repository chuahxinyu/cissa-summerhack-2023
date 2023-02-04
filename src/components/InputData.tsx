import React from "react";

const InputData = ({ name, age }: { name: string; age: number }) => {
  return (
    <div>
      InputData
      <p>{name}</p>
      <p>{age}</p>
    </div>
  );
};

export default InputData;
