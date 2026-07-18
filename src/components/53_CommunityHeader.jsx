import React from 'react';
import { IoArrowBack, IoAdd, IoGlobeOutline, IoPeopleOutline, IoTrendingUpOutline } from 'react-icons/io5';


const CommunityHeader = () => {
  return (
    <div className="community-header-wrapper">
      {/* 1. Top Back Button */}
      <button className="comm-back-btn">
        <IoArrowBack size={16} />
        <span>Back</span>
      </button>

      {/* 2. Title and Action Row */}
      <div className="comm-title-row">
        <div className="comm-text-left">
          <h2>Community</h2>
          <p>Mental health awareness, stories, tips, and support — all in one place</p>
        </div>
        <button className="comm-post-btn">
          <IoAdd size={20} />
          <span>Post</span>
        </button>
      </div>

      {/* 3. Stats Cards Grid Section */}
      <div className="comm-stats-grid">
        {/* Card 1 - Posts */}
        <div className="stat-card">
          <div className="stat-icon icon-teal">
            <IoGlobeOutline size={22} />
          </div>
          <span className="stat-number color-teal">6</span>
          <span className="stat-label">Posts</span>
        </div>

        {/* Card 2 - Members */}
        <div className="stat-card">
          <div className="stat-icon icon-purple">
            <IoPeopleOutline size={22} />
          </div>
          <span className="stat-number color-purple">5.2k</span>
          <span className="stat-label">Members</span>
        </div>

        {/* Card 3 - Active Today */}
        <div className="stat-card">
          <div className="stat-icon icon-orange">
            <IoTrendingUpOutline size={22} />
          </div>
          <span className="stat-number color-orange">238</span>
          <span className="stat-label">Active Today</span>
        </div>
      </div>
    </div>
  );
};

export default CommunityHeader;