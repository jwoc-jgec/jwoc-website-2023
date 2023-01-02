import React from 'react'
import './styles/about.css'
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import SchoolIcon from '@mui/icons-material/School';
function About() {
  return (
    <section id='about'>
      <div className="about-container">
        <div className="heading">
          <h1 className='glass'>ABOUT</h1>
        </div>
        <div className="about-card glass">
          <h2 className='glass'>
            JWOC: How it works?
          </h2>
          <p className='glass'>
            JWOC provides a fully immersive learning experience for students and first-time contributors by promoting the wonders of open-source software and crafting a community of new and experienced technical developers. The best projects are selected for this program. Students get acquainted with the projects from the mentors during the Community Bonding Period. Students work on these projects during the coding phase. At the end of the coding period, the winners of the programs are announced on the basis of their contribution in terms of quantity as well as quality.
          <button className="btn">Code Of Conduct</button>
          </p>
        </div>
        <div className="info-container glass">
          <div className="devider glass">
            <div className="devider-el-1 glass">
              <div className="devider-el-2 glass">
                <div className="devider-el-3 glass"></div>
              </div>
            </div>
          </div>
          <h1 className='glass'>INFO</h1>
          <div className="info-cards">
            <div className="info-card glass">
            <AccountBoxIcon  sx={{
              fontSize: 50,
            }}/>
            <span className="info-card-title">Mentor's Manual</span>
              
              <button className="btn">
                Get Here
              </button>
            </div>
            <div className="info-card glass">
            <SchoolIcon sx={{
              fontSize: 50,
            }}/>
            <span className="info-card-title">Student's Manual</span>
              
              <button className="btn">
                Get Here
              </button>
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}

export default About;