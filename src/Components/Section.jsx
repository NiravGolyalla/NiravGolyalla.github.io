import "../styles/Section.css"

export default function Section(props) {
    return (
        <div className='section' id={props.id}>
                {props.children}
        </div>
    );
}