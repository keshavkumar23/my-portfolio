import "./AboutImage.css";
import { motion } from "framer-motion";

const AboutImage = () => {
    return (
        <div className="about_container">
            <div className="about_bg">
                <img className="about_Image" src="/images/about.jpg" alt="AboutImage" />
            </div>
            <div className="content">
                <motion.h1
                    initial={{ y: -100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1.5 }}
                >
                    About Me.
                </motion.h1>
                <motion.p
                    initial={{ x: 100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 2 }}
                >
                    I&apos;m a full stack developer.
                </motion.p>
            </div>
        </div>
    );
}

export default AboutImage;
