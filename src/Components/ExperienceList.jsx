import "../styles/ExperienceList.css"

import data from "../assets/experienceData.js"
import TimelinePanel from "./TimelinePanel"
import { useState } from "react";

export default function ExperienceList() {
    let lock = false;
    let d = new Date();
    const [index,setIndex] = useState(0);
    const [past,setPast] = useState(0);
    const [refresh,setRefresh] = useState(false);

    function experienceHandler(newIndex){
        if(lock == false){
            lock = true;
            setPast(newIndex);
            setRefresh(true);
            console.log(d.getTime());
            setTimeout(() =>{manageDelay(newIndex)},500);
            
        }
    }

    function manageDelay(newIndex){
        setRefresh(false)
        console.log(d.getTime());
        setIndex(newIndex);
        lock = false;
    }

    return (
        <div className="experience_container">
            <div className="experience_list">
                {data.map((experience,pos) => (
                    <TimelinePanel className={`${(past == pos) ? "active" : ''}`} key={pos} customClickEvent={() => experienceHandler(pos)} name={experience.title} text={experience.time}></TimelinePanel>
                ))}
                {console.log(`${(index == 0) ? "active" : ""}`)}
            </div>
            <div className="experience_info">
                <div className={`experience_card${(refresh) ? " wipe" : ''}`}>     
                    <h3>{data[index].title}</h3>
                    <p>{data[index].paragraph}</p>
                </div>
                <div className={`experience_wipe${(refresh) ? " wipe" : ''}`}>    
                    <h3>{data[past].title}</h3>
                    <p>{data[past].paragraph}</p>
                </div>
            </div>
            
        </div>
    );
}