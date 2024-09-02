
import "./ProjectImage.css";
import {Slide} from "react-reveal";
const ProjectImage = () =>{
    return(
        <div className="project_container">
            <div className="project_bg">
                <img className = "project_Image" src="/images/project.jpg" alt="ProjectImage" />
            </div>
                <div className="content">
                    <Slide top cascade duration={1500}>
                        <h1>Project Section.</h1>
                    </Slide>
                    <Slide right cascade duration={2000}>
                        <p>Some of my work.</p>
                    </Slide>
                </div>
        </div>
    );
}

export default ProjectImage;