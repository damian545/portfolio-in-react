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
              <h3 style={{ paddingTop: "2em", color: "lightseagreen" }}>Damian Tapp</h3>
              <hr style={{ borderTop: "3px dotted lightseagreen", width: "100%" }} />
              <img
                src="/images/DamianTapp.jpg"
                alt="profile image"
                style={{ height: "350px" }}
              />
            </div>

            <h4 style={{ color: "lightseagreen" }}>Programmer</h4>
            <hr style={{ borderTop: "3px solid #833fb2", width: "100%" }} />
            <p>
              Hello, my name is Damian Tapp. I am 46 years old and looking to
              change my current job from a Factory Worker to a Web Developer.
              Learning coding for the first time has been exciting and scary all
              at the same time. But I am really enjoying it, I have learnt a lot
              things to do with computing languages and I have completed many
              activities.
            </p>
            <hr style={{ borderTop: "3px solid #833fb2", width: "100%" }} />
            <h5>ADDRESS</h5>            
            <p style={{ color: "orange", fontSize: "20px"}}>1 Hacker Way Menlo Park, 94025</p>
            <hr style={{ borderTop: "3px solid orange", width: "100%" }} />
            <h5>PHONE</h5>            
            <p style={{ color: "orange", fontSize: "20px"}}>0402 123 456</p>
            <hr style={{ borderTop: "3px solid orange", width: "100%" }} />
            <h5>EMAIL</h5>            
            <p style={{ color: "orange", fontSize: "20px"}}>someone@example.com</p>
            <hr style={{ borderTop: "3px solid orange", width: "100%" }} />
            <h5>WEB</h5>           
            <p style={{ color: "orange", fontSize: "20px"}}>damiantapp.com</p>
            <hr style={{ borderTop: "3px solid orange", width: "100%" }} />
            
            
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>

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
            <h2>Experience</h2>
            <Experience
              startYear={1993}
              endYear={2020}
              jobName="Factory Worker at Monroe Australia"
              jobDiscription="Currently working as a Forklift operator, Crane operator and Tubemill operator"
            />
            <hr style={{ borderTop: "3px solid #e22947" }} />
            <h2>Language Skills</h2>
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