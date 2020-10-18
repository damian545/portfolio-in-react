import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";


class Aboutme extends Component {
    render() {
        return (
            <div className="contact-body" style={{background: "#eb5757"}}>
            <Grid className="contact-grid">
              <Cell className="aboutme" col={8}>
                <h2 style={{fontFamily: "Lobster, cursive", fontSize: "73px"}}>About Me</h2>
                <hr style={{ borderTop: "3px solid #e22947", width: "100%" }} />
                <p>
                Hello, my name is Damian Tapp. I'm 46 years old and I recently graduated
              from a bootcamp coding course at Adelaide University. I completed a lot of 
              things for the first time during this course,
              many of which I am very proud of. Seeing as I have only started to
              use code for the first time at the end of 2019 leading up to this
              course. I am a very hard working person and I love finding out how
              things work, whether it is during Uni or with the hobbies that I
              do. I really want to change my job into a career. I have been
              working hard to learn what it takes to be a web designer, so I can
              fulfill my dream of change. I believe that my current job will
              fade away and getting into technology based work is here to stay,
              I want be a part of it. After spending 27 years in one job with
              little to no achievements, has effected me some what. I would love
              to be in an industry that has achievements and something to be
              proud of at the end of the day. About 6 years ago, when I was
              heavily into skateboarding. I did a lot of filming and film
              editing, I love to create. This is why I should be a programmer...          
                </p>                
              </Cell>
              <Cell col={4}>
            <div style={{ textAlign: "center" }}>
              <h3 style={{ paddingTop: "2em", color: "lightseagreen", fontFamily: "Lobster, cursive", textShadow: "1px 1px 4px black", letterSpacing:"2px"}}>Damian Tapp</h3>              
              <img
                src="/images/DamianTapp.jpg"
                alt=""
                style={{ height: "350px", width:"280px"}}
                border="3px solid black" 
              />
            </div>            
            </Cell>
            </Grid>
          </div>  
        );
    }
}

export default Aboutme;