import React from 'react';
import classes from './SmallInfoCard.module.css';
import HtmlTagBuilder from '../Sections/HtmlTagBuilder/HtmlTagBuilder';

const smallinfocard = (props) => {

    return (
        <div className={classes.CardContainer}>
            <div className={classes.CardContent}>
            
                <HtmlTagBuilder line={props.content} />
            
        
             </div>
        </div>
    )


}


export default smallinfocard;