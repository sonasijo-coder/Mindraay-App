import React from "react";
import { useState } from "react";

const testimonials = [
  {
    id: "ts1",
    initials: "AK",
    bg: "#ec4899",
    name: "Anjali K.",
    duration : "3 months",
    quote: "Found the perfect therapist within days. Life-changing experience for my anxiety.",
    rating: 5,
  },
  {
    id: "ts2",
    initials: "RS",
    bg: "#3b82f6",
    name: "Rahul S.",
    duartion :"1 month",
    quote: "The convenience of online sessions fit perfectly into my busy work schedule.",
    rating: 5,
  },
  {
    id: "ts3",
    initials: "MP",
    bg: "#ec4899",
    name: "Meera P.",
    duration:"8 months",
    quote: "Compassionate, professional support that helped me through a difficult grief journey.",
    rating: 5,
  },
];

function TestimonialCards() {

  const [currentIndex, setCurrentIndex] = useState(0);

  const currentTestimonial = testimonials[currentIndex];

 return (
    <div className="testimonial-slider-container">
      {/* Slider Wrapper */}
      <div className="testimonial-card slider-style">
        {/* Top Quote Icon */}
        <div className="quote-icon">“</div>

        {/* Quote Text */}
        <p className="testimonial-quote">"{currentTestimonial.quote}"</p>

        {/* Profile Info Section */}
        <div className="testimonial-author-center">
  <div className="testimonial-avatar" style={{ background: currentTestimonial.bg }}>
    {currentTestimonial.initials}
  </div>
  <div className="author-details-row">
    <span className="testimonial-name">{currentTestimonial.name}</span>
    <span className="testimonial-divider">•</span>
    <span className="testimonial-subtext">
      {currentTestimonial.role} {currentTestimonial.duration}
    </span>
  </div>
</div>

        {/* Rating Stars (ഫിഗ്മയിൽ ഇത് പേരിനും താഴെയാണ്) */}
        <p className="testimonial-stars">{"⭐".repeat(currentTestimonial.rating)}</p>
      </div>

      {/* Pagination Dots */}
      <div className="slider-dots">
        {testimonials.map((_, index) => (
          <button
            key={index}
            className={`dot ${currentIndex === index ? "active" : ""}`}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

export default TestimonialCards;