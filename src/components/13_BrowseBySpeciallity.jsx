import React from "react";

const specialties = [
  { icon: "😰", label: "Anxiety", bg: "#3B82F6" },
  { icon: "😔", label: "Depression", bg: "#8B5CF6" },
  { icon: "💑", label: "Relationships", bg: "#EC4899" },
  { icon: "🩹", label: "Trauma", bg: "#EF4444" },
  { icon: "😤", label: "Stress", bg: "#F97316" },
  { icon: "💔", label: "Grief", bg: "#6B7280" },
];

const BrowseBySpeciality = () => {
  return (
    <div className="browse-speciality">
      <h2 className="browse-speciality-title">Browse by Therapy Specialty</h2>
      <div className="speciality-grid">
        {specialties.map((item, index) => (
          <div className="speciality-item" key={index}>
            <div className="speciality-icon" style={{ backgroundColor: item.bg }}>
              {item.icon}
            </div>
            <span className="speciality-label">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrowseBySpeciality;