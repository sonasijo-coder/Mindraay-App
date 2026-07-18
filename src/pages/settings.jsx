import React, { useState } from 'react';
import SettingsHeader from '../components/72_SettingsHeader';
import NotificationSettings from '../components/73_Notificationsetting';
import PrivacySettings from '../components/75_Privacysettings';
// 62nd Component ഇമ്പോർട്ട് ചെയ്യുന്നു
import PersonalDetails from '../components/62_PersonalDetails'; 
import SecuritySettings from '../components/77_SecurityOption';
import SaveButton from '../components/79_SaveBtn';

function Settings() {
  const [language, setLanguage] = useState("English");

  // സെറ്റിങ്സ് പേജിൽ മാത്രം കാണിക്കേണ്ട ഫീൽഡുകൾ
  const accountFields = [
    { label: 'Email Address', value: 'jessica.m@email.com', icon: '✉️' },
    { label: 'Phone Number', value: '+1 (555) 123-4567', icon: '📞' }
  ];

  const handleSaveAll = () => {
    alert('All changes saved successfully!');
  };

  return (
    <div className="settings-page-container">
      <SettingsHeader />
      
      <div className="settings-list">
        
        {/* 73 - Notification Settings Section */}
        <NotificationSettings />
        
        {/* 75 - Privacy Settings Section */}
        <PrivacySettings />

        {/* 62 - Account Information Section (Props ഉപയോഗിച്ച് മാറ്റം വരുത്തിയത്) */}
        <PersonalDetails 
          title="Account Information"
          icon="👤" // അല്ലെങ്കിൽ ഫിഗ്മയിലുള്ള ഐക്കൺ
          fields={accountFields}
          showLanguage={true}
          selectedLanguage={language}
          onLanguageChange={(e) => setLanguage(e.target.value)}
        />
        
        {/* 77 - Security Settings Section */}
        <SecuritySettings />
        
        {/* 79 - Save Button */}
        <SaveButton onSave={handleSaveAll} />
        
      </div>
    </div>
  );
}

export default Settings;