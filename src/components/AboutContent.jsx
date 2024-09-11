
import "./AboutContent.css";

const AboutContent = () => {
    return (
        <div className="about_content_container">
            <div className="left">
                <h1>Who Am I?</h1>
                <p>I am an engineering undegrad
                    at AITR Indore with 7.5 CGPA.<br />
                    Highly motivated and passionate full stack developer,<br /> eager to kick-start my career in the field of development.
                </p>
            </div>
            <div className="right">
                <a href="https://drive.google.com/file/d/1wbBpl3iype0JNSWnDq_6svwE4_2aPSBg/view?usp=sharing"
                    target="_blank" className="button">
                    My Resume.
                </a>
            </div>
        </div>
    );
}

export default AboutContent;