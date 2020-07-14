import React from 'react';
import HtmlTagBuilder from '../HtmlTagBuilder/HtmlTagBuilder';
import classes from '../Sections.module.css';



const projects = (props) => {

    
    return (
        <div className={classes.Content}>
            <h1>{props.title}</h1>

            {props.content.map((line, index) => {
                return <HtmlTagBuilder line={line} key={index} />;
            }
            )}
        </div>
    )


};

export default projects;