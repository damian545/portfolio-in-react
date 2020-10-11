import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";


class Landing extends Component {
    render() {
        return (
            <div style={{width: "100%", margin: "auto"}}>
<Grid className="landing-grid">
<Cell col={12}>
    <img
    src="./images/DamianTapp.jpg"
    alt="Damian Tapp"
    className="img"
    />
    <div className="banner-text">
        <h1>Full Stack Web Developer</h1>

        <hr/>

        <p>HTML/CSS | Bootstrap | Javascript | React | Express HBS | MySQL | NodeJS</p>

        <div className="social-links">
            <a href="https://google.com" ref="noopener noreferrer" target="_blank">
                <i className="fa fa-linkedin-square" aria-hidden="true" />
            </a>
            <a href="https://google.com" ref="noopener noreferrer" target="_blank">
                <i className="fa fa-github-square" aria-hidden="true" />
            </a>
            <a href="https://google.com" ref="noopener noreferrer" target="_blank">
                <i className="fa fa-free-code-camp" aria-hidden="true" />
            </a>
            <a href="https://google.com" ref="noopener noreferrer" target="_blank">
                <i className="fa fa-youtube-square" aria-hidden="true" />
            </a>
        </div>
    </div>
</Cell>
</Grid>
            </div>
        )
    }
}

export default Landing;