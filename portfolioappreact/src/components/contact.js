import React, { Component } from "react";
import { Grid, Cell, List, ListItem, ListItemContent } from "react-mdl";


class Contact extends Component {
    render() {
        return (
            <div className="contact-body" style={{background: 'url(./images/redbricks1.jpg) center / cover'}}>
            <Grid className="contact-grid">
              <Cell col={6}>
                <h2>Damian Tapp</h2>
                
                <img
                  src="/images/DamianTapp.jpg"
                  alt="profile picture"
                  style={{ height: "280px" }}
                />
                <p style={{ width: "80%", margin: "auto", paddingTop: "1em" }}>
                  To get in contact with me, email or just give
                  me a call and we can chat.
                </p>
              </Cell>
              <Cell col={6}>
                <h2>Contact Me</h2>
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