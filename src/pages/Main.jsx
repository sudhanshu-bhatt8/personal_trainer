import React from 'react'
import Navbar from '../component/Navbar'
import Footer from '../component/Footer'
import About from './About'
import ImgContainer from '../component/ImgContainer'
import PageContent from '../component/PageContent'
import MissionContent from '../component/MissionContent'
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import ContactUs from './ContactUs'
import { styled } from 'styled-components'
import image from '../img/HomePage.png'
// the css for the main page is here 
const Container = styled.div`
display: flex;
justify-content: center; 
aligh-items: center;
height: 100vh;
width: 100%;
background-image: url(${image});
background-size: cover;
background-repeat: no-repeat;
background-postion : 0% 55%;
background-attachment: fixed;
background-position-y : 25% ;  
overflow : hidden; 
font-size: 24px ;
z-index: -1;
opacity: 90%;
`;

const Card = styled.div`
display : flex;
flex-direction : column;
justify-content: center;
align-items: center;
height : 100%;
width : 100%;

`
const Heading = styled.div`
display : flex;
font-size : 5.5rem;
color: white;
`

export default function Main() {
  return (
    <>
    {/* this is the main page or the home page for the application */}
    <Navbar></Navbar>
    

    {/* this is the container for the image  */}
    <Container>

            {/* this card conatin the text that is written on the front page of the website */}
            <Card >
              <Heading> Welcome To</Heading>
              <Heading className='heading_home'> GreekGod factory</Heading>
                
            </Card>

     </Container>
     <Footer></Footer>


    
    </>

  )
}
