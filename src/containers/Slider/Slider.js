import React, {Component} from 'react';
import Slide from '../Slide/Slide';
import LeftPointer from '../../components/Carousel/Arrows/LeftPointer';
import RightPointer from '../../components/Carousel/Arrows/RightPointer';
import slideData from '../../data/slideData';



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
        console.log(this.props.elements);
        return (
            
            <div className='slider'>
                <div className='slider-items'>
                    <LeftPointer
                        changePrevSlide={() => this.changePrevSlide()}
                    />
                    <div className='slider-text'>
                        <Slide
                            activeIndex={this.state.activeIndex}
                            elements={this.props.elements}
                        />
                    </div>
                    <RightPointer
                        changeNextSlide={() => this.changeNextSlide()}
                    />
                </div>
            </div>
        );
    }



}

export default Slider;