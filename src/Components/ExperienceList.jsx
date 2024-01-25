import "../styles/ExperienceList.css"

import data from "../assets/experienceData.jsx"
import TimelinePanel from "./TimelinePanel"
import ExperienceCard from "./ExperienceCard"
import { useState } from "react";

export default function ExperienceList() {
    const [index, setIndex] = useState(0);
    const [past, setPast] = useState(0);
    const [refresh, setRefresh] = useState(false);

    function experienceHandler(newIndex) {
        if (refresh || index == newIndex) {
            return;
        }
        setPast(newIndex);
        setRefresh(true);
        setTimeout(() => { manageDelay(newIndex) }, 990);
    }

    function manageDelay(newIndex) {
        setRefresh(false)
        setIndex(newIndex);
    }

    return (
        <>
            <div className="experience_container hidemobile">
                <div className="experience_list">
                    {data.map((experience, pos) => (
                        <TimelinePanel className={`${(past == pos) ? "active" : ''}`} key={pos} customClickEvent={() => experienceHandler(pos)} name={experience.title} text={experience.time}></TimelinePanel>
                    ))}
                </div>
                <div className="experience_info">
                    <ExperienceCard className="experience_card" data={data} refresh={refresh} index={index} />
                    <ExperienceCard className="experience_wipe" data={data} refresh={refresh} index={past} />
                </div>
            </div>
            <div className="experience_mobile showmobile">
                <div className="experience_mobile_timeline"></div>
                {data.map((experience, pos) => (
                <div key={`container${pos}`} className="experience_mobile_container">
                    <div key={`mobile${pos}`} className="experience_mobile_point"></div>
                    <ExperienceCard key={`mobile1${pos}`} className="experience_card" data={data} refresh={refresh} index={pos} />
                </div>
                ))}
            </div>
        </>
    );
}