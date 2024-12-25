import { useEffect, useState } from "react";
import "./header.css";
import { NavLink } from "react-router-dom";
import useAlert from "../../../customHook/useAlert";
import { useDispatch, useSelector } from "react-redux";
import { increasement } from "../../../redux/slice/counterSlice";

export const Header = () => {
  const dispatch = useDispatch();
  const alert = useAlert();
  const currentPage = useSelector(
    (state: any) => state.pageCounter.currentPage
  );
  const visitNum = useSelector(
    (state: any) => state.pageCounter.pageCount[currentPage]
  );

  console.log(useSelector((state: any) => state.test));

  const [isShowMenu, setIsShowMenu] = useState(false);

  const menuToggler = () => {
    setIsShowMenu(!isShowMenu);
  };

  useEffect(() => {
    alert(`${currentPage} was visited ${visitNum} time(s)`);
    console.log("useEffect alert")
  }, [currentPage, visitNum]);

  const alertHandler = (page: string) => {
    dispatch(increasement(page));
  };

  return (
    <header className="header-container">
      <NavLink to="/">
        <img
          className="header-logo"
          src="logo.png"
          alt="Logo"
          onClick={() => alertHandler("Home")}
        />
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
                onClick={() => alertHandler("About us")}
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
                onClick={() => alertHandler("Services")}
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
                    onClick={() => alertHandler("About us")}
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
                    onClick={() => alertHandler("Services")}
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
