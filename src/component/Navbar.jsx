
import styled from 'styled-components'
import React, { useEffect, useState } from 'react';
import Logo from '../img/Logo.png'
  
const Container = styled.div`
  display: flex;
  position: fixed;
  height: 10vh;
  width: 100%;
  padding: 0.7rem;
  color: white;
  justify-content: space-between;
  z-index: 1;
  font-size: 24px ;
  transition: background-color 0.5s ease-in-out;
  background-color: ${({ scrolled }) => (scrolled ? 'black' : 'transparent')};
`;

const LogoNavbar = styled.div`

`;
const Menu = styled.div`
`

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  // handing the scrolling effect
useEffect(() => {
  const handleScroll = () => {
    const isScrolled = window.scrollY > 0;
    setScrolled(isScrolled);
  };

  window.addEventListener('scroll', handleScroll);
  return () => {
    window.removeEventListener('scroll', handleScroll);
  };
}, []);
  return (
    <>
    <Container scrolled={scrolled} > 
      <LogoNavbar>
        <img  className='NavbarLogo'src={Logo} alt="Logo" /> 
      </LogoNavbar> 
       
       <Menu className=''>
        <a className='menu' href="/">Home</a>
        <a className='menu' href="About">About</a>
        <a className='menu' href="WhyChooseUs">Why Choose Us</a>
        <a className='menu' href="ContactUs">Contact</a>
        <a className='menu' href="active">Blog</a>
       </Menu>

      </Container>

      

    </>
  )
}
export default Navbar;