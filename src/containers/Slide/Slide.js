import React, { Component } from 'react';

import classes from '../Slider/Slider.module.css';
import HtmlTagBuilder from '../../components/Sections/HtmlTagBuilder/HtmlTagBuilder';

class Slide extends Component {
    constructor(props) {
        super(props);
        
    }


    getHtmlLines(lines) {

        return (
            lines.projectContent.map((line, index) => {
                console.log("html builderiin menevä line " + line[1])
                return <HtmlTagBuilder line={line} key={index} />
            }
            )
        )
    }
    render() {
        return (
            <section>
                {
                    this.props.elements.map((project, indexDiv) => {
                        console.log("slideriin luettava" + project);
                    
                        
                        return (
                        <div className={indexDiv === this.props.activeIndex ? classes.Active : classes.Inactive} key={indexDiv}>
                        { project.projectContent.map (line => {
                            return <HtmlTagBuilder line={line}/>;
                        }
            
                        )
                        }
                        </div>
                        )   
                            
                        
                    }
                    )}
            </section>
        )
    }
}
export default Slide;