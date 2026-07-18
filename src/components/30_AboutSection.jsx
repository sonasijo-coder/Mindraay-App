import React from "react";

const checklist = [
  { icon: "🛡️", title: "HIPAA Compliant", sub: "End-to-end encrypted sessions" },
  { icon: "✅", title: "Licensed Professionals Only", sub: "Every therapist verified" },
  { icon: "📖", title: "Evidence-Based Approaches", sub: "CBT, EMDR, DBT, and more" },
];

function AboutSection() {
  return (
    <div className="about-section">
      <h2 className="about-title">About MindfulCare</h2>
      <p className="about-text">
        Mindraay was founded with a mission to make quality mental health care
        accessible to everyone. We connect you with licensed, verified
        professionals committed to your wellbeing.
      </p>
      <p className="about-text">
        Our platform is HIPAA-compliant, secure, and designed to make finding
        and booking therapy as seamless as possible.
      </p>
      <div className="about-checklist">
        {checklist.map((c) => (
          <div key={c.title} className="checklist-item">
            <span className="checklist-icon">{c.icon}</span>
            <div>
              <p className="checklist-title">{c.title}</p>
              <p className="checklist-sub">{c.sub}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AboutSection;