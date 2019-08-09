import React, { Component } from 'react';
import Arrow from '../arrow'
import Slide from '../slide'
import images from '../../images.json'
import Description from '../description';

class _Slider extends Component {
  constructor(props){
    super(props)
    this.state={
      currentIndex: 0,
      translateValue: 0
    }
  }
  goToPrevSlide = () => {
    if(this.state.currentIndex === 0)
      return;
    
    this.setState(prevState => ({
      currentIndex: prevState.currentIndex - 1,
      translateValue: prevState.translateValue + this.slideWidth()
    }))
  }

  goToNextSlide = () => {    
    if(this.state.currentIndex === images.length - 1) {
      return this.setState({
        currentIndex: 0,
        translateValue: 0
      })
    }     
     this.setState(prevState => ({
      currentIndex: prevState.currentIndex + 1,
      translateValue: prevState.translateValue + -(this.slideWidth())
    }));
  }
  slideWidth = () => {
    const element = document.querySelector('.slide')
    const style = element.currentStyle || window.getComputedStyle(element);    
    return element.clientWidth + parseFloat(style.marginLeft, 10) + parseFloat(style.marginRight, 10)
  }

  render() {       
    const {translateValue, currentIndex} = this.state;
    return (  
      <>    
        <div className="slider">
          <h1 className="title">Our Team</h1>
          <div className="slider-wrapper"
            style={{
              transform: `translateX(${translateValue}px)`,
              transition: 'transform ease-out 0.45s'
            }}>
              {
                images.map((image, i) => (
                  <Slide key={i} image={image.url} />
                ))
              }
          </div>
          <Arrow
            direction='back'
            goToSlide={this.goToPrevSlide}>
            <i className="fas fa-chevron-left"></i>
          </Arrow>
          <Arrow
            direction='next'
            goToSlide={this.goToNextSlide}>
             <i className="fas fa-chevron-right"></i>
          </Arrow>           
        </div>
        {
            images[currentIndex] && 
            <Description data={images[currentIndex]}/>
          }
      </>
      );
    
  }
}

export default _Slider;