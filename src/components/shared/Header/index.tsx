import "./header.css";
import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <header className="header-container">
      <NavLink to="/"><img className="header-logo" src="logo.png" alt="Logo"/></NavLink>
      <div className="nav-and-button">
        <nav>
          <ul className="header-navigation-list">
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "navigation-link active" : "navigation-link"
                }
                to="/about-us"
              >
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "navigation-link active" : "navigation-link"
                }
                to="/services"
              >
                Services
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "navigation-link active" : "navigation-link"
                }
                to="/use-cases"
              >
                Use Cases
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "navigation-link active" : "navigation-link"
                }
                to="/pricing"
              >
                Pricing
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "navigation-link active" : "navigation-link"
                }
                to="/blog"
              >
                Blog
              </NavLink>
            </li>
          </ul>
        </nav>
        <button className="header-button">Request a quote</button>
      </div>
    </header>
  );
};
