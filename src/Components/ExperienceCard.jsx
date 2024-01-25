import "../styles/ExperienceCard.css"

export default function ExperienceList(props) {
    return (
        <div className={`${props.className}${(props.refresh) ? " wipe" : ''}`}>
            <div className="experiencecard_header">
                <h2>{props.data[props.index].title}</h2>
                <h3 className="experiencecard_time">{props.data[props.index].time}</h3>
            </div>
            <hr />
            <div className="experiencecard_content">
                {props.data[props.index].paragraph}
                <img className="experiencecard_img hide1100" src={props.data[props.index].img} />
            </div>
            <div className="experiencecard_skillcontent">Skills:{props.data[props.index].skills.map((item, id) => (<div key={id} className="experiencecard_skill">{item}</div>))}</div>
        </div>
    );
}