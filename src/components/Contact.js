import React from 'react'
import Lottie from "lottie-react"
import contactimage from "../images/contact.json"

const Contact = () => {
    return (
        <section className="contact">

            <div className="left">

                <h2>Contact</h2>

                <p>GitHub : <a target="_blank" rel="noreferrer" href="https://github.com/renohar">https://github.com/renohar</a></p>

                <p>GMAIL : <a href="mailto:renohar1996@gmail.com" >renohar1996@gmail.com</a> </p>

                <p>Mobile : <a href="tel:9042138198">9042138198</a> </p>

                {/* <h2>Certifications</h2>
                
                <a rel="noreferrer"  href="https://www.freecodecamp.org/certification/renohar/responsive-web-design" target="_blank">https://www.freecodecamp.org/certification/renohar/responsive-web-design</a>

                <br></br>

                <a rel="noreferrer"  target="_blank" href="https://www.freecodecamp.org/certification/renohar/javascript-algorithms-and-data-structures">https://www.freecodecamp.org/certification/renohar/javascript-algorithms-and-data-structures</a> */}


            </div>
            <div className="right">

            <Lottie animationData={contactimage} />

            </div>

        </section>
    )
}

export default Contact
