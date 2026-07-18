import TherapistItem from "./17_TherapistsItem";

import React from "react";


const therapists = [

  {

    initials: "SM", gradientFrom: "#A855F7", gradientTo: "#7C3AED",

    name: "Dr. Sarah Mitchell", title: "Licensed Clinical Psychologist",

    rating: 4.9, reviews: 127,

    desc: "Specializing in cognitive behavioral therapy and mindfulness-based approaches.",

    tags: ["CBT", "EMDR"], price: 150,

  },

  {

    initials: "MC", gradientFrom: "#3B82F6", gradientTo: "#2563EB",

    name: "Dr. Michael Chen", title: "Licensed Marriage & Family Therapist",

    rating: 4.8, reviews: 98,

    desc: "Helping couples and families build stronger, healthier relationships.",

    tags: ["Couples", "Family"], price: 140,

  },

  {

    initials: "ER", gradientFrom: "#EC4899", gradientTo: "#DB2777",

    name: "Dr. Emily Rodriguez", title: "Licensed Clinical Social Worker",

    rating: 5.0, reviews: 156,

    desc: "Compassionate trauma-informed care for healing and recovery.",

    tags: ["PTSD", "Trauma"], price: 135,

  },

];



const FeaturedTherapists = () => {

  return (

    <div className="featured-therapists">

      <div className="featured-header-container">

        <div className="featured-text-group">

      <span className="featured-badge">TOP RATED</span>

      <h2 className="featured-title">Featured Therapists</h2>

      <p className="featured-subtitle">Highly rated professionals ready to help</p>

      </div>

      <a href="/all-therapists" className="view-all-link">View All <span className="arrow">&gt;</span></a>

      </div>

      <div className="featured-list">

        {therapists.map((item, index) => (

          <TherapistItem key={index} {...item} />

        ))}

      </div>

    </div>

  );

};



export default FeaturedTherapists;