import "../styles/Navbar.css"

export default function Navbar() {
    return (
        <>
        <div className="navbar">
            <h1 className="navbar_title">Nirav Golyalla</h1>
            
            <ul className="navbar_menu">
                <li>
                    <a className="navbar_link" href="#about">About</a>
                </li>
                <li>
                    <a className="navbar_link" href="#experience">Experience</a>
                </li>
                <li>
                    <a className="navbar_link" href="#contact">Contact Me</a>
                </li>
                <li>
                    <a className="navbar_link" href="/assets/NiravGolyallaResume2023.pdf" target="_blank">Resume</a>
                </li>
            </ul>
        </div>
        </>
    );
}