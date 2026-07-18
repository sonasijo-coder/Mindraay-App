import React from "react";

function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <div className="hero-badge">
          <span className="badge-icon">⚡</span>
          <span>Trusted by 5,000+ patients worldwide</span>
        </div>

        <h1 className="hero-heading">
          Your Mental Wellness{" "}
          <span className="highlight-text">Journey</span>
          <br />
          <span className="highlight-text">Starts Here</span>
        </h1>

        <p className="hero-subtext">
          Connect with verified, licensed mental health professionals who
          understand you. Get the support you deserve, from the comfort of
          home.
        </p>
      </div>
    </section>
  );
}

export default HeroSection;