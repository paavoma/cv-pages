import React from 'react';
import HtmlTagBuilder from '../HtmlTagBuilder/HtmlTagBuilder';
import classes from '../Sections.module.css';
import Slider from '../../../containers/Slider/Slider';


const InfoSlider = (props) => {
    return (
        <div className={classes.Content}>
            <Slider elements={props.elements}/>
        </div>
    );



};

export default InfoSlider;