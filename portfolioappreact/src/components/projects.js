import React, { Component } from "react";
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from "react-mdl";


class Projects extends Component {
constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
}

toggleCategories() {
    if(this.state.activeTab === 0 ) {
    return(
        <Card shadow={5} style={{minWidth: '450px', margin: 'auto'}}>
        <CardTitle style={{color: 'grey', height: '200px', background: 'url(./images/password.png) center / cover'}}></CardTitle>
        <CardText>
        This is my new version of the Random Password Generator.
        </CardText>
        <CardActions border>        
        <Button colored
                style={{color: "black"}}
                target="_blank"
                href="https://damian545.github.io/password-generator/">Try It Yourself</Button>
        </CardActions>
        <CardMenu style={{color: '#fff'}}>
        <IconButton name="share" />
        </CardMenu>
        </Card>
    )
} else if(this.state.activeTab === 1) {
    return (
        <Card shadow={5} style={{minWidth: '450px', margin: 'auto'}}>
        <CardTitle style={{color: 'purple', height: '200px', background: 'url(./images/dayplanner.png) center / cover'}}></CardTitle>
        <CardText>
        This in my new version of the Day Scheduler.
        </CardText>
        <CardActions border>        
        <Button colored
                style={{color: "black"}}
                target="_blank"
                href="https://damian545.github.io/dayscheduler/">Try It Yourself</Button>
        </CardActions>
        <CardMenu style={{color: '#fff'}}>
        <IconButton name="share" />
        </CardMenu>
        </Card>
    )
} else if(this.state.activeTab === 2){
    return (
        <Card shadow={5} style={{minWidth: '450px', margin: 'auto'}}>
        <CardTitle style={{color: 'black', height: '200px', background: 'url(./images/quiz.png) center / cover'}}></CardTitle>
        <CardText>
        This is my new version of the Quiz.
        </CardText>
        <CardActions border>       
        <Button colored
                style={{color: "black"}}
                target="_blank"
                href="https://damian545.github.io/quizwithtimer/">Try It Yourself</Button>
        </CardActions>
        <CardMenu style={{color: '#fff'}}>
        <IconButton name="share" />
        </CardMenu>
        </Card>
    )
} else if(this.state.activeTab === 3){
    return (
        <Card shadow={5} style={{minWidth: '450px', margin: 'auto'}}>
        <CardTitle style={{color: 'black', height: '200px', background: 'url(./images/project1.png) center / cover'}}></CardTitle>
        <CardText>
        This is my new first project #1.
        </CardText>
        <CardActions border>        
        <Button colored 
                style={{color: "black"}}
                target="_blank"
                href="https://damian545.github.io/perfecthair/">Try It Yourself</Button>
        </CardActions>
        <CardMenu style={{color: '#fff'}}>
        <IconButton name="share" />
        </CardMenu>
        </Card>
    )
} else if(this.state.activeTab === 4){
    return (
         <Card shadow={5} style={{minWidth: '450px', margin: 'auto'}}>
         <CardTitle style={{color: 'black', height: '200px', background: 'url(./images/budgettracker.png) center / cover'}}></CardTitle>
         <CardText>
         This is my new version of the Budget Tracker.
         </CardText>
         <CardActions border>         
         <Button colored  
                 style={{color: "black"}}
                 target="_blank"
                 href="https://damian545.github.io/budget-tracker/">Try It Yourself</Button>
         </CardActions>
         <CardMenu style={{color: '#fff'}}>
         <IconButton name="share" />
         </CardMenu>
         </Card>
    )
}  else if(this.state.activeTab === 5){
    return (
         <Card shadow={5} style={{minWidth: '450px', margin: 'auto'}}>
         <CardTitle style={{color: 'black', height: '200px', background: 'url(./images/fitnesstracker.png) center / cover'}}></CardTitle>
         <CardText>
         This is my new version of the Fitness Tracker.
         </CardText>
         <CardActions border>         
         <Button colored  
                 style={{color: "black"}}
                 target="_blank"
                 href="https://damian545.github.io/fitness-tracker/">Try It Yourself</Button>
         </CardActions>
         <CardMenu style={{color: '#fff'}}>
         <IconButton name="share" />
         </CardMenu>
         </Card>
    )
}  else if(this.state.activeTab === 6){
    return (
         <Card shadow={5} style={{minWidth: '450px', margin: 'auto'}}>
         <CardTitle style={{color: 'black', height: '200px', background: 'url(./images/portfolio2.png) center / cover'}}></CardTitle>
         <CardText>
         This is my new version of my Updated Portfolio #2.
         </CardText>
         <CardActions border>                   
         <Button colored 
                 style={{color: "black"}}
                 target="_blank"
                 href="https://damian545.github.io/new-updatedportfolio2/">Try It Yourself</Button>          
         </CardActions>           
         <CardMenu style={{color: '#fff'}}>           
         <IconButton name="share" />           
         </CardMenu>          
         </Card>           
    )
}  else if(this.state.activeTab === 7){
    return (
        <Card shadow={5} style={{minWidth: '450px', margin: 'auto'}}>
        <CardTitle style={{color: 'black', height: '200px', background: 'url(./images/milestone5.png) center / cover'}}></CardTitle>
        <CardText>
         This is my new version of the Milestone #5.
        </CardText>
        <CardActions border>        
        <Button colored 
                style={{color: "black"}}
                target="_blank"
                href="https://damian545.github.io/milestone-5/">Try It Yourself</Button>
        </CardActions>
        <CardMenu style={{color: '#fff'}}>
        <IconButton name="share" />
        </CardMenu>
        </Card>
    )
}     
}
    render() {
        return (
            <div className="category-tabs">
                <Tabs style={{ backgroundColor: "gray"}} activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId})} ripple>
                 <Tab style={{ color: "aqua"}}>Password Generator</Tab>
                 <Tab style={{ color: "aqua"}}>Day Scheduler</Tab>
                 <Tab style={{ color: "aqua"}}>Quiz</Tab>
                 <Tab style={{ color: "aqua"}}>Project #1</Tab>
                 <Tab style={{ color: "aqua"}}>Budget Tracker</Tab>
                 <Tab style={{ color: "aqua"}} >Fitness Tracker</Tab>
                 <Tab style={{ color: "aqua"}}>Portfolio #2</Tab> 
                 <Tab style={{ color: "aqua"}}>Milestone #5</Tab>                
                </Tabs>


                <section className="projects-grid">
                    <Grid className="projects-grid">
                        <Cell col={12}>
                            <div className="content">{this.toggleCategories()}</div>
                        </Cell>
                    </Grid>
                    
                </section>
            </div>
        )
    }
}

export default Projects;