import React from 'react'
import styled from 'styled-components'

const Page = styled.div`
display: flex;
font-size: 24px ;
`
const Image = styled.div`
  display: flex;
  height: 10rem;
  width: 10rem;
  margin: 5rem;
`;

const Content = styled.div`
display: flex;
flex-direction: column;
height : 50%;
width: 80%;
margin: 4.5rem;
: 1;`

const Paragraph = styled.div`
margin-top: 1rem;
font-size: 17px  ;
letter-spacing: 0.05em;
font-weight: 400;
font-size: 1.1rem;
`

export default function PageContent() {
  return (
    <div>
        <Page>
        <Image> </Image>
        <Content>
          <h2 className='heading_about'>Meet Your Trainer </h2>
          <Paragraph>
            Hello there! I'm Rajesh, your trusted fitness companion.
            I first became interested in fitness when I was 15 years old, and now it has become everything to me. It's not just a hobby; it's my whole world. I truly believe that pursuing fitness is incredibly fascinating and teaches us valuable lessons throughout our lives. On the physical side, fitness can give us strength, power, endurance, agility, balance, rhythm, grace, flexibility, and the ability to master different movements. But it goes even deeper than that. Fitness can also bring us benefits like confidence, patience, courage, clarity, persistence, determination, poise, composure, and a strong sense of who we are.
            It is because of this strong belief in the power of fitness that I have started Greek God Factory. My goal is to change people's lives and help them realize their true potential. Through Greek God Factory, I want to show individuals what they are truly capable of achieving. I am dedicated to guiding and supporting them on their fitness journey, empowering them to transform their lives for the better. Together, we will unlock your inner strength and help you become the best versions of yours.
          </Paragraph>
        </Content>
      </Page>
      
    </div>
  )
}
