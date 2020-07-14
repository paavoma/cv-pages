import React, { Component } from 'react';
import slideData from '../../data/slideData';
import classes from '../Slider/Slider.module.css';
import HtmlTagBuilder from '../../components/Sections/HtmlTagBuilder/HtmlTagBuilder';

class Slide extends Component {
    constructor(props) {
        super(props);
        this.state = { data: ''};
    }

    componentWillMount() {
        this.setState({
            data: this.props.elements
        })
        console.log(this.state.data[0]);
      }

    render() {
        return (
            <section>
                {
                    this.props.elements.map((s, index) =>
                        <div className={
                            index === this.state.activeIndex ? classes.Active : classes.Inactive}
                            key={index}>
                            <h1>s[0]</h1>
                            
                        </div>
                    )}
            </section>
        )
    }
}
export default Slide;