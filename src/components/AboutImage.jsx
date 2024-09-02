
import "./AboutImage.css";
import {Slide} from "react-reveal";
const AboutImage = () => {
    return (
        <div className="about_container">
            <div className="about_bg">
                <img className = "about_Image" src="/images/about.jpg" alt="AboutImage" />
            </div>
                <div className="content">
                    <Slide top cascade duration={1500}>
                        <h1>About Me.</h1>
                    </Slide>
                    <Slide right cascade duration={2000}>
                        <p>I&apos;m a full stack developer.</p>
                    </Slide>
                </div>
        </div>
    );
}

export default AboutImage;