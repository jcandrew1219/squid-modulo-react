import React from 'react';
import Project from './Project';
import projectsData from './ProjectsData';

function Portfolio() {
    return(
        <section className="container my-5">
            <h2>Portfolio</h2>
            <div className="row">
                {projectsData.map((project, index) => (
                    <Project 
                        id={index} 
                        title={project.title} 
                        image={project.image} 
                        deployedLink={project.deployedLink} 
                        githubLink={project.githubLink}/>
                ))}
            </div>
        </section>
    );
}

export default Portfolio;