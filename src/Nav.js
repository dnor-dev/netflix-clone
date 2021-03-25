import React, {useEffect, useState} from "react";
import "./Nav.css"


function Nav() {
  // Function to hide and show the nav background
  const [show, handleShow] = useState([false]);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else {
        handleShow(false);
      }
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);
  // End of function
  return (
    <div className={`nav ${show && "nav__black"}`}>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
        className="nav__logo"
        alt="Netflix logo"
      />

      <img className="nav__user" src="/img/Vector.png" alt="Netflix user" />
    </div>
  );
}

export default Nav;
