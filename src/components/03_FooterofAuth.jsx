import React from 'react';
import { useNavigate } from 'react-router-dom';

const AuthFooter = ({ text, linkText, linkTo, showTerms = false }) => {
  const navigate = useNavigate();

  return (
    <div className="auth-footer">
      <p>
        {text}{' '}
        <span className="signup-link" onClick={() => navigate(linkTo)} style={{ cursor: 'pointer' }}>
          {linkText}
        </span>
      </p>
      
      {/* Sign Up പേജിൽ മാത്രം കാണിക്കേണ്ട Terms & Privacy */}
      {showTerms && (
        <p className="terms-text">
          By creating an account, you agree to our <a href="#terms">Terms of Service</a> and <a href="#privacy">Privacy Policy</a>
        </p>
      )}
    </div>
  );
};

export default AuthFooter;