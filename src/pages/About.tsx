import NavBar from "../components/NavBar";
import {useState} from "react";
import {ITeamMember} from "../utils/models";
import {config} from "../utils/Config";
import TeamMemberCard from "../components/TeamMemberCard";
import Dialog from "../components/Dialog";
import Accordian from "../components/Accordian";

const About:React.FC = () => {
    const [selectedMember, setSelectedMember] = useState<ITeamMember | null>(null);

    const handleCardClick = (member: ITeamMember) => {
        setSelectedMember(member);
    };

    const handleCloseDialog = () => {
        setSelectedMember(null);
    };
    let teamMembers = config.getTeamMembers();
    const boardMembers = teamMembers.filter((member) => member.role === "Board Member");
    const treasurers = teamMembers.filter((member) => member.role === "Treasurer");
    const volunteers = teamMembers.filter((member) => member.role === "Volunteer");

    return (
        <div>
            <NavBar active="About"/>
            <div className="pt-16 bg-gray-50 w-full h-screen">
                <section className="bg-gray-100 py-12">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold text-center mb-8">About Our Team</h2>
                        <div className="space-y-4">
                            <Accordian title="Board Members">
                                {boardMembers.map((member) => (
                                    <TeamMemberCard
                                        key={member.id}
                                        member={member}
                                        onClick={handleCardClick}
                                    />
                                ))}
                            </Accordian>
                            <Accordian title="Treasurer">
                                {treasurers.map((member) => (
                                    <TeamMemberCard
                                        key={member.id}
                                        member={member}
                                        onClick={handleCardClick}
                                    />
                                ))}
                            </Accordian>
                            <Accordian title="Volunteers" defaultClose={true}>
                                {volunteers.map((member) => (
                                    <TeamMemberCard
                                        key={member.id}
                                        member={member}
                                        onClick={handleCardClick}
                                    />
                                ))}
                            </Accordian>
                        </div>
                        {selectedMember && (
                            <Dialog member={selectedMember} onClose={handleCloseDialog}/>
                        )}
                    </div>
                </section>
            </div>
        </div>
    )
}

export default About;