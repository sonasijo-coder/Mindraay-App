import React from 'react';

function CategoryCard({ title, desc, icon, onClick }) {
  return (
    <div className="resource-cat-card" onClick={onClick}>
      <div className="resource-cat-icon">
        {icon}
      </div>
      <h3 className="resource-cat-title">{title}</h3>
      <p className="resource-cat-desc">{desc}</p>
    </div>
  );
}

export default CategoryCard;