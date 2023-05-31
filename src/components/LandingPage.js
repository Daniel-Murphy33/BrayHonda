import React from "react";
import "../styles/LandingPage.css";
import { Link } from 'react-router-dom';

const LandingPage = () => {

  return (
    <div className="landing-page-container">
      <header>
        <h1>Bray Honda Centre</h1>
        <p>Your One-Stop Shop for Motorbikes and Accessories</p>
      </header>

      <section className="about-section">
        <div className="about-content">
          <h2>About Us</h2>
          <p>
            Welcome to Bray Honda Centre, your trusted destination for all
            things motorbike-related. With over 20 years of experience, we are
            passionate about providing exceptional sales, service, and repairs
            for motorbikes of all makes and models.
          </p>
          <p>
            Our dedicated team of mechanics and sales professionals are here to
            assist you with expert advice, quality parts and accessories, and
            reliable maintenance services. Whether you're a seasoned rider or
            new to the world of motorbikes, we have everything you need to hit
            the road with confidence.
          </p>
        </div>
        <div className="about-image">
          <img src="/images/motorbike.jpg" alt="Motorbike" />
        </div>
      </section>

      <section className="services-section">
        <h2>Our Services</h2>
        <div className="services-grid">
          <div className="service-item">
            <img src="/images/service-icon-1.png" alt="Service Icon" />
            <h3>Repairs and Maintenance</h3>
            <p>
              Our experienced mechanics provide top-notch repair and maintenance
              services to keep your motorbike running smoothly.
            </p>
          </div>
          <div className="service-item">
            <img src="/images/service-icon-2.png" alt="Service Icon" />
            <h3>Parts and Accessories</h3>
            <p>
              Explore our wide selection of quality parts and accessories to
              customize your motorbike and enhance your riding experience.
            </p>
          </div>
          <div className="service-item">
            <img src="/images/service-icon-3.png" alt="Service Icon" />
            <h3>New and Used Motorbikes</h3>
            <p>
              Discover our range of new and used motorbikes from leading brands.
              Our experts will help you find the perfect ride.
            </p>
          </div>
        </div>
      </section>

      <section className="contact-section">
        <h2>Contact Us</h2>
        <p>
          Ready to take your motorbike experience to the next level? Book an
          appointment with us today!
        </p>
        <div className="book-now-section">
          <Link to='/booking' className="book-now-text">
          <button className="book-now-button">
            Book Now
          </button>
          </Link>
        </div>
      </section>

      <footer>
        <p>
          &copy; {new Date().getFullYear()} Bray Honda Centre. All rights
          reserved.
        </p>
      </footer>
    </div>
  );
};

export default LandingPage;
