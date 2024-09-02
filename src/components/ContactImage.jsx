
import "./ContactImage.css";
import {Slide} from "react-reveal";
const ContactImage = () => {
    return (
        <div className="contact_container">
            <div className="contact_bg">
                <img className = "contact_Image" src="/images/contact.jpg" alt="ContactImage" />
            </div>
                <div className="content">
                    <Slide top cascade duration={1500}>
                        <h1>Contact.</h1>
                    </Slide>
                    <Slide right cascade duration={2000}>
                        <p>Let&apos;s connect.</p>
                    </Slide>
                </div>
        </div>
    );
}

export default ContactImage;