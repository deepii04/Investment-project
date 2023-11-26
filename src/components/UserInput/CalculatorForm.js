import React, { useState, useRef } from "react";

function CalculatorForm({ onFormSubmit,  onResetForm }) {
  const formRef = useRef(null);
  const [currentSavings, setCurrentSavings] = useState("");
  const [yearlyContribution, setYearlyContribution] = useState("");
  const [interest, setInterest] = useState("");
  const [duration, setDuration] = useState("");



  // const[time , newsettime]= useState(""),
  

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const formData = {
      currentSavings,
      yearlyContribution,
      interest,
      duration,
    };
    onFormSubmit(formData);
  };

  const handleResetForm = () => {
    formRef.current.reset();
    setCurrentSavings("");
    setYearlyContribution("");
    setInterest("");
    setDuration("");
    onResetForm(); 
  };

  return (
    <div>
      <form ref={formRef} onSubmit={handleFormSubmit} className="form">
        <div className="input-group">
          <p>
            <label htmlFor="current-savings">Current Savings ($)</label>
            <input
              value={currentSavings}
              type="number"
              id="current-savings"
              onChange={(e) => setCurrentSavings(e.target.value)}
            />
          </p>
          <p>
            <label htmlFor="yearly-contribution">Yearly Contribution ($)</label>
            <input
              value={yearlyContribution}
              type="number"
              id="yearly-contribution"
              onChange={(e) => setYearlyContribution(e.target.value)}
            />
          </p>
        </div>
        <div className="input-group">
          <p>
            <label htmlFor="expected-return">Expected Interest (%, per year)</label>
            <input
              value={interest}
              type="number"
              id="expected-return"
              onChange={(e) => setInterest(e.target.value)}
            />
          </p>
          <p>
            <label htmlFor="duration">Investment Duration (years)</label>
            <input
              value={duration}
              type="number"
              id="duration"
              onChange={(e) => setDuration(e.target.value)}
            />
          </p>
        </div>
        <p className="actions">
          <button onClick={handleResetForm} type="reset" className="buttonAlt">
            Reset
          </button>
          <button type="submit" className="button">
            Calculate
          </button>
        </p>
      </form>
    </div>
  );
}

export default CalculatorForm;

