import { BrowserRouter as Router ,Routes, Route } from "react-router-dom";
import Sidebar from "./components/SideBar";
import Home from "./pages/home";
import BrowseTherapists from "./pages/browseTherapist";
import Resource from "./pages/resources";
import Webinar from "./pages/webinar";
import Community from "./pages/community";
import Chat from "./pages/chat";
import Notifications from "./pages/notification";
import Profile from "./pages/profile";
import Settings from "./pages/settings";
import SignInPage from "./pages/signin";
import SignUpPage from "./pages/signup";

import "./App.css";

function App() {
  return (
    <Router>
      <div className="app-container">
        <Sidebar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home/>}></Route>

            <Route path="/therapists" element={<BrowseTherapists/>}></Route>

            <Route path="/resources" element={<Resource/>}></Route>

            <Route path="/webinar" element={<Webinar/>}></Route>


             <Route path="/community" element={<Community/>}></Route>

            <Route path="/chat" element={<Chat/>}></Route>

            <Route path="/notification" element={<Notifications/>}></Route>

            <Route path="/profile" element={<Profile/>}></Route>

            <Route path="/settings" element={<Settings/>}></Route>

            <Route path="/signin" element={<SignInPage />} />

            <Route path="/signup" element={<SignUpPage />} />

          </Routes>
          
        </main>
      </div>
    </Router>
  );
}

export default App;