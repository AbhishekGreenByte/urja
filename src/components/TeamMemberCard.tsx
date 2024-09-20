import {ITeamMemberCardProps} from "../utils/models";
import React from "react";

const TeamMemberCard: React.FC<ITeamMemberCardProps> = ({ member, onClick }) => (
    <div
        className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md cursor-pointer transition duration-300 ease-in-out transform hover:scale-105"
        onClick={() => onClick(member)}
        tabIndex={0}
        role="button"
        aria-label={`View details for ${member.name}`}
    >
        <img
            src={member.image}
            alt={member.name}
            className="w-32 h-32 rounded-full object-cover mb-4"
        />
        <h3 className="text-lg font-semibold text-center">{member.name}</h3>
        <p className="text-sm text-gray-600 text-center">{member.responsibility}</p>
    </div>
);

export default TeamMemberCard;