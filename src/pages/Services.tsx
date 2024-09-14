import NavBar from "../components/NavBar";

const Services:React.FC = () => {
    return (
        <div>
            <NavBar active="Services"/>
            <div className="absolute top-20">
                This is Service Page
            </div>
        </div>
    )
}

export default Services;