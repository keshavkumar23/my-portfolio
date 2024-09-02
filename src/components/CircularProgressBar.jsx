
import "./CircularBar.css"
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
// import {RubberBand, Fade} from "react-reveal"

const CircularProgressBar = (props) => {
    return(
        <div className = "bar_container">
            <div className = "inside_bar_container">
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
                <div className = "heading">
                    <h2>{props.heading}</h2>
                </div>
            </div>
      </div>
    )
}

export default CircularProgressBar;