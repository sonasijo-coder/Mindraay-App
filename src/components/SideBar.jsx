import { FaHouse } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { FaBookOpen } from "react-icons/fa";
import { FaVideo } from "react-icons/fa";
import { FaGlobe } from "react-icons/fa6";
import { BsChatFill } from "react-icons/bs";
import { FaBell } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";
import { IoSettingsSharp } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { NavLink, useNavigate } from "react-router-dom"; // 1. useNavigate ഇമ്പോർട്ട് ചെയ്യുക

import "../styles/style.css";

function SideBar(){
  const navigate = useNavigate(); // 2. navigate ഫങ്ക്ഷൻ ഇനിഷ്യലൈസ് ചെയ്യുക

  return(
    <>
    <input type="checkbox" id="sidebarToggle" className="sidebar-toggle-checkbox" />

    <label htmlFor="sidebarToggle" className="hamburger-btn">
      <span></span>
      <span></span>
      <span></span>
    </label>

    <aside className="sidebar">
      <div className="sidebar-header">
        <label htmlFor="sidebarToggle" className="sidebar-close-btn"><RxCross2/></label>
        <h2 className="sidebar-logo">Mindraay</h2>
      </div>

      <nav className="sidebar-nav">
        <NavLink to="/" end className={({ isActive }) => isActive ? "sidebar-link active" : "sidebar-link"}>
          <span className="icon"><FaHouse/></span>Home
          <span className="active-dot"></span>
        </NavLink>
        
        <NavLink to="/therapists" className={({ isActive }) => isActive ? "sidebar-link active" : "sidebar-link"}>
            <span className="icon"><FaSearch/></span> Browse Therapists
            <span className="active-dot"></span>
        </NavLink>
        
        <NavLink to="/resources" className={({ isActive }) => isActive ? "sidebar-link active" : "sidebar-link"}>
            <span className="icon"><FaBookOpen/></span> Resources
            <span className="active-dot"></span>
        </NavLink>

        <NavLink to="/webinar" className={({ isActive }) => isActive ? "sidebar-link active" : "sidebar-link"}>
            <span className="icon"><FaVideo/></span> Webinar
            <span className="active-dot"></span>
        </NavLink>

        <NavLink to="/community" className={({ isActive }) => isActive ? "sidebar-link active" : "sidebar-link"}>
            <span className="icon"><FaGlobe/></span> Community
            <span className="active-dot"></span>
        </NavLink>

        <NavLink to="/chat" className={({ isActive }) => isActive ? "sidebar-link active" : "sidebar-link"}>
            <span className="icon"><BsChatFill/></span> Chat
            <span className="active-dot"></span>
        </NavLink>

        <NavLink to="/notification" className={({ isActive }) => isActive ? "sidebar-link active" : "sidebar-link"}>
            <span className="icon"><FaBell/></span> Notification
            <span className="active-dot"></span>
        </NavLink>

        <NavLink to="/profile" className={({ isActive }) => isActive ? "sidebar-link active" : "sidebar-link"}>
            <span className="icon"><FaUserAlt/></span> My Profile
            <span className="active-dot"></span>
        </NavLink>
           
        <NavLink to="/settings" className={({ isActive }) => isActive ? "sidebar-link active" : "sidebar-link"}>
            <span className="icon"><IoSettingsSharp/></span> Settings
            <span className="active-dot"></span>
        </NavLink>
      </nav>

      <div className="sidebar-footer">
        <div className="sidebar-signin">
          <p>Get Started with Mindraay</p>
          {/* 3. ഇവിടെ onClick കൊടുത്ത് നമ്മൾ സെറ്റ് ചെയ്യുന്ന റൂട്ടിലേക്ക് വഴിതിരിച്ചു വിടുക */}
          <button 
            className="patient-btn" 
            onClick={() => navigate('/signin')}
          >
            Patient Sign In
          </button>
          
          <button 
            className="professional-btn" 
            onClick={() => navigate('/signin')}
          >
            Professional
          </button>
        </div>
      </div>

    </aside>
    <label htmlFor="sidebarToggle" className="sidebar-overlay"></label>
    </>
  );
}

export default SideBar;