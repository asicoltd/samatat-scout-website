import { FaFacebookF, FaInstagram, FaYoutube, FaTwitter, FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer id="contact">
      <div className="container">
        <div className="footer-container">
          <div className="footer-logo">
            <h3>Samatat Open Scout Group</h3>
            <p>Building character, leadership, and community service in Bangladesh's youth since 1985.</p>
            <div className="social-icons">
              <a href="#" aria-label="Facebook"><FaFacebookF /></a>
              <a href="#" aria-label="Instagram"><FaInstagram /></a>
              <a href="#" aria-label="YouTube"><FaYoutube /></a>
              <a href="#" aria-label="Twitter"><FaTwitter /></a>
            </div>
          </div>
          
          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#programs">Programs</a></li>
              <li><a href="#events">Events</a></li>
              <li><a href="#gallery">Gallery</a></li>
              <li><a href="#join">Join Us</a></li>
            </ul>
          </div>
          
          <div className="footer-contact">
            <h4>Contact Us</h4>
            <p><FaMapMarkerAlt /> Scout Bhaban, 98/A Green Road, Dhaka 1205</p>
            <p><FaPhone /> +880 1711-234567</p>
            <p><FaEnvelope /> info@samatatscout.org</p>
            <p><FaClock /> Office Hours: Sat-Thu, 9:00 AM - 5:00 PM</p>
          </div>
        </div>
        
        <div className="copyright">
          <p>&copy; {new Date().getFullYear()} Samatat Open Scout Group. All rights reserved. Part of the Bangladesh Scouts Movement.</p>
        </div>
      </div>
      <style jsx>{`
        footer {
          background-color: var(--primary-green);
          color: var(--white);
          padding: 60px 0 30px;
        }
        
        .footer-container {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 40px;
          margin-bottom: 40px;
        }
        
        .footer-logo h3 {
          color: var(--white);
          margin-bottom: 10px;
        }
        
        .footer-logo p {
          color: rgba(255, 255, 255, 0.8);
          line-height: 1.6;
        }
        
        .footer-links h4, .footer-contact h4 {
          color: var(--white);
          margin-bottom: 20px;
          font-size: 1.2rem;
        }
        
        .footer-links ul {
          list-style: none;
          margin: 0;
          padding: 0;
        }
        
        .footer-links li {
          margin-bottom: 10px;
        }
        
        .footer-links a {
          color: rgba(255, 255, 255, 0.8);
          text-decoration: none;
          transition: color 0.3s;
        }
        
        .footer-links a:hover {
          color: var(--secondary-yellow);
        }
        
        .footer-contact p {
          margin-bottom: 15px;
          color: rgba(255, 255, 255, 0.8);
          display: flex;
          align-items: center;
          gap: 10px;
        }
        
        .social-icons {
          display: flex;
          gap: 15px;
          margin-top: 20px;
        }
        
        .social-icons a {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          background-color: rgba(255, 255, 255, 0.1);
          border-radius: 50%;
          color: var(--white);
          transition: all 0.3s;
        }
        
        .social-icons a:hover {
          background-color: var(--secondary-yellow);
          color: var(--text-dark);
        }
        
        .copyright {
          text-align: center;
          padding-top: 30px;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          color: rgba(255, 255, 255, 0.7);
          font-size: 0.9rem;
        }
        
        @media (max-width: 768px) {
          .footer-container {
            gap: 30px;
          }
          
          footer {
            padding: 40px 0 20px;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;