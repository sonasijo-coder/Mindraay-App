import React from 'react';
import CategoryCard from './39_CategoryCard';// 👈 Single Card import cheyyuka
import { IoBookOutline, IoConstructOutline, IoDownloadOutline, IoPeopleOutline } from "react-icons/io5";

function GridCard({ onCategorySelect }) {
  const categories = [
    { id: 'articles', title: 'Articles', desc: 'Educational content', icon: <IoBookOutline /> },
    { id: 'tools', title: 'Mental Health Tools', desc: 'Trackers & journals', icon: <IoConstructOutline /> },
    { id: 'downloads', title: 'Downloads', desc: 'Guides & workbooks', icon: <IoDownloadOutline /> },
    { id: 'community', title: 'Community', desc: 'Awareness posts', icon: <IoPeopleOutline /> }
  ];

  return (
    <div className="resource-categories-container">
      <div className="resource-categories-grid">
        {categories.map((cat) => (
          <CategoryCard
            key={cat.id}
            title={cat.title}
            desc={cat.desc}
            icon={cat.icon}
            onClick={() => onCategorySelect && onCategorySelect(cat.id)}
          />
        ))}
      </div>
    </div>
  );
}

export default GridCard;