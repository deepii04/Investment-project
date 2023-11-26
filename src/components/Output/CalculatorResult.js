import React from "react";
import Output from "./Output";

function CalculatorResult({ calculationResult }) {
  return (
    <div>
      <Output calculationResult={calculationResult} />
    </div>
  );
}

export default CalculatorResult;
