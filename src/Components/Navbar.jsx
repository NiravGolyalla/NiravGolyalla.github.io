import "../styles/Navbar.css"

export default function Navbar() {
    return (
        <>
            <div className="navbar">
                <h1 className="navbar_title">
                    <a className="navbar_link" href="#hero">Nirav Golyalla</a>
                </h1>

                <ul className="navbar_menu">
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