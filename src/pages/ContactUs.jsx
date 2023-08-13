import React from 'react'
import Navbar from '../component/Navbar'
import Contactimage from '../img/ContactUs.png'
import styled from 'styled-components'
import Footer from '../component/Footer';
import Form from '../component/Form';

const Container = styled.div`
display: flex;
height: 65vh;
width: 100%;
background-image: url(${Contactimage});
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

export default function ContactUs() {
    return (
        <>
            <Navbar></Navbar>

            <Container>

                {/* this card conatin the text that is written on the front page of the website */}
                <Card>
                    <h1 className='About_us'>CONTACT US   </h1>
                    <div className='About_content'>GOOD COMMUNICATION IS THE BRIDGE BETWEEN CONFUSION AND CLARITY.</div>
                </Card>

            </Container>

            <Form></Form>

            <Footer></Footer>


        </>
    )
}
