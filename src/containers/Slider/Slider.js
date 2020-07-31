import React, { Component } from 'react';
import Slide from '../Slide/Slide';
import LeftPointer from '../../components/Carousel/Arrows/LeftPointer';
import RightPointer from '../../components/Carousel/Arrows/RightPointer';
import { Grid, Row, Col } from 'react-flexbox-grid';
import classes from './Slider.module.css';



class Slider extends Component {
    constructor(props) {
        super(props);

        this.state = {
            activeIndex: 0,
            length: ''
        };
    }

    componentWillMount() {
        this.setState({
            length: this.props.elements.length
        })

    }

    changePrevSlide() {
        let index = this.state.activeIndex;
        let length = this.state.length;
        if (index < 1) {
            index = length - 1;
        }
        else {
            index--;
        }
        this.setState({
            activeIndex: index
        });
    }
    changeNextSlide() {
        let length = this.state.length;
        let index = this.state.activeIndex;


        if (index === length - 1) {
            index = 0
        }
        else {
            index++;
        }
        this.setState({
            activeIndex: index
        });
    }

    render() {
        return (

            <div className={classes.Sliderdiv}>

                <div className={classes.Slideritems}>
                    <table className={classes.Table}>
                        <tr className={classes.TrSlide}>
                            <td className={classes.LeftArrowTd} >
                                <LeftPointer
                                    changePrevSlide={() => this.changePrevSlide()}
                                />
                            </td>
                            <td className={classes.ContentTd}>
                                <div className='slider-text'>
                                    <Slide
                                        activeIndex={this.state.activeIndex}
                                        elements={this.props.elements}
                                    />
                                </div>
                            </td>

                            <td className={classes.RightArrowTd} >
                                <RightPointer
                                    changeNextSlide={() => this.changeNextSlide()}
                                />
                            </td>
                        </tr>
                    </table>

                </div>

            </div>
        );
    }



}

export default Slider;