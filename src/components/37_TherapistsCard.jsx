import TherapistItem from "./17_TherapistsItem";
import "../styles/style.css";

// മൊത്തം 8 പേരുടെ ഡാറ്റ
const therapists = [
  {
    initials: "SM", gradientFrom: "#A855F7", gradientTo: "#7C3AED",
    name: "Dr. Sarah Mitchell", title: "Licensed Clinical Psychologist",
    rating: 4.9, reviews: 127,
    desc: "Specializing in cognitive behavioral therapy and mindfulness-based approaches.",
    tags: ["CBT", "EMDR"], price: 150,
  },
  {
    initials: "MC", gradientFrom: "#3B82F6", gradientTo: "#2563EB",
    name: "Dr. Michael Chen", title: "Licensed Marriage & Family Therapist",
    rating: 4.8, reviews: 98,
    desc: "Helping couples and families build stronger, healthier relationships.",
    tags: ["Couples", "Family"], price: 140,
  },
  {
    initials: "ER", gradientFrom: "#EC4899", gradientTo: "#DB2777",
    name: "Dr. Emily Rodriguez", title: "Licensed Clinical Social Worker",
    rating: 5.0, reviews: 156,
    desc: "Compassionate trauma-informed care for healing and recovery.",
    tags: ["PTSD", "Trauma"], price: 135,
  },
  {
    initials: "JD", gradientFrom: "#10B981", gradientTo: "#059669",
    name: "Dr. John Doe", title: "Anxiety Specialist",
    rating: 4.7, reviews: 85,
    desc: "Expert in managing generalized anxiety and panic disorders effectively.",
    tags: ["Anxiety", "Panic"], price: 130,
  },
  {
    initials: "SK", gradientFrom: "#F59E0B", gradientTo: "#D97706",
    name: "Dr. Sanya Kapoor", title: "Counselling Psychologist",
    rating: 4.9, reviews: 112,
    desc: "Dedicated support for stress management, career guidance, and lifestyle modifications.",
    tags: ["Stress", "Counselling"], price: 125,
  },
  {
    initials: "AB", gradientFrom: "#EF4444", gradientTo: "#DC2626",
    name: "Dr. Alen Brown", title: "Child & Adolescent Therapist",
    rating: 4.6, reviews: 64,
    desc: "Helping youngsters navigate through emotional and behavioral challenges.",
    tags: ["Child", "Teen"], price: 145,
  },
  {
    initials: "NM", gradientFrom: "#06B6D4", gradientTo: "#0891B2",
    name: "Dr. Neha Mehta", title: "Relationship Advisor",
    rating: 4.8, reviews: 93,
    desc: "Specialized support for relationship struggles, communication issues, and couples therapy.",
    tags: ["Relationship", "Couples"], price: 150,
  },
  {
    initials: "RK", gradientFrom: "#6366F1", gradientTo: "#4F46E5",
    name: "Dr. Robert King", title: "Addiction Specialist",
    rating: 4.9, reviews: 104,
    desc: "Comprehensive paths to recovery from substance abuse and behavioral addictions.",
    tags: ["Addiction", "Recovery"], price: 160,
  }
];

const FeaturedTherapists = ({ isBrowse }) => {
  
  // 💡 ഇവിടെയാണ് ട്രിക്ക്: 
  // ഇംപോർട്ട് ചെയ്യുമ്പോൾ 'isBrowse={true}' എന്ന് കൊടുത്താൽ 8 എണ്ണവും കാണിക്കും (Browse Page).
  // ഒന്നും കൊടുത്തില്ലെങ്കിൽ വെറും 3 എണ്ണം മാത്രം കാണിക്കും (Home Page).
  const displayedTherapists = isBrowse ? therapists : therapists.slice(0, 3);

  return (
    <div className={`featured-therapists ${isBrowse ? "browse-page-list" : ""}`}>
      
      {/* 💡 ഹോംപേജിൽ മാത്രമായി ഹെഡർ കാണിക്കുന്നു. ബ്രൗസ് പേജിൽ (isBrowse ട്രൂ ആകുമ്പോൾ) ഇത് മറയ്ക്കും */}
      {!isBrowse && (
        <div className="featured-header-container">
          <div className="featured-text-group">
            <span className="featured-badge">TOP RATED</span>
            <h2 className="featured-title">Featured Therapists</h2>
            <p className="featured-subtitle">Highly rated professionals ready to help</p>
          </div>
          <a href="/all-therapists" className="view-all-link">View All <span className="arrow">&gt;</span></a>
        </div>
      )}

      <div className="featured-list">
        {displayedTherapists.map((item, index) => (
          // ഇവിടെ ഓരോ കാർഡിനും നമ്മൾ പേജിന്റെ അവസ്ഥ (isBrowse) കൈമാറുന്നു
          <TherapistItem key={index} {...item} isBrowse={isBrowse} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedTherapists;