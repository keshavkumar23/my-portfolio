
import "./HomeImage.css";
import { Zoom, LightSpeed } from "react-reveal";
const HomeImage = () =>{
    return (
        <div className="container">
            <div className="bg">
                <img className = "Home_Image" src="/images/home.jpg"alt="HomeImage" />
            </div>
            <div className="content">
                <Zoom right cascade duration = {600}>
                    <p>Keshav Kumar.</p>
                </Zoom>
                <div className="h1_content">
                    <h1>
                    <Zoom right cascade duration={1200}>Full Stack Developer.</Zoom><br/>
                    </h1>
                </div>
                <div className="home_buttons">
                    <LightSpeed left duration = {2800}>
                        <button onClick={() => window.location.href = "https://drive.google.com/file/d/1qD1IhSQC719dnES09FVfbZE-c56wUZYi/view?usp=sharing"} className="button">
                            My Resume.
                        </button>
                    </LightSpeed>
                </div>
            </div>
        </div>
    );
}

export default HomeImage;