import React from 'react';
import HtmlTagBuilder from '../HtmlTagBuilder/HtmlTagBuilder';
import classes from '../Sections.module.css';
import imageMe from '../../../assets/me2.png';
import { Grid, Row, Col } from 'react-flexbox-grid';
import githubImg from '../../../assets/GitHub_Logo_White.png';
import gitlabImg from '../../../assets/gitlab-logo-1-color-white-rgb.png';
import linkedinImg from '../../../assets/Logo-White-128px-TM.png'


const contact = (props) => {
    const imageUrls = [githubImg, gitlabImg, linkedinImg];
    
    return (
        <div className={classes.Content}>

            <Grid className={classes.Contact}>
                <Row between="xs">
                    <Col xs>
                        <h1>{props.title}</h1>

                        <h2>Software Developer / Audio Designer</h2>

                    </Col>
                    <Col xs/>
                    <Col xs>
                        <img src={imageMe} className={classes.ImageMe} />
                    </Col>

                </Row>
                <Row middle="xs" >
                        {props.content.map((line, index) => {
                            return <Col xs key={index}> <HtmlTagBuilder line={line} /> </Col>;
                        }
                        )}
                        
                </Row>




            </Grid>



        </div >
    );



};

export default contact;