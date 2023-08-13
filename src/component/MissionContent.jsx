import React from 'react'
import styled from 'styled-components'
import gymImage from '../img/builderbuilder.png'


const Mission = styled.div`
display: flex;
height: 100%;  
width: 100%;
flex-direction: column;
background-image : url(${gymImage});
background-size: cover;
background-repeat: no-repeat;
background-attachment: fixed;
color: white;

`
const ParagraphDarkCase = styled.div` 
display: flex;
font-size: 17px  ;
letter-spacing: 1.5px;
`
const Heading = styled.div`
margin-bottom: 2rem;
font-size: 40px;
`

const OurMissionCase = styled.div`
width : 55%;
margin : 5rem;
`

export default function MissionContent() {
  return (
    <Mission>

    <OurMissionCase>
      <Heading>Our Mission</Heading>

      <ParagraphDarkCase>
        At Greek God Factory, our mission is twofold. Firstly, we are committed to helping individuals attain a healthy and balanced lifestyle. We believe that by making informed choices about nutrition, exercise, and overall wellness, you can enhance your physical
        and mental well-being, leading to a happier and more fulfilling life.
        <br /><br />

        Secondly, our commitment lies in supporting fitness enthusiasts on their journey towards
        attaining their desired physique through natural means.We firmly believe that building a strong, muscular body should be approached with a focus on health, longevity, and sustainability. Our goal is to provide you with evidence-based workout plans, nutrition tips, and lifestyle advice that empower you to achieve your fitness goals while maintaining the integrity of your body and overall well-being.
      </ParagraphDarkCase>

    </OurMissionCase>

  </Mission>
  )
}
