import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import Education from "./education";
import Experience from "./experience";
import Skills from "./skills";


class Resume extends Component {
    render() {
        return (
            <div>
        <Grid className="landing-grid">
          <Cell col={4}>
            <div style={{ textAlign: "center" }}>
              <h3 style={{ paddingTop: "2em", color: "lightyellow", fontFamily: "Lobster, cursive", letterSpacing:"2px", fontSize:"35px"}}>Damian Tapp</h3>              
              <img
                src="/images/DamianTapp2.jpg"
                alt=""
                style={{ height: "350px", border:"3px solid black" }}                
              />
            </div>

            <h4 style={{ color: "lightyellow", fontFamily: "Lobster, cursive", fontSize:"30px"}}>Programmer</h4>
            <hr style={{ borderTop: "3px solid aqua", width: "100%" }} />
            <p style={{ fontSize:"20px"}}>
              Hello, my name is Damian Tapp. As a web designer, I will be doing 
              my absolute best to give you the most out of your website I will 
              design for you because when you are happy I will be too.
            </p>
            <hr style={{ borderTop: "3px solid aqua", width: "100%" }} />

            <h5 style={{fontFamily: "Lobster, cursive", letterSpacing:"2px", fontSize:"30px"}}>ADDRESS</h5>  

            <p style={{ color: "black", fontSize: "25px"}}>1 Hacker Way Menlo Park, 94025</p>

            <hr style={{ borderTop: "3px solid aqua", width: "100%" }} />

            <h5 style={{fontFamily: "Lobster, cursive", letterSpacing:"2px", fontSize:"30px"}}>PHONE</h5> 

            <p style={{ color: "black", fontSize: "25px"}}>0402 123 456</p>

            <hr style={{ borderTop: "3px solid aqua", width: "100%" }} />

            <h5 style={{fontFamily: "Lobster, cursive", letterSpacing:"2px", fontSize:"30px"}}>EMAIL</h5>  

            <p style={{ color: "black", fontSize: "25px"}}>someone@example.com</p>

            <hr style={{ borderTop: "3px solid aqua", width: "100%" }} />

            <h5 style={{fontFamily: "Lobster, cursive", letterSpacing:"2px", fontSize:"30px"}}>WEB</h5>  

            <p style={{ color: "black", fontSize: "25px"}}>damiantapp.com</p>
            
            <hr style={{ borderTop: "3px solid aqua", width: "100%" }} />
            
            
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2 style={{fontFamily: "Lobster, cursive", fontSize: "73px"}}>Education</h2>

            <Education
              startYear={1987}
              endYear={1992}
              schoolName="Christies Beach High School"
              schoolDiscription="High school for 4.5 years, to only complete half of year 12."
            />

            <Education
              startYear={2019}
              endYear={2020}
              schoolName="Adelaide University"
              schoolDiscription="Completed a 6 month course in web development, called a coding bootcamp."
            />
            <hr style={{ borderTop: "3px solid #e22947" }} />
            <h2 style={{fontFamily: "Lobster, cursive", fontSize: "73px"}}>Experience</h2>
            <Experience
              startYear={1993}
              endYear={2020}
              jobName="Factory Worker at Monroe Australia"
              jobDiscription="I'm currently working as a Forklift operator, Crane operator and Tubemill operator.
              I have great organisation skills, people skills with my boss about what is done for the next customer and with the truck drivers about what is getting loaded, as well as a great work ethic.
              I'm honest and transparent."
            />
            <hr style={{ borderTop: "3px solid #e22947" }} />
            <h2 style={{fontFamily: "Lobster, cursive", fontSize: "73px"}}>Language Skills</h2>
            <Skills skill="JAVASCRIPT" progress={60} />
            <br />
            <Skills skill="HTML/CSS" progress={100} />
            <br />
            <Skills skill="NODE.JS" progress={30} />
            <br />
            <Skills skill="MONGODB" progress={30} />
            <br />
            <Skills skill="REACT.JS" progress={65} />
            <br />
            <Skills skill="JQUERY" progress={35} />
            <br />
            <Skills skill="MySQL" progress={25} />
            <br />
            <Skills skill="EXPRESS" progress={25} />
          </Cell>
        </Grid>
      </div>
    );
        
    }
}

export default Resume;