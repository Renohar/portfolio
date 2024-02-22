import React from 'react'
import homeimage from "../images/home-developer.json"
import Html from "../images/html.webp"
import Css from "../images/CSS3.webp"
import Javascript from "../images/JavaScript.webp"
import Reac from "../images/react.webp"
import Redux from "../images/redux.webp"
import Bootstrap from "../images/Bootstrap.webp"
import Wordpress from "../images/Wordpress.webp"
import Sass from "../images/sass.webp"
import java from "../images/java_logo.webp"
import spring from "../images/spring_boot_logo.webp"

import git from "../images/git_logo.webp"
import python from "../images/python_logo.webp"
import postgreSQL from "../images/postgreSQL_logo.webp"

import linux from "../images/linux.webp"
import NodeJs from "../images/NodeJs.webp"
import ExpressJs from "../images/ExpressJs.webp"

import Lottie from "lottie-react"

import PDF from "../images/Renohar_SK_Resume.pdf"

const Home = () => {
    return (
        <section className="home">
            <div className="left">

                <div className="top">
                <h1>Hello</h1>
                <h2>I am <span>Renohar SK</span></h2>
                <h2>Web Developer</h2>
                <p>Looking to be a part of an environment where I can leverage my existing expertise in constructing static web pages. Eager to learn and elevate my skills as a Fullstack developer while actively contributing to the development of dynamic web pages. </p>

                <a className="Resume" href={PDF} target="_blank" rel="noreferrer">Download Resume</a>
                </div>

                <div className="bottom">
                    <h2>Skills</h2>
                    <div className="skill-container">

                        <div className="skill">
                            <img src={Html} alt="HTML" />
                            <p>Html</p>
                        </div>

                        <div className="skill">
                            <img src={Css} alt="Css" />
                            <p>Css</p>
                        </div>

                        <div className="skill">
                            <img src={Javascript} alt="Javascript" />
                            <p>Javascript</p>
                        </div>

                        <div className="skill">
                            <img src={Reac} alt="React" />
                            <p>React</p>
                        </div>

                        <div className="skill">
                            <img src={Redux} alt="Redux" />
                            <p>Redux</p>
                        </div>

                        <div className="skill">
                            <img src={NodeJs} alt="NodeJs" />
                            <p>NodeJS</p>
                        </div>

                        <div className="skill">
                            <img src={ExpressJs} alt="ExpressJs" />
                            <p>ExpressJS</p>
                        </div>

                        <div className="skill">
                            <img src={java} alt="Java" />
                            <p>Java</p>
                        </div>

                        <div className="skill">
                            <img src={spring} alt="Spring Boot" />
                            <p>Spring Boot</p>
                        </div>

                        

                        <div className="skill">
                            <img src={postgreSQL} alt="PostgreSQL" />
                            <p>PostgreSQL</p>
                        </div>


                        <div className="skill">
                            <img src={Bootstrap} alt="Bootstrap" />
                            <p>Bootstrap</p>
                        </div>


                        <div className="skill">
                            <img src={Wordpress} alt="Wordpress" />
                            <p>Wordpress</p>
                        </div>



                        

                    </div>
                </div>
                
            </div>
            <div className="right">
                <Lottie animationData={homeimage} />
            </div>
        </section>
    )
}

export default Home





