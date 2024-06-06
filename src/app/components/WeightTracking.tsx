"use client";
import React, { useState, useEffect, ChangeEvent } from "react";

interface WeightEntry {
  date: string;
  weight: string;
}

const WeightTracking: React.FC = () => {
  const [weight, setWeight] = useState<WeightEntry[]>([]);
  const [currentWeight, setCurrentWeight] = useState<string>("");

  const addWeight = () => {
    const newWeight = {
      date: new Date().toLocaleDateString(),
      weight: currentWeight,
    };
    const updatedWeight = [...weight, newWeight];
    setWeight(updatedWeight);
    setCurrentWeight("");
    localStorage.setItem("weight", JSON.stringify(updatedWeight));
  };

  useEffect(() => {
    const storedWeight = JSON.parse(localStorage.getItem("weight") || "[]");
    if (storedWeight) setWeight(storedWeight);
  }, []);

  const handleWeightChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCurrentWeight(e.target.value);
  };

  return (
    <div>
      <h2>Weight Tracking</h2>
      <input
        type="number"
        value={currentWeight}
        onChange={handleWeightChange}
      />
      <button onClick={addWeight}>Add Weight</button>
      <ul>
        {weight.map((entry, index) => (
          <li key={index}>
            {entry.date}: {entry.weight} kg
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WeightTracking;
