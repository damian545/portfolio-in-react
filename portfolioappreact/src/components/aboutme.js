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
                <br/>
                <p>
                Hello, my name is Damian Tapp. I'm 46 years old and I recently graduated
              from a bootcamp coding course at Adelaide University. I completed a lot of 
              things for the first time during this course, many of which I am very proud of.
              I am a very creative person and I enjoy how things flow in an orderly fashon. I 
              have been told I am a perfectionist, this is probably very true. When I make something,
              I want it to be done right and the only down fall with that is I am never happy with my work.
              When you become my customer and you are happy with my work. That is the only thing that counts,
              at the end of the day.               
                </p>                
              </Cell>
              <Cell col={4}>
            <div style={{ textAlign: "center" }}>
              <h3 style={{ paddingTop: "2em", color: "lightyellow", fontFamily: "Lobster, cursive", fontSize:"35px", letterSpacing:"2px"}}>Damian Tapp</h3>              
              <img
                src="/images/DamianTapp2.jpg"
                alt=""
                style={{ height: "350px", width:"280px", border:"3px solid black"}}
                 
              />
            </div>            
            </Cell>
            </Grid>
          </div>  
        );
    }
}

export default Aboutme;