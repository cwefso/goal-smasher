"use client";

import React, { useState, useEffect } from "react";

const SobrietyTracker: React.FC = () => {
  const [startDate, setStartDate] = useState<string>(
    localStorage.getItem("sobrietyStartDate") || new Date().toLocaleDateString()
  );

  const calculateDaysSober = (): number => {
    const start = new Date(startDate);
    const now = new Date();
    const difference = Math.floor(
      (now.getTime() - start.getTime()) / (1000 * 60 * 60 * 24)
    );
    return difference;
  };

  useEffect(() => {
    localStorage.setItem("sobrietyStartDate", startDate);
  }, [startDate]);

  return (
    <div>
      <h2>Sobriety Tracker</h2>
      <p>Days Sober: {calculateDaysSober()}</p>
      <button onClick={() => setStartDate(new Date().toLocaleDateString())}>
        Reset
      </button>
    </div>
  );
};

export default SobrietyTracker;
