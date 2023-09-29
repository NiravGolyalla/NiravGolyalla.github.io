import "../styles/ProjectPanel.css"

export default function ProjectPanel(props) {
    return (
        <>
            <div className={`Display_container ${props.className}`}>
                <img className="Display_img" src={props.img}></img>
                <div className="Display_content">
                    <h3>{props.title}</h3>
                    <p>{props.text}</p>
                    <div className="Display_buttonholder">
                        <a className="Display_button">{"More Info >"}</a>
                        <a target="_blank" href={props.link} className="Display_button">{"View Repo >"}</a>
                    </div>
                </div>
            </div>
        </>
    );
}