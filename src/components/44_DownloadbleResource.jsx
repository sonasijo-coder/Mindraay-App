// components/44_DownloadableResource.jsx
import React from 'react';
import DownloadItem from './45_DownloadItem';

function DownloadableResource({ data }) {
  const defaultDownloads = data || [
    { id: 1, title: "Mental Health First Aid Guide", format: "PDF", size: "2.4 MB", downloads: "1243" },
    { id: 2, title: "Stress Management Workbook", format: "PDF", size: "3.1 MB", downloads: "987" },
    { id: 3, title: "Mindfulness Exercise Collection", format: "PDF", size: "1.8 MB", downloads: "1567" }
  ];

  return (
    <div className="resources-section-container">
      <div className="section-header-block">
        <h2 className="section-main-heading">Downloadable Resources</h2>
        <p className="section-sub-heading">Guides, workbooks, and worksheets</p>
      </div>
      
      <div className="downloads-grid-layout">
        {defaultDownloads.map((item) => (
          <DownloadItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

export default DownloadableResource;