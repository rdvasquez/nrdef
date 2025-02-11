"use client";
import { useState } from "react";

export default function AdditionalTimings() {
  const [additionalTimings, setAdditionalTimings] = useState([{}]);

  const addAdditionalTiming = () => {
    setAdditionalTimings([...additionalTimings, {}]);
  };

  return (
    <>
      {additionalTimings.map((_, index) => (
        <div className="DetailsBox" key={index}>
          <label htmlFor={`date${index}`}>Date:</label>
          <input
            type="date"
            id={`date${index}`}
            name={`date${index}`}
            required
          />
          <label htmlFor={`time${index}`}>Time:</label>
          <input
            type="time"
            id={`time${index}`}
            name={`time${index}`}
            required
          />
          <label htmlFor={`venue${index}`}>Venue:</label>
          <input
            type="text"
            id={`venue${index}`}
            name={`venue${index}`}
            required
          />
          <input
            type="text"
            id={`dummy${index}`}
            value="123"
            name="dummy"
            hidden
            readOnly
          />
        </div>
      ))}
      <button type="button" onClick={addAdditionalTiming}>
        Add Additional Timing
      </button>
    </>
  );
}
