import React from "react";

function FeedbackForm() {
  return (
    <div className="feedback-section">
      <div className="feedback-card">
        <div className="feedback-icon">💬</div>
        <h2 className="feedback-title">Share Your Feedback</h2>
        <p className="feedback-subtitle">
          Help us improve Mindraay — your voice matters
        </p>
        <textarea
          className="feedback-textarea"
          placeholder="What's on your mind?"
          rows={4}
        />
        <button className="feedback-submit-btn">Submit Feedback</button>
      </div>
    </div>
  );
}

export default FeedbackForm;