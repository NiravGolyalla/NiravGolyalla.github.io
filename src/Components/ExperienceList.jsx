import "../styles/ExperienceList.css"

import data from "../assets/experienceData.js"
import TimelinePanel from "./TimelinePanel"
import { useState } from "react";

export default function ExperienceList() {
    const [index,setIndex] = useState(0);

    function experienceHandler(newIndex){
        setIndex(newIndex);
    }

    return (
        <div className="experience_container">
            <div className="experience_list">
                <TimelinePanel customClickEvent={() => experienceHandler(0)} name="C2Smart Bilab" text="2020-2023"></TimelinePanel>
                <TimelinePanel customClickEvent={() => experienceHandler(1)} name="sus" text="number"></TimelinePanel>
                <TimelinePanel customClickEvent={() => experienceHandler(2)} name="sus" text="number"></TimelinePanel>
            </div>
            <div className="experience_info">
                <h3>{data[index].Title}</h3>
                <p>{data[index].paragraph}</p>
            </div>
        </div>
    );
}