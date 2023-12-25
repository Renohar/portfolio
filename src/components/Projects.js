import React from 'react'
import projectimage from "../images/projects.json"
import Lottie from "lottie-react"

const Projects = () => {
    return (
        <section className="projects">

            <div className="left">
                <Lottie animationData={projectimage} />
            </div>

            <div className="right">
                <h2>Projects</h2>
                <div className="projects-container">

                    
                        <a rel="noreferrer" target="_blank" href="https://rreact-redux-blog.netlify.app/">Blogs</a>
                    

                    
                        <a rel="noreferrer" target="_blank" href="https://rreact-todolist.netlify.app/">ToDo List</a>
                    

                    
                        <a rel="noreferrer" target="_blank" href="https://rreact-calculator.netlify.app/">Calculator</a>
                    

                    
                        <a rel="noreferrer" target="_blank" href="https://checkweatherapplication.netlify.app/">WeatherApp</a>
                    

                    
                        <a rel="noreferrer" target="_blank" href="https://ddrum-machine.netlify.app/">Drum Machine</a>
                    

                    
                        <a rel="noreferrer" target="_blank" href="https://rrandom-quotes-generator.netlify.app/">Quote Generator</a>
                    

                    




                </div>

            </div>


        </section>
    )
}

export default Projects
