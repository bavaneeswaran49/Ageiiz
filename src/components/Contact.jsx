import React, { useState } from 'react';
import '../App.css';
import Footer from './Footer';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const nameRegex = /^[A-Z][a-zA-Z]*$/;
  const emailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;

  const handleSubmit = (e) => {
    e.preventDefault();

    // Name validation
    if (!nameRegex.test(name)) {
      alert('Name must start with an uppercase letter and contain only letters');
      return;
    }

    // Email validation
    if (!emailRegex.test(email)) {
      alert('Email must end with @gmail.com');
      return;
    }

    // If everything is valid
    alert('Form submitted successfully!');
    // You can also send the form data to your backend here

    // Clear form
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <>
      <section className="container con ">
        <div className="row wor">
          <div className="col-md-5 mb-4">
            <h2 className="mb-3">Contact Beverage Mart</h2>
            <p>
              Have a question, feedback, or want to know more about our beverages?
              We’d love to hear from you. Reach out to us anytime!
            </p>
            <ul className="list-unstyled mt-4">
              <li className="mb-2">
                <strong>Address:</strong> 26A JP Nagar, Pitchampalayam Puthur Post, Tirupur, Tamil Nadu, India
              </li>
              <li className="mb-2">
                <strong>Phone:</strong> +91 1234567890
              </li>
              <li className="mb-2">
                <strong>Email:</strong> support@beveragemart.com
              </li>
              <li className="mb-2">
                <strong>Working Hours:</strong> 9 AM – 9 PM
              </li>
            </ul>
          </div>

          <div className="col-md-7">
            <div className="card shadow p-4">
              <h4 className="mb-3">Send Us a Message</h4>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="form-label">Your Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Email Address</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Message</label>
                  <textarea
                    className="form-control"
                    rows="4"
                    placeholder="Write your message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-dark w-100">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
