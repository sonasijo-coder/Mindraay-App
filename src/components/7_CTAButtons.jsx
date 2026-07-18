import { FaPlay } from "react-icons/fa";

function CTAButtons() {
  return (
    <div className="cta-buttons">
      <button className="watch-btn">
        <span className="play-icon"><FaPlay/></span> Watch How It Works
      </button>
      <a href="#" className="browse-link">
        Browse Therapists <span className="arrow">→</span>
      </a>
    </div>
  );
}

export default CTAButtons;