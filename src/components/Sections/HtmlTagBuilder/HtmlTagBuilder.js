import React from 'react';

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
      return <p>GitHub: <a href={props.line.value}>{props.line.value}</a></p>

    case 'gitlab':
      return <p>GitLab: <a href={props.line.value}>{props.line.value}</a></p>

    case 'email':
      return <p>Email: {props.line.value}</p>

    case 'linkedin':
      return <p>LinkedIn: <a href={props.line.value}>{props.line.value}</a></p>
    
      case 'link':
        return <p>Link: <a href={props.line.value}>{props.line.value}</a></p>
  }

};

export default htmlTagBuilder;