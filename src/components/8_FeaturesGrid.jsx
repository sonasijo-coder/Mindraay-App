import React from "react";
import { FaShield } from "react-icons/fa6";
import { FaClock } from "react-icons/fa6";
import { FaMedal } from "react-icons/fa6";
import { FaVideo } from "react-icons/fa";

const features = [
  { id: "f1", icon: <FaShield/>, title: "HIPAA Compliant", subtitle: "100% Secure" },
  { id: "f2", icon: <FaClock/>, title: "24/7 Available", subtitle: "Always Here" },
  { id: "f3", icon: <FaMedal/>, title: "Verified Experts", subtitle: "Licensed Only" },
  { id: "f4", icon: <FaVideo/>, title: "Online Sessions", subtitle: "Chat, Audio, Video" },
];

function FeaturesGrid() {
  return (
    <div className="features-grid-wrapper">
      <div className="features-grid">
        {features.map((f) => (
          <div key={f.id} className="feature-card">
            <div className="feature-icon">{f.icon}</div>
            <h4 className="feature-title">{f.title}</h4>
            <p className="feature-subtitle">{f.subtitle}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FeaturesGrid;