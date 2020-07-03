import React from 'react';



const projects = (props) => {


  return (
    <div>
      <h1>{props.title}</h1>

      {props.content.map((line) => {
        var tagType = line.tag;

        switch (line.tag) {

          case 'p':
            return <p>{line.value}</p>

          case 'ul':

            return (
              <ul>
                {line.value.map((value) =>
                  <li key={value}>{value}</li>)}
              </ul>
            )

          case 'h1':
            return <h1>{line.value}</h1>
        }

      }
      )}


    </div>
  );


};

export default projects;