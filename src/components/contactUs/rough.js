import React, { useState } from 'react';

function YourFormComponent() {
  const [formData, setFormData] = useState({
    fname: '',
    email: '',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate the form fields
    const validationErrors = {};
    if (!formData.fname.trim()) {
      validationErrors.fname = 'Please fill in your name';
    }
    if (!formData.email.trim()) {
      validationErrors.email = 'Please fill in your email';
    } else if (!isValidEmail(formData.email)) {
      validationErrors.email = 'Invalid email format';
    }
    if (!formData.message.trim()) {
      validationErrors.message = 'Please fill in your message';
    }

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      // If there are no validation errors, proceed with form submission
      setIsSubmitting(true);

      // Simulate submission (replace this with your actual submission logic)
      await simulateSubmission();

      setIsSubmitting(false);
      setSubmissionStatus('Your submission has been accepted');

      // Clear form data after submission
      setFormData({
        fname: '',
        email: '',
        message: '',
      });
    }
  };

  // Function to check if email is in a valid format
  const isValidEmail = (email) => {
    // Implement your email validation logic here
    // You can use a regular expression or a library like validator.js
    // Example with regular expression:
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(email);
  };

  // Simulate form submission (replace with your actual submission logic)
  const simulateSubmission = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, 2000); // Simulate a 2-second delay
    });
  };

  return (
    <div>
      {submissionStatus ? (
        <p>{submissionStatus}</p>
      ) : (
        <form className='ps-5' onSubmit={handleSubmit}>
          <div className='input-container'>
            <input
              type='text'
              id='fname'
              name='fname'
              placeholder='Your Name'
              className={`w-100 input-area p-2 ${errors.fname ? 'is-invalid' : ''}`}
              value={formData.fname}
              onChange={handleChange}
            />
            {errors.fname && <p className='error-message'>{errors.fname}</p>}
          </div>
          <div className='input-container mt-3'>
            <input
              type='email'
              id='email'
              name='email'
              placeholder='Your Email'
              className={`w-100 input-area p-2 ${errors.email ? 'is-invalid' : ''}`}
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <p className='error-message'>{errors.email}</p>}
          </div>
          <div className='input-container'>
            <textarea
              id='message'
              name='message'
              placeholder='Your Text'
              className={`w-100 text-area mt-4 ps-2 ${errors.message ? 'is-invalid' : ''}`}
              value={formData.message}
              onChange={handleChange}
            ></textarea>
            {errors.message && <p className='error-message'>{errors.message}</p>}
          </div>
          {isSubmitting ? (
            <p>Please wait...</p>
          ) : (
            <button type='submit' className='mt-3 blue-btn'>
              Submit
            </button>
          )}
        </form>
      )}
    </div>
  );
}

export default YourFormComponent;
