import React from 'react';
import HtmlTagBuilder from '../HtmlTagBuilder/HtmlTagBuilder';
import classes from '../Sections.module.css';
import imageMe from '../../../assets/me2.png';
import { Grid, Row, Col } from 'react-flexbox-grid';


const contact = (props) => {
    return (
        <div className={classes.Content}>

            <Grid className={classes.Contact}>
                <Row middle="xs">
                    <Col xs>
                        <h1>{props.title}</h1>

                        <h2>Software Developer / Audio Designer</h2>

                    </Col>

                    <div>
                        <Col xs>

                        

                        </Col>
                    </div>
                    <Col xs>
                        <img src={imageMe} />
                    </Col>


                </Row>
                <Row>
                    
                    {props.content.map((line) => {
                                return <Col xs> <HtmlTagBuilder line={line} /> </Col>;
                            }
                            )}
                    
                </Row>


            </Grid>



        </div >
    );



};

export default contact;