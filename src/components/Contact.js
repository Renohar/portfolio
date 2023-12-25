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

                <p>Mobile : <a href="tel:904213818">9042138918</a> </p>


            </div>
            <div className="right">

            <Lottie animationData={contactimage} />

            </div>

        </section>
    )
}

export default Contact
