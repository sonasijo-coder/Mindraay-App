import React from "react";

const trending = [
  { initials: "SM", bg: "#A855F7", name: "Dr. Sarah Mitchell", rating: 4.9, specialty: "Anxiety & Depression", price: 150 },
  { initials: "ER", bg: "#EC4899", name: "Dr. Emily Rodriguez", rating: 5.0, specialty: "Trauma & PTSD", price: 135 },
  { initials: "JT", bg: "#F97316", name: "Dr. James Thompson", rating: 4.7, specialty: "Stress & Burnout", price: 160 },
  { initials: "DK", bg: "#10B981", name: "Dr. David Kim", rating: 4.8, specialty: "Student Mental Health", price: 100 },
];

const TrendingList = () => {
  return (
    <div className="trending-list">
      {trending.map((item, index) => (
        <div className="trending-row" key={index}>
          <div className="trending-avatar" style={{ backgroundColor: item.bg }}>
            {item.initials}
          </div>
          <div className="trending-info">
            <h4 className="trending-name">{item.name}</h4>
            <p className="trending-meta">⭐ {item.rating} · {item.specialty}</p>
          </div>
          <span className="trending-price">${item.price}/hr</span>
        </div>
      ))}
    </div>
  );
};

export default TrendingList;