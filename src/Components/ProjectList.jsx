import "../styles/ProjectList.css"
import { useRef, useState } from "react";

import data from "../assets/projectData"
import ProjectPanel from "./ProjectPanel"
import ButtonHold from "./ButtonHold"

export default function ProjectList() {
    const moveAmount = 10;
    const [movement, setMovement] = useState("");
    const slider = useRef();
    const mouseX = useRef({ x: 0, down: false });

    function onMouseDown(e) {
        // console.log(e);
        mouseX.current.x = e.clientX;
        mouseX.current.down = true;
    }
    function onMouseUp() {
        mouseX.current.down = false;
        setMovement("");
    }

    function onMouseMove(e) {
        if (mouseX.current.down) {
            console.log(slider.current.scrollLeft);
            slider.current.scrollLeft -= (e.clientX - mouseX.current.x);
            if (Math.abs(e.clientX - mouseX.current.x) >= 2) {
                if (e.clientX - mouseX.current.x > 0) {
                    setMovement("left");
                } else {
                    setMovement("right");
                }
            } else {
                setMovement("");
            }
            mouseX.current.x = e.clientX;
        }
    }

    return (
        <div className="project_container">
            <ButtonHold className="left" scrollOffset={-moveAmount} move={slider}>{"<"}</ButtonHold>
            <div ref={slider} className="project_scroll" onMouseDown={onMouseDown} onMouseMove={onMouseMove} onMouseUp={onMouseUp} onMouseLeave={onMouseUp}>{data.map((item, id) => (<ProjectPanel className={`${movement}`} key={id} img={item.img} title={item.title} text={item.description} link={item.link}/>))}</div>
            <ButtonHold className="right" scrollOffset={moveAmount} move={slider}></ButtonHold>
        </div>
    );
}