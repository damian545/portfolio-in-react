import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";


class Aboutme extends Component {
    render() {
        return (
            <div className="contact-body">
            <Grid className="contact-grid">
              <Cell className="aboutme" col={12}>
                <p style={{ width: "100%", margin: "auto", paddingTop: "1em" }}>
                  Hello, My name is Damian Tapp. I am 46 years old and I have only been coding for nearly
                  a year so far. I have decided to change my current job into a more rewarding one, I am a creative 
                  person even at a young age. So choosing to be a web designer was a no brainer for me, I found 
                  this "Coding Bootcamp at Adelaide University" in late 2019. Not knowing if it was the right choice 
                  for me, I registered myself in. Adelaide University called me and verified that I had the right 
                  attitude for this course, even though I had never done coding before. Boy, was I in for a wild 
                  ride of intense education...
                  <br/>
                  <br/>
                  <hr style={{ color: "lightseagreen", width: "100%"}}/>
                  <br/>
                  I want to elaborate on more about how I think and how I work things out.
                  I did art as a 7 year old and it stuck with me until now, so I understand color concepts and 
                  if they work together or not. I like Graffiti still to this day because most of what I look 
                  at is highly detailed and very creative. I built a drift car from a stock street car, to a 
                  high powered drift machine. Everything I did was based on logic, everything I bought had it's 
                  own important function. I also built a retaining wall in my back yard, I had to carry every 
                  20kg brick through the house (4 tonne), up 20 stairs and dig out by hand the section for stairs up my back 
                  yard (2 tonne of dirt). I did skateboarding for 20 years and I did a bit of video editing, with music too.
                  Basically when I have a goal, I pursue it logically and with all my strength to get the 
                  best possible results. That is what I do with all my projects and at my current place of work.
                
                </p>
                
              </Cell>
            </Grid>
          </div>  
        );
    }
}

export default Aboutme;