import React from 'react'
import "../styles/Contact.css"

export default function Contact() {
    return (
        <div className='contact_horizontal'>
            <div >
                <h2>Open to Work!</h2>
                <p className='contact_paragraph'>I'm always eager to take on intriguing projects or work, so feel free to reach out if you have something exciting in mind.</p>
            </div>
            <div className='contact_container'>
                <h3 className='contact_hover'>Contact Me :</h3>
                <h3 className='contact_hover'>Email: niravgolyalla@gmail.com</h3>
                <h3 className='contact_hover'>Phone: +1 917-480-9000</h3>
                <a className="contact_link" href=""><h3 className='contact_hover'>Linkedin</h3></a>
                <a className="contact_link" href=""><h3 className='contact_hover'>Github</h3></a>
            </div>
        </div>

    )
}
