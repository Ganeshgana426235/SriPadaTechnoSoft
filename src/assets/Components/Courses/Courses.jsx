import React, { useState } from 'react';
import courseimage from '../../../Media/course image.png';
import './Courses.css';
import c from '../../../Media/Course details/image3.jpg';
import python from '../../../Media/Course details/image4.jpg';
import java from '../../../Media/Course details/image5.jpg';
import sql from '../../../Media/Course details/image6.jpg';
import html from '../../../Media/Course details/image7.jpg';
import mysql from '../../../Media/Course details/image8.jpg';
import css from '../../../Media/Course details/image9.jpg';
import JavaScript from '../../../Media/Course details/image10.jpg';
import cpp from '../../../Media/Course details/image11.jpg';
import csharp from '../../../Media/Course details/image12.jpg';
import php from '../../../Media/Course details/image13.jpg';
import react from '../../../Media/Course details/image14.jpg';
import node from '../../../Media/Course details/image15.jpg';
import express from '../../../Media/Course details/image17.jpg';
import cybersecurity from '../../../Media/Course details/image16.jpg';
import dataanalytics from '../../../Media/Course details/image1.jpg';
import { Link as RouterLink } from 'react-router-dom';

const Courses = () => {
  const courses = [
    { image: html, title: 'HTML', link: '/courses' },
    { image: css, title: 'CSS', link: '/courses' },
    { image: JavaScript, title: 'JavaScript', link: '/courses' },
    { image: c, title: 'C Programming', link: '/courses' },
    { image: python, title: 'Java Development', link: '/courses' },
    { image: java, title: 'Python', link: '/courses' },
    { image: sql, title: 'SQL', link: '/courses' },
    { image: mysql, title: 'MySQL', link: '/courses' },
    { image: cpp, title: 'C++', link: '/courses' },
    { image: csharp, title: 'C#', link: '/courses' },
    { image: php, title: 'PHP', link: '/courses' },
    { image: react, title: 'React', link: '/courses' },
    { image: node, title: 'Node', link: '/courses' },
    { image: express, title: 'Express', link: '/courses' },
    { image: cybersecurity, title: 'Cyber Security', link: '/courses' },
    { image: dataanalytics, title: 'Data Analytics', link: '/courses' },
  ];

  const [showForm, setShowForm] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [btn, setBtn] = useState("Enroll Now");
  const handleEnrollClick = () => {
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
    setFormSubmitted(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch('https://api.web3forms.com/submit', { 
      method: 'POST',
      body: new FormData(event.target),
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        console.log('Success:', data);
        setFormSubmitted(true);
        setShowForm(false);
        setBtn("Thanks for Interest")
      })
      .catch((error) => {
        console.error('Error:', error);
        alert('Error in form submission');
      });
  };


  return (
    <div className='course-top'>
      <section className="course-section">
        <div className="why-choose-us">
          <div className="benefits-container">
            <div className="benefits">
              <h2>Explore limitless learning</h2>
              <div className="benefit">
                <p>Achieve your career goals with access to over 20+ courses, Professional Certificates, and degrees from leading universities and companies. Start, switch, or advance – the choice is yours.</p>
                <button 
        type="button" 
        className={`enroll-button ${btn === 'Thanks for Interest' ? 'success-button' : ''}`} 
        onClick={handleEnrollClick}
      >
        {btn}
      </button>
              </div>
            </div>
            <div className='image'>
              <img src={courseimage} alt="Course Image" />
            </div>
          </div>
        </div>
      </section>

      <section className="courses">
        <h2>Top Courses</h2>
        <hr className='whyhr'></hr>
        <p>Shaping Tomorrow with Excellence & Innovation</p>
        <div className="course-division">
          {courses.map((course, index) => (
            <div className="course-div" key={index}>
              <RouterLink to={course.link} className="course-link">
                <img src={course.image} alt={course.title} />
                <h3>{course.title}</h3>
              </RouterLink>
            </div>
          ))}
          <button 
        type="button" 
        className={`enroll-button ${btn === 'Thanks for Interest' ? 'success-button' : ''}`} 
        onClick={handleEnrollClick}
      >
        {btn}
      </button>
      
        </div>
      </section>

      <div className='course-ben-container'>
        <div className='course-ben'>
          <h1>Enroll to get more</h1>
          <ul>
            <li><i className="fas fa-check-circle"></i> <span>Gain in-demand skills that employers seek.</span></li>
            <li><i className="fas fa-user-graduate"></i> <span>Receive personalized support from experienced instructors.</span></li>
            <li><i className="fas fa-briefcase"></i> <span>Comprehensive career placement assistance program.</span></li>
            <li><i className="fas fa-hand"></i> <span>Get hands-on experience through real-world projects.</span></li>
            <li><i className="fas fa-file-alt"></i> <span>Build a portfolio that showcases your abilities.</span></li>
            <li><i className="fas fa-users"></i> <span>Join a network of successful alumni.</span></li>
          </ul>
        </div>
      </div>

      {showForm && (
        <div className="enrollment-form-overlay">
          <div className="enrollment-form">
            <h2>Enroll Now</h2>
            <p className='close-cross' onClick={handleCloseForm}> ✖</p>
            { (
              <form onSubmit={handleSubmit}>
                <input type="hidden" name="access_key" value="c8c56c54-ebcf-4d14-a1c1-863765167518"></input>
                <div className="form-group">
                  <label htmlFor="fullname">Full Name:</label>
                  <input placeholder='Enter Your Full Name' type="text" id="fullname" name="fullname" required />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone Number:</label>
                  <input placeholder='Enter Your Mobile No' type="tel" id="phone" name="phone" required />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email:</label>
                  <input placeholder='Enter Your Mail ID' type="email" id="email" name="email" required />
                </div>
                <div className='form-group'>
                  <select name='course'>
                    <option value="Select Course">Select Course</option>
                    {courses.map((course, index) => (
                      <option key={index} value={course.title}>{course.title}</option>
                    ))}
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message:</label>
                  <textarea placeholder='Your Message' id="message" name="message" rows="4"></textarea>
                </div>
                <button type="submit" className="submit-button">Submit</button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Courses;