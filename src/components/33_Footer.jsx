// FooterLinks.jsx
import React from "react";

const columns = [
  {
    heading: "For Patients",
    links: ["Find a Therapist", "Resources", "Webinars", "FAQs"],
  },
  {
    heading: "Support",
    links: ["Help Center", "Safety Guidelines", "Privacy Policy", "Terms of Service"],
  },
  {
    heading: "Company",
    links: ["About Us", "Contact", "Careers", "For Professionals"],
  },
];

function FooterLinks() {
  return (
    <div className="footer-links-section">
      <div className="footer-main-wrapper">
        
        {/* Left Side: Brand info */}
        <div className="footer-brand-info">
          <div className="footer-brand">
            <span className="footer-heart">💚</span>
            <span className="footer-brand-name">MindfulCare</span>
          </div>
          <p className="footer-tagline">
            Connecting you with professional mental health support, one session at a time.
          </p>
        </div>

        {/* Right Side: Columns Links grouped together */}
        <div className="footer-links-grid">
          {columns.map((col) => (
            <div key={col.heading} className="footer-column">
              <h4 className="footer-col-heading">{col.heading}</h4>
              <div className="footer-link-items">
                {col.links.map((link) => (
                  <a key={link} href="#" className="footer-link">
                    {link}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

export default FooterLinks;