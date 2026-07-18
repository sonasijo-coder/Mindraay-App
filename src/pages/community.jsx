import React from 'react';
import CommunityHeader from '../components/53_CommunityHeader';
import SearchBar from '../components/6_SearchBar';
import CommunityPostFeed from '../components/54_CommunityPostfeed';
import '../styles/community.css';

const Community = () => {
  return (
    <div className="page-content">
      <CommunityHeader />

      <div className="community-search-container">
        <SearchBar 
          variant="community" 
          placeholder="Search posts..." 
        />
      </div>

      <CommunityPostFeed />
    </div>
  );
};

export default Community;