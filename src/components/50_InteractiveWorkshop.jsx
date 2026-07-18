// InteractiveWorkshopSection.jsx
import React from 'react';
import WorkshopCardItem from './51_WorkshopCardItem';

function InteractiveWorkshopSection({ title, subtitle, data, type }) {
  return (
    <section className="workshops-section">
      {/* സെക്ഷൻ തലക്കെട്ടുകൾ */}
      <div className="workshops-header">
        <h2 className="workshops-main-title">{title}</h2>
        <p className="workshops-subtitle">{subtitle}</p>
      </div>

      {/* കാർഡുകളുടെ ഗ്രിഡ് ലേഔട്ട് */}
      <div className="workshops-grid">
        {data.map((item) => (
          <WorkshopCardItem key={item.id} item={item} type={type} />
        ))}
      </div>
    </section>
  );
}

export default InteractiveWorkshopSection;