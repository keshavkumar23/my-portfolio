
import "./SkillsImage.css";
import {Slide} from "react-reveal";

const SkillsImage = () => {
    return(
        <div className="skills_container">
            <div className="skills_bg">
                <img className = "skills_Image" src="/images/skills.jpg" alt="skillsImage" />
            </div>
                <div className="content">
                    <Slide top cascade duration={1500}>
                        <h1>My Skills.</h1>
                    </Slide>
                    <Slide right cascade duration={2000}>
                        <p>About my skills.</p>
                    </Slide>
                </div>
        </div>
    )
}

export default SkillsImage;