"use client";

import React, { useState, useEffect } from "react";

const MedicineReminders = () => {
  const [medTime, setMedTime] = useState("09:00");
  const [daysLeft, setDaysLeft] = useState(30);

  useEffect(() => {
    // Schedule notifications for medicine reminders and refills
  }, [medTime, daysLeft]);

  return (
    <div>
      <h2>Medicine Reminders</h2>
      <label>
        Medicine Time:
        <input
          type="time"
          value={medTime}
          onChange={(e) => setMedTime(e.target.value)}
        />
      </label>
      <label>
        Days Left:
        <input
          type="number"
          value={daysLeft}
          onChange={(e) => setDaysLeft(e.target.value)}
        />
      </label>
    </div>
  );
};

export default MedicineReminders;
