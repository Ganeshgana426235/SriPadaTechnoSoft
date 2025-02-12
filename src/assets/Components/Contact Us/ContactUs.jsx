import React, { useState } from 'react';
import './ContactUs.css';

const ContactUs = () => {
  const [formType, setFormType] = useState(null);
  const [submissionStatus, setSubmissionStatus] = useState(null);
  const [sub,setSub] = useState(false);
  const handleSubmit = async (event) => {
    event.preventDefault();
    setSubmissionStatus('submitting');

    try {
      const form = event.target;
      const formData = new FormData(form);

      const response = await fetch(form.action, {
        method: form.method,
        body: formData,
      });

      if (response.ok) {
        setSubmissionStatus('success');
        form.reset();
        setTimeout(() => setSubmissionStatus(null), 5000);
      } else {
        setSubmissionStatus('error');
        console.error('Form submission failed:', response.status, response.statusText);
        setTimeout(() => setSubmissionStatus(null), 5000);
      }
    } catch (error) {
      setSubmissionStatus('error');
      console.error('Form submission error:', error);
      setTimeout(() => setSubmissionStatus(null), 5000);
    } 
  };

  return (
    <div className="contact-page">
      <h2>Contact Us</h2>
      <div className="button-container">
        <button onClick={() => setFormType('faculty')} className="contact-button">
          Join as Faculty
        </button>
        <button onClick={() => setFormType('student')} className="contact-button">
          Join as Student
        </button>
      </div>
      {sub  && <div>
        <p>Thans For Your Response</p>
        </div>}

      {formType && (
        <div className="contact-form">
          <span className="close-button" onClick={() => setFormType(null)}>
            &times;
          </span>
          {formType === 'faculty' ? (
            <>
              <h3>Faculty Registration</h3>
              <form onSubmit={handleSubmit} action="https://api.web3forms.com/submit" method="POST">
                <input type="hidden" name="access_key" value="c8c56c54-ebcf-4d14-a1c1-863765167518" />
                <div className="form-group">
                  <label>Full Name:</label>
                  <input type="text" name="name" required />
                </div>
                <div className="form-group">
                  <label>Mobile:</label>
                  <input type="tel" name="mobile" required />
                </div>
                <div className="form-group">
                  <label>Email:</label>
                  <input type="email" name="email" required />
                </div>
                <div className="form-group">
                  <label>Subject Interested:</label>
                  <input type="text" name="subject" required />
                </div>
                <div className="form-group">
                  <label>Experience (in years):</label>
                  <input type="number" name="experience" required />
                </div>
                <div className="form-group">
                  <label>Resume Link:</label>
                  <input type="text" name="resume" required />
                </div>
                <div className="form-group">
                  <label>Message:</label>
                  <textarea name="message" rows="5" required></textarea>
                </div>
                <button type="submit" className="submit-button">
                  Submit
                </button>
              </form>
            </>
          ) : (
            <>
              <h3>Student Registration</h3>
              <form onSubmit={handleSubmit} action="https://api.web3forms.com/submit" method="POST">
                <input type="hidden" name="access_key" value="c8c56c54-ebcf-4d14-a1c1-863765167518" />
                <div className="form-group">
                  <label>Full Name:</label>
                  <input type="text" name="name" required />
                </div>
                <div className="form-group">
                  <label>Mobile:</label>
                  <input type="tel" name="mobile" required />
                </div>
                <div className="form-group">
                  <label>Email:</label>
                  <input type="email" name="email" required />
                </div>
                <div className="form-group">
                  <label>Interested Course:</label>
                  <input type="text" name="course" required />
                </div>
                <div className="form-group">
                  <label>Message:</label>
                  <textarea name="message" rows="5" required></textarea>
                </div>
                <button type="submit" className="submit-button">
                  Submit
                </button>
              </form>
            </>
          )}

          {submissionStatus === 'submitting' && <p style={{ color: 'white' }}>Submitting...</p>}
          {submissionStatus === 'success' && (
            <p style={{ color: 'Green' , backgroundColor: "pink", padding: "20px"}}>Form submitted successfully!</p>
          )}
          {submissionStatus === 'error' && <p style={{ color: 'red' }}>Error submitting form. Please try again.</p>}
        </div>
      )}
    </div>
  );
};

export default ContactUs;