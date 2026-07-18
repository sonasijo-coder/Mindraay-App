import React from 'react';
import { IoSearch, IoFilterOutline } from "react-icons/io5"; 

function SearchBar({ variant, placeholder, buttonText, value, onChange, onFilterClick, onSearchSubmit }) {
  const isBrowse = variant === "browse";
  const isResource = variant === "resource"; 
  const isMessages = variant === "messages";
  const isCommunity = variant === "community"; 
  const isWebinar = variant === "webinar"; 

  return (
    <div 
      className={`search-bar-container ${isBrowse ? "search-bar-browse" : ""} ${isResource ? "search-bar-resource" : ""} ${isMessages ? "search-bar-messages" : ""} ${isCommunity ? "search-bar-community" : ""} ${isWebinar ? "search-bar-webinar" : ""}`}
    >
      {/* 🟢 ഈ wrapper-ന് ഉള്ളിലാണ് എല്ലാ ബട്ടണുകളും വരേണ്ടത് */}
      <div className="search-input-wrapper">
        <span className="search-icon"><IoSearch/></span>
        <input
          type="text"
          className="search-input"
          placeholder={placeholder || "Search by specialty, concern..."}
          value={value}      
          onChange={onChange}  
        />

        {/* 1️⃣ റിസോഴ്സ് പേജ് ഇന്നർ ബട്ടൺ */}
        {isResource && (
          <button className="resource-inner-search-btn" onClick={onSearchSubmit}>
            Search
          </button>
        )}
        
        {/* 2️⃣ 🛠️ വെബിനാർ ഫിൽട്ടർ ബട്ടൺ (ഇപ്പോൾ ഇൻപുട്ടിനൊപ്പം ഉള്ളിലാക്കി) */}
        {isWebinar && (
          <button className="webinar-filter-btn" onClick={onFilterClick}>
           
            <span className="filter-text"><IoFilterOutline/>Filter</span>
          </button>
        )}

        {/* 3️⃣ 🛠️ ഫിഗ്മ ഒന്നാമത്തെ ഇമേജിലെ 'Find Therapist' ബട്ടൺ (ഇതും ഉള്ളിലാക്കി) */}
        {!isBrowse && !isResource && !isMessages && !isCommunity && !isWebinar && (
          <button className="search-btn" onClick={onSearchSubmit}>
            <span className="search-btn-icon"><IoSearch/></span>
            <span className="search-btn-text">{buttonText || "Find Therapist"}</span>
          </button>
        )}
      </div>
    </div>
  );
}

export default SearchBar;