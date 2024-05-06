import React from 'react';
import './Contact.css';
const Contact = () => {
  return (
    <div className="container">
      <h1 className="text-center mt-5">Contact Us</h1>
      <p className="lead text-center mt-3">
        Have any questions or feedback? Contact us at <a href="mailto:contact@budgeat.com">contact@budgeat.com</a>
      </p>
      <div className="contact-form mt-5">
        <h2 className="text-center">Send us a message</h2>
        <form>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" className="form-control" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" className="form-control" />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="5" className="form-control"></textarea>
          </div>
          <button type="submit" className="btn btn-primary">Send</button>
        </form>
      </div>
      <div className="social-media mt-5">
        <h2 className="text-center">Follow us on social media</h2>
        <ul className="list-unstyled d-flex justify-content-center mt-3">
          <li><a href="#" className="me-3"><i className="fab fa-facebook-f"></i></a></li>
          <li><a href="#" className="me-3"><i className="fab fa-twitter"></i></a></li>
          <li><a href="#" className="me-3"><i className="fab fa-instagram"></i></a></li>
          <li><a href="#" className="me-3"><i className="fab fa-linkedin"></i></a></li>
        </ul>
      </div>
      <div className="location mt-5">
        <h2 className="text-center">Our Location</h2>
        <div className="map-container d-flex justify-content-center mt-3">
          {/* You can embed a map using Google Maps or any other map service */}
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15296.66645773576!2d81.522098!3d16.568119!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a37cd4eb220051d%3A0xea3d7b50d0a1458!2sShri%20Vishnu%20Engineering%20College%20Autonomous!5e0!3m2!1sen!2sin!4v1714981208805!5m2!1sen!2sin" width="600" height="450" style={{ border:0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
