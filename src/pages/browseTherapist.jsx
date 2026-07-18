import BrowseBanner from "../components/35_BrowseBanner";
import Location from "../components/36_LocationFilter";
import SearchBar from "../components/6_SearchBar"; // പാത്ത് കറക്റ്റ് ആണെന്ന് ഉറപ്പുവരുത്തുക
import { IoSearch } from "react-icons/io5"; // ഓൾറെഡി വർക്കിങ് ആയ ഐക്കൺ മാത്രം ഇംപോർട്ട് ചെയ്യുന്നു
import TherapistsCard from "../components/37_TherapistsCard";
function Browser(){
  return(
    <>
      <div className="therapist-wrapper">
        <BrowseBanner/>
      </div>

      <Location/>

      {/* സെർച്ച് ബാറും ഫിൽട്ടറും ഒരുമിച്ച് ഒരേ വരിയിൽ വരാൻ */}
      <div className="search-filter-section" style={{
        display: "flex",
        gap: "16px",
        alignItems: "center",
        maxWidth: "1200px", 
        margin: "30px auto", 
        padding: "0 20px",
        width: "100%",
        boxSizing: "border-box"
      }}>
        
        {/* പുതുക്കിയ സെർച്ച് ബാർ */}
        <SearchBar 
          variant="browse" 
          placeholder="Search by name, specialty, or tags..." 
        />

        {/* ഫിൽട്ടർ ബട്ടൺ */}
        <button className="filter-btn" style={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
          background: "transparent",
          color: "#fff",
          border: "1px solid rgba(46, 201, 168, 0.3)",
          padding: "12px 24px",
          borderRadius: "12px",
          cursor: "pointer",
          fontWeight: "600",
          height: "46px", 
          whiteSpace: "nowrap"
        }}>
          <span>⚙️</span> Filters
        </button>
      </div>

      <div className="browse-listings" style={{ 
        maxWidth: "1200px", 
        margin: "40px auto", 
        padding: "0 16px" 
      }}>
        <TherapistsCard isBrowse={true} /> 
      </div>
    </>
  );
}

export default Browser;