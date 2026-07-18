// components/47_CommunityPostItem.jsx
import React from 'react';
import { IoHeartOutline, IoChatbubbleOutline } from "react-icons/io5";

function CommunityPostItem({ post }) {
  return (
    <div className="community-card-item">
      <h3 className="post-card-title">{post.title}</h3>
      <p className="post-card-desc">{post.description}</p>
      
      <div className="post-card-footer">
        <span className="post-date">{post.date}</span>
        <div className="post-stats-row">
          <span className="stat-item"><IoHeartOutline /> {post.likes}</span>
          <span className="stat-item"><IoChatbubbleOutline /> {post.comments}</span>
        </div>
      </div>
      
      <a href="#discuss" className="discuss-link-btn">Read & Discuss</a>
    </div>
  );
}

export default CommunityPostItem;