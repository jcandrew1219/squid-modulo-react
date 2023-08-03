import React from 'react';

function Project({ title, image, deployedLink, githubLink }) {
  return (
    <div className="Project">
        <h3>{title}</h3>
        <img src={image} alt={title} />
        <div className="Project-Links">
            <a href={deployedLink}>View Page</a>
            <br/>
            <a href={githubLink}>View GitHub</a>
        </div>
    </div>
  );
}

export default Project;