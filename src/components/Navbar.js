import { Link} from "react-router-dom";
import styled from '@emotion/styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import React, {useState, useEffect} from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';


const Logo = styled.h1`
color: #000000;
cursor: pointer;
padding: 0;
font-size: 2.5vmax;
margin: 0px;
align-content: center;
`
const StyledBox = styled(Box)`
width: 100%;
height: 80px;
background: #F5F5F5;
padding: 0 6%;
`
const StyledContainer = styled(Container)`
display: flex;
height: 100%;
justify-content: space-between;
align-items: center;
`
const Navitems = styled.div`
align-items: center;
display: flex;
justify-content: end;
height: 100%;
width: 100%;
@media only screen and (max-width: 800px) { 
  display: none;
}
`
const Tech = styled.p`
color: #000000;
font-size: 1.5vmax;
margin: 50% 0  50% 10px;
`

const Items = styled(Link)`
margin-right: 15px;
text-decoration: none;
color: #000000;
display: flex;
`
const MenuIcon = styled(FontAwesomeIcon)`
cursor: pointer;
color: #000000;
background: inherit;
`
const Button = styled.button`
background: inherit;
align-self: center;
border-style: none;
margin: 50% 0;
`
const BurgerNav = styled.div`
height: 30rem;
align-items: center;
padding-top: 10px;
width: 50%;
position: fixed;
top: 0;
bottom: 0;
right: 0;
background-color: #008080;
display: flex;
flex-direction: column;
z-index: 1001;
@media only screen and (min-width: 801px) { 
  display: none;
  
}
`
const Itemss = styled(Link)`
margin-top: 20px;
color: #ffffff;
font-size: 16px;
`
const Logolink = styled(Link)`
cursor: pointer;
height: 100%;
align-content: center;
display: flex;
align-items: center;
`
const ButtonContainer = styled.div`
@media only screen and (min-width: 801px) { 
  display: none;

}

`

function Navigation() {

  
    const [toggleMenu, setToggleMenu] = useState(false)

    const [screenWidth, setScreenWidth] = useState(window.innerWidth)
    const toggleNav = () => {
    setToggleMenu(!toggleMenu)
  }
  

 useEffect (() => {
const changeWidth = () => {
  setScreenWidth(window.innerWidth);
}
window.addEventListener('resize', changeWidth)

return () => {
  window.removeEventListener('resize', changeWidth)
}

 }, [])
  
    return (
    
  <StyledBox> 
    <StyledContainer>
 
  <Logolink to="/">
 <Logo>XELTON</Logo>
 <Tech>Technologies</Tech>
 </Logolink>
<Navitems>
  <Items to='/'>Home</Items>
  <Items to='/About'>About</Items>
  <Items to='/Contact'>Contact</Items>
</Navitems>
<ButtonContainer>
<Button type="menu" onClick={toggleNav}><MenuIcon icon={faBars} size="sm"  /></Button>
</ButtonContainer>

{(toggleMenu || screenWidth > 800) && (
<BurgerNav>
<Button onClick={toggleNav}><MenuIcon icon={faTimes} size="sm"  /></Button>

  <Itemss to='/'>Home</Itemss>
  <Itemss to='/About'>About</Itemss>
  <Itemss to='/Contact'>Contact</Itemss>
 
</BurgerNav>
 )}
 </StyledContainer>
  </StyledBox>

    )
}

export default Navigation;
