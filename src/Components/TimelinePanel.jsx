import "../styles/TimelinePanel.css"

export default function TimelinePanel(props) {
    return (
        <>
            <div className="experience_point" onClick={props.customClickEvent}>
                <div className="bullet_point"></div>
                <div className="timeline_panel">
                    <h1 className="timeline_title">{props.name}</h1>
                    <h2 className="timeline_text">{props.text}</h2>
                </div>
            </div>
        </>
    );
}