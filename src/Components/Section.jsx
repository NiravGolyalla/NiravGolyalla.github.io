import "../styles/Section.css"

export default function Section(props) {
    return (
        <div className='section'>
            <div className='subsection'>
                {props.children}
            </div>
        </div>
    );
}