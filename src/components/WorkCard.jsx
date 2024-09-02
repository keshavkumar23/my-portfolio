
import "./WorkCard.css";

const WorkCard = (props) => {
    return(
        <div className="work_card">
            <img src={props.img} alt="ProjectImg" className="into_img" />
            <h2 className="project_heading">{props.heading}</h2>
            <div className="about_project">
                <p>{props.content}</p>
                <div className="project_button">
                    <a href={props.view} className="button">View</a>
                    <a href={props.source}
                    className="button">Source</a>
                </div>
            </div>
        </div>
    );
}

export default WorkCard;