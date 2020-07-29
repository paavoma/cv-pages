import React, { Component } from 'react';
import slideData from '../../data/slideData';
import classes from '../Slider/Slider.module.css';
import HtmlTagBuilder from '../../components/Sections/HtmlTagBuilder/HtmlTagBuilder';

class Slide extends Component {
    constructor(props) {
        super(props);
        this.state = { data: slideData };
    }

    componentWillMount() {
        this.setState({
            data: slideData,
        })


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

        console.log("Currently active index in slide " + this.state.activeIndex);
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