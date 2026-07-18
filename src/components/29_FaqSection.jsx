import React from "react";

const faqs = [
  "How do I know if a therapist is right for me?",
  "Are sessions covered by insurance?",
  "Can I switch therapists at any time?",
  "How do online sessions work?",
];

function FAQSection() {
  return (
    <div className="faq-section">
      <h2 className="faq-title">Frequently Asked Questions</h2>
      <div className="faq-list">
        {faqs.map((q) => (
          <div key={q} className="faq-item">
            <span>{q}</span>
            <span className="faq-arrow">›</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FAQSection;