
import "./WorkCard.css";
import WorkCard from "./WorkCard";
import WorkData from "./WorkData";
const Mywork = () =>{
    return (
        <div className="work_container">
            <h1 className="heading">My Work.</h1>
            <div className="project_container">
                {
                    WorkData.map((val,index) => {
                        return(
                          <WorkCard
                            key = {index}
                            img = {val.img}
                            heading = {val.heading}
                            content = {val.content}
                            view = {val.view}
                            source = {val.source}
                          />
                        );
                    })
                }
            </div>
        </div>
    );
}

export default Mywork;