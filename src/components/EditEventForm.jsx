"use client";

import React, { useState } from "react";

export default function EditEventForm({ eventData, timingsInfo }) {
  const [formData, setFormData] = useState({
    title: eventData.title,
    description: eventData.description,
    timings: timingsInfo.map((timing) => ({
      date: timing.time.toISOString().split("T")[0],
      time: timing.time.toISOString().split("T")[1].substring(0, 5),
      venue: timing.venue,
    })),
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleVenueChange = (e) => {
    const { name, value } = e.target;
    let index = 0;

    setFormData((prevData) => {
      const updatedTimingsInfo = [...prevData.timings];
      console.log("prevData-->" + prevData.timings[index].venue);
      console.log("value-->" + value);
      console.log("name-->" + name);

      updatedTimingsInfo[index] = {
        ...updatedTimingsInfo[index],
        //[`venue-${index}`]: value,
        [name]: value,
      };
      return {
        timingsInfo: updatedTimingsInfo,
      };
    });
  };

  const [timing, setTiming] = useState({
    timingsInfo: timingsInfo.map((timing, index) => {
      let venue = timing.venue;
      const formattedDate = timing.time.toISOString().split("T")[0];
      const formattedTime = timing.time
        .toISOString()
        .split("T")[1]
        .substring(0, 5);
      return {
        date: formattedDate,
        time: formattedTime,
        venue: venue,
      };
    }),
  });
  const handleChange1 = (e) => {
    const { name, value } = e.target;
    console.log("name-->" + name);
    console.log("value-->" + value);
    setTiming((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    //formData[name] = value;
  };

  const handleEditEvent = (e) => {
    e.preventDefault();
    // Add your form submission logic here
  };

  return (
    <>
      <label htmlFor="title">Title</label>
      <input
        type="text"
        id="title"
        name="title"
        value={formData.title}
        onChange={handleChange}
      />
      <label htmlFor="description">Description</label>
      <input
        type="text"
        id="description"
        name="description"
        value={formData.description}
        onChange={handleChange}
      />
      {timingsInfo.map((timing, index) => {
        let venue = timing.venue;
        const formattedDate = timing.time.toISOString().split("T")[0];
        const formattedTime = timing.time
          .toISOString()
          .split("T")[1]
          .substring(0, 5);
        return (
          <div key={index}>
            <label htmlFor={`date${index}`}>Date </label>
            <input
              type="date"
              id={`date-${index}`}
              name={`date-${index}`}
              value={formattedDate}
              onChange={(e) => handleChange(e, index, "date")}
            />

            <label htmlFor={`time${index}`}>Time </label>
            <input
              type="time"
              id={`time-${index}`}
              name={`time-${index}`}
              value={formattedTime}
              onChange={(e) => handleChange(e, index, "time")}
            />

            <label htmlFor={`venue${index}`}>Venue </label>

            <input
              type="text"
              id={`venue-${index}`}
              name={`venue-${index}`}
              value={timing.venue}
              onChange={handleVenueChange}
            />
            <input
              type="text"
              id={`dummyOldRecords${index}`}
              name="dummyOldRecords"
              value="123"
              hidden
              readOnly
            />
          </div>
        );
      })}
    </>
  );
}
