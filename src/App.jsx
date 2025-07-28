import React, { useState } from 'react';
import { 
  Printer, 
  Settings, 
  Zap, 
  Shield, 
  Star, 
  Mail, 
  Phone, 
  MapPin,
  CheckCircle,
  Clock,
  Users,
  Award,
  Menu,
  X
} from 'lucide-react';
import './App.css';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    projectType: 'prototype'
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
    alert('Thank you for your message! We\'ll get back to you within 24 hours.');
    setFormData({ name: '', email: '', message: '', projectType: 'prototype' });
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <div className="App">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo">
            <Printer className="logo-icon" />
            <span>Print3D Pro</span>
          </div>
          <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
            <button onClick={() => scrollToSection('home')} className="nav-link">Home</button>
            <button onClick={() => scrollToSection('services')} className="nav-link">Services</button>
            <button onClick={() => scrollToSection('portfolio')} className="nav-link">Portfolio</button>
            <button onClick={() => scrollToSection('process')} className="nav-link">Process</button>
            <button onClick={() => scrollToSection('pricing')} className="nav-link">Pricing</button>
            <button onClick={() => scrollToSection('contact')} className="nav-link">Contact</button>
          </div>
          <div className="nav-toggle" onClick={toggleMenu}>
            {isMenuOpen ? <X /> : <Menu />}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-content">
          <h1 className="hero-title">
            Bring Your Ideas to <span className="gradient-text">Life</span>
          </h1>
          <p className="hero-subtitle">
            Professional custom 3D printing services for prototypes, production parts, 
            and everything in between. High-quality prints delivered fast.
          </p>
          <div className="hero-buttons">
            <button onClick={() => scrollToSection('contact')} className="btn-primary">
              Get Quote
            </button>
            <button onClick={() => scrollToSection('portfolio')} className="btn-secondary">
              View Portfolio
            </button>
          </div>
        </div>
        <div className="hero-image">
          <div className="printer-visualization">
            <Printer size={120} className="printer-icon" />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services">
        <div className="container">
          <h2 className="section-title">Our Services</h2>
          <div className="services-grid">
            <div className="service-card">
              <Settings className="service-icon" />
              <h3>Rapid Prototyping</h3>
              <p>Fast turnaround for prototype development and design validation. Perfect for testing concepts before production.</p>
            </div>
            <div className="service-card">
              <Zap className="service-icon" />
              <h3>Production Parts</h3>
              <p>High-volume production runs with consistent quality. Ideal for end-use parts and small batch manufacturing.</p>
            </div>
            <div className="service-card">
              <Shield className="service-icon" />
              <h3>Custom Materials</h3>
              <p>Wide range of materials including PLA, ABS, PETG, TPU, and engineering-grade filaments for specialized applications.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="portfolio">
        <div className="container">
          <h2 className="section-title">Recent Projects</h2>
          <div className="portfolio-grid">
            <div className="portfolio-item">
              <div className="portfolio-image"></div>
              <h3>Automotive Prototype</h3>
              <p>Custom dashboard component for electric vehicle startup</p>
            </div>
            <div className="portfolio-item">
              <div className="portfolio-image"></div>
              <h3>Medical Device</h3>
              <p>Biocompatible surgical guide for dental implant procedure</p>
            </div>
            <div className="portfolio-item">
              <div className="portfolio-image"></div>
              <h3>Consumer Product</h3>
              <p>Ergonomic phone accessory with custom textures</p>
            </div>
            <div className="portfolio-item">
              <div className="portfolio-image"></div>
              <h3>Industrial Tool</h3>
              <p>High-strength jig for manufacturing assembly line</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="process">
        <div className="container">
          <h2 className="section-title">Our Process</h2>
          <div className="process-steps">
            <div className="process-step">
              <div className="step-number">1</div>
              <h3>Consultation</h3>
              <p>We discuss your project requirements, timeline, and material preferences</p>
            </div>
            <div className="process-step">
              <div className="step-number">2</div>
              <h3>Design Review</h3>
              <p>Our engineers review your files and provide optimization recommendations</p>
            </div>
            <div className="process-step">
              <div className="step-number">3</div>
              <h3>Production</h3>
              <p>Your parts are printed using our professional-grade 3D printers</p>
            </div>
            <div className="process-step">
              <div className="step-number">4</div>
              <h3>Quality Check</h3>
              <p>Each part undergoes thorough quality inspection before shipping</p>
            </div>
            <div className="process-step">
              <div className="step-number">5</div>
              <h3>Delivery</h3>
              <p>Fast and secure shipping to get your parts when you need them</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <Users size={48} />
              <h3>500+</h3>
              <p>Happy Clients</p>
            </div>
            <div className="stat-item">
              <CheckCircle size={48} />
              <h3>2000+</h3>
              <p>Projects Completed</p>
            </div>
            <div className="stat-item">
              <Clock size={48} />
              <h3>24hr</h3>
              <p>Average Turnaround</p>
            </div>
            <div className="stat-item">
              <Award size={48} />
              <h3>99%</h3>
              <p>Quality Rating</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="pricing">
        <div className="container">
          <h2 className="section-title">Transparent Pricing</h2>
          <div className="pricing-grid">
            <div className="pricing-card">
              <h3>Basic</h3>
              <div className="price">$0.20<span>/gram</span></div>
              <ul>
                <li>Standard PLA/ABS materials</li>
                <li>0.2mm layer height</li>
                <li>3-5 day turnaround</li>
                <li>Basic finishing</li>
              </ul>
              <button className="btn-outline">Get Started</button>
            </div>
            <div className="pricing-card featured">
              <div className="featured-badge">Most Popular</div>
              <h3>Professional</h3>
              <div className="price">$0.35<span>/gram</span></div>
              <ul>
                <li>Premium materials (PETG, TPU)</li>
                <li>0.1mm layer height</li>
                <li>1-2 day turnaround</li>
                <li>Professional finishing</li>
                <li>Design optimization</li>
              </ul>
              <button className="btn-primary">Get Started</button>
            </div>
            <div className="pricing-card">
              <h3>Enterprise</h3>
              <div className="price">Custom</div>
              <ul>
                <li>All material options</li>
                <li>Priority production</li>
                <li>Same-day turnaround</li>
                <li>Premium finishing</li>
                <li>Dedicated support</li>
                <li>Volume discounts</li>
              </ul>
              <button className="btn-outline">Contact Us</button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <div className="contact-content">
            <div className="contact-info">
              <h2>Let's Bring Your Project to Life</h2>
              <p>Ready to start your 3D printing project? Get in touch with us for a free consultation and quote.</p>
              
              <div className="contact-methods">
                <div className="contact-method">
                  <Mail className="contact-icon" />
                  <div>
                    <h4>Email</h4>
                    <p>hello@print3dpro.com</p>
                  </div>
                </div>
                <div className="contact-method">
                  <Phone className="contact-icon" />
                  <div>
                    <h4>Phone</h4>
                    <p>+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="contact-method">
                  <MapPin className="contact-icon" />
                  <div>
                    <h4>Location</h4>
                    <p>123 Innovation Drive, Tech City, TC 12345</p>
                  </div>
                </div>
              </div>
            </div>

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="projectType">Project Type</label>
                <select
                  id="projectType"
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleInputChange}
                >
                  <option value="prototype">Prototype</option>
                  <option value="production">Production Run</option>
                  <option value="replacement">Replacement Part</option>
                  <option value="custom">Custom Design</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="message">Project Details</label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell us about your project, timeline, and any specific requirements..."
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn-primary">Send Message</button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <div className="footer-logo">
                <Printer className="logo-icon" />
                <span>Print3D Pro</span>
              </div>
              <p>Professional 3D printing services that bring your ideas to life with precision and quality.</p>
            </div>
            <div className="footer-section">
              <h4>Quick Links</h4>
              <ul>
                <li><button onClick={() => scrollToSection('services')}>Services</button></li>
                <li><button onClick={() => scrollToSection('portfolio')}>Portfolio</button></li>
                <li><button onClick={() => scrollToSection('pricing')}>Pricing</button></li>
                <li><button onClick={() => scrollToSection('contact')}>Contact</button></li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>Services</h4>
              <ul>
                <li>Rapid Prototyping</li>
                <li>Production Parts</li>
                <li>Custom Materials</li>
                <li>Design Consultation</li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>Contact Info</h4>
              <p>Email: hello@print3dpro.com</p>
              <p>Phone: +1 (555) 123-4567</p>
              <p>Hours: Mon-Fri 9AM-6PM</p>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2024 Print3D Pro. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
