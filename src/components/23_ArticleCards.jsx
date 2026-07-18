// components/23_ArticleCards.jsx
import ArticleCardItem from "./24_ArticleCardItem";
import React from "react";

function ArticleCards({ data, isWebinar }) {
  // പ്രോപ്സ് വഴി ഡാറ്റ വന്നാൽ അത് എടുക്കും, ഇല്ലെങ്കിൽ ഡിഫോൾട്ട് ആർട്ടിക്കിൾ ഡാറ്റ എടുക്കും
  const itemsToShow = data || [
    {
      id: 1,
      icon: "📚",
      tag: "Mental Health Awareness",
      readTime: "5 min read",
      title: "Understanding Anxiety: Signs and Coping Strategies",
      description: "Learn to recognize anxiety symptoms and effective techniques to manage them in your daily life.",
      author: "Dr. Sarah Mitchell",
      date: "May 20, 2026",
      link: "/articles/understanding-anxiety",
    },
    {
      id: 2,
      icon: "🌱",
      tag: "Self-Care",
      readTime: "7 min read",
      title: "10 Daily Habits for Better Mental Wellness",
      description: "Simple daily practices that can significantly improve your mental health and overall wellbeing.",
      author: "Dr. Michael Chen",
      date: "May 18, 2026",
      link: "/articles/daily-mindfulness",
    },
    {
      id: 3,
      icon: "🤝",
      tag: "Support Guide",
      readTime: "6 min read",
      title: "How to Support a Loved One with Depression",
      description: "Practical advice for being there for someone struggling with depression and knowing when to seek help.",
      author: "Dr. Emily Rodriguez",
      date: "May 15, 2026",
      link: "/articles/supporting-loved-ones",
    }
  ];

  return (
    <div className={`article-grid ${isWebinar ? "webinar-grid" : ""}`}>
      {itemsToShow.map((item) => (
        <ArticleCardItem key={item.id} article={item} isWebinar={isWebinar} />
      ))}
    </div>
  );
}

export default ArticleCards;