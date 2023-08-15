import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import "react-vertical-timeline-component/style.min.css"
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";


function Experience() {
  return (
    <div className = "experience">
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement 
          className="vertical-timeline-element--education"
          date="Summer 2022"
          iconStyle={{background: "#e9d35b", color: "#fff"}}
          icon={<WorkIcon />}
        >
          <h3 className='vertical-timeline-element-title'>WillowTree</h3>
          <p>Software Test Engineer Intern</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement 
          className="vertical-timeline-element--education"
          date="Summer 2023"
          iconStyle={{background: "#e9d35b", color: "#fff"}}
          icon={<WorkIcon />}
        >
          <h3 className='vertical-timeline-element-title'>WillowTree</h3>
          <p>Software Engineer Intern</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement 
          className="vertical-timeline-element--education"
          date="Fall 2024"
          iconStyle={{background: "#3e497a", color: "#fff"}}
          icon={<SchoolIcon />}
        >
          <h3 className='vertical-timeline-element-title'>University of Toledo</h3>
          <p>BSE in Computer Science and Engineering, GPA: 3.96</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  )
}

export default Experience