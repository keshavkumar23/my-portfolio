import "./ContactImage.css";
import { motion } from "framer-motion";

const ContactImage = () => {
    return (
        <div className="contact_container">
            <div className="contact_bg">
                <img className="contact_Image" src="/images/contact.jpg" alt="ContactImage" />
            </div>
            <div className="content">
                <motion.h1
                    initial={{ y: -100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1.5 }}
                >
                    Contact.
                </motion.h1>
                <motion.p
                    initial={{ x: 100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 2 }}
                >
                    Let&apos;s connect.
                </motion.p>
            </div>
        </div>
    );
}

export default ContactImage;
