import React from "react";
import { IoChatbubble } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";
import { FaVideo } from "react-icons/fa";
const steps = [
  {
    number: "01",
    icon: <IoChatbubble/>,
    iconBg: "#8B5CF6",
    title: "Share Your Story",
    desc: "Tell us what you're going through. Our smart matching considers your preferences and goals.",
  },
  {
    number: "02",
    icon: <FaSearch/>,
    iconBg: "#3B82F6",
    title: "Get Matched",
    desc: "Browse verified therapists curated for your needs. Read profiles, specialities, and reviews.",
  },
  {
    number: "03",
    icon: <FaVideo/>,
    iconBg: "#10B981",
    title: "Start Your Journey",
    desc: "Book your first session online. Chat, audio, or video — on your schedule.",
  },
];

const StepCards = () => {
  return (
    <div className="step-cards">
      {steps.map((step, index) => (
        <div className="step-card" key={index}>
          <span className="step-number">{step.number}</span>
          <div className="step-icon" style={{ backgroundColor: step.iconBg }}>
            {step.icon}
          </div>
          <h3 className="step-title">{step.title}</h3>
          <p className="step-desc">{step.desc}</p>
        </div>
      ))}
    </div>
  );
};

export default StepCards;