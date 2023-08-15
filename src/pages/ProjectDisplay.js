import React from 'react'
import { useParams } from "react-router-dom"
import { ProjectList } from '../helpers/ProjectList'
import '../styles/ProjectDisplay.css'
import GitHubIcon from "@material-ui/icons/GitHub";
import YouTubeIcon from "@material-ui/icons/YouTube";

import { Link } from 'react-router-dom';


function ProjectDisplay() {
    const { id } = useParams()
    const project = ProjectList[id]
  return (
    <div className="project">
        <h1>{project.name}</h1>
        <img src={project.image} />
        <p>
            <b>Skills: </b>{project.skills}
        </p>
        <Link to={project.link}>
          {
            id == 1 
            ? <YouTubeIcon/>
            : <GitHubIcon/>
          }
        </Link>
        <Link to='https://youtu.be/-wyR4rGURto'>
        {
          id == 4
          ? <YouTubeIcon/>
          : <div/>
        }
      </Link>
    </div>
  )
}

export default ProjectDisplay