import "./footer.css";
import { NavLink } from "react-router-dom";

export const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-header">
        <NavLink to="/">
          <img className="footer-logo" src="Footer/footerLogo.png" alt="Logo" />
        </NavLink>
        <nav>
          <ul className="footer-navigation-list">
            <li>
              <NavLink className="navigation-link" to="/about-us">
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink className="navigation-link" to="/services">
                Services
              </NavLink>
            </li>
            <li>
              <NavLink className="navigation-link" to="/use-cases">
                Use Cases
              </NavLink>
            </li>
            <li>
              <NavLink className="navigation-link" to="/pricing">
                Pricing
              </NavLink>
            </li>
            <li>
              <NavLink className="navigation-link" to="/blog">
                Blog
              </NavLink>
            </li>
          </ul>
        </nav>
        <div className="footer-header-icon">
          <img src="public\Footer\footerIcon.png" alt="footer sociala" />
        </div>
      </div>

      <div className="footer-contact-us">
        <div className="contact-info">
          <h4 className="contact-info-header">Contact us:</h4>
          <p className="contac-info">Email: info@positivus.com</p>
          <p className="contac-info">Phone: 555-567-8901</p>
          <div>
            <p className="contac-info">Address: 1234 Main St</p>
            <p className="contac-info">Moonstone City, Stardust State 12345</p>
          </div>
        </div>
        <form action="" className="footer-email-form">
            <input type="email" placeholder="Email" className="email-input"/>
            <button className="footer-submit-button">Subscribe to news</button>
        </form>
      </div>

      <div className="footer-copy-right">
        <p>© 2023 Positivus. All Rights Reserved.</p>
        <p className="policy">Privacy Policy</p>
      </div>
    </div>
  );
};
