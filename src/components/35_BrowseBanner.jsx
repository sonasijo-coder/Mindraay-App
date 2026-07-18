import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa6"; // React icon ഉപയോഗിക്കാം
import "../styles/style.css"; // നിങ്ങളുടെ CSS ഫയൽ path

function BrowseBanner() {
  const navigate = useNavigate();

  return (
    <section className="browse-banner">
      {/* Back Button */}
      <button className="banner-back-btn" onClick={() => navigate(-1)}>
        <FaArrowLeft /> Back
      </button>

      <div className="browse-banner-content">
        <h1 className="browse-banner-title">Find Your Perfect Therapist</h1>
        <p className="browse-banner-subtitle">
          Browse 8 verified mental health professionals near you
        </p>
      </div>
    </section>
  );
}

export default BrowseBanner;