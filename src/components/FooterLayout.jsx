// FooterLayout.jsx
import AboutSection from "./30_AboutSection";
import ContactSection from "./31_ContactSection";
import "../styles/style.css";

function FooterLayout() {
  return (
    <div className="footer-layout-container">
      <AboutSection />
      <ContactSection />
    </div>
  );
}

export default FooterLayout;