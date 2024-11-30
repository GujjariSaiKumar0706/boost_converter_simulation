import React from "react";
import "./InputForm.css";

const InputForm = ({ values, setValues, calculateValues }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { resistance, voltage, frequency, pulseWidth } = values;

    if (!resistance || !voltage || !frequency || !pulseWidth) {
      alert("Please provide all inputs.");
      return;
    }

    calculateValues(
      parseFloat(resistance),
      parseFloat(voltage),
      parseFloat(frequency), // frequency in kHz
      parseFloat(pulseWidth) // pulse width in µs
    );
  };

  return (
    <form onSubmit={handleSubmit} className="input-form">
      <label>
        Load (Resistance in Ohms):
        <input
          type="number"
          name="resistance"
          value={values.resistance}
          onChange={handleChange}
          placeholder="Enter resistance"
        />
      </label>
      <label>
        Input Voltage (in Volts):
        <input
          type="number"
          name="voltage"
          value={values.voltage}
          onChange={handleChange}
          placeholder="Enter voltage"
        />
      </label>
      <label>
        Switching Frequency (in kHz):
        <input
          type="number"
          name="frequency"
          value={values.frequency}
          onChange={handleChange}
          placeholder="Enter frequency"
        />
      </label>
      <label>
        Pulse Width (in µs):
        <input
          type="number"
          name="pulseWidth"
          value={values.pulseWidth}
          onChange={handleChange}
          placeholder="Enter pulse width"
        />
      </label>
      <button type="submit">Calculate</button>
    </form>
  );
};

export default InputForm;
