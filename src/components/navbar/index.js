import "./navbar.scss";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faBars } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const pages = [
    "Home",
    "About",
    "Services",
    "Portfolio",
    "Testimonials",
    "Contact"
  ];
  return (
    <>
      <div className="opener">
        <FontAwesomeIcon
          icon={faBars}
          className="closeNav"
          onClick={() => setShow(true)}
        />
      </div>
      <div className={`navigation ${show ? "active": ""}`}>
        <FontAwesomeIcon
          icon={faTimes}
          className="closeNav"
          onClick={() => setShow(false)}
        />
        <div className="logo">
          <img src={process.env.PUBLIC_URL + "assets/logo.png"} alt="logo" />
        </div>
        <div className="links">
          <ul>
            {pages.map((value, index) => (
              <li key={index}>
                <button onClick={null}>{value}</button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
