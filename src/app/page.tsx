import React from "react";
import FastingAlarms from "./components/FastingAlarms";
import WeightTracking from "./components/WeightTracking";
import CaloricTracking from "./components/CaloricTracking";
import MedicineReminders from "./components/MedicineReminders";
import SobrietyTracker from "./components/SobrietyTracker";
import DailyGoals from "./components/DailyGoals";

const Page: React.FC = () => {
  return (
    <div>
      <h1>Personal Health Tracker</h1>
      <FastingAlarms />
      <WeightTracking />
      <CaloricTracking />
      <MedicineReminders />
      <SobrietyTracker />
      <DailyGoals />
    </div>
  );
};

export default Page;
