import React, { useState } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import {IEvent} from "../utils/models";

const EventCard: React.FC<IEvent> = (props) => {
    return (
        <div
            className="max-w-sm rounded overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
            <div
                className="cursor-pointer"
                tabIndex={0}
                aria-label={`View details for ${props.name}`}
            >
                <img
                    className="w-full h-52 object-cover object-center"
                    src={props.img}
                    alt={props.name}
                />
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">{props.name}</div>
                    <p className="text-gray-700 text-base flex items-center">
                        <FaMapMarkerAlt className="mr-2"/>
                        {props.location}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default EventCard;