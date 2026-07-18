  // WebinarCards.jsx
  import WebinarCardItem from "./27_WebinarCardItem";
import React from "react";

  function WebinarCards() {
    const webinars = [
      {
        id: 1,
        icon: "🎯",
        title: "Managing Workplace Stress in 2026",
        host: "By Dr. James Thompson",
        date: "June 5, 2026",
        time: "6:00 PM EST",
        registeredCount: "234 registered",
        link: "/webinars/managing-stress",
      },
      {
        id: 2,
        icon: "🧘",
        title: "Building Resilience Through Mindfulness",
        host: "By Dr. Sarah Mitchell",
        date: "June 12, 2026",
        time: "7:00 PM EST",
        registeredCount: "189 registered",
        link: "/webinars/mindfulness",
      },
    ];

    return (
      <div className="webinar-grid">
        {webinars.map((webinar) => (
          <WebinarCardItem webinar={webinar} key={webinar.id} />
        ))}
      </div>
    );
  }

  export default WebinarCards;