// components/45_DownloadItem.jsx
import React from 'react';
import { IoDocumentTextOutline, IoDownloadOutline } from "react-icons/io5";

function DownloadItem({ item }) {
  return (
    <div className="download-card-item">
      <div className="download-card-top">
        <div className="file-icon-box">
          <IoDocumentTextOutline className="file-icon" />
        </div>
        <div className="file-info-details">
          <h4 className="file-title">{item.title}</h4>
          <span className="file-meta">{item.format} • {item.size}</span>
        </div>
      </div>
      
      <div className="download-card-bottom">
        <span className="download-count">
          <IoDownloadOutline /> {item.downloads} downloads
        </span>
        <button className="download-action-btn">Download</button>
      </div>
    </div>
  );
}

export default DownloadItem;