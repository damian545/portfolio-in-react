import React, { Component } from "react";
import { Grid, Cell, List, ListItem, ListItemContent } from "react-mdl";


class Contact extends Component {
    render() {
        return (
            <div className="contact-body" style={{background: 'url(./images/redbricks1.jpg) center / cover'}}>
            <Grid className="contact-grid">
              <Cell col={6}>
                <h2 style={{fontFamily: "Lobster, cursive", fontSize: "73px"}}>Damian Tapp</h2>
                <br/>
                <img
                  src="./images/DamianTapp.jpg"
                  alt=""
                  style={{ height: "280px" }}
                />                
              </Cell>
              <Cell col={6}>
                <h2 style={{fontFamily: "Lobster, cursive", fontSize: "73px"}}>Contact Me</h2>
                <hr />
                <div className="contact-list">
                  <List>
                    <ListItem>
                      <ListItemContent
                        style={{ fontSize: "30px", fontFamily: "Anton", color: "lightyellow", textShadow: "3px 3px 8px black" }}
                      >
                        <i className="fa fa-phone-square" aria-hidden="true" />
                        0402 123 456
                      </ListItemContent>
                    </ListItem>
    
                    <ListItem>
                      <ListItemContent
                        style={{ fontSize: "30px", fontFamily: "Anton", color: "lightyellow", textShadow: "3px 3px 8px black" }}
                      >
                        <i className="fa fa-envelope" aria-hidden="true" />
                        someone@example.com
                      </ListItemContent>
                    </ListItem>
                  </List>
                  <hr />
                </div>
              </Cell>
            </Grid>
          </div>
        );
      }
    }

export default Contact;