import NavBar from "../components/NavBar";

const Contact:React.FC = () => {
    return (
        <div>
            <NavBar active="Contact"/>
            <div className="absolute top-20">
                This is Contact Page
            </div>
        </div>
    )
}

export default Contact;