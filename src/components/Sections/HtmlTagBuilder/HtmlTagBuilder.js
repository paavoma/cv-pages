import React from 'react';
import classes from '../Sections.module.css';
import githubImg from '../../../assets/GitHub_Logo_White.png';
import gitlabImg from '../../../assets/gitlab-logo-1-color-white-rgb.png';
import linkedinImg from '../../../assets/Logo-White-128px-TM.png'

const htmlTagBuilder = (props) => {

  var tagType = props.line.tag;
  switch (props.line.tag) {

    case 'p':
      return <p>{props.line.value}</p>

    case 'ul':

      return (
        <ul>
          {props.line.value.map((value) =>
            <li key={value}>{value}</li>)}
        </ul>
      )

    case 'h1':
      return <h1>{props.line.value}</h1>

    case 'h2':
      return <h2>{props.line.value}</h2>

    case 'i':
      return <i>{props.line.value}</i>

    case 'github':
      return <a href={props.line.value}><img src={githubImg} className={classes.LinkImage} /></a>

    case 'gitlab':
      return <a href={props.line.value}><img src={gitlabImg} className={classes.LinkImage} /></a>

    case 'email':
      return <p>Email: {props.line.value}</p>

    case 'linkedin':
      return <a href={props.line.value}><img src={linkedinImg} className={classes.LinkImage} /></a>
    
      case 'link':
        return <p>Link: <a href={props.line.value}>{props.line.value}</a></p>
  }

};

export default htmlTagBuilder;