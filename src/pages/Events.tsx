import NavBar from "../components/NavBar";

const Events:React.FC = () => {
    return (
        <div>
            <NavBar active="Events"/>
            <div className="pt-16 bg-gray-50 w-full h-screen">
                Events Page
            </div>
        </div>
    )
}

export default Events;