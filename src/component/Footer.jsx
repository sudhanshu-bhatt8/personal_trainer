import React from 'react'
import { styled } from 'styled-components'
import Logo_footer from '../img/Logo_Footer.png'

// the styling part fo the footer code 

const FooterHome = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
height: 100%;
width: 100%;
background-color: #E5E5CB ;
`
const Logo = styled.div`
display: flex;
width: 20%;
justify-content: center;
align-items: center;
`

const Services = styled.div`
margin : 5rem;`
const MoreAboutUs = styled.div`
margin : 5rem;`
const Support = styled.div`
margin : 5rem;`

// the main function of the footer code 

export default function Footer() {
  return (
    <div>
      <FooterHome>

        <Logo>
          <a href="/">
          <img className='FooterLogo' src={Logo_footer} alt="sorry something went wrong" />
          </a>
        </Logo>

         <Services>
                
                <h2>Services </h2>
                <li>Skill Accelerator</li>
                <li>12 Week signature Training </li>
                
        </Services>
        <MoreAboutUs>
                
                    <h2>Learn More</h2>
                    <li><a href="active"> About us </a></li>
                    <li><a href="active"> Why choose us </a></li>
                    
        </MoreAboutUs>

            <Support>
                <h2> Contact us </h2>
                <li><a href="active">Contact</a></li>
            </Support>


      </FooterHome>
            


    </div>
  )
}
