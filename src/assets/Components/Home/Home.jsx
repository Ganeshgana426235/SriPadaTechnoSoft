import React, { useState, useEffect, useRef } from 'react';
import './Home.css';
import aboutlogo from '../../../Media/sripada logo2.png';
import slide1 from '../../../Media/courses/c.png';
import slide2 from '../../../Media/courses/python.jpg';
import slide3 from '../../../Media/courses/java.jpg';
import slide4 from '../../../Media/courses/web.png';
import slide5 from '../../../Media/courses/aptitude.png';
import missionImg from '../../../Media/mission.png';
import visionImg from '../../../Media/vission.png';
import referralImg from '../../../Media/referal.png';
import '@fortawesome/fontawesome-free/css/all.min.css';
import homeimage from '../../../Media/sripada home3.png';
import c from '../../../Media/Course details/image3.jpg';
import python from '../../../Media/Course details/image4.jpg';
import java from '../../../Media/Course details/image5.jpg';
import sql from '../../../Media/Course details/image6.jpg';
import html from '../../../Media/Course details/image7.jpg';
import mysql from '../../../Media/Course details/image8.jpg';



const Home = () => {
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
  }, [slides.length]);

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
    <div className="homepage">
      {/* Image Slider */}
      <div className="slider">
        <img src={slides[currentSlide]} alt="Active slide placeholder" className="slider-placeholder" />
        {slides.map((slide, index) => (
          <img key={index} src={slide} alt={`Slide ${index + 1}`} className={`slide ${index === currentSlide ? 'active' : ''}`} />
        ))}
        <button className="prev" onClick={handlePrev}>&#10094;</button>
        <button className="next" onClick={handleNext}>&#10095;</button>

        <div className="dots">
          {slides.map((_, index) => (
            <span key={index} className={`dot ${currentSlide === index ? 'active' : ''}`} onClick={() => handleDotClick(index)}></span>
          ))}
        </div>
      </div>

      {/* About Section */}
      <div className="about-company">
        <h3>Best Software Training Institute in Hyderabad</h3>
        <h2>SriPada Techno Soft</h2>
        <div className="about-content">
          <div className="about-image-container">
            <img src={homeimage} alt="About Us" className="about-image" />
          </div>
          <div className="about-text">
            <p>
              We are a leading EdTech company providing courses in various programming languages like C, Java, Python, and more.
              Our mission is to help you learn and master new skills while offering job placement assistance to ensure you're
              ready for the workforce.
            </p>
          </div>
                {/* Mission, Vision, and Referral Program Section (Updated Format) */}
      <section className="mission-vision-referral">
        <div className="mvr-list">
          <div className="mvr">
            <img src={missionImg} alt="Mission" className="mvr-image" />
            <h3>Our Mission</h3>
            <p>
              Our mission is to empower individuals by providing quality training, skill-building courses, and personalized
              job placement assistance to ensure success in their careers.
            </p>
          </div>

          <div className="mvr">
            <img src={visionImg} alt="Vision" className="mvr-image" />
            <h3>Our Vision</h3>
            <p>
              We envision a world where everyone has access to high-quality, affordable training and development that unlocks their potential
              and helps them build a successful career.
            </p>
          </div>

          <div className="mvr">
            <img src={referralImg} alt="Referral Program" className="mvr-image" />
            <h3>Referral Program</h3>
            <p>
              Join our referral program and earn rewards by referring friends who enroll in our courses. Share the knowledge
              and help others succeed!
            </p>
          </div>
        </div>
      </section>
        </div>
      </div>

    {/* Courses Section */}
<section className="courses">
  <h2>Top Courses</h2>
  <hr className='whyhr'></hr>
  <p>Shaping Tomorrow with Excellence & Innovation</p>
  <div className="course-list">
    <div className="course">
      <img src={c} alt="C Programming"></img>
      <h3>C Programming</h3>
      <p>Learn the fundamentals of C programming with hands-on projects.</p>
      <div className="hover-text">
        <p>Unlock the power of foundational programming with our C course. Dive into the core concepts of structured programming, memory management, and algorithm development. Master the language that forms the building blocks of countless systems and applications. Gain a solid understanding of how software interacts with hardware. Prepare yourself for advanced programming concepts and build a strong base for your coding journey.</p>
      </div>
    </div>
    <div className="course">
      <img src={python} alt="Java Development"></img>
      <h3>Java Development</h3>
      <p>Master Java with real-world applications and job-ready projects.</p>
      <div className="hover-text">
        <p>Become a Java expert and build robust, scalable applications. Our comprehensive Java course covers everything from object-oriented programming to advanced topics like data structures and design patterns. Develop cross-platform applications that run on any device. Learn to create interactive user interfaces and harness the power of the Java ecosystem. Launch your career in the high-demand world of Java development.</p>
      </div>
    </div>
    <div className="course">
      <img src={java} alt="Python for AI"></img>
      <h3>Python for AI</h3>
      <p>Unlock the power of Python for AI and Machine Learning.</p>
      <div className="hover-text">
        <p>Embrace the simplicity and versatility of Python. Our Python course is perfect for beginners and experienced programmers alike. Explore the world of data science, web development, and automation with Python's easy-to-learn syntax and extensive libraries. Build powerful scripts, analyze data, and create cutting-edge applications. Unlock your potential with one of the most popular programming languages in the world.</p>
      </div>
    </div>
    <div className="course">
      <img src={html} alt="MySQL"></img>
      <h3>HTML</h3>
      <p>Build the foundation of websites with HTML, structuring content and creating engaging layouts. Learn the essential tags and elements that bring web pages to life.</p>
      <div className="hover-text">
        <p>Build the foundation of the web with our HTML course. Learn to structure content, create layouts, and design engaging web pages. Master the essential elements and tags that bring websites to life. Unlock your creativity and design stunning user interfaces. Prepare yourself for front-end web development and bring your web design visions to reality.</p>
      </div>
    </div>
    <div className="course">
      <img src={sql} alt="MySQL"></img>
      <h3>SQL</h3>
      <p>Unlock the power of data with SQL, mastering how to retrieve, manipulate, and manage information efficiently. Become proficient in writing queries and extracting valuable insights.</p>
      <div className="hover-text">
        <p>Harness the power of data with our SQL course. Learn to retrieve, manipulate, and manage data efficiently. Master the art of querying databases and extracting valuable insights. Become proficient in writing complex queries and optimizing database performance. Unlock the secrets of data analysis and become a data-driven professional.</p>
      </div>
    </div>
    <div className="course">
      <img src={mysql} alt="MySQL"></img>
      <h3>MySQL</h3>
      <p>Dive into database management with MySQL, learning to design, implement, and administer robust and scalable databases. </p>
      <div className="hover-text">
        <p>Dive into the world of database management with our MySQL course. Learn to design, implement, and administer robust and scalable databases. Master the fundamentals of relational database management systems. Gain hands-on experience working with one of the most popular open-source databases. Become a database expert and manage critical data with confidence.</p>
      </div>
    </div>
  </div>
  <a href="/courses" className="btn">Explore Our Courses</a>
</section>


      <section className="why">
  <h2 className="section-title">Why SriPada Techno Soft for Career Growth</h2>
  <p className="subtitle">Best Courses – we have the best courses to become a software professional</p>
  <hr className='whyhr'></hr>
  <div className="why-list">
    <div className="feature">
      <i className="fas fa-graduation-cap icon"></i>
      <h3>Best Courses</h3>
      <p>We offer the best courses to help you become a professional in your chosen field.</p>
    </div>

    <div className="feature">
      <i className="fas fa-user-tie icon"></i>
      <h3>Learn from experts</h3>
      <p>Our real-time professionals help you learn not only technical courses but also a wide range of other subjects with ease.</p>
    </div>

    <div className="feature">
      <i className="fas fa-clock icon"></i>
      <h3>Flexible Timings</h3>
      <p>Learn anytime, from anywhere. Make the most of your free time by gaining new skills with guidance from our experts.</p>
    </div>
    <div className="feature">
      <i className="fas fa-location icon"></i>
      <h3>Where We are</h3>
      <p>Sri Rama Nilayam,1st floor, Domara Pochampally, Gandimaisamma, Hyderabad, Telangana, 500043</p>
    </div>
    <div className="feature">
      <i className="fas fa-headset icon"></i>
      <h3>Fast support</h3>
      <p>We Have fast support for students from mon to sat 9 am to 8 pm.</p>
    </div>
          
  </div>
</section>

<section className="services">
  <h3 className="section-title">Our Services</h3>

  <hr className='section-divider'></hr>
  <div className="services-list">
    <div className="service-item">
      <div className="icons">
        <i className="fas fa-laptop"></i>
      </div>
      <div className="service-info">
        <h3>Online Training</h3>
        <p>We offer online training with live virtual sessions, enabling learners who cannot attend offline classes to interact with industry experts and stay updated on the latest technology, regardless of location.</p>
      </div>
    </div>

    <div className="service-item">
      <div className="icons">
        <i className="fas fa-people-group"></i>
      </div>
      <div className="service-info">
        <h3>Offline Classes</h3>
        <p>We provide both online and offline training, allowing learners to choose between live virtual sessions for remote access or in-person classes for a traditional learning experience with industry experts.</p>
      </div>
    </div>

    <div className="service-item">
      <div className="icons">
        <i className="fas fa-clock service-icon"></i>
      </div>
      <div className="service-info">
        <h3>Flexible Timings</h3>
        <p>Learn anytime, from anywhere. Make the most of your free time by gaining new skills with guidance from our experts.</p>
      </div>
    </div>
    
    <div className="service-item">
      <div className="icons">
        <i className="fas fa-handshake icons"></i>
      </div>
      <div className="service-info">
        <h3>Project Support</h3>
        <p>We offer shadow support to the team on complex projects, ensuring timely delivery and high-quality solutions.</p>
      </div>
    </div>

    <div className="service-item">
      <div className="icons">
        <i className="fas fa-briefcase"></i>
      </div>
      <div className="service-info">
        <h3>Placement Assistance</h3>
        <p>We provide placement assistance to students, helping them secure opportunities and kick-start their careers.</p>
      </div>
    </div>

    <div className="service-item">
      <div className="icons">
        <i className="fas fa-code"></i>
      </div>
      <div className="service-info">
        <h3>Internships</h3>
        <p>We also offer internships for students, providing real-time project experience under the guidance of industry experts.</p>
      </div>
    </div>
  </div>
</section>




      
    </div>
  );
};

export default Home;
