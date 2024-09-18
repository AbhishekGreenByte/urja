import NavBar from "../components/NavBar";

const Contact:React.FC = () => {
    return (
        <div>
            <NavBar active="Contact"/>
            <div className="pt-16 bg-gray-50 w-full h-screen">
                Contact Page
            </div>
        </div>
    )
}

export default Contact;