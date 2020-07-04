import React from 'react';
import HtmlTagBuilder from '../HtmlTagBuilder/HtmlTagBuilder';
import classes from '../Sections.module.css';


const about = (props) => {
    return (
        <div className={classes.Content}>
            <h1>{props.title}</h1>

            {props.content.map((line) => {
                return <HtmlTagBuilder line={line} />;
            }
            )}
        </div>
    );



};

export default about;