import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  
  const listItem = projects.map((elem) => {
    return <ProjectItem key={elem.id} technologies={elem.technologies} name={elem.name} about={elem.about}></ProjectItem>
    
  });
  
  return (
    
    <div id="projects">
      <h2 >My Projects</h2>
      <div id="project-list" >{listItem}</div>
    </div>
  );
}


export default ProjectList;
