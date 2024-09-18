import NavBar from "../components/NavBar";
import { Carousel } from "flowbite-react";

const Home:React.FC = () => {
    return (
        <div>
            <NavBar active="Home"/>
            <div className="pt-16 bg-gray-50 w-full h-screen">
                Home Page
            </div>

        </div>
    )
}

export default Home;