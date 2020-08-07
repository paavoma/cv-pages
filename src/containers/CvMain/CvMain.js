import React, { Component } from 'react';

import contentData from '../../assets/content.json';
import Aux from '../../hoc/Auxil';
import About from '../../components/Sections/About/About';
import Projects from '../../components/Sections/Projects/Projects';
import Skills from '../../components/Sections/Skills/Skills';
import Contact from '../../components/Sections/Contact/Contact';
import classes from './CvMain.module.css';
import InfoSlider from '../../components/Sections/InfoSlider/InfoSlider';
import axios from 'axios';

const API = 'https://cv-pages-backend.herokuapp.com/alldata';
const DEFAULT_QUERY = '';

class CvMain extends Component {
  constructor() {
    super();
    this.state = {
      content: [],
      isLoading: true,
      error: null,
    }


  }
  componentDidMount() {
    this.setState({ isLoading: true });
 
    axios.get(API + DEFAULT_QUERY)
      .then(result => this.setState({
        content: result.data[0].sections,
        isLoading: false
      }))
      .catch(error => this.setState({
        error,
        isLoading: false
      }));
  }


  findElementWithTitle(title) {
    const list = this.state.content.map(t => [t.Title, t.Content]);
    var item;
    return item = list.find(item => item[0] == title);

  }


  render() {
    const aboutElement = this.findElementWithTitle("About");

    const skillsElement = this.findElementWithTitle("Skills");
    const contactElement = this.findElementWithTitle("Paavo Mattila");
    const projectsElement = this.findElementWithTitle("Projects");


    const sliderElements = [aboutElement, skillsElement];

    return (
      <Aux>
        {
          this.state.isLoading ?
            <div>
              <p>loading page</p>
            </div>
            :
            <div>
              <div className={classes.OddGray}>
                <Contact title={contactElement[0]} content={contactElement[1]} />
              </div>

              <div className={classes.OddGray}>
                <About title={aboutElement[0]} content={aboutElement[1]} />
              </div>

              <div className={classes.OddGray}>
                <InfoSlider title={projectsElement[0]} elements={projectsElement[1]} />
              </div>

              <div className={classes.OddGray}>
                <Skills title={skillsElement[0]} content={skillsElement[1]} />
              </div>
            </div>
        }




      </Aux>
    );
  }
}

export default CvMain;