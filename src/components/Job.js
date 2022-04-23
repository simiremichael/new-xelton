import React, { Component } from "react";
import Slider from "react-slick";
import styled from 'styled-components';



const Container = styled.div`
width: 100%;
height: auto;
margin: 10px 0;
`
const Div = styled.div`
`
const Img = styled.img`
width: 100%;
`
const H1 = styled.h1`
margin-left: 5%;
font-size: 2vmax;
`

export default class CenterMode extends Component {
  render() {
    var settings = {
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 4,
      autoplay: true,
      speed: 15000,
      autoplaySpeed: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            initialSlide: 3,
            infinite: true,
          }
        },
        {
          breakpoint: 700,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
            infinite: true,
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1,
            infinite: true,
          }
        }
      ]
    };
    return (
      <Container>
        <H1>Some Of Our Work</H1>
        <Slider {...settings}>
          <Div>
            <Img src="../images/crypto.png" />
          </Div>
          <Div>
          <Img src="../images/car.png" />
          </Div>
          <Div>
          <Img src="../images/sistahs.png" />
          </Div>
          <Div>
          <Img src="../images/creatilat.png" />
          </Div>
          <Div>
          <Img src="../images/mine.png" />
          </Div>
          <Div>
          <Img src="../images/otes.png" />
          </Div>
        </Slider>
      </Container>
    );
  }
}
