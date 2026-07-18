import React from 'react';
import '../styles/profile.css';

const MedicalHistory = () => {
  const fields = [
    { label: 'Current Medications', value: 'Sertraline 50mg daily' },
    { label: 'Allergies', value: 'Penicillin' },
    { label: 'Chronic Conditions', value: 'None' }
  ];

  return (
    <div className="info-card">
      <div className="card-header">
        <span className="icon">📄</span>
        <h3>Medical History</h3>
      </div>
      <div className="card-body">
        {fields.map((f, i) => (
          <div className="form-field" key={i}>
            <label>{f.label}</label>
            <div className="input-wrapper">
              <input type="text" defaultValue={f.value} readOnly />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MedicalHistory;