import React from 'react';
import { IoHeartOutline, IoChatbubbleOutline, IoShareSocialOutline, IoBookmarkOutline } from 'react-icons/io5';

const CommunityPostFeedItem = ({ post }) => {

  const getAvatarText = (name) => {
    return name.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase();
  };

  return (
    <div className="post-card-container">
      {/* 1. Post Header (Avatar, Name, Time, Badges) */}
      <div className="post-card-header">
        <div className="post-author-info">
          <div className={`post-avatar-circle ${post.badgeType || ''}`}>
            {getAvatarText(post.author)}
          </div>
          <div className="post-meta-text">
            <div className="post-author-row">
              <h4>{post.author}</h4>
              {post.badgeText && (
                <span className={`author-badge ${post.badgeType}`}>
                  {post.badgeText}
                </span>
              )}
            </div>
            <p className="post-time-sub">{post.time} ago · {post.category}</p>
          </div>
        </div>
        
        {/* Right Corner Category Tag */}
        <span className={`post-category-tag tag-${post.tagClass}`}>
          {post.tagLabel}
        </span>
      </div>

      {/* 2. Post Main Content */}
      <div className="post-card-body">
        <h3>{post.title}</h3>
        <p>{post.content}</p>
        <button className="post-readmore-btn">Read more</button>
      </div>

      {/* 3. Post Action Footer Buttons */}
      <div className="post-card-footer">
        <div className="footer-left-actions">
          <button className="action-interaction-btn">
            <IoHeartOutline size={18} />
            <span>{post.likes}</span>
          </button>
          <button className="action-interaction-btn">
            <IoChatbubbleOutline size={18} />
            <span>{post.comments}</span>
          </button>
          <button className="action-interaction-btn">
            <IoShareSocialOutline size={18} />
            <span>Share</span>
          </button>
        </div>
        <button className="post-bookmark-btn">
          <IoBookmarkOutline size={18} />
        </button>
      </div>
    </div>
  );
};

export default CommunityPostFeedItem;