import React from 'react';
import AuthHeader from '../components/01_HeaderOfAuth';
import { SignUpForm } from '../components/02_SigninForm';
import AuthFooter from '../components/03_FooterofAuth';
import '../styles/signin.css';

const SignUpPage = () => {
  return (
    <div className="auth-page-container">
      {/* LEFT SIDE: Form */}
      <div className="auth-left-section">
        <div className="auth-card">
          <AuthHeader title="Create your account" subtitle="Start your mental wellness journey today" />
          <SignUpForm />
          <AuthFooter text="Already have an account?" linkText="Sign in" linkTo="/signin" showTerms={true} />
        </div>
      </div>

      {/* RIGHT SIDE: Features Box (Desktop-ൽ മാത്രം കാണുന്നത്) */}
      <div className="auth-right-section">
        <div className="features-container">
          <h3>Your Mental Wellness, Our Priority</h3>
          
          <div className="feature-item">
            <span className="feature-icon">🛡️</span>
            <div>
              <h4>100% Confidential & Secure</h4>
              <p>HIPAA-compliant platform with bank-level encryption to protect your privacy</p>
            </div>
          </div>

          <div className="feature-item">
            <span className="feature-icon">✔️</span>
            <div>
              <h4>Verified Professionals</h4>
              <p>All therapists are licensed, verified, and committed to your wellbeing</p>
            </div>
          </div>

          <div className="feature-item">
            <span className="feature-icon">💚</span>
            <div>
              <h4>Personalized Care</h4>
              <p>Find the perfect therapist match for your unique needs and preferences</p>
            </div>
          </div>

          <div className="testimonial-card">
            <div className="testimonial-user">
              <span className="user-avatar">👩‍⚕️</span>
              <div>
                <h5>Dr. Sarah Mitchell</h5>
                <span>Licensed Clinical Psychologist</span>
              </div>
            </div>
            <p className="testimonial-text">
              "MindfulCare makes it easy to connect with clients who need my help. The platform is intuitive, secure, and truly puts mental health first."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;