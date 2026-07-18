import React from 'react';
import NotificationCardItem from './60_Notificationcarditem';


const NotificationCardList = () => {
  // ഇമേജുകളിലുള്ള കൃത്യമായ അതേ കണ്ടെന്റ് (Same Content)
  const notificationsData = [
    {
      id: 1,
      type: 'calendar',
      title: 'Upcoming Session Tomorrow',
      description: 'You have a session with Dr. Sarah Mitchell tomorrow at 3:00 PM EST. Tap to join or reschedule.',
      time: '2 hours ago',
      actionText: 'View Session',
      isUnread: true
    },
    {
      id: 2,
      type: 'message',
      title: 'New message from Dr. Mitchell',
      description: '"Looking forward to our session tomorrow! I\'ve prepared some new CBT exercises for us to explore."',
      time: '3 hours ago',
      actionText: 'Reply',
      isUnread: true
    },
    {
      id: 3,
      type: 'clock',
      title: 'Daily Mood Check-In',
      description: 'Don\'t forget to log your mood today. Tracking patterns helps your therapist tailor your care.',
      time: '5 hours ago',
      actionText: 'Log Mood',
      isUnread: true
    },
    {
      id: 4,
      type: 'success',
      title: 'Session Recording Ready',
      description: 'Your session from June 3rd is now available for review in your dashboard.',
      time: '1 day ago',
      actionText: 'View Recording',
      isUnread: false
    },
    {
      id: 5,
      type: 'star',
      title: 'How was your session?',
      description: 'You had a session with Dr. Mitchell on June 5th. Share your feedback to help others find the right therapist.',
      time: '1 day ago',
      actionText: 'Leave Review',
      isUnread: false
    },
    {
      id: 6,
      type: 'danger',
      title: 'Crisis Resources Available',
      description: 'We noticed you mentioned feeling overwhelmed. Remember: our crisis support line is available 24/7 at 988.',
      time: '2 days ago',
      actionText: 'Get Support',
      isUnread: false
    },
    {
      id: 7,
      type: 'calendar',
      title: 'Session Confirmed',
      description: 'Your session with Dr. Mitchell on June 10th at 3:00 PM has been confirmed.',
      time: '3 days ago',
      actionText: '', // ഇതിന് താഴെ ലിങ്ക് ഇല്ല
      isUnread: false
    },
    {
      id: 8,
      type: 'clock',
      title: 'Webinar Starting Soon',
      description: '"Building Resilience Through Mindfulness" with Dr. Sarah Mitchell begins in 1 hour.',
      time: '4 days ago',
      actionText: 'Join Webinar',
      isUnread: false
    }
  ];

  return (
    <div className="notification-list-container">
      {notificationsData.map((notification) => (
        <NotificationCardItem key={notification.id} item={notification} />
      ))}
    </div>
  );
};

export default NotificationCardList;