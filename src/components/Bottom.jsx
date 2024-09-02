
import "./Bottom.css";
import {
    FaHome,
    FaPhone,
    FaMailBulk,
    FaInstagram,
    FaLinkedin,
    FaGithub,
  } from "react-icons/fa";
const Bottom = () => {
    return(
        <div className="bottom_part">
            <div className="bottom_container">
                <div className="left">
                    <div className="address">
                        <FaHome size={35} style={{color: "#fff"}}/>
                        <h4>97, Badridham Nagar, Dewas 455001</h4>
                    </div>
                    <div className="email">
                        <FaMailBulk size={35} style={{color: "#fff"}}/>
                        <h4>keshavkumar.dpr1@gmail.com</h4>
                    </div>
                    <div className="phone">
                        <FaPhone size={35} style={{color: "#fff"}}/>
                        <h4>+91-7505385813</h4>
                    </div>
                </div>
                <div className="right">
                    <h3>My Socials</h3>
                    <ul className="social_links">
                        <li><a href="https://www.linkedin.com/in/keshav-kumar-292687227/">
                            <FaLinkedin size={35} style={{color: "#fff"}}/>
                        </a></li>
                        <li><a href="https://github.com/keshavkumar23">
                            <FaGithub size={35} style={{color: "#fff"}}/>
                        </a></li>
                        <li><a href="https://www.instagram.com/saini_keshav23/">
                            <FaInstagram size={35} style={{color: "#fff"}}/>
                        </a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
export default Bottom;