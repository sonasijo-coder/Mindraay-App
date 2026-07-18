import React, { useState } from 'react';
import ResourceBanner from '../components/38_Banner'; // നിങ്ങളുടെ ബാനർ കമ്പോണന്റ്
import SearchBar from '../components/6_SearchBar';     // നിങ്ങളുടെ സെർച്ച് ബാർ കമ്പോണന്റ്
import GridCard from '../components/40_GridCard';
import ArticleCards from '../components/23_ArticleCards';
import SectionHeader from '../components/41_SectionHeader';
import ToolsList from '../components/42_ToolsList';
import DownloadableResource from '../components/44_DownloadbleResource';
import CommunityPost from '../components/46_CommunityPost';
import CrisisSupportBanner from '../components/48_ CrisisBanner';
import '../styles/resource.css';

function ResourcesPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchSubmit = () => {
    console.log("Searching for:", searchQuery);
    // ഇവിടെ സെർച്ച് ചെയ്യുമ്പോൾ നടക്കേണ്ട കാര്യങ്ങൾ എഴുതാം
  };

  // 2 ചിത്രങ്ങളിലുമായുള്ള മൊത്തം 6 ആർട്ടിക്കിളുകളുടെ കൃത്യമായ ഡാറ്റ 
  const educationalArticles = [
    // --- ചിത്രത്തിൽ നിന്നുള്ള ആദ്യത്തെ 3 ആർട്ടിക്കിളുകൾ ---
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
    },
    // --- ചിത്രത്തിൽ നിന്നുള്ള അടുത്ത 3 ആർട്ടിക്കിളുകൾ ---
    {
      id: 4,
      icon: "💼",
      tag: "Workplace Wellness",
      readTime: "8 min read",
      title: "Managing Stress in the Workplace",
      description: "Evidence-based strategies for handling work-related stress and preventing burnout.",
      author: "Dr. James Thompson",
      date: "May 12, 2026",
      link: "/articles/managing-workplace-stress",
    },
    {
      id: 5,
      icon: "😴",
      tag: "Mental Health Awareness",
      readTime: "10 min read",
      title: "The Science of Sleep and Mental Health",
      description: "Understanding the crucial connection between quality sleep and mental wellbeing.",
      author: "Dr. Lisa Anderson",
      date: "May 10, 2026",
      link: "/articles/science-of-sleep",
    },
    {
      id: 6,
      icon: "🧘",
      tag: "Mindfulness",
      readTime: "6 min read",
      title: "Building Resilience Through Mindfulness",
      description: "How mindfulness practices can help you develop emotional resilience and cope with life's challenges.",
      author: "Dr. Priya Sharma",
      date: "May 8, 2026",
      link: "/articles/building-resilience",
    }
  ];

  return (
    <div className="resources-page-container">
      {/* 1. റിസോഴ്സ് ബാനർ ഹെഡർ */}
      <ResourceBanner 
        onBack={() => window.history.back()}
        onFindTherapist={() => console.log("Find Therapist Clicked")}
        onSignIn={() => console.log("Sign In Clicked")}
      />

      {/* 2. സെർച്ച് ബാർ മാത്രം */}
      <SearchBar 
        variant="resource" 
        placeholder="Search articles, tools, and resources..." 
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        onSearchSubmit={handleSearchSubmit}
      />

      {/* 3. കാറ്റഗറി ഗ്രിഡ് (ഇതിൽ 4 കാർഡുകളും തനിയെ വന്നോളും) */}
      <GridCard onCategorySelect={(id) => console.log("Selected ID:", id)} />

        {/* 4. എഡ്യൂക്കേഷണൽ ആർട്ടിക്കിൾസ് സെക്ഷൻ */}
      <div className="educational-articles-section">
        <div className="section-header-row">
          <h2 className="section-title">Educational Articles</h2>
          <button className="view-all-link" onClick={() => console.log("View All Clicked")}>
            View All <span className="arrow">&rarr;</span>
          </button>
        </div>

        {/* 6 ആർട്ടിക്കിളുകളും ഇവിടെ പ്രോപ്സ് വഴി ലോഡ് ചെയ്യും */}
        <ArticleCards data={educationalArticles} isWebinar={false} />
      </div>

      <div className="tools-section-wrapper">
  {/* 41_SectionHeader വിളിക്കുന്നു */}
  <SectionHeader 
    title="Mental Health Tools & Trackers" 
    subtitle="Interactive tools to support your mental wellness" 
  />

  {/* 42_ToolsList വിളിക്കുന്നു (ഇതിനുള്ളിൽ 43_ToolCardItem ലൂപ്പ് ചെയ്യപ്പെടും) */}
  <ToolsList />
</div>

<DownloadableResource />
<CommunityPost />
<CrisisSupportBanner />
    </div>
  );
}

export default ResourcesPage;