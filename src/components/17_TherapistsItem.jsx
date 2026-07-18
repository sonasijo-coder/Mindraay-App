import React from "react";

const TherapistItem = ({
  initials,
  gradientFrom,
  gradientTo,
  name,
  title,
  rating,
  reviews,
  desc,
  tags,
  price,
  isBrowse,
}) => {
  return (
    <>
      {/* 🏡 1. ഹോം പേജ് ലുക്ക് (പഴയതുപോലെ തന്നെ തുടരും) */}
      {!isBrowse && (
        <div className="therapist-item">
          <div
            className="therapist-banner"
            style={{ background: `linear-gradient(135deg, ${gradientFrom}, ${gradientTo})` }}
          >
            <span className="therapist-verified">✅ Verified</span>
          </div>

          <div className="therapist-avatar-wrap">
            <div
              className="therapist-avatar"
              style={{ background: `linear-gradient(135deg, ${gradientFrom}, ${gradientTo})` }}
            >
              {initials}
            </div>
          </div>

          <div className="therapist-body">
            <h3 className="therapist-name">{name}</h3>
            <p className="therapist-title">{title}</p>
            <p className="therapist-rating">⭐ {rating} ({reviews})</p>
            <p className="therapist-desc">{desc}</p>
            <div className="therapist-tags">
              {tags.map((tag, index) => (
                <span className="therapist-tag" key={index}>{tag}</span>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* 🔍 2. ബ്രൗസ് പേജ് ലുക്ക് (പക്കാ ഫിഗ്മ ഇമേജ് 1 പോലെ മാറ്റിയിട്ടുണ്ട്) */}
      {isBrowse && (
        <div className="therapist-item browse-card-style">
          
          {/* മുകൾഭാഗം: അവതാർ, പേര് വിവരങ്ങൾ, ഹാർട്ട് ഐക്കൺ */}
          <div className="browse-card-top-section">
            <div 
              className="browse-square-avatar"
              style={{ background: `linear-gradient(135deg, ${gradientFrom}, ${gradientTo})` }}
            >
              {initials}
            </div>
            
            <div className="browse-header-right">
              <div className="browse-name-row">
                <h3 className="therapist-name">{name}</h3>
                <div className="browse-right-badges">
                  <span className="browse-verified-pill">✓ Verified</span>
                  <button className="heart-icon-btn">❤️</button>
                </div>
              </div>
              <p className="therapist-title">{title}</p>
              <p className="therapist-rating">⭐⭐⭐⭐⭐ <strong>{rating}</strong> ({reviews}) • 7 years</p>
              <span className="available-badge">Available Today</span>
            </div>
          </div>

          {/* ഡിസ്ക്രിപ്ഷനും ടാഗുകളും */}
          <div className="therapist-body" style={{ padding: "0" }}>
            <p className="therapist-desc">{desc}</p>
            
            <div className="therapist-tags">
              {tags.map((tag, index) => (
                <span className="therapist-tag" key={index}>{tag}</span>
              ))}
            </div>

            {/* ലാംഗ്വേജസ് & ലൊക്കേഷൻ സെക്ഷൻ */}
            <div className="browse-meta-info">
              <p className="browse-lang">Languages: <strong>English, Spanish</strong></p>
              <p className="browse-location">📍 1.8 miles away • San Francisco, CA</p>
            </div>

            <hr className="browse-divider" />

            {/* അടിയിലെ വിലയും ആക്ഷൻ ബട്ടണുകളും */}
            <div className="therapist-bottom">
              <div>
                <p className="therapist-price-label">Starting from</p>
                <p className="therapist-price">${price}<span className="hr-label">/hour</span></p>
              </div>
              
              <div className="browse-action-buttons">
                <button className="chat-circle-btn">💬</button>
                <button className="therapist-btn browse-view-profile-btn">
                  📅 View Profile
                </button>
              </div>
            </div>

          </div>
        </div>
      )}
    </>
  );
};

export default TherapistItem;