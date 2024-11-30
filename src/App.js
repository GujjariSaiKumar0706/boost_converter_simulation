import React, { useState } from "react";
import InputForm from "./components/InputForm";
import Results from "./components/Results";
import "./styles.css";

const App = () => {
  const [values, setValues] = useState({ resistance: "", voltage: "", frequency: "", pulseWidth: "" });
  const [results, setResults] = useState(null);

  const calculateValues = (resistance, voltage, frequencyKHz, pulseWidthMicroseconds) => {
    // Convert inputs to SI units
    const frequency = frequencyKHz * 1000; // kHz to Hz
    const pulseWidth = pulseWidthMicroseconds / 1e6; // µs to seconds

    // Calculate Duty Cycle
    const dutyCycle = pulseWidth * frequency;

    // Boosted Voltage
    const boostedVoltage = voltage / (1 - dutyCycle);

    // Inductance and Capacitance calculations
    const inductance = (voltage * dutyCycle) / (frequency * resistance) * 1e6;
    const capacitance = 1 / (resistance * frequency) * 1e6;

    setResults({
      dutyCycle: (dutyCycle * 100).toFixed(2), // Convert to percentage
      inductance: inductance.toFixed(2),
      capacitance: capacitance.toFixed(2),
      boostedVoltage: boostedVoltage.toFixed(2),
    });
  };

  return (
    <div className="app-container">
      <h1>Boost Converter Calculator</h1>
      <InputForm values={values} setValues={setValues} calculateValues={calculateValues} />
      {results && <Results results={results} />}
    </div>
  );
};

export default App;
