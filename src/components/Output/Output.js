import React from "react";

function Output({ calculationResult }) {
  const renderTable = () => {
    if (!calculationResult || calculationResult.length === 0) {
      return null; // Don't render the table if there are no results
    }

    return (
      <div>
        <h2>Calculation Result:</h2>
        <table className="result">
          <thead>
            <tr>
              <th>Year</th>
              <th>Yearly Interest</th>
              <th>Savings End of Year</th>
              <th>Yearly Contribution</th>
            </tr>
          </thead>
          <tbody>
            {calculationResult.map((resultItem) => (
              <tr key={resultItem.year}>
                <td>{resultItem.year}</td>
                <td>{resultItem.yearlyInterest.toFixed(2)}</td>
                <td>{resultItem.savingsEndOfYear.toFixed(2)}</td>
                <td>{resultItem.yearlyContribution.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

  return <div>{renderTable()}</div>;
}

export default Output;
