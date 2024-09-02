
import Navbar from "../components/Navbar";
import HomeImage from "../components/HomeImage";
import Bottom from "../components/Bottom";
const Home = () => {
    return(
        <div className="custom-scrollbar">
            <Navbar/>
            <HomeImage/>
            <Bottom/>
        </div>
    );
}

export default Home;