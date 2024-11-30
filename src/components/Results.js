import React from "react";

const Results = ({ results }) => {
  return (
    <div className="results">
      <h2>Calculation Results</h2>
      <p>Duty Cycle: {results.dutyCycle}%</p>
      <p>Inductance: {results.inductance} μH</p>
      <p>Capacitance: {results.capacitance} μF</p>
      <p>Boosted Voltage: {results.boostedVoltage} V</p>
    </div>
  );
};

export default Results;
