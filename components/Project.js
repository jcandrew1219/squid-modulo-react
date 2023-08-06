import React from 'react';

function Project({ title, image, deployedLink, githubLink }) {
  return (
    <div className="col-6 my-2 projectsData">
      <div className="projectTitle">
        <h5>{title}</h5>
      </div>
        <img src={require(`../images/${image}`)} alt={title} />
      <div className="container-fluid projectLinks">
          <a href={deployedLink} className="col-6 py-2">View Page</a>
          <a href={githubLink} className="col-6 py-2">View GitHub</a>
      </div>
    </div>
  );
}

export default Project