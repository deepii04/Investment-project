import React, { useState } from "react";
import CalculatorForm from "./CalculatorForm";
import CalculatorResult from "../Output/CalculatorResult";
function Calculator() {
  const [calculationResult, setCalculationResult] = useState(null);

  const isValidInput = (formData) => {
    const { currentSavings, yearlyContribution, interest, duration } = formData;

    return (
      !isNaN(currentSavings) &&
      !isNaN(yearlyContribution) &&
      !isNaN(interest) &&
      !isNaN(duration) &&
      duration > 0
    );
  };

  const calculateResult = (userInput) => {
    const yearlyData = [];
    let { currentSavings, yearlyContribution, expectedReturn, duration } =
      userInput;

    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    }

    return yearlyData;
  };

  const handleFormSubmit = (formData) => {
    if (!isValidInput(formData)) {
      alert("Please enter valid input data.");
      return;
    }

    const userInput = {
      currentSavings: parseFloat(formData.currentSavings),
      yearlyContribution: parseFloat(formData.yearlyContribution),
      expectedReturn: parseFloat(formData.interest) / 100,
      duration: parseInt(formData.duration),
    };

    const result = calculateResult(userInput);
    setCalculationResult(result);
  };
  const handleResetForm = () => {
    setCalculationResult(null); // Clear the calculation result
  };
  return (
    <div>
      <CalculatorForm onFormSubmit={handleFormSubmit} onResetForm={handleResetForm} />
      <CalculatorResult calculationResult={calculationResult} />
    </div>
  );
}

export default Calculator;
