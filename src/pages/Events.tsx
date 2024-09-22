import NavBar from "../components/NavBar";
import {Link} from "react-router-dom";
import {config} from "../utils/Config";
import EventCard from "../components/EventCard";

const Events:React.FC = () => {
    return (
        <div>
            <NavBar active="Events"/>
            <div className="pt-16 bg-gray-50 w-full h-screen">
                <div className="container mx-auto px-4 py-8">
                    <h1 className="text-3xl font-bold mb-6 text-center">Events</h1>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {
                            config.getEvent().map((event, index) => (
                                <Link
                                    key={index}
                                    to={`/events/${event.id}`}
                                >
                                    <EventCard {...event} />
                                </Link>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Events;