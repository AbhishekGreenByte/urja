import NavBar from "../components/NavBar";

const About:React.FC = () => {
    return (
        <div>
            <NavBar active="About"/>
            <div className="pt-16 bg-gray-50 w-full h-screen">
                About Page
            </div>
        </div>
    )
}

export default About;