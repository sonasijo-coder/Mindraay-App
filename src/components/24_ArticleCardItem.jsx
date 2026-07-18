// components/24_ArticleCardItem.jsx
import React from "react";
import { IoCalendarOutline, IoTimeOutline, IoHourglassOutline, IoPeopleOutline } from "react-icons/io5";

function ArticleCardItem({ article, isWebinar }) {
  return (
    <div className={`article-card ${isWebinar ? "webinar-card" : ""}`}>
      
      {/* 1. ഹെഡ്ഡർ (Emoji & Tag/Read Time Row) */}
      <div className="article-card-header">
        <div className="article-thumb">
          <span className="article-thumb-icon">{article.icon}</span>
        </div>
      </div>

      <div className="article-body">
        
        {/* 2. മെറ്റാ ഇൻഫോ - വെബിനാർ അല്ലെങ്കിൽ ടാഗും റീഡ് ടൈമും കാണിക്കുക */}
        {!isWebinar && (
          <div className="article-meta-row">
            <span className="article-tag">{article.tag}</span>
            {article.readTime && <span className="article-read-time">{article.readTime}</span>}
          </div>
        )}

        {/* വെബിനാർ ആണെങ്കിൽ മാത്രം മുകളിൽ ടാഗ് വരാൻ */}
        {isWebinar && article.tag && (
          <div className="article-meta-row">
            <span className="article-tag webinar-tag">{article.tag}</span>
          </div>
        )}

        {/* 3. ടൈറ്റിൽ */}
        <h3 className="article-title">{article.title}</h3>

        {/* 4. വെബിനാർ ആണെങ്കിൽ ഹോസ്റ്റ് ഡീറ്റെയിൽസ് കാണിക്കുക */}
        {isWebinar && article.host && (
          <div className="webinar-host-row">
            <div className="host-avatar">🧑‍⚕️</div>
            <div className="host-info">
              <span className="host-name">{article.host.name}</span>
              <span className="host-role">{article.host.role}</span>
            </div>
          </div>
        )}

        {/* 5. ഡിസ്ക്രിപ്ഷൻ */}
        <p className="article-desc">{article.description}</p>

        {/* 6. വെബിനാർ ആണെങ്കിൽ സബ്-ടാഗുകൾ */}
        {isWebinar && article.subTags && (
          <div className="webinar-subtags">
            {article.subTags.map((subTag, index) => (
              <span key={index} className="subtag-item">{subTag}</span>
            ))}
          </div>
        )}

        {/* 7. വെബിനാർ ഡീറ്റെയിൽസ് (Date, Time, Duration) */}
        {isWebinar && (
          <div className="webinar-meta-grid">
            {article.date && (
              <div className="meta-item">
                <IoCalendarOutline className="meta-icon" />
                <span>{article.date}</span>
              </div>
            )}
            {article.time && (
              <div className="meta-item">
                <IoTimeOutline className="meta-icon" />
                <span>{article.time}</span>
              </div>
            )}
            {article.duration && (
              <div className="meta-item">
                <IoHourglassOutline className="meta-icon" />
                <span>{article.duration}</span>
              </div>
            )}
            {article.slots && (
              <div className="meta-item">
                <IoPeopleOutline className="meta-icon" />
                <span>{article.slots}</span>
              </div>
            )}
          </div>
        )}

        {/* 8. സാധാരണ ആർട്ടിക്കിൾ ആണെങ്കിൽ ഡോക്ടറുടെ പേരും തീയതിയും (ഫിഗ്മയിലെ പോലെ) */}
        {!isWebinar && (article.author || article.date) && (
          <div className="article-author-row">
            {article.author && <span className="article-author-name">{article.author}</span>}
            {article.date && <span className="article-date-text">{article.date}</span>}
          </div>
        )}

        {/* 9. ഫൂട്ടർ ആക്ഷൻസ് (വെബിനാറിന് ബട്ടണും, ആർട്ടിക്കിളിന് ലിങ്കും) */}
        {isWebinar ? (
          <div className="webinar-actions">
            <button className="register-btn">Watch Recording</button>
          </div>
        ) : (
          <a href={article.link} className="article-read-link">
            Read More <span className="article-read-arrow">&#8594;</span>
          </a>
        )}
      </div>
    </div>
  );
}

export default ArticleCardItem;