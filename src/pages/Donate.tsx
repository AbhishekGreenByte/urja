import NavBar from "../components/NavBar";

const Donate:React.FC = () => {
    return (
        <div>
            <NavBar active="Home"/>
            <div className="absolute top-16">
                DONATE NOW
                QR CODE
                Send Us Email
            </div>
        </div>
    )
}

export default Donate;