import React from "react";
import { HiUsers } from "react-icons/hi";
import { FaMedal, FaStar } from "react-icons/fa6";
import { TiTick } from "react-icons/ti";

const stats = [
  { id: "s1", icon: <HiUsers/>, value: "5,200+", label: "Patients Helped" },
  { id: "s2", icon: <FaMedal/>, value: "312+", label: "Licensed Therapists" },
  { id: "s3", icon: <FaStar/>, value: "4.9/5", label: "Average Rating" },
  { id: "s4", icon: <TiTick/>, value: "12,800+", label: "Sessions Completed" },
];

function StatsSection() {
  return (
    <div className="stats-section">
      <div className="stats-grid">
        {stats.map((s) => (
          <div key={s.id} className="stat-item">
            <div className="stat-icon">{s.icon}</div>
            <p className="stat-value">{s.value}</p>
            <p className="stat-label">{s.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default StatsSection;