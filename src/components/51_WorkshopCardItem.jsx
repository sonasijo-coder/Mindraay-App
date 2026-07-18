// WorkshopCardItem.jsx
import React from 'react';

function WorkshopCardItem({ item, type }) {
  const isPastWebinar = type === "pastWebinar";

  return (
    <div className="workshop-card">
      {/* 1. മുകളിലെ വലിയ ഇമോജി */}
      <div className="workshop-card-icon-wrapper">
        <span className="workshop-card-emoji">{item.emoji}</span>
      </div>

      <div className="workshop-card-body">
        {/* 2. വർക്ക്‌ഷോപ്പ് ടാഗ് (ലൈവ് വർക്ക്‌ഷോപ്പുകൾക്ക് മാത്രം) */}
        {!isPastWebinar && item.tag && (
          <span className="workshop-card-tag">{item.tag}</span>
        )}

        {/* 3. ടൈറ്റിൽ */}
        <h3 className="workshop-card-title">{item.title}</h3>

        {/* 4. ഹോസ്റ്റ് / പ്രസന്റർ വിവരങ്ങൾ (പാസ്റ്റ് വെബിനാറുകൾക്ക് മാത്രം) */}
        {isPastWebinar && item.presentedBy && (
          <p className="workshop-presenter">Presented by {item.presentedBy}</p>
        )}

        {/* 5. വർക്ക്‌ഷോപ്പ് ഡീറ്റെയിൽസ് (ലൈവ് വർക്ക്‌ഷോപ്പുകൾക്ക് മാത്രം) */}
        {!isPastWebinar && (
          <div className="workshop-details-list">
            <div className="workshop-detail-row">
              <span className="detail-label">Sessions:</span>
              <span className="detail-value">{item.sessions}</span>
            </div>
            <div className="workshop-detail-row">
              <span className="detail-label">Starts:</span>
              <span className="detail-value">{item.startDate}</span>
            </div>
            <div className="workshop-detail-row">
              <span className="detail-label">Price:</span>
              <span className="detail-value price-free">{item.price}</span>
            </div>
          </div>
        )}

        {/* 6. തീയതിയും വ്യൂസും (പാസ്റ്റ് വെബിനാറുകൾക്ക് മാത്രം) */}
        {isPastWebinar && (
          <div className="past-webinar-meta">
            <span className="past-date">{item.date}</span>
            <span className="past-views">
              {/* SVG Eye Icon */}
              <svg 
                className="eye-icon" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
              {item.views} views
            </span>
          </div>
        )}

        {/* 7. ഡൈനാമിക് ബട്ടണുകൾ */}
        {isPastWebinar ? (
          <button className="workshop-recording-btn">
            {/* SVG Video Camera Icon */}
            <svg 
              className="video-icon" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
            Watch Recording
          </button>
        ) : (
          <button className="workshop-register-btn">Register</button>
        )}
      </div>
    </div>
  );
}

export default WorkshopCardItem;