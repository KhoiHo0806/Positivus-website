import { useState } from "react";
import "./header.css";
import { NavLink } from "react-router-dom";
import useAlert from "../../../customHook/useAlert";

export const Header = () => {
  const [isShowMenu, setIsShowMenu] = useState(false);

  const menuToggler = () => {
    setIsShowMenu(!isShowMenu);
  };

  const alertHandler = useAlert()

  return (
    <header className="header-container">
      <NavLink to="/">
        <img className="header-logo" src="logo.png" alt="Logo" onClick={() => alertHandler("home")}/>
      </NavLink>
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
      {isShowMenu && (
        <div className="header-dim-screen">
          <div className="nav-and-button-mobile">
            <p className="hamburger-menu-x-button" onClick={menuToggler}>
              X
            </p>
            <nav>
              <ul className="header-navigation-list">
                <li>
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "navigation-link active" : "navigation-link"
                    }
                    to="/about-us"
                    onClick={()=> alertHandler("about us")}
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
        </div>
      )}

      <img
        src="header/hamburgerMenu.svg"
        alt="hamburger menu icon"
        className="hamburger-menu"
        onClick={menuToggler}
      />
    </header>
  );
};
