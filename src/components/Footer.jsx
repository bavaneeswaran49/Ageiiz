import React from 'react';
import { NavLink } from 'react-router-dom';
import '../App.css';

export default function Footer() {
  return (
    <footer className="Footer mt-5">
      <div className="container py-5">
        <div className="row">
          <div className="col-lg-4 col-md-6 mb-4">
            <h3 className="text-white">Beverage Mart</h3>
            <p className="text-white mt-3">
              Refreshing beverages crafted with quality and care.
            </p>
            <h6 className="text-white mt-4">Follow us on</h6>
            <p className="text-white cl">LinkedIn</p>
            <p className="text-white cl">Instagram</p>
            <p className="text-white cl">YouTube</p>
          </div>
          <div className="col-lg-4 col-md-6 mb-4">
            <h4 className="text-white">Quick Links</h4>
            <NavLink to="/" className="text-white d-block mt-3 cl">
              Home
            </NavLink>
            <NavLink to="/Menu" className="text-white d-block cl">
              Menu
            </NavLink>
            <NavLink to="/About" className="text-white d-block cl">
              About
            </NavLink>
            <NavLink to="/Contact" className="text-white d-block cl">
              Contact
            </NavLink>
          </div>
          <div className="col-lg-4 col-md-12">
            <h4 className="text-white">Address</h4>
            <p className="text-white cl mt-3">
              26A JP Nagar,<br />
              Pitchampalayam Puthur Post,<br />
              Tirupur, Tamil Nadu, India
            </p>
            <p className="text-white cl">
              <strong>Phone:</strong> +91 12345 67890
            </p>
          </div>
        </div>
        <div className="text-center text-white mt-4">
          <hr className="border-light" />
          <p className="mb-0">
            © 2026 Beverage Mart. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
