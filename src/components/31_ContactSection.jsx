// ContactSection.jsx
import React from "react";

const contacts = [
  { icon: "💬", label: "Email Support", value: "support@mindfulcare.com" },
  { icon: "📞", label: "Phone", value: "1-800-MINDFUL" },
  { icon: "📖", label: "Help Center", value: "Visit our Help Center →" },
];

function ContactSection() {
  return (
    <div className="contact-section">
      <h2 className="contact-title">Get In Touch</h2>
      <div className="contact-list">
        {contacts.map((c) => (
          <div key={c.label} className="contact-card">
            {/* Rounded Icon Box based on Figma */}
            <div className="contact-icon-box">
              <span className="contact-icon">{c.icon}</span>
            </div>
            <div className="contact-details">
              <p className="contact-label">{c.label}</p>
              <p className="contact-value">{c.value}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ContactSection;