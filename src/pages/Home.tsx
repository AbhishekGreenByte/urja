import NavBar from "../components/NavBar";
import { Carousel } from "flowbite-react";

const Home:React.FC = () => {
    return (
        <div>
            <NavBar active="Home"/>
            <div className="absolute top-16">
                ABC Company
            </div>

        </div>
    )
}

export default Home;