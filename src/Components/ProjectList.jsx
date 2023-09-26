import "../styles/ProjectList.css"
import { useRef } from "react";

import data from "../assets/projectData"
import ProjectPanel from "./ProjectPanel"
import ButtonHold from "./ButtonHold"

export default function ProjectList() {
    const moveAmount = 10;
    const sliderIndex = useRef(Math.floor(data.length / 2));
    const slider = useRef();
    const updateCurrent = (newIndex) => { sliderIndex.current = newIndex; };

    return (
        <div className="project_container">
            <ButtonHold onClickHold={updateCurrent} scrollOffset={-moveAmount} move={slider} index={sliderIndex}></ButtonHold>
            <div ref={slider} className="project_scroll" id="slider">{data.map((item, id) => (<ProjectPanel key={id} img={item.img} title={item.title} text={item.description} />))}</div>
            <ButtonHold onClickHold={updateCurrent} scrollOffset={moveAmount} move={slider} index={sliderIndex}></ButtonHold>
        </div>
    );
}