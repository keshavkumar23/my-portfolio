import "./ProjectImage.css";
import { motion } from "framer-motion";

const ProjectImage = () => {
    return (
        <div className="project_container">
            <div className="project_bg">
                <img className="project_Image" src="/images/project.jpg" alt="ProjectImage" />
            </div>
            <div className="content">
                <motion.h1
                    initial={{ y: -100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1.5 }}
                >
                    Project Section.
                </motion.h1>
                <motion.p
                    initial={{ x: 100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 2 }}
                >
                    Some of my work.
                </motion.p>
            </div>
        </div>
    );
}

export default ProjectImage;
