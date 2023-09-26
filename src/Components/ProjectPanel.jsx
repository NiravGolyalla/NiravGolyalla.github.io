import "../styles/ProjectPanel.css"

export default function ProjectPanel(props) {
    return (
        <>
        <div className="Display_container">
            <img className="Display_img" src={props.img}></img>
            <h3>{props.title}</h3>
            <p>{props.text}</p>
        </div>
        </>
    );
}