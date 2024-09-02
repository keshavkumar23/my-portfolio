import "./Navbar.css";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

import { Link } from "react-router-dom";

const Navbar = () => {

  const [isClick, setisClcik] = useState(false);
  const handleClick = () => {
    if (isClick) {
      setisClcik(false);
    } else {
      setisClcik(true);
    }
  }

  const [nav_bg_color, setnav_bg_color] = useState(false);
  const handle_nav_bg_color = () =>{
    if(window.scrollY >= 100){
      setnav_bg_color(true);
    }else{
      setnav_bg_color(false);
    }
  }
  window.addEventListener("scroll", handle_nav_bg_color);

  return (
    <div className = {nav_bg_color ? "header nav_color" : "header"}>
      <Link to={"/"}>
        <h1>Keshav.</h1>
      </Link>
      <ul className={isClick ? "nav_menu active" : "nav_menu"}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          {" "}
          <Link to="/project">Projects</Link>
        </li>
        <li>
          <Link to="/Skills">Skills</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      <div className="hamburger" onClick={handleClick}>
        {isClick ? (
          <FaTimes size={35} style={{ color: "#fff" }} />
        ) : (
          <FaBars size={35} style={{ color: "#fff" }} />
        )}
      </div>
    </div>
  );
};

export default Navbar;
