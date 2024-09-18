import NavBar from "../components/NavBar";
import { Card } from "flowbite-react";

const Donate:React.FC = () => {
    return (
        <div>
            <NavBar active="Donate"/>
            <div className="pt-16 bg-gray-50 w-full h-screen">
                Donation Page
            </div>
        </div>
    )
}

export default Donate;