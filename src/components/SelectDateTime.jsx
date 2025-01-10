"use client";
import { useState } from "react";

export default function SelectDateTime({ eventDetails }) {
  const [selectedValue, setSelectedValue] = useState("");
  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    <div>
      <label>Select date and time</label>
      <select name="eventDetail" value={selectedValue} onChange={handleChange}>
        <option value="">Select Date and Time</option>
        {eventDetails.map((eventDetail) => {
          const formattedDateTime = eventDetail.time.toLocaleString();
          return (
            <option
              key={eventDetail.id}
              value={formattedDateTime + "-" + eventDetail.venue}
            >
              {formattedDateTime}
            </option>
          );
        })}
      </select>
      <label>Venue: </label>
      <input
        type="text"
        name="venue"
        value={selectedValue.split("-")[1]}
        readOnly
      />
    </div>
  );
}
