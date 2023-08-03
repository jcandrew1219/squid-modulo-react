import React from 'react';
import Project from './Project';
import projectsData from './ProjectsData';

function Portfolio() {
    return(
        <section className="Portfolio">
            <h2>Portfolio</h2>
            <div className="container">
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