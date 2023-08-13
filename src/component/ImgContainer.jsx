import React from 'react'
import image from '../img/forth_body.jpg'
import styled from 'styled-components'

const Container = styled.div`
display: flex;
height: 65vh;
width: 100%;
background-image: url(${image});
background-size: cover;
background-repeat: no-repeat;
background-position: center ;
background-attachment: fixed;
overflow : hidden; 
font-size: 24px ;
z-index: -1;
opacity: 90%;
`;

const Card = styled.div`
display : flex;
flex-direction : column;
height : 100%;
width : 50%;
margin : 7rem;
`

export default function ImgContainer() {
    return (

        <Container>

            {/* this card conatin the text that is written on the front page of the website */}
            <Card>
                <h1 className='About_us'>ABOUT US  </h1>
                <div className='About_content'>WHEN IT COMES TO EATING RIGHT AND EXERCISING, THERE IS NO I'LL START TOMORROW, TOMORROW IS A DISEASE.</div>
            </Card>

        </Container>
    )
}
