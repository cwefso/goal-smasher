"use client";

import React, { useState, useEffect, ChangeEvent } from "react";

interface Goal {
  goal: string;
}

const DailyGoals: React.FC = () => {
  const [goals, setGoals] = useState<string[]>([]);
  const [currentGoal, setCurrentGoal] = useState<string>("");
  const [completedGoals, setCompletedGoals] = useState<string[]>([]);

  const addGoal = () => {
    const updatedGoals = [...goals, currentGoal];
    setGoals(updatedGoals);
    setCurrentGoal("");
    localStorage.setItem("goals", JSON.stringify(updatedGoals));
  };

  const markGoalAsComplete = (goal: string) => {
    const updatedCompletedGoals = [...completedGoals, goal];
    setCompletedGoals(updatedCompletedGoals);
    localStorage.setItem(
      "completedGoals",
      JSON.stringify(updatedCompletedGoals)
    );
  };

  useEffect(() => {
    const storedGoals = JSON.parse(localStorage.getItem("goals") || "[]");
    const storedCompletedGoals = JSON.parse(
      localStorage.getItem("completedGoals") || "[]"
    );
    if (storedGoals) setGoals(storedGoals);
    if (storedCompletedGoals) setCompletedGoals(storedCompletedGoals);
  }, []);

  const handleGoalChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCurrentGoal(e.target.value);
  };

  return (
    <div>
      <h2>Daily Goals</h2>
      <input type="text" value={currentGoal} onChange={handleGoalChange} />
      <button onClick={addGoal}>Add Goal</button>
      <ul>
        {goals.map((goal, index) => (
          <li key={index}>
            {goal}
            <button onClick={() => markGoalAsComplete(goal)}>Complete</button>
          </li>
        ))}
      </ul>
      <h3>Completed Goals</h3>
      <ul>
        {completedGoals.map((goal, index) => (
          <li key={index}>{goal}</li>
        ))}
      </ul>
    </div>
  );
};

export default DailyGoals;
