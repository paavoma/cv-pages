import React from 'react';
import leftPointerImg from '../../../assets/pointer_left.png';

const LeftPointer = (props) => {
    return (
        <div onClick={props.changePrevSlide}>
        <img src={leftPointerImg}/>
      </div>
    );



};


export default LeftPointer;





