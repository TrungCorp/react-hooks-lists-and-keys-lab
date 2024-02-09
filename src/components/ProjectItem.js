import React from "react";

function ProjectItem({ name, about, technologies }) {

  console.log(technologies)
  const techItems = technologies.map((item) =>{
    return <span>{item}</span>
  })
    
  

  return (
    <div className="project-item" >
      <h3 >{name}</h3>
      <p >{about}</p>
      <div className="technologies">
      {techItems}
        


        
      </div>
    </div>
  )
}

export default ProjectItem;
