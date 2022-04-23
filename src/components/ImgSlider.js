//import 'antd/dist/antd.css';
//import { Carousel } from 'antd';
import styled from 'styled-components';
import { Fade } from "react-awesome-reveal";
import React, { Component } from "react";
import Slider from "react-slick";


const Container = styled.div`
width: 100%;
@media only screen and (max-width: 280px) {
    height: 200px;
}
@media only screen and (min-width: 281px) {
    height: 250px;
}
@media only screen and (min-width: 401px) {
    height: 300px;
}

@media only screen and (min-width: 993px) {
    height: 400px;
}
justify-content: center;
`

const Sliders = styled(Slider)`
width: 100%;
margin: 0;
@media only screen and (max-width: 280px) {
    height: 200px
}
@media only screen and (min-width: 281px) {
    height: 250px
}
@media only screen and (min-width: 401px) {
    height: 300px
}

@media only screen and (min-width: 993px) {
    height: 400px
}
`
const BackColor = styled.div`
width: 100%;
@media only screen and (max-width: 280px) {
    height: 200px
}
@media only screen and (min-width: 281px) {
    height: 250px
}
@media only screen and (min-width: 401px) {
    height: 300px
}

@media only screen and (min-width: 993px) {
    height: 400px
}
background-color: #008080;
opacity: 0.8;
padding: 0 5%;
`
export default class ImgSlider extends Component {
    render() {
        const settings = {
          dots: true,
          infinite: true,
          fade: true,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1
        };

    return (
        <Container>
        <Sliders {...settings}>
        <Wrapper1>
        <BackColor>
        <Fades direction="up">
        <Heading>WEB DEVELOPMENT</Heading>
        <Paragraph>Custom design  and development with strategic insight<br/>
       to generate greater brand engagement, <br/>
       higher conversions and measurable results.</Paragraph>
       </Fades>
       </BackColor>
        </Wrapper1>
     <Wrapper2>
     <BackColor>
     <Fades direction="up">
     <Heading>ENTERPRISE SOFTWARE SOLUTIONS</Heading>
     <Paragraph>Enterprise Softeware solution aims to <br/>
     improve the enterprise's productivity, <br/>
     performance and efficiency by <br/>
     by providing business logic suport <br/>
     functionality</Paragraph>
    </Fades>
    </BackColor>
     </Wrapper2>
     <Wrapper3>
     <BackColor>
     <Fades direction="up">
     <Heading >MOBILE APP DEVELOPMENT</Heading>
     <Paragraph>Business always need bedspoke software, Xelton is keen to  <br/>
        always make you happy as a software company in Lagos.</Paragraph>
    </Fades>
    </BackColor>
     </Wrapper3>
         <Wrapper4>
         <BackColor>
         <Fades direction="up">
          <Heading>DIGITAL MARKETING AND ADVERTISING</Heading>
        <Paragraph>Wild range of digital marketing and advertising, <br/>
        help business grow online, reach target audience, <br/>
        generate leads, calls and revenue.</Paragraph>   
    </Fades>
    </BackColor>
         </Wrapper4>
      </Sliders>
      </Container>
    )
}
}

const Wrapper1 = styled.div`
background-image: url( '../images/it4.jpg');
width: 100%;
@media only screen and (max-width: 280px) {
height: 200px
}
@media only screen and (min-width: 281px) {
    height: 250px
}
@media only screen and (min-width: 401px) {
    height: 300px
}

@media only screen and (min-width: 993px) {
    height: 400px
}
background-size: 100% 100%;
text-align: start;
background-repeat: no-repeat;

`
const Heading = styled.h1`
color: #ffffff;
@media only screen and (max-width: 280px) {
font-size: 15px;
font-weight: 10px;
padding: 20% 0 0 3px;
}
@media only screen and (min-width: 281px) {
font-size: 20px;
font-weight: 15px;
padding: 18% 0 0 3px;
}
@media only screen and (min-width: 401px) {
font-size: 28px;
font-weight: 20px;
padding: 15% 0 0 3px;
}

@media only screen and (min-width: 993px) {
font-size: 35px;
font-weight: 25px;
padding: 10% 0 0 3px;
}

`

const Paragraph = styled.p`
color: #ffffff;
@media only screen and (max-width: 280px) {
    padding: 0px 0px 0px 3px;
font-size: 7px;
}
@media only screen and (min-width: 281px) {
    padding: 0px 0px 0px 5px;
font-size: 10px;
}
@media only screen and (min-width: 401px) {
    padding: 0px 0px 0px 10px;
font-size: 15px;
}

@media only screen and (min-width: 993px) {
    padding: 0px 0px 0px 15px;
font-size: 20px;
}

`




const Wrapper2 = styled.div`
background-image: url( '../images/it1.jpg');
width: 100%;
background-size: 100% 100%;
@media only screen and (max-width: 280px) {
    height: 200px
}
@media only screen and (min-width: 281px) {
    height: 250px
}
@media only screen and (min-width: 401px) {
    height: 300px
}

@media only screen and (min-width: 993px) {
    height: 400px
}
text-align: start;
background-repeat: no-repeat;
align-items: center; 
  
`
const Wrapper3 = styled.div`
background-image: url( '../images/it2.jpg');
@media only screen and (max-width: 280px) {
    height: 200px
}
@media only screen and (min-width: 281px) {
    height: 250px
}
@media only screen and (min-width: 401px) {
    height: 300px
}

@media only screen and (min-width: 993px) {
    height: 400px
}
width: 100%;
background-size: 100% 100%;
justify-content: start;
text-align: start;
background-repeat: no-repeat;
align-items: center; 
`
const Wrapper4 = styled.div`
background-image: url( '../images/it3.jpg');
@media only screen and (max-width: 280px) {
    height: 200px
}
@media only screen and (min-width: 281px) {
    height: 250px
}
@media only screen and (min-width: 401px) {
    height: 300px
}

@media only screen and (min-width: 993px) {
    height: 400px
}
width: 100%;
background-size: 100% 100%;
justify-content: start;
text-align: start;
background-repeat: no-repeat;
`
const Fades = styled(Fade)`
align-content: center;
`
