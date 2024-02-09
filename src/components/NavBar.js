import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  
  return <nav>
    
      <a href={links.home} key={links.home}>home</a>
      <a href={links.about} key={links.about}>about</a>
      <a href={links.projects} key={links.projects}>projects</a>

      
  </nav>;
}

export default NavBar;
