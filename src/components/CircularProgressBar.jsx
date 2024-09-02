import "./CircularBar.css";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import { motion } from "framer-motion";

const CircularProgressBar = (props) => {
    return (
        <motion.div
            className="bar_container"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 10 }}
        >
            <motion.div
                className="inside_bar_container"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
            >
                <CircularProgressbar
                    value={props.percentage}
                    text=""
                    styles={buildStyles({
                        strokeLinecap: 'round',
                        textSize: '16px',
                        pathColor: 'rgb(8, 160, 220)',
                        textColor: '#fff',
                        trailColor: 'black',
                        backgroundColor: '#3e98c7',
                    })}
                />
                <motion.div
                    className="heading"
                    initial={{ y: -10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <h2>{props.heading}</h2>
                </motion.div>
            </motion.div>
        </motion.div>
    );
}

export default CircularProgressBar;
