import "../styles/Section.css"

export default function Section(props){
    return(
        <div className='subsection'>{props.children}</div>
    );
}