// components/46_CommunityPost.jsx
import React from 'react';
import CommunityPostItem from './47_CommunityPostItem';

function CommunityPost({ data }) {
  const defaultPosts = data || [
    { id: 1, title: "May is Mental Health Awareness Month", description: "Join us in raising awareness and breaking the stigma around mental health.", date: "May 1, 2026", likes: 342, comments: 28 },
    { id: 2, title: "The Importance of Self-Care", description: "Taking care of your mental health is not selfish - it's essential.", date: "May 15, 2026", likes: 289, comments: 19 },
    { id: 3, title: "You Are Not Alone", description: "Millions of people struggle with mental health. Reaching out for help is a sign of strength.", date: "May 22, 2026", likes: 456, comments: 34 }
  ];

  return (
    <div className="resources-section-container">
      <div className="section-header-block">
        <h2 className="section-main-heading">Community Posts & Awareness</h2>
        <p className="section-sub-heading">Join the conversation about mental health</p>
      </div>

      <div className="community-grid-layout">
        {defaultPosts.map((post) => (
          <CommunityPostItem key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}

export default CommunityPost;