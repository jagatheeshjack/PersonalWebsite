
import React, { useState, useEffect, useRef } from 'react';
import './Testimonials.css';

const testimonials = [
  {
    quote: `Be original and find your own voice. Don’t try to copy others, be yourself.`,
    name: 'A.R. Rahman',
    role: 'Music Composer',
    img: 'https://st1.bollywoodlife.com/wp-content/uploads/2024/01/ar-rahman.png',
  },
  {
    quote: `People throw stones at you and you convert them into milestones.`,
    name: 'Sachin Tendulkar',
    role: 'Cricket Legend',
    img: 'https://upload.wikimedia.org/wikipedia/commons/2/25/Sachin_Tendulkar_at_MRF_Promotion_Event.jpg',
  },
  {
    quote:`You don’t play for the crowd, you play for the country.`,
    name: 'M.S. Dhoni',
    role: 'Cricketer',
    img:  'https://th.bing.com/th/id/OIP.lwGOklI5wJAsyfdXIrJwagHaEK?w=281&h=180&c=7&r=0&o=7&pid=1.7&rm=3'
 },
  {
    quote:`When something is important enough, you do it even if the odds are not in your favor.`,
    name: 'Elon Musk',
    role: 'Entrepreneur',
    img:  'https://th.bing.com/th/id/OIP._6KICMjzutct5LgHX6pOYAHaDt?w=317&h=175&c=7&r=0&o=7&pid=1.7&rm=3',
  },
  {
    quote:`Dream, dream, dream. Dreams transform into thoughts and thoughts result in action.`,
    name: 'Dr. A.P.J. Abdul Kalam',
    role: 'Former President of India',
    img:  'https://thepersonage.com/wp-content/uploads/2020/07/Dr-Apj-Abdul-Kalam-Image-210x223.jpg',
  },
  {
    quote:`Education is the most powerful weapon which you can use to change the world.`,
    name: 'K. Kamaraj',
    role: 'Former Chief Minister of Tamil Nadu',
    img:  'https://th.bing.com/th/id/OIP.ZPZ6jRKEauY4KQaDJUKJZwHaEK?w=316&h=180&c=7&r=0&o=7&pid=1.7&rm=3',
  },
  {
    quote:`யாதும் ஊரே யாவரும் கேளிர்`,
    name: 'Kaniyan Poonkundranar',
    role: 'Tamil Poet',
    img:  'https://th.bing.com/th/id/OIP.CqSmqs9dKgzGxXBWpF2OkAHaFZ?w=238&h=180&c=7&r=0&o=7&pid=1.7&rm=3',
  },
];

const CARDS_TO_SHOW = 3;
const AUTO_SLIDE_INTERVAL = 3500;

const Testimonials = () => {
  const [startIdx, setStartIdx] = useState(0);
  const timeoutRef = useRef(null);
  const total = testimonials.length;
  const numDots = total - CARDS_TO_SHOW + 1;

  const nextSlide = () => {
    setStartIdx((prev) => (prev + 1) % numDots);
  };

  const prevSlide = () => {
    setStartIdx((prev) => (prev - 1 + numDots) % numDots);
  };

  useEffect(() => {
    timeoutRef.current = setTimeout(nextSlide, AUTO_SLIDE_INTERVAL);
    return () => clearTimeout(timeoutRef.current);
  }, [startIdx]);

  const handleDotClick = (idx) => {
    setStartIdx(idx);
  };

  const visibleTestimonials = testimonials.slice(startIdx, startIdx + CARDS_TO_SHOW);

  // If at the end, wrap around
  if (visibleTestimonials.length < CARDS_TO_SHOW) {
    visibleTestimonials.push(...testimonials.slice(0, CARDS_TO_SHOW - visibleTestimonials.length));
  }

  return (
    <section className="testimonials-section">
      <div className="testimonials-container">
        <h2 className="testimonials-title">Testimonials</h2>
        <div className="testimonials-title-underline"></div>
        <p className="testimonials-desc">
          “A positive and approachable person who values integrity, continuous learning, and meaningful relationships.”,
          “Known for being responsible, adaptable, and supportive, with a strong commitment to personal growth.”
           </p>
        <div className="testimonials-row">
          {visibleTestimonials.map((t, idx) => (
            <div className="testimonial-card" key={startIdx + idx}>
              <div className="testimonial-quote">
                <i className="fas fa-quote-left"></i> {t.quote} <i className="fas fa-quote-right"></i>
              </div>
              <div className="testimonial-profile">
                <div className="testimonial-img">
                  <img src={t.img} alt={t.name} />
                </div>
                <div className="testimonial-name">{t.name}</div>
                <div className="testimonial-role">{t.role}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="testimonials-dots">
          {Array.from({ length: numDots }).map((_, idx) => (
            <span
              key={idx}
              className={`testimonials-dot${idx === startIdx ? ' active' : ''}`}
              onClick={() => handleDotClick(idx)}
              style={{ cursor: 'pointer' }}
            ></span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
