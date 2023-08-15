import React from 'react'
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import "../styles/Footer.css";
import { Link } from 'react-router-dom';


function Footer() {
  return (
    <div className="footer">
        <div className = "socialMedia">
        <Link to="https://www.linkedin.com/in/cobey-kromer/">
          <LinkedInIcon/>
        </Link>
        <Link to="https://github.com/ckromer2">
          <GitHubIcon/>
        </Link> 
        </div>
        <p>
            &copy; 2023 cobeykromer.com
        </p>
    </div>
  )
}

export default Footer