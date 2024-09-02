
import CircularProgressBar from "./CircularProgressBar";
import "./CircularBar.css"
import skillsData from "./CircularProgressBarData";

const MySkills = () => {
    return(
        <div className="skills_container keshav">
            <div className="skills">
                {
                    skillsData.map((val, index) => {
                        return(
                            <CircularProgressBar
                                key={index}
                                percentage={val.percentage}
                                heading={val.heading}
                            />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default MySkills;
