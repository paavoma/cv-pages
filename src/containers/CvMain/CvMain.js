import React, { Component } from 'react';

import contentData from '../../assets/content.json';
import Aux from '../../hoc/Auxil';
import About from '../../components/Sections/About/About';
import Projects from '../../components/Sections/Projects/Projects';
import Skills from '../../components/Sections/Skills/Skills';
import Contact from '../../components/Sections/Contact/Contact';
import classes from './CvMain.module.css';

class CvMain extends Component {
    constructor() {
        super();
        this.state = {
            content: contentData,
        }
        
        
    }
    
    findElementWithTitle ( title ) {
        const list = this.state.content.map(t => [t.Title, t.Content]);
        var item;
        return item = list.find(item=>item[0]== title);
        
    }

    render() {
        const aboutElement = this.findElementWithTitle("About");
        const projectsElement = this.findElementWithTitle("Projects");
        const skillsElement = this.findElementWithTitle("Skills");
        const contactElement = this.findElementWithTitle("Paavo Mattila");
        
        return (
            <Aux>
                <div className={classes.OddGray}>
                <Contact title={contactElement[0]} content={contactElement[1]}/>
                </div>

                <div className={classes.OddGray}>
                <About title={aboutElement[0]} content={aboutElement[1]}/>
                </div>

                <div className={classes.OddGray}>
                <Skills title={skillsElement[0]} content={skillsElement[1]}/>
                </div>

                <div className={classes.OddGray}>
                <Projects title={projectsElement[0]} content={projectsElement[1]}/>
                </div>

                
                
            </Aux>
        );
    }
}

export default CvMain;