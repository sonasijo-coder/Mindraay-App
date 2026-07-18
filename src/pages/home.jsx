import HeroSection from "../components/5_HeroSection";
import SearchBar from "../components/6_SearchBar";
import CTAButtons from "../components/7_CTAButtons";
import FeaturesGrid from "../components/8_FeaturesGrid";
import StatsSection from "../components/9_StatSection";
import SectionTitle from "../components/10_SectionTitle";
import StepCards from "../components/11_StepCards";
import StepCardItem from "../components/12_CardItem";
import BrowseBySpeciality from "../components/13_BrowseBySpeciallity";
import TherapistsBySituation from "../components/14_TherapistBySituation";
import SituationItem from "../components/15_SituationItem";
import FeaturedTherapists from "../components/16_FeaturedTherapists";
import TherapistItem from "../components/17_TherapistsItem";
import TrendingHeader from "../components/18_trendingHeader";
import TrendingList from "../components/19_TrendingList";
import SuccessStories from "../components/20_SuccessStories";
import TestimonialCards from "../components/21_TestimonialCards";
import InsightsHeader from "../components/22_InsightsHeader";
import ArticleCards from "../components/23_ArticleCards";
import ArticleCardItem from "../components/24_ArticleCardItem";
import WebinarHeader from "../components/25_WebinarHeader";
import WebinarCards from "../components/26_WebinarCards";
import WebinarCardItem from "../components/27_WebinarCardItem";
import CrisisSupportBanner from "../components/28_CrisisSupportBanner";
import FAQSection from "../components/29_FaqSection";
import FooterLayout from "../components/FooterLayout";
import FeedbackForm from "../components/32_FeedBack";
import FooterLinks from "../components/33_Footer";
import FooterBottom from "../components/34_FooterBottom";
import '../styles/home.css';


function App() {
  return (
    <>
      <div className="hero-wrapper">
        <HeroSection />
        <SearchBar />
        <CTAButtons />
        <FeaturesGrid />
        <StatsSection />
      </div>

      <SectionTitle
        badge="SIMPLE PROCESS"
        title="Getting Started Is Easy"
        subtitle="Three simple steps to begin your mental health journey with confidence."
      />

      <StepCards />
      <BrowseBySpeciality />
      <TherapistsBySituation />
      <FeaturedTherapists />

      <div className="trending-section-wrapper">
        <TrendingHeader />
        <TrendingList />
      </div>

      <SuccessStories />
      <TestimonialCards />
      <InsightsHeader />
      <ArticleCards />
      <WebinarHeader />
      <WebinarCards />
      <CrisisSupportBanner />
      <FAQSection />
      <FeedbackForm />
      <FooterLinks />
      <FooterBottom />
    </>
  );
}

export default App;