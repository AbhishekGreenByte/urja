import NavBar from "../components/NavBar";

const About:React.FC = () => {
    return (
        <div>
            <NavBar active="About"/>
            <div className="absolute top-20">
                This is About Page
            </div>
        </div>
    )
}

export default About;