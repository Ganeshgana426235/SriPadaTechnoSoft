import React, { useState, useEffect, useRef } from "react";
import "./JobUpdates.css";
import i from "../../../Media/sripada home.png";
import slide1 from "../../../Media/courses/c.png";
import slide2 from "../../../Media/courses/python.jpg";
import slide3 from "../../../Media/courses/java.jpg";
import slide4 from "../../../Media/courses/web.png";
import slide5 from "../../../Media/courses/aptitude.png";

const JobUpdates = () => {
  const slides = [slide1, slide2, slide3, slide4, slide5];
  const [currentSlide, setCurrentSlide] = useState(0);
  const autoSlideIntervalRef = useRef(null);
  const autoSlideTimeoutRef = useRef(null);

  const startAutoSlide = () => {
    autoSlideIntervalRef.current = setInterval(() => {
      setCurrentSlide((prevIndex) => (prevIndex + 1) % slides.length);
    }, 3000);
  };

  const stopAutoSlide = () => {
    if (autoSlideIntervalRef.current) {
      clearInterval(autoSlideIntervalRef.current);
      autoSlideIntervalRef.current = null;
    }
  };

  useEffect(() => {
    startAutoSlide();
    return () => {
      stopAutoSlide();
      if (autoSlideTimeoutRef.current) {
        clearTimeout(autoSlideTimeoutRef.current);
      }
    };
  }, []);

  const handleManualNavigation = (newIndexCallback) => {
    stopAutoSlide();
    if (autoSlideTimeoutRef.current) {
      clearTimeout(autoSlideTimeoutRef.current);
    }
    newIndexCallback();
    autoSlideTimeoutRef.current = setTimeout(() => {
      startAutoSlide();
    }, 4000);
  };

  const handleNext = () => {
    handleManualNavigation(() =>
      setCurrentSlide((prevIndex) => (prevIndex + 1) % slides.length)
    );
  };

  const handlePrev = () => {
    handleManualNavigation(() =>
      setCurrentSlide((prevIndex) => (prevIndex - 1 + slides.length) % slides.length)
    );
  };

  const handleDotClick = (index) => {
    handleManualNavigation(() => setCurrentSlide(index));
  };

  return (
    <>
    <div className="homepage">
      {/* Image Slider */}
      <div className="slider">
        <img
          src={slides[currentSlide]}
          alt={`Slide ${currentSlide + 1}`}
          className="slider-placeholder"
        />
        <button className="prev" onClick={handlePrev}>
          &#10094;
        </button>
        <button className="next" onClick={handleNext}>
          &#10095;
        </button>

        <div className="dots">
          {slides.map((_, index) => (
            <span
              key={index}
              className={`dot ${currentSlide === index ? "active" : ""}`}
              onClick={() => handleDotClick(index)}
            ></span>
          ))}
        </div>
      </div>

      {/* About Section */}
      <div className="context">
        <h2>SriPada Techno Soft</h2>
        <h3>Is a Training and Software development company</h3>
        <div className="about-content">
          <div className="about-image-container">
            {/* Provide a valid image source */}
            <img src={i} alt="About Us" className="about-image" />
          </div>
          <div className="about-text">
            <p>
              We provide software training for various programming languages like C, Java, Python, and more.
              Our mission is to help you learn and master new skills while offering job placement assistance
              to ensure you're ready for the workforce.
            </p>
          </div>

          {/* Mission, Vision, and Referral Program Section */}
          <section className="mission-vision-referral">
            <div className="mvr-list">
              <div className="mvr">
                <h3>Our Mission</h3>
                <p>
                  Our mission is to empower individuals by providing quality training, skill-building courses,
                  and personalized job placement assistance to ensure success in their careers.
                </p>
              </div>

              <div className="mvr">
                <h3>Our Vision</h3>
                <p>
                  We envision a world where everyone has access to high-quality, affordable training and
                  development that unlocks their potential and helps them build a successful career.
                </p>
              </div>

              <div className="mvr">
                <h3>Referral Program</h3>
                <p>
                  Join our referral program and earn rewards by referring friends who enroll in our courses.
                  Share the knowledge and help others succeed!
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* Background Animation */}
      <div className="area">
        <ul className="circles">
          <li>
           
          </li>
          <li></li>
          <li></li>
          <li>
           
          </li>
          <li></li>
          <li></li>
          <li></li>
          <li>
           
          </li>
          <li></li>
          <li>
           
          </li>
        </ul>
      </div>

      {/* Additional Text */}
      
    </div><div>
        <h1>HAi</h1>
        <h1>HAi</h1>
        <h1>HAi</h1>
        <h1>HAi</h1>
      </div>
      </>
  );
};

export default JobUpdates;
