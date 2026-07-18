import React from 'react';

// 1. ലോഗിൻ ചെയ്യാൻ ഉള്ള സിംപിൾ ഫോം (SignInForm)
export const SignInForm = () => {
  return (
    <form className="signin-form" onSubmit={(e) => e.preventDefault()}>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input type="email" id="email" placeholder="Enter your email" required />
      </div>

      <div className="form-group">
        <label htmlFor="password">Password</label>
        <div className="password-wrapper">
          <input type="password" id="password" placeholder="Enter your password" required />
          <span className="eye-icon">👁️</span>
        </div>
      </div>

      <div className="form-options">
        <label className="checkbox-container">
          <input type="checkbox" /> Remember me
        </label>
        <a href="#forgot" className="forgot-link">Forgot password?</a>
      </div>

      <button type="submit" className="btn btn-primary">Sign In</button>
      <button type="button" className="btn btn-outline">Sign in as a Professional</button>

      <div className="divider"><span>or</span></div>

      <button type="button" className="btn btn-social"><span className="social-icon">G</span> Continue with Google</button>
      <button type="button" className="btn btn-social"><span className="social-icon">📸</span> Continue with Instagram</button>
    </form>
  );
};

// 2. പുതിയ അക്കൗണ്ട് ഉണ്ടാക്കാൻ ഉള്ള ഫോം (SignUpForm)
export const SignUpForm = () => {
  return (
    <form className="signin-form" onSubmit={(e) => e.preventDefault()}>
      <div className="form-group">
        <label htmlFor="fullname">Full Name</label>
        <input type="text" id="fullname" placeholder="Enter your full name" required />
      </div>

      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input type="email" id="email" placeholder="Enter your email" required />
      </div>

      <div className="form-group">
        <label htmlFor="password">Password</label>
        <div className="password-wrapper">
          <input type="password" id="password" placeholder="Enter your password" required />
          <span className="eye-icon">👁️</span>
        </div>
      </div>

      <div className="password-requirements">
        <p>Password must contain:</p>
        <ul>
          <li><span className="check-icon">✓</span> At least 8 characters</li>
          <li><span className="check-icon">✓</span> One uppercase letter</li>
          <li><span className="check-icon">✓</span> One number</li>
        </ul>
      </div>

      <button type="submit" className="btn btn-primary">Create Account</button>
      <button type="button" className="btn btn-outline">Sign in as a Professional</button>

      <div className="divider"><span>or</span></div>

      <button type="button" className="btn btn-social"><span className="social-icon">G</span> Continue with Google</button>
      <button type="button" className="btn btn-social"><span className="social-icon">📸</span> Continue with Instagram</button>
    </form>
  );
};