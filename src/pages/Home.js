import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";
import "../styles/Home.css";
import { Link } from 'react-router-dom';


function Home() {
  return (
    <div className='home'>
      <div className='about'>
        <h2>Hello, My Name is Cobey Kromer</h2>
        <div className='prompt'>
          <p>
            Aspiring Software Engineer. 
            Currently a Computer Science and Engineering
            Major at the University of Toledo. Go Rockets!
          </p>
          <Link to="https://www.linkedin.com/in/cobey-kromer/">
            <LinkedInIcon/>
          </Link>
          <Link to="https://github.com/ckromer2">
            <GithubIcon/>
          </Link>
        </div>
      </div>
      <div className="skills">
        <h1>Skills</h1>
        <ol className="list">
          <li className='item'>
            <h2>Languages</h2>
            <span>
              Java, Kotlin, C#, C++, Python, Swift, Javascript, CSS, HTML, Matlab
            </span>
          </li>
          <li className='item'>
            <h2>Other Skills/Experience</h2>
            <span>
              Esspresso, Proxyman, Postman, Git/Github, React, Android Development, Winform, SqLite
            </span>
          </li>
        </ol>
      </div>
    </div>
  )
}

export default Home