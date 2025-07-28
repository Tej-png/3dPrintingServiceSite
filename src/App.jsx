import { useState } from "react";
import "./App.css";
import { 
  FaCube, 
  FaCog, 
  FaRocket, 
  FaPalette, 
  FaEnvelope, 
  FaPhone, 
  FaMapMarkerAlt,
  FaCheckCircle,
  FaClock,
  FaShieldAlt,
  FaTools
} from "react-icons/fa";

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    project: '',
    message: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    alert('Thank you for your inquiry! We\'ll get back to you soon.');
    setFormData({ name: '', email: '', project: '', message: '' });
  };

  return (
    <div className="App">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo">
            <FaCube className="logo-icon" />
            <span>3D PrintCraft</span>
          </div>
          <ul className="nav-menu">
            <li><a href="#home">Home</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#gallery">Gallery</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-content">
          <h1>Custom 3D Printing Services</h1>
          <p>Bringing your ideas to life with precision, quality, and speed. From prototypes to final products, we deliver exceptional 3D printing solutions tailored to your needs.</p>
          <div className="hero-buttons">
            <a href="#contact" className="btn-primary">Get Quote</a>
            <a href="#gallery" className="btn-secondary">View Gallery</a>
          </div>
        </div>
        <div className="hero-visual">
          <div className="floating-cube">
            <FaCube size={120} />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services">
        <div className="container">
          <h2>Our Services</h2>
          <div className="services-grid">
            <div className="service-card">
              <FaRocket className="service-icon" />
              <h3>Rapid Prototyping</h3>
              <p>Fast turnaround times for your prototype needs. Perfect for testing designs and iterations.</p>
              <ul>
                <li>24-48 hour delivery</li>
                <li>Multiple material options</li>
                <li>High precision</li>
              </ul>
            </div>
            <div className="service-card">
              <FaCog className="service-icon" />
              <h3>Custom Parts</h3>
              <p>Replacement parts, custom tools, and functional components made to your exact specifications.</p>
              <ul>
                <li>Engineering-grade materials</li>
                <li>Tight tolerances</li>
                <li>Durable finishes</li>
              </ul>
            </div>
            <div className="service-card">
              <FaPalette className="service-icon" />
              <h3>Artistic Creations</h3>
              <p>Sculptures, decorative items, and unique artistic pieces. Bring your creative vision to reality.</p>
              <ul>
                <li>Multiple colors available</li>
                <li>Fine detail resolution</li>
                <li>Custom finishing</li>
              </ul>
            </div>
            <div className="service-card">
              <FaTools className="service-icon" />
              <h3>Design Consultation</h3>
              <p>Need help with your design? Our experts can optimize your models for 3D printing success.</p>
              <ul>
                <li>Design optimization</li>
                <li>Material recommendations</li>
                <li>Cost-effective solutions</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-choose-us">
        <div className="container">
          <h2>Why Choose Us?</h2>
          <div className="features-grid">
            <div className="feature">
              <FaCheckCircle className="feature-icon" />
              <h3>Quality Guaranteed</h3>
              <p>We ensure every print meets our high standards for accuracy and finish quality.</p>
            </div>
            <div className="feature">
              <FaClock className="feature-icon" />
              <h3>Fast Turnaround</h3>
              <p>Quick delivery without compromising on quality. Most orders completed within 1-3 days.</p>
            </div>
            <div className="feature">
              <FaShieldAlt className="feature-icon" />
              <h3>Reliable Service</h3>
              <p>Consistent results you can count on, backed by years of 3D printing expertise.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="gallery">
        <div className="container">
          <h2>Our Work</h2>
          <p>Take a look at some of our recent projects</p>
          <div className="gallery-grid">
            <div className="gallery-item">
              <div className="gallery-placeholder">
                <FaCube size={60} />
                <span>Prototype Model</span>
              </div>
            </div>
            <div className="gallery-item">
              <div className="gallery-placeholder">
                <FaCog size={60} />
                <span>Custom Gear</span>
              </div>
            </div>
            <div className="gallery-item">
              <div className="gallery-placeholder">
                <FaPalette size={60} />
                <span>Artistic Sculpture</span>
              </div>
            </div>
            <div className="gallery-item">
              <div className="gallery-placeholder">
                <FaTools size={60} />
                <span>Replacement Part</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <h2>About 3D PrintCraft</h2>
              <p>With over 5 years of experience in 3D printing, we specialize in delivering high-quality, custom solutions for businesses and individuals. Our state-of-the-art equipment and expertise in various materials allow us to tackle projects of any complexity.</p>
              <p>From rapid prototyping for startups to custom parts for established businesses, we're committed to helping you bring your ideas to life with precision and care.</p>
              <div className="stats">
                <div className="stat">
                  <h3>500+</h3>
                  <p>Projects Completed</p>
                </div>
                <div className="stat">
                  <h3>98%</h3>
                  <p>Customer Satisfaction</p>
                </div>
                <div className="stat">
                  <h3>24hrs</h3>
                  <p>Average Turnaround</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <h2>Get In Touch</h2>
          <div className="contact-content">
            <div className="contact-info">
              <h3>Contact Information</h3>
              <div className="contact-item">
                <FaEnvelope className="contact-icon" />
                <span>hello@3dprintcraft.com</span>
              </div>
              <div className="contact-item">
                <FaPhone className="contact-icon" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="contact-item">
                <FaMapMarkerAlt className="contact-icon" />
                <span>123 Innovation Street, Tech City, TC 12345</span>
              </div>
            </div>
            <form className="contact-form" onSubmit={handleSubmit}>
              <h3>Request a Quote</h3>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
              <input
                type="text"
                name="project"
                placeholder="Project Type"
                value={formData.project}
                onChange={handleInputChange}
                required
              />
              <textarea
                name="message"
                placeholder="Project Details"
                rows="5"
                value={formData.message}
                onChange={handleInputChange}
                required
              ></textarea>
              <button type="submit" className="btn-primary">Send Message</button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-logo">
              <FaCube className="logo-icon" />
              <span>3D PrintCraft</span>
            </div>
            <p>&copy; 2024 3D PrintCraft. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
