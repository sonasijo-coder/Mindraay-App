import React from 'react';
import NotificationHeader from '../components/58_Notificationheader';
import NotificationCardList from '../components/59_NotificationCardList';
import '../styles/notification.css'; 

const Notification = () => {
  return (
    <div className="main-wrapper">
      <NotificationHeader />
      
      <NotificationCardList />
    </div>
  );
};

export default Notification;