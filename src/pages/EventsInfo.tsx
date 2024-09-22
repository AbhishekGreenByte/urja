import { useParams } from "react-router-dom";
import NavBar from "../components/NavBar";
import { useEffect, useState } from "react";
import { config } from "../utils/Config";

// Import All Event Pages
import EventBloodDonation2024 from "../events/EventBloodDonation2024";
import EventElection2024 from "../events/EventElection2024";
import EventGaushala2020 from "../events/EventGaushala2020";
import ErrorPage from "./ErrorPage";

// Map component names to actual components
const componentMap: { [key: string]: React.FC | null } = {
    "EventBloodDonation2024": EventBloodDonation2024,
    "EventElection2024": EventElection2024,
    "EventGaushala2020": EventGaushala2020,
};

const EventsInfo: React.FC = () => {
    const events = config.getEvent(); // Ensure this returns an array of events
    const { id } = useParams<{ id: string }>();
    const [ComponentToRender, setComponentToRender] = useState<React.FC | null>(null);
    const [error, setError] = useState<boolean>(false);

    useEffect(() => {
        const event = events.find(e => e.id === id);

        if (!event) {
            setError(true);
            return;
        }

        const componentName = event.component; // Get the component name from the event
        const eventComponent = componentMap[componentName];

        if (!eventComponent) {
            setError(true);
            return;
        }

        setComponentToRender(() => eventComponent); // Set the component to render
    }, [id, events]); // Added events to the dependency array

    if (error) {
        return <ErrorPage/>;
    }

    return (
        <div>
            <NavBar active="Events" />
            <div className="pt-16 bg-gray-50 w-full h-screen">
                {ComponentToRender ? <ComponentToRender /> : <h1>Loading...</h1>}
            </div>
        </div>
    );
};

export default EventsInfo;
