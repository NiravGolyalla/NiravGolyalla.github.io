import "../styles/TimelinePanel.css"

export default function TimelinePanel(props) {
    return (
        <>
            <div className={`experience_point ${props.className}`}>
                <div className="bullet_point"></div>
                <div className="timeline_panel" onClick={props.customClickEvent}>
                    <div className="timeline_hover"></div>
                    <h3 className="timeline_title">{props.name}</h3>
                    <h4 className="timeline_text">{props.text}</h4>
                </div>
            </div>
        </>
    );
}