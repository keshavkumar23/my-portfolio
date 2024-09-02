import "./SkillsImage.css";
import { motion } from "framer-motion";

const SkillsImage = () => {
    return (
        <div className="skills_container">
            <div className="skills_bg">
                <img className="skills_Image" src="/images/skills.jpg" alt="skillsImage" />
            </div>
            <div className="content">
                <motion.h1
                    initial={{ y: -100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1.5 }}
                >
                    My Skills.
                </motion.h1>
                <motion.p
                    initial={{ x: 100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 2 }}
                >
                    About my skills.
                </motion.p>
            </div>
        </div>
    );
}

export default SkillsImage;
