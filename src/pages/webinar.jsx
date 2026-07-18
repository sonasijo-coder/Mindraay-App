import WebinarBanner from "../components/49_WebinarBanner";
import SearchBar from "../components/6_SearchBar";
import ArticleCards from "../components/23_ArticleCards"; // 👈 23-ാമത്തെ കമ്പോണന്റ് ഇംപോർട്ട് ചെയ്തു
import InteractiveWorkshopSection from "../components/50_InteractiveWorkshop";
import WebinarCtaBanner from "../components/52_WebinaeCtaBanner";
import '../styles/webinar.css';

function Webinar() {
  // സ്ക്രീൻഷോട്ടിൽ കാണുന്ന വെബിനാർ ഡാറ്റ പ്രോപ്സ് വഴി പാസ്സ് ചെയ്യാൻ ഇവിടെ നൽകുന്നു
  const webinarData = [
    {
      id: 1,
      icon: "🎯",
      tag: "Workplace Wellness",
      title: "Managing Workplace Stress in 2026",
      description: "Learn practical strategies for managing stress and preventing burnout in today's fast-paced work environment.",
      host: {
        icon :"👩‍⚕️",
        name: "Dr. James Thompson",
        role: "Licensed Professional Counselor"
      },
      subTags: ["Stress Management", "Work-Life Balance", "Burnout Prevention"],
      date: "2026-06-05",
      time: "6:00 PM EST",
      duration: "90 minutes",
      slots: "234/500"
    },
    {
      id: 2,
      icon: "🧘",
      tag: "Mindfulness",
      title: "Building Resilience Through Mindfulness",
      description: "Discover how mindfulness practices can help you develop emotional resilience and cope with life's challenges.",
      host: {
        icon :"👩‍⚕️",
        name: "Dr. Sarah Mitchell",
        role: "Licensed Clinical Psychologist"
      },
      subTags: ["Mindfulness", "Resilience", "Meditation"],
      date: "2026-06-12",
      time: "7:00 PM EST",
      duration: "60 minutes",
      slots: "189/300"
    },
    {
      id: 3,
      icon: "👨‍👩‍👧‍👦",
      tag: "Parenting",
      title: "Understanding Anxiety in Children and Teens",
      description: "A guide for parents on recognizing and supporting children and teens dealing with anxiety.",
      host: {
        icon :"👩‍⚕️",
        name: "Dr. Priya Sharma",
        role: "Child & Adolescent Psychiatrist"
      },
      subTags: ["Child Mental Health","Parenting","Anxiety"],
      date: "2026-06-18",
      time: "5:00 PM EST",
      duration: "75 minutes",
      slots: "167/400"
    },
    {
      id: 4,
      icon: "💑",
      tag: "Relationships",
      title: "Couples Therapy: Strengthening Your Relationship",
      description: "Tools and techniques for improving communication and building stronger, healthier relationships.",
      host: {
        icon :"👨‍⚕️",
        name: "Dr. Michell Chen",
        role: "Licensed Marriage & Family Therapis"
      },
      subTags: ["Relationships", "Communication", "Couples Therapy"],
      date: "2026-06-25",
      time: "6:30 PM EST",
      duration: "90 minutes",
      slots: "198/350"
    }
  ];

 // B. 1st Image Data: Interactive Workshops
  const workshopData = [
    {
      id: 1,
      emoji: "🧠",
      tag: "Workshop Series",
      title: "Introduction to CBT Techniques",
      sessions: 4,
      startDate: "2026-07-01",
      price: "Free",
    },
    {
      id: 2,
      emoji: "🧘",
      tag: "Workshop",
      title: "Mindfulness for Beginners",
      sessions: 1,
      startDate: "2026-06-20",
      price: "Free",
    },
    {
      id: 3,
      emoji: "🌈",
      tag: "Interactive Workshop",
      title: "Stress Reduction Workshop",
      sessions: 2,
      startDate: "2026-07-15",
      price: "Free",
    }
  ];

  // C. 2nd Image Data: Watch Past Webinars
  const pastWebinarData = [
    {
      id: 1,
      emoji: "⭐",
      title: "Depression: Breaking the Stigma",
      presentedBy: "Dr. Lisa Anderson",
      date: "2026-05-15",
      views: "1243"
    },
    {
      id: 2,
      emoji: "😴",
      title: "Sleep and Mental Health Connection",
      presentedBy: "Dr. Emily Rodriguez",
      date: "2026-05-08",
      views: "987"
    },
    {
      id: 3,
      emoji: "💔",
      title: "Coping with Grief and Loss",
      presentedBy: "Dr. Robert Martinez",
      date: "2026-05-01",
      views: "1567"
    }
  ];

  return (
    <div className="main-banner">
      <WebinarBanner />
      
      <SearchBar variant="webinar" placeholder="Search webinars and workshops..." />

      {/* 👈 വെബിനാർ കാർഡുകൾ പ്രോപ്സ് വഴി ഇവിടെ ഇംപോർട്ട് ചെയ്യുന്നു */}
      <div className="upcoming-section">
        <div className="upcoming-header">
          <h2 className="upcoming-title">Upcoming Webinars</h2>
          <button className="get-notified-btn">🔔 Get Notified</button>
        </div>
        
        <ArticleCards data={webinarData} isWebinar={true} />
      </div>

      {/* 2. Interactive Workshops (1st Image) */}
      <InteractiveWorkshopSection 
        title="Interactive Workshops"
        subtitle="Hands-on learning experiences with mental health professionals"
        data={workshopData}
        type="workshop"
      />

      {/* 3. Watch Past Webinars (2nd Image) */}
      <InteractiveWorkshopSection 
        title="Watch Past Webinars"
        subtitle="Catch up on recordings of previous sessions"
        data={pastWebinarData}
        type="pastWebinar"
      />

      {/* 4. WEBINAR CTA BANNER (ഏറ്റവും ഒടുവിൽ) */}
      <WebinarCtaBanner />
    </div>
  );
}

export default Webinar;