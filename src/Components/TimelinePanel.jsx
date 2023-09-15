import "../styles/TimelinePanel.css"

export default function TimelinePanel(props) {
    return (
        <>
            <div className={`experience_point ${props.className}`}>
                <div className="bullet_point"></div>
                <div className="timeline_panel" onClick={props.customClickEvent}>
                    <div className="timeline_hover"></div>
                    <h1 className="timeline_title">{props.name}</h1>
                    <h2 className="timeline_text">{props.text}</h2>
                </div>
            </div>
        </>
    );
}