import { Link } from "@tanstack/react-router";
import { useState } from "react";
import "./menu.css";

const Menu: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="navbar">
        <div className="menu-icon" onClick={toggleMenu}>
          <div className={isOpen ? "hamburger open" : "hamburger"}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <div
          className={isOpen ? "menu-overlay open" : "menu-overlay"}
          onClick={toggleMenu}
        >
          <ul className="menu-items">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/setTimer" onClick={toggleMenu}>
                Timer
              </Link>
            </li>
            <li>
              <Link to="/templateAnalog" onClick={toggleMenu}>
                Analog timer
              </Link>
            </li>
            <li>
              <Link to="/templateDigital" onClick={toggleMenu}>
                Digital timer
              </Link>
            </li>
            <li>
              <Link to="/textTimer" onClick={toggleMenu}>
                Text timer
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Menu;
