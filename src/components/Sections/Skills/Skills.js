import React from 'react';
import classes from '../Sections.module.css';
import SmallInfoCard from '../../UI/SmallInfoCard';
import { Grid, Row, Col } from 'react-flexbox-grid';


const skills = (props) => {


  return (
    <div className={classes.Content}>
        <div className={classes.SkillCardContainer}>
          
            
            {props.content.map((card, index) => {
                  return (
                    <div className={classes.SkillCardDiv}>
                      
                      <SmallInfoCard content={card} index={index}></SmallInfoCard>
                      
                    </div>
                 );
                }
                )
            }
              

        </div>
        

    </div>
  );


};



export default skills;