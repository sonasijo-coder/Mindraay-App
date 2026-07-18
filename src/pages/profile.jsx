import React from 'react';
import ProfileHeader from '../components/61_Profileheader';
import PersonalDetails from '../components/62_Personaldetails';
import MedicalHistory from '../components/63_Medicalhistory';
import SessionHistory from '../components/64_SessionHistory';
import PrivacyControl from '../components/66_PrivacyControl';
import WellnessTracking from '../components/67_WellnessTracking';
import MoodTrackerChart from '../components/69_MoodTracker';
import TherapyGoals from '../components/70_TherapistsGoals';
import Milestones from '../components/71_MileStones';

function Profile() {
  return (
    <div className="profile-container">
      <ProfileHeader />
      <PrivacyControl />
      
      <div className="responsive-grid">
        <PersonalDetails />
        <MedicalHistory />
      </div>

      <SessionHistory />
      <WellnessTracking />

      <div className="responsive-grid">
        <MoodTrackerChart />
        <TherapyGoals />
      </div>

      <div className="responsive-grid single-col-md">
        <Milestones />
      </div>
    </div>
  );
}

export default Profile;