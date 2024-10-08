import "./HomeImage.css";
import { motion } from "framer-motion";

const HomeImage = () => {
    return (
        <div className="container">
            <div className="bg">
                <img className="Home_Image" src="/images/home.jpg" alt="HomeImage" />
            </div>
            <div className="content">
                <motion.p
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.6 }}
                >
                    Keshav Kumar.
                </motion.p>
                <div className="h1_content">
                    <motion.h1
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 1.2 }}
                    >
                        Full Stack Developer.
                    </motion.h1><br/>
                </div>
                <div className="home_buttons">
                    <motion.a
                        initial={{ x: -100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 2.8 }}
                        className="button"
                        href="https://drive.google.com/file/d/1wbBpl3iype0JNSWnDq_6svwE4_2aPSBg/view?usp=sharing"
                        target="_blank"
                    >
                        My Resume.
                    </motion.a>
                </div>
            </div>
        </div>
    );
}

export default HomeImage;
