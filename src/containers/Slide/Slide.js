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
            lines.map((line, index) => {
                return <HtmlTagBuilder line={line} key={index} />
            }
            )
        )
    }
    render() {
        console.log("Loaded to slide: " + this.props.elements);

        console.log("Currently active index in slide " + this.state.activeIndex);
        return (
            <section>
                {
                    this.props.elements.map((s, index) => {
                        let lines = s[1];
                        let finalLines = this.getHtmlLines(lines);
                        

                        return (
                            <div className={index === this.props.activeIndex ? classes.Active : classes.Inactive} key={index}>
                                <h1>{s[0]}</h1>
                                {finalLines}



                            </div>
                        )
                    }
                    )}
            </section>
        )
    }
}
export default Slide;