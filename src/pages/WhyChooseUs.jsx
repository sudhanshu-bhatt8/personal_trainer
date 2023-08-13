import React from 'react'
import Navbar from '../component/Navbar'
import styled from 'styled-components'
import Whychooseusimage from '../img/Us.png'
import Footer from '../component/Footer'

const Container = styled.div`
display: flex;
height: 75vh;
width: 100%;
background-image: url(${Whychooseusimage});
background-size: cover;
background-repeat: no-repeat;
background-position: bottom  ;
background-attachment: fixed;
overflow : hidden; 
font-size: 24px ;
z-index: -1;
`;
    
const Card = styled.div`
display : flex;
flex-direction : column;
height : 100%;
width : 50%;
margin : 7rem;
`
const Content = styled.div`
display : flex;
flex-wrap : wrap;
margin-bottom : 2rem;
width : 100%;
height : 100%;
justify-content : center;
`
const Heading = styled.div`
display : flex;
font-size : 1.5rem;

`
const CardContentOne = styled.div`
display : flex;
box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
flex-direction : column;
height : 17em;
border-radius : 21px;
width : 32em;
margin : 2rem;
background: #1c1c1c;
color: white;
opacity: 30%;
`

const Line = styled.div`
display : flex;
justify-content : center;
align-items : center;
margin-top : 5rem;

`
const Para = styled.div`
justify-content : center;
align-items : center;
margin-left : 1.3rem;

p{
    margin-top: 0.5rem;
}

`

export default function WhyChooseUs() {
    return (
        <>
            <Navbar></Navbar>
            <Container>

                {/* this card conatin the text that is written on the front page of the website */}
                <Card>
                    <h1 className='About_us'>WHY CHOOSE US ?  </h1>
                    <div className='About_content'>When the why is clear, the how is easy</div>
                </Card>

            </Container>

            <Line style={{ font: 'large' }}>while threr are countless reasons to turn to greek god factory but the most important includes</Line>

            <Content >
                <CardContentOne className='CardOne'>
                    <h3 className='heading_contect_'>01</h3>

                    <Para className='paraDisplay'>
                        <Heading>We deliver results</Heading>
                        <p> Stop wasting time with workouts that aren't giving you results. We design a customized fitness program exclusively for you by considering your abilities, preferences, and goals</p>
                    </Para>
                </CardContentOne>
                <CardContentOne className='CardTwo'>
                    <h3 className='heading_contect_'>02</h3>
                    <Para>
                        <Heading> We're perfect for beginners </Heading>
                        <p> Interested in getting fit, but don't know where to start? you're at the right place we'll introduce you a fund and effective plans to achieve you your goals.
                            03: We monitor progress</p>

                    </Para>
                </CardContentOne>

            </Content>
            <Content>
                <CardContentOne className='CardThree'>
                    <h3 className='heading_contect_'>03</h3>
                    <Para>
                    <Heading>We monitor progress</Heading>
                        <p>
                        We believe in power of progress tracking. so we keep detailed records of your plans and every 4-6 weeks we adjusts your programs as needed
                        </p>

                    </Para>
                </CardContentOne>
                <CardContentOne className='CardFour'>
                    <h3 className='heading_contect_'>04</h3>
                    <Para>
                    <Heading>We motivate you</Heading>
                        <p>
                        We understand that staying motivated is the key to achieving your goals, motivation is not just a one time boost, it's an on going process.

                        </p>
                    </Para>
                </CardContentOne>

            </Content>


            <Footer></Footer>



        </>
    )
}
