import React,{useRef, useState} from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import styled from 'styled-components';
import Bottom from './Bottom';
import ContactImage from '../images/contact.jpg';
import emailjs from '@emailjs/browser';


const Container = styled.div`
background-image: url('../images/home-background.png');
background-size: center;
background-size: 100% 100%;
:img{
    opacity: 0.5px;
background-color:#000000;
}
`
const ContactImgContainer = styled.div`
margin-top: 10px;
@media only screen and (max-width: 280px) {
    height: 380px;
    
}

height: 500px;
width: 100%;
`
const Image = styled.img`
height: 100%;
width: 100%
`
const FormContainer = styled.div`
width: 100%;
height: 500px;
padding-top: 25px;
`
const Form = styled.form`
width: 60%;
height: 100%;
display: flex;
flex-direction: column;
justify-content: center;
margin: 0px 10% 0px 10%;
`
const ContactContainer = styled.div`

@media only screen and (max-width: 992px) {
    display: flex;
   flex-direction: column-reverse;
}

@media only screen and (min-width: 993px) {
    display: flex;
}
`
const Inputs = styled.input`
border-radius: 5px;
font-weight: 12px;
font-size: 18px;
`
const Button = styled.button`
background-color: #A88F00;
color: #ffffff;
margin-top: 5px;

cursor: pointer;

@media only screen and (max-width: 280px) {
    width: 60px;
    border-radius: 5px;
}
@media only screen and (min-width: 281px) {
    width: 60px;
    border-radius: 5px;
}
@media only screen and (min-width: 401px) {
    width: 60px;
    border-radius: 5px;
}

@media only screen and (min-width: 993px) {
    width: 70px;
    border-radius: 5px;
}
`
const Labels = styled.label`
color: #ffffff;
`

const MobileNum = styled.h3`
color: #ffffff;
margin-top: 10px;
`
const Inquiry = styled.h2`
color: #ffffff;
padding-top: 35px;
`
const Textareas = styled.textarea`
border-radius: 5px;
font-weight: 12px;
font-size: 18px;
`
const Svg = styled.svg`
width: 15px;
fill: #ffffff;
margin-right: 5px;
`


function Contact() {
  const form = useRef();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [number, setNumber] = useState("");

  const onChangeHandler = (fieldName, value)=>{
    if(fieldName === "name"){
      setName(value);
    }
    else if(fieldName==="email"){
      setEmail(value);
    }
    else if(fieldName==="message"){
        setMessage(value);
      }
      else if(fieldName==="number"){
        setNumber(value);
      }
  }
    
  const sendEmail = (e) => {
       
        if(name.trim()==="" || email.trim() ==="" || message.trim() ===""|| number.trim() ===""){
            alert("required all field");
          }
          else{
        
            setName("");
            setEmail("");
            setMessage("");
            setNumber("");

            emailjs.sendForm('service_vxr70ia', 'template_owjmkcc', form.current, 'user_OjPcBuLBsMA0wASXXMw7Z')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          alert('Email sent');
          e.target.reset();
          }
    
        
          
    
      };

    return (
        <Container>
        <Navbar />
        <ContactContainer>
        <FormContainer>
        <Form ref={form} onSubmit={sendEmail}>
        <Inquiry>Inquiry</Inquiry>
        <Labels>Name</Labels>
        <Inputs type='text' name='user_name' onChange={(e)=>{ onChangeHandler("name",e.target.value)}} />
        <Labels>Number</Labels>
        <Inputs type='number' name='user_Number' onChange={(e)=>{ onChangeHandler("number",e.target.value)}} />
        <Labels>Email</Labels>
        <Inputs type='email' name='user_email' onChange={(e)=>{ onChangeHandler("email",e.target.value)}}/>
        <Labels>Message</Labels>
        <Textareas name='user_message' onChange={(e)=>{ onChangeHandler("message",e.target.value)}} />
        <Button type='submit' name='submit' className='button' value='send'>Submit</Button>
        <MobileNum><Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M511.2 387l-23.25 100.8c-3.266 14.25-15.79 24.22-30.46 24.22C205.2 512 0 306.8 0 54.5c0-14.66 9.969-27.2 24.22-30.45l100.8-23.25C139.7-2.602 154.7 5.018 160.8 18.92l46.52 108.5c5.438 12.78 1.77 27.67-8.98 36.45L144.5 207.1c33.98 69.22 90.26 125.5 159.5 159.5l44.08-53.8c8.688-10.78 23.69-14.51 36.47-8.975l108.5 46.51C506.1 357.2 514.6 372.4 511.2 387z"/></Svg> 08024990457</MobileNum>
        </Form>
        </FormContainer>
        <ContactImgContainer>
        <Image src={ContactImage} alt='contact img' />
        </ContactImgContainer>
        </ContactContainer>
        <Bottom />
        <Footer />
        </Container>
    )
}

export default Contact
