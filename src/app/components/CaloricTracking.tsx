"use client";

import React, { useState, useEffect } from "react";

interface CaloricEntry {
  date: string;
  calories: string;
}

const CaloricTracking: React.FC = () => {
  const [calories, setCalories] = useState<CaloricEntry[]>([]);
  const [currentCalories, setCurrentCalories] = useState<string>("");

  const addCalories = () => {
    const newCalories = {
      date: new Date().toLocaleDateString(),
      calories: currentCalories,
    };
    setCalories([...calories, newCalories]);
    setCurrentCalories("");
    localStorage.setItem(
      "calories",
      JSON.stringify([...calories, newCalories])
    );
  };

  useEffect(() => {
    const storedCalories = JSON.parse(localStorage.getItem("calories") || "[]");
    setCalories(storedCalories);
  }, []);

  return (
    <div>
      <h2>Caloric Tracking</h2>
      <input
        type="number"
        value={currentCalories}
        onChange={(e) => setCurrentCalories(e.target.value)}
      />
      <button onClick={addCalories}>Add Calories</button>
      <ul>
        {calories.map((entry, index) => (
          <li key={index}>
            {entry.date}: {entry.calories} kcal
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CaloricTracking;
