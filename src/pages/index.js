import Header from '../components/header/header.component.jsx';
import './index.styles.scss';
import Section from '../components/section/section.component.jsx';
import React, { useState, useEffect} from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import {Element} from 'react-scroll';
function iterateFunction(i, maxSize) {
  let temp = i
  if(temp < maxSize){
    temp++;
  }else{
    temp = 0;
  }
  return temp;
}


const IndexPage = () => {
  const listOfText = [
    'Developer.', 
    'Programmer.',
    'Gamer.'
  ];
  const [counter, setCounter] = useState(0)
  
  const workHistory = [
    {
      date: 'Jun 2020 - present',
      company: 'Xalient',
      jobTitle: 'Junior Developer',
      location: 'Leeds',
      description: '\nUtilising many technologies such as Python, React, Flask and SQL to build an interactive and flexible dashboard.'
    },
    {
      date: 'Oct 2019 - May 2020',
      company: 'University of Bradford',
      jobTitle: 'Part-time Developer',
      location: 'Bradford',
      description: '\nWorking part-time on my summer internship project after a successful prototype delivery. Building custom SQL queries to retrieve information from Google Cloud across several tables.'
    },
    {
      date: 'Sep 2019 - Dec 2019',
      company: 'University of Bradford',
      jobTitle: 'Demonstrator',
      location: 'Bradford',
      description: '\nAssist the professor in labs and helping students understand the learning material. Understanding and rewording the lab material to help students understand it. Help a class of up to 140 students with troubleshooting and problems.'
    },
    {
      date: 'Jun 2019 - Aug 2019',
      company: 'University of Bradford',
      jobTitle: 'Summer Internship',
      location: 'Bradford',
      description: '\nDesigned a dashboard application prototype for a network analytics company using Python and Plotly Dash framework. Nomination for ‘Outstanding Placement Student’. Received data from Google Cloud using API. Created a dashboard UI to display information via different visualisations. Usage of Scrum methodology to ensure product is consistent with the client’s expectation. Usage of version control (Git) to maintain consistency across a team of four interns.'
    },
    {
      date: 'Jul 2017 - Aug 2017',
      company: 'MATCHESFASHION.COM',
      jobTitle: 'Work Shadowing',
      location: 'London',
      description: '\nUsing social media software to flag and review potential comments needing advice or leaving negative reviews. Working with technical support to repair PCs as well as setting up new Macs, using deployment tools to setup company software. Presented to professionals from various companies like Google, Dropbox, Matches Fashion as well as the CEO of Wolff Olins. Utilisation of time management skills balancing the daily tasks assigned to me as well as focusing on my end week presentation project.'
    },
  ]

  const educationHistory = [
    {
      date: 'Sep 2018 - Jul 2018',
      school: 'University of Bradford',
      location: 'Bradford',
      grades: `\nFirst Year (Average: 81%)\nKey Modules: Mathematics for Computing (92%); Software Design and Development (92%); Fundamentals of Programming (90%); Technical and Professional Skills (84%); Architecture and Systems Software (71%); Internet Technologies (59%)\n \nSecond Year\nKey Modules: Database Systems; Data Structures and Algorithms; Artificial Intelligence; Numerical Analysis; Enterprise Pro; Computer Communication and Networks`,
    },
    {
      date: 'Sep 2011 - Jul 2018',
      school: 'Carlton Bolling College',
      location: 'Bradford',
      grades: `\nA Levels: Mathematics (B), Biology (C) and Chemistry (C) \n\nGCSE: 9 Subjects (2A*s, 3As 4Bs) including Maths (A*) and English (A)`,
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter(iterateFunction(counter, listOfText.length-1));
    }, 5000); 
    return () => clearInterval(interval); 
  });

  return (
    <div>
      <Header />
      <Element name="aboutme">
        <Section backgroundColour='#2B2C2C' padding={{y: '6em', x: '20em'}} >
              <div className="flex">
                <div>
                  <h1 style={{fontSize: '60px'}}>Daem Pasha</h1>
                  <p className='sub-text' style={{fontSize: '24px'}}>{listOfText[counter]}</p>
                </div>
                <div>
                  <img width='600px' src={'/programming.svg'}/>
                </div>
              </div>
        </Section>
      </Element>

      <Element name="work">
        <Section backgroundColour='#252525' padding={{y: '4em', x: '20em'}} title='Work'>
          <VerticalTimeline>
            {workHistory.map(object => 
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: '#2D2E2E', color: '#fff' }}
                date={object.date}
                iconStyle={{ background: '#8C7AE6', color: '#fff' }}
              >
                <h3>{object.company} <span style={{color: '#8C7AE6'}}>({object.location})</span></h3>
                <h4>{object.jobTitle}</h4>
                <div style={{whiteSpace: 'pre-wrap'}}>{object.description}</div>
              </VerticalTimelineElement>)}
          </VerticalTimeline>
        </Section>
      </Element>

      <Element name="education">
        <Section backgroundColour='#2D2E2E' padding={{y: '4em', x: '20em'}} title='Education'>
          <VerticalTimeline>
            {educationHistory.map(object => 
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: '#252525', color: '#fff' }}
                date={object.date}
                iconStyle={{ background: '#8C7AE6', color: '#fff' }}
              >
                <h3>{object.school} <span style={{color: '#8C7AE6'}}>({object.location})</span></h3>
                <div style={{whiteSpace: 'pre-wrap'}}>{object.grades}</div>
              </VerticalTimelineElement>)}
          </VerticalTimeline>
        </Section>
      </Element>

      <Element name="projects">
        <Section backgroundColour='#252525' padding={{y: '4em', x: '20em'}} title='Projects'>
            <div style={{backgroundColor: '#2D2E2E', padding: '7em', borderRadius: '10px'}}>
                <img width='15%' src='./programming.svg'/>
                
            </div>
        </Section>
      </Element> 

      <Element name="cv">
        <Section backgroundColour='#2D2E2E' padding={{y: '4em', x: '20em'}}>
          <div style={{textAlign: "center"}}>
            <h1 style={{marginBottom: '2em'}}>Download CV</h1>
            <a className='link-button' href='https://drive.google.com/uc?export=download&id=1g0lA9ghAItdFjd-56YJjQP8I05O3W7Uw'><i className="fas fa-download"></i>Download</a>
          </div>
        </Section>     
      </Element>   

    </div>

  );

};

export default IndexPage
