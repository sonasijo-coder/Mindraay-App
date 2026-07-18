import { useState } from "react";
import { FaMapMarkerAlt, FaLocationArrow } from "react-icons/fa";
import "../styles/style.css";

function LocationFilter() {
  // 1. സ്ലൈഡറിന്റെ വാല്യൂ സൂക്ഷിക്കാൻ ഒരു state (Default ആയി 25 കൊടുക്കുന്നു)
  const [distance, setDistance] = useState(25);

  // 2. സ്ലൈഡർ നീക്കുമ്പോൾ പച്ച കളറിന്റെ ശതമാനം കണക്കാക്കാൻ
  // ( value - min ) / ( max - min ) * 100
  const calculateProgress = () => {
    return ((distance - 0) / (100 - 0)) * 100;
  };

  return (
    <div className="location-filter-container">
      <div className="location-main-row">
        
        {/* Your Location */}
        <div className="filter-box location-box">
          <label className="filter-label">Your Location</label>
          <div className="input-with-icon">
            <FaMapMarkerAlt className="filter-icon" />
            <input 
              type="text" 
              className="filter-input" 
              placeholder="San Francisco, CA" 
            />
          </div>
        </div>

        {/* Distance Slider */}
        <div className="filter-box slider-box">
          <label className="filter-label">Distance (miles)</label>
          <div className="slider-wrapper">
            <input 
              type="range" 
              min="0" 
              max="100" 
              value={distance} 
              onChange={(e) => setDistance(Number(e.target.value))} // ഇവിടെ സ്റ്റേറ്റ് അപ്ഡേറ്റ് ആകുന്നു
              className="filter-slider"
              // ഇൻലൈൻ സ്റ്റൈൽ വഴി ലൈവ് ആയി പച്ച കളർ ബാക്ക്ഗ്രൗണ്ടിലേക്ക് മാറ്റുന്നു 👇
              style={{
                background: `linear-gradient(to right, #2ec9a8 0%, #2ec9a8 ${calculateProgress()}%, #233142 ${calculateProgress()}%, #233142 100%)`
              }}
            />
            {/* സ്റ്റേറ്റിലുള്ള വാല്യൂ ഇവിടെ തനിയെ മാറിക്കോളും */}
            <span className="slider-value">{distance}mi</span>
          </div>
        </div>

        {/* Sort By */}
        <div className="filter-box sort-box">
          <label className="filter-label">Sort By</label>
          <select className="filter-select" defaultValue="nearest">
            <option value="nearest">Nearest First</option>
            <option value="rating">Highest Rated</option>
          </select>
        </div>

      </div>

      {/* Use My Current Location */}
      <div className="location-sub-row">
        <button className="current-location-btn">
          <FaLocationArrow className="btn-icon" /> Use My Current Location
        </button>
      </div>
    </div>
  );
}

export default LocationFilter;