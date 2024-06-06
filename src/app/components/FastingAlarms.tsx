"use client";
import React, { useState, useEffect } from "react";

const FastingAlarms = () => {
  const [startEatingTime, setStartEatingTime] = useState("12:00");
  const [stopEatingTime, setStopEatingTime] = useState("20:00");

  useEffect(() => {
    // Schedule notifications based on times
  }, [startEatingTime, stopEatingTime]);

  return (
    <div>
      <h2>Fasting Alarms</h2>
      <label>
        Start Eating Time:
        <input
          type="time"
          value={startEatingTime}
          onChange={(e) => setStartEatingTime(e.target.value)}
        />
      </label>
      <label>
        Stop Eating Time:
        <input
          type="time"
          value={stopEatingTime}
          onChange={(e) => setStopEatingTime(e.target.value)}
        />
      </label>
    </div>
  );
};

export default FastingAlarms;
