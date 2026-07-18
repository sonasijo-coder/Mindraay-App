import React from 'react';
import '../styles/settings.css'; // സെറ്റിങ്സ് സ്റ്റൈലും ഇതിലേക്ക് ഉപയോഗിക്കാം

const PersonalDetails = ({ 
  title = "Personal Details", 
  icon = "👤", 
  fields, 
  showLanguage = false, 
  selectedLanguage = "English", 
  onLanguageChange 
}) => {
  
  // മുകളിൽ നിന്നു ഫീൽഡുകൾ തന്നില്ലെങ്കിൽ ഡിഫോൾട്ടായി പ്രൊഫൈലിലെ ഫീൽഡുകൾ എടുക്കും
  const defaultFields = [
    { label: 'Full Name', value: 'Jessica Martinez' },
    { label: 'Email Address', value: 'jessica.m@email.com', icon: '✉️' },
    { label: 'Phone Number', value: '+1 (555) 123-4567', icon: '📞' }
  ];

  const displayFields = fields || defaultFields;

  return (
    <div className="settings-section">
      <h3 className="section-title">
        <span className="icon">{icon}</span> {title}
      </h3>
      <div className="section-card">
        {displayFields.map((f, i) => (
          <div className="form-field" key={i}>
            <label className="field-label">{f.label}</label>
            <div className="input-wrapper">
              {f.icon && <span className="input-icon">{f.icon}</span>}
              <input type="text" defaultValue={f.value} readOnly />
            </div>
          </div>
        ))}

        {/* Language Dropdown (സെറ്റിങ്സിൽ മാത്രം കാണിക്കാൻ വേണ്ടി) */}
        {showLanguage && (
          <div className="form-field">
            <label className="field-label">Language</label>
            <div className="input-wrapper">
              <span className="input-icon">🌐</span>
              <select 
                className="language-select" 
                value={selectedLanguage} 
                onChange={onLanguageChange}
              >
                <option value="English">English</option>
                <option value="Malayalam">Malayalam</option>
                <option value="Spanish">Spanish</option>
              </select>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PersonalDetails;